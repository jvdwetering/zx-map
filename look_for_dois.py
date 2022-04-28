import re
import requests

from unidecode import unidecode
import arxiv
import bibtexparser
from bibtexparser.bwriter import BibTexWriter
from bibtexparser.bibdatabase import BibDatabase

def strip_arxiv_link(s):
    if s.find('arxiv') == -1: return None
    return s.rsplit('/',1)[1]

def strip_arxiv_id(s):
    if s.find('v') == -1: return s
    return s.rsplit('v', 1)[0]


# Search for the DOI given a title; e.g.  "computation in Noisy Radio Networks"
# Credit to user13348, slight modifications
# http://tex.stackexchange.com/questions/6810/automatically-adding-doi-fields-to-a-hand-made-bibliography
def searchdoi_using_requests(title, author):
    params = {"auth2" : author, "atitle2" : title, "multi_hit" : "on", "article_title_search" : "Search", "queryType" : "author-title"}
    headers = {"User-Agent": "Mozilla/5.0" , "Accept": "text/html", "Content-Type" : "application/x-www-form-urlencoded", "Host" : "www.crossref.org"}
    url = "https://www.crossref.org/guestquery/#bibsearch"

    r = requests.post(url, headers=headers, data=params)

    data = r.text

    return re.search(r'doi\.org/([^"^<^>]+)', str(data))

def normalize(string):
    """Normalize strings to ascii, without latex."""
    string = re.sub(r'[{}\\\'"^]',"", string)
    string = re.sub(r"\$.*?\$","",string) # better remove all math expressions
    return unidecode(string)

def get_authors(entry):
    """Get a list of authors' or editors' last names."""
    def get_last_name(authors):
        for author in authors :
            author = author.strip(" ")
            if "," in author:
                yield author.split(",")[0]
            elif " " in author:
                yield author.split(" ")[-1]
            else:
                yield author

    authors = entry['author'].split(" and ")
    return list(get_last_name(authors))

with open('zx-papers.bib', encoding='utf-8') as bibtex_file:
    bd = bibtexparser.load(bibtex_file)

papers = {}

for e in bd.entries:
    if 'doi' in e or 'link' not in e or e['link'].find("arxiv") == -1: continue
    aid = strip_arxiv_id(strip_arxiv_link(e['link']))
    papers[aid] = e

print("{} preprints found without journal ref".format(len(papers)))

print("Looking for updated arxiv references")
print()
data = arxiv.query(id_list = list(papers.keys()))

for q in data:
    if not q['doi'] and not q['journal_reference']: continue
    aid = strip_arxiv_id(strip_arxiv_link(q['id']))
    title = q['title'].replace("\n", "")
    link = q['arxiv_url']
    if link.find('v') != -1: link = link.rsplit('v',1)[0]
    if q['doi']:
        print("Found new DOI for '{}':".format(title))
        print(q['doi'])
        if q['journal_reference']:
            print(q['journal_reference'])
        del papers[aid]
    else:
        if q['journal_reference']:
            print("Found new journal ref for '{}':".format(title))
            print(q['journal_reference'])
        del papers[aid]
    print()

print("Looking for doi's with crossref api")
for i, e in enumerate(papers.values()):
    title = normalize(e['title'])
    authors = get_authors(e)
    for author in authors:
        doi_match = searchdoi_using_requests(title,author)
        if doi_match:
            doi = doi_match.groups()[0]
            print("Found new doi for '{}'by {}".format(e['title'],", ".join(authors)))
            print(doi)
    if (i+1) % 5 == 0: print("{:d}/{:d}".format(i+1,len(papers)))

print("Done searching for dois and journal refs")

input("Done!")