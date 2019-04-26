import json

#############################################
# First we do Publications stuff

import bibtexparser
from bibtexparser.bwriter import BibTexWriter
from bibtexparser.bibdatabase import BibDatabase

writer = BibTexWriter()
writer.indent = '    '
writer.display_order = ('ENTRYTYPE', 'author', 'title', 'year', 'journal', 'booktitle',
                        'editor', 'series', 'volume', 'pages', 'publisher', 'doi', 'link',
                        'keyword',  'keywords', 'abstract')

def entry_sort_key(entry):
    l = entry['link']
    if l.find('arxiv') != -1:
        return int(l.rsplit('/',1)[1][:4]) #arxiv year-month
    else:
        return int(entry['year'][2:])*100
        
def normalise_name(n):
    p1, p2 = n.split(', ')
    return p2.strip() + " " + p1.strip()

def parse_math(s):
    i = s.rfind('$',0)
    while i != -1:
        j = s.rfind('$',0,i)
        if j == -1: raise Exception("No matching $ in abstract: ", s)
        s = s[:j] + "\\(" + s[j+1:i] + "\\)" + s[i+1:]
        i = s.rfind('$')
    return s

def clean_text(s):
    return s.replace('{','').replace('}','').replace(r'\rm','')

HTML = r"""
<a target="_blank" href="{url}" class="paperTitle">{title}</a>,
<span class="authors">{authors}</span>,
<span class="journal">{journal}</span>
<span class="year">({year})</span>.
<br>
Keywords: <span class="keywords">{keywords}</span>.
<a href="#" class="abstract_more">Abstract</a>&nbsp;&nbsp;
<a href="#" class="bibdata_more">Bibdata</a>
<br>
<span class="abstract" style="display:none">{abstract}</span>
<span class="bibdata" style="display:none"><pre><code>{bibdata}</code></pre></span>"""

keyword_pubs = dict()
coauthors = dict()
latest_pubs = dict()

def entry_to_html(entry):
    db = BibDatabase()
    db.entries = [entry]
    raw_bibdata = writer.write(db)

    if 'journal' in entry:
        journal = clean_text(entry['journal'])
    elif 'booktitle' in entry:
        journal = clean_text(entry['booktitle'])
    elif 'note' in entry:
        journal = clean_text(entry['note'])
    else:
        print("Missing entries:")
        print(entry)
        raise
    journal = journal.replace('\n', ' ')
    
    e = bibtexparser.customization.author(entry)
    bibtexparser.customization.convert_to_unicode(entry)
    authors = ""
    if len(e['author'])==1:
        authors = normalise_name(e['author'][0])
        if authors not in coauthors: coauthors[authors] = set()
        if authors not in latest_pubs: latest_pubs[authors] = clean_text(entry['title'])
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
            if author not in latest_pubs: latest_pubs[author] = clean_text(entry['title'])


    if 'keywords' in entry: kw = entry['keywords']
    elif 'keyword' in entry: kw = entry['keyword']
    else: kw = ""
    keywords = [s.strip() for s in kw.split(',')]
    keyword_html = ", ".join('<a target="_blank" onclick="forceSearch(\'{}\')">{}</a>'.format(kw.lower(),kw) for kw in keywords)
    html = HTML.format(url = entry['link'], title=clean_text(entry['title']),
                       authors = authors, journal = journal,
                       year = entry['year'], abstract=parse_math(entry['abstract']),
                       bibdata=raw_bibdata, keywords = keyword_html)
    for kw in keywords:
        if kw in keyword_pubs: keyword_pubs[kw].append(html)
        else: keyword_pubs[kw] = [html]
    return html

def library_to_html(lib):
    pubs_per_year = {}
    for b in lib.entries:
        k = entry_sort_key(b)
        y = k//100
        if y in pubs_per_year:
            pubs_per_year[y].append(b)
        else: pubs_per_year[y] = [b]

    output = ""
    for y in sorted(pubs_per_year.keys(),reverse=True):
        pubs = pubs_per_year[y]
        output += "<h2>{:d}</h2>\n".format(2000+y)
        output += '<ul>\n'
        for e in [entry_to_html(b) for b in sorted(pubs,key=entry_sort_key,reverse=True)]:
            output += '<li class="pub_entry">' + e + "</li>" +"\n"
        output += "</ul>\n \n"

    return output

def generate_publications_html():
    with open('zx-papers.bib',encoding='utf-8') as bibtex_file:
        bib_database = bibtexparser.load(bibtex_file)
        bib_data = library_to_html(bib_database)
    #Generate main page
    with open('html/publications_base.html') as f:
        html_base = f.read()
    output = html_base.format(content=bib_data)
    f = open("publications.html",'wb')
    f.write(output.encode('utf-8'))
    f.close()

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
            authorstr = "<p>Latest publication: <i>" + latest_pubs[person] + "</i></p>"
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