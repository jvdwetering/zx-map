import json
import datetime

#############################################
# First we do Publications stuff

import bibtexparser
from bibtexparser.bwriter import BibTexWriter
from bibtexparser.bibdatabase import BibDatabase

import rfeed

writer = BibTexWriter()
writer.indent = '    '
writer.display_order = ('ENTRYTYPE', 'author', 'title', 'year', 'journal', 'booktitle', 'school',
                        'howpublished',
                        'editor', 'series', 'volume', 'issue', 'number', 'month', 'pages', 'numpages', 'publisher',
                        'organization', 'acmid', 'address', 'isbn', 'issn', 'location', 'language',
                        'doi', 'urldate', 'link', 'url', 'keyword',  'keywords', 'abstract')

def entry_sort_key(entry):
    if 'urldate' in entry:
        return entry['urldate']
    if 'link' not in entry:
        raise Exception("{} does not have attribute 'link'".format(entry['ID']))
    return entry['year']+"-01-01"


def normalise_name(n):
    p1, p2 = n.split(', ')
    s = p2.strip() + " " + p1.strip()
    s = s.replace(r'{\"o}','&ouml;').replace(r"{\'e}",'&eacute;')
    return s


def parse_math(s):
    i = s.rfind('$',0)
    while i != -1:
        j = s.rfind('$',0,i)
        if j == -1: raise Exception("No matching $ in abstract: ", s)
        s = s[:j] + "\\(" + s[j+1:i] + "\\)" + s[i+1:]
        i = s.rfind('$')
    return s


def clear_arXiv_preprint_text(s):
    return s.replace('arXiv preprint ','')


def clean_text(s):
    return s.replace('{','').replace('}','').replace(r'\rm','')


def entry_to_rss(title,link,abstract,authors,year, arxiv, date):
    y,m,d = date.split("-")
    m = int(m)
    d = int(d)
    return rfeed.Item(title = title,
                    author=authors,
                    link = link,
                    description = abstract,
                    guid = rfeed.Guid(arxiv),
                    pubDate = datetime.datetime(int(year),m,d,0,0))

HTML = r"""
<div class="perEntryDiv">
<div class="leftContent">
<span>
<a target="_blank" href="{url}" class="paperTitle">{title}</a> 
</span>
<br>
<span class="authors">{authors}</span>
<br>
<span>
<a href="#" class="abstract_more">Show abstract &#x21F2</a>
<a href="#" class="bibdata_more">Show bibdata &#x21F2</a>
{video}
</span>
</div>
<div class="rightContent">
<span>
<a target="_blank" href="{doiurl}" class="journal">{journal}</a> 
</span>
<br>
<span>
Keywords: <span class="keywords">{keywords}</span>.
</span>
</div>
<div class="crossContent">
<div class="abstract" style="display:none">{abstract}</div>
<div class="bibdata" style="display:none"><pre><code>{bibdata}</code></pre></div>
</div>
</div>"""

keyword_pubs = dict()
coauthors = dict()
latest_pubs = dict()
types = {"preprint": 0, "published": 0, "Master": 0, "Phd": 0}
with open("keyword_descriptions.json", 'r') as f:
    keyword_descriptions = {k.lower():v for k,v in json.loads(f.read()).items()}

ids = set()


def entry_to_html(entry):
    db = BibDatabase()
    db.entries = [entry]
    raw_bibdata = writer.write(db)
    if entry['ID'] in ids:
        raise Exception("Id {} already taken".format(entry['ID']))
    ids.add(entry['ID'])

    if 'journal' in entry:
        if entry['journal'].lower().find('arxiv') != -1:
            types["preprint"] += 1
        else:
            types["published"] += 1
        journal = clear_arXiv_preprint_text(clean_text(entry['journal']))
    elif 'booktitle' in entry:
        types["published"] += 1
        journal = clean_text(entry['booktitle'])
    elif 'school' in entry:
        journal = clean_text(entry['school'])
        if entry['ENTRYTYPE'] == 'phdthesis':
            journal += " PhD Thesis"
            types["Phd"] += 1
        elif entry['ENTRYTYPE'] == 'mastersthesis':
            journal += " Masters Thesis"
            types["Master"] += 1
        else:
            print("Unknown entry type", entry['ENTRYTYPE'])
            raise
    elif 'howpublished' in entry:  # It is a video
        journal = clean_text(entry['howpublished'])
        entry['link'] = entry['url']
        entry['title'] = '[Video] ' + entry['title'] + ' &#127909;'
    else:
        print("Missing entries:")
        print(entry)
        raise
    journal = journal.replace('\n', ' ')
    abstract = parse_math(entry['abstract'])
    e = bibtexparser.customization.author(entry)
    bibtexparser.customization.convert_to_unicode(entry)
    authors = ""

    title = clean_text(entry['title'])
    year = entry['year']

    publink = """<a href="{}" target="_blank">{}</a>""".format(entry['link'], clean_text(entry['title']))

    if 'video' in entry:
        video = """<a href="{}">Video &#127909;</a>""".format(entry['video'])
    else:
        video = ""

    if len(e['author']) == 1:
        authors = normalise_name(e['author'][0])
        if authors not in coauthors: coauthors[authors] = set()
        if authors not in latest_pubs: latest_pubs[authors] = publink
    else:
        names = [normalise_name(a) for a in e['author']]
        for a in names[:-2]:
            authors += a + ", "
        authors += names[-2] + " and "
        authors += names[-1]
        authorset = set(names)
        for author in names:
            if author not in coauthors: coauthors[author] = set()
            coauthors[author].update(authorset.difference({author}))
            if author not in latest_pubs: latest_pubs[author] = publink

    if "doi" in entry:
        doi_url = "https://dx.doi.org/" + entry["doi"].replace(r"\_", "_")
    else: doi_url = entry['link']

    if 'keywords' in entry: kw = entry['keywords']
    elif 'keyword' in entry: kw = entry['keyword']
    else: kw = ""
    keywords = [s.strip() for s in kw.split(',')]

    l = []
    for kw in keywords:
        try:
            descr = keyword_descriptions[kw.lower()]
        except KeyError:
            print("Unknown keyword '{}'. Please add it to keyword_descriptions.json".format(kw))
            descr = ""
        l.append('<a target="_blank" onclick="forceSearchKW(\'{}\')" title="{}">{}</a>'.format(kw.lower(),descr,kw))

    keyword_html = ", ".join(l)
    html = HTML.format(url=entry['link'], doiurl=doi_url, title=title,
                       authors=authors, journal=journal,
                       year=year, abstract=abstract,
                       bibdata=raw_bibdata, keywords=keyword_html, video=video)
    for kw in keywords:
        if kw.lower() in keyword_pubs: keyword_pubs[kw.lower()] += 1
        else: keyword_pubs[kw.lower()] = 1
    return html, entry_to_rss(title, doi_url, entry['abstract'], authors, year, entry['link'],
                              entry['urldate'] if 'urldate' in entry else "{}-01-01".format(year))

def library_to_html(lib):
    pubs_per_year = {}
    print("{:d} papers in publications list".format(len(lib.entries)))
    for b in lib.entries:
        k = entry_sort_key(b)
        y = int(k.split('-')[0])
        if y in pubs_per_year:
            pubs_per_year[y].append(b)
        else: pubs_per_year[y] = [b]

    output = ""
    latest = []
    for y in sorted(pubs_per_year.keys(),reverse=True):
        pubs = pubs_per_year[y]
        output += "<h2>{:d}</h2>\n".format(y)
        output += '<ul>\n'
        for e, rss in [entry_to_html(b) for b in sorted(pubs,key=entry_sort_key,reverse=True)]:
            output += '<li class="pub_entry">' + e + "</li>" +"\n"
            if len(latest) < 10: latest.append(rss)
        output += "</ul>\n \n"
    print("statistics:")
    print(types)
    #print("Keyword distribution")
    #for kw, amount in sorted(keyword_pubs.items(),key=lambda x: x[1],reverse=True):
    #    print(kw, amount)
    return output, latest

def generate_publications_html():
    with open('zx-papers.bib',encoding='utf-8') as bibtex_file:
        bib_database = bibtexparser.load(bibtex_file)
        bib_data, rss = library_to_html(bib_database)
    #Generate main page
    with open('html/publications_base.html') as f:
        html_base = f.read()
    output = html_base.replace("THE_CONTENT_HERE",bib_data)
    with open("publications.html",'wb') as f:
        f.write(output.encode('utf-8'))

    feed = rfeed.Feed(title = "ZX-calculus publications",
                      link = "http://zxcalculus.com/publications.rss",
                      description = "An up to date list of the newest publications related to the ZX-calculus",
                      language = "en-US",
                      lastBuildDate = datetime.datetime.now(),
                      items = rss)
    with open("publications.rss",'w', encoding='utf-8') as f:
        f.write(feed.rss())


############################################
# Now we do ZX-Map stuff

PLACEDIV  = """<div class="place" id="info-{:d}" style="display:none"><b>{}</b>:
<br></br>{}</div>\n"""
PERSONDIV = """<div class="person" id="info-{:d}" style="display:none"><b>{}</b> ({}): {}
{}</div>\n"""
FIELDDIV  = """<div class="field" id="info-{:d}" style="display:none"><b>{}</b>:
<br></br>{}</div>\n"""

def person_link(name):
    return """<a href="/publications.html?q={name}" target="_blank" class="person-link">{name}</a>""".format(name=name)

def parse_map_data(js):
    nodecount = 0
    people = {}
    places = {}
    fields = {}
    edges = []
    for p, d in js["people"].items():
        last, first = p.split(',')
        n = nodecount
        nodecount += 1
        name = first.strip()+ " " + last.strip()
        people[name] = {'id': n, 'places': [], 'fields': []}
        if name in coauthors:
            people[name]['coauthors'] = sorted(coauthors[name])
        else: people[name]['coauthors'] = []
        for place in d["place"]:
            if place not in places:
                places[place] = {'id': nodecount, 'people': []}
                nodecount += 1
            places[place]['people'].append(name)
            people[name]['places'].append(place)
            edges.append((places[place]['id'],n))
        for field in d["fields"]:
            if field not in fields:
                fields[field] = {'id': nodecount, 'people': []}
                nodecount += 1
            fields[field]['people'].append(name)
            people[name]['fields'].append(field)
            edges.append((fields[field]['id'],n))
                
    nodedata = ""
    infodata = ""
    for place, d in places.items():
        nodedata += '  addNode({:d},"{}", "place")\n'.format(d['id'],place)
        infodata += PLACEDIV.format(d['id'], place, ", ".join(person_link(p) for p in sorted(d['people'])))
    for person, d in people.items():
        nodedata += '  addNode({:d},"{}", "person")\n'.format(d['id'],person)
        if person in latest_pubs:
            authorstr = "<p>Latest publication: " + latest_pubs[person] + "</p>"
        else: authorstr = ""
        if d['coauthors']: authorstr += "<p><i>Coauthors</i>: "+ ", ".join(person_link(p) for p in d['coauthors']) + "</p>"
        infodata += PERSONDIV.format(d['id'], person_link(person), ", ".join(d['places']),
                                ", ".join(d['fields']), authorstr)
    for field, d in fields.items():
        nodedata += '  addNode({:d},"{}", "field")\n'.format(d['id'],field)
        infodata += FIELDDIV.format(d['id'], field, ", ".join(person_link(p) for p in sorted(d['people'])))
    for t,s in edges:
        nodedata += "  addLink({:d},{:d})\n".format(t,s)

    return nodedata, infodata


def generate_map_html():
    with open("mapdata.json",'r', encoding='utf-8') as f:
        js = json.load(f)
    nodedata, infodata = parse_map_data(js)
    with open("html/map-js-base.js",'r') as f:
        data = f.read()
    data = data.replace("NODEDATAHERE", nodedata)
    with open("js/force-directed-graph.js", 'w', encoding='utf-8') as f:
        f.write(data)

    with open("html/map_base.html", 'r') as f:
        data = f.read()
    data = data.replace("INFODATAHERE", infodata)
    with open("map.html", 'w', encoding='utf-8') as f:
        f.write(data)

if __name__ == '__main__':
    generate_publications_html()
    generate_map_html()
