import arxiv

import bibtexparser
from bibtexparser.bwriter import BibTexWriter
from bibtexparser.bibdatabase import BibDatabase
# with open('..\\zx-papers.bib', 'r', encoding='utf-8') as bibtex_file:
#     bd = bibtexparser.load(bibtex_file)

writer = BibTexWriter()
writer.indent = '    '
writer.display_order = ('ENTRYTYPE', 'author', 'title', 'year', 'journal', 'booktitle', 'school',
                        'editor', 'series', 'volume', 'issue', 'number', 'month', 'pages', 'numpages', 'publisher',
                        'organization', 'acmid', 'address', 'isbn', 'issn', 'location', 'language',
                        'doi', 'urldate', 'link', 'url', 'keyword',  'keywords', 'abstract')


def strip_arxiv_link(s):
    s = s.lower().replace("arxiv:","")
    if s.find('arxiv') == -1: return s
    return s.rsplit('/',1)[1]

def strip_arxiv_id(s):
    if s.find('v') == -1: return s
    return s.rsplit('v', 1)[0]

aid = input("Input an arxiv link or id: ")
if aid.find('arxiv') != -1:
	aid = aid.rsplit('/',1)[1]

aid = strip_arxiv_id(aid)
print(aid)

q = arxiv.query(id_list=[aid])[0]
title = q['title'].replace("\n","").replace("  "," ")
print(title, ", ".join(q['authors']))

d = q['published_parsed']

entry = {
	'ENTRYTYPE': 'article', 
	'title': "{" + title + "}", 
	'year': str(d.tm_year),
	'urldate': f"{d.tm_year}-{d.tm_mon:02d}-{d.tm_mday:02d}"}

authors = []
ID = None
for a in q['authors']:
	first, last = a.split(' ',1)
	authors.append('{}, {}'.format(last, first))
	if ID is None: ID = last.replace(" ","").lower() + str(d.tm_year)

t = q['title'].lower().replace("the ","").replace("a ","").replace("an ", "")
t = t.replace("towards ", "").replace("-","")
ID += t.strip().split(" ",1)[0]
entry['ID'] = ID.lower()

link = q['arxiv_url']
if link.find('v') != -1: link = link.rsplit('v',1)[0]
entry['link'] = link

entry['author'] = ' and '.join(authors)

entry['abstract'] = q['summary'].replace('\n',' ')

if q['doi']:
	print("DOI found!")
	print("https://dx.doi.org/" + q['doi'])
	print("Please manually add correct journal reference\n")
	entry['doi'] = q['doi']

if q['journal_reference']:
	print("Journal reference found!")
	print("Please manually check journal reference\n")
	print(q['journal_reference'])
	entry['journal'] = q['journal_reference']
else:
	entry['journal'] = "arXiv preprint arXiv:" + aid

keywords = input("Enter comma-separated keywords: ")
entry['keywords'] = keywords

db = BibDatabase()
db.entries = [entry]
raw_bibdata = writer.write(db)
print()
print(raw_bibdata)
