import bibtexparser
import json
import datetime
import re

current_date = datetime.datetime.now().date()

num_years = 5  # How many years of data to include
paper_cutoff = 2  # How many papers someone needs to have to be listed

def clean_text(s):
    return s.replace('{','').replace('}','').replace(r'\rm','').replace("  "," ").strip()

single_letter = re.compile(r'\s[a-zA-Z]\.')
def normalise_name(n):
    p1, p2 = n.split(', ')
    name = p2.strip() + " " + p1.strip()
    name = re.sub(single_letter, '', name) # Go from John A. Smith to John Smith
    return name


with open('zx-papers.bib',encoding='utf-8') as bibtex_file:
        bib_database = bibtexparser.load(bibtex_file)
papers = dict()
coauthors = dict()
for e in bib_database.entries:
    e = bibtexparser.customization.author(e)
    papers[clean_text(e['title'])] = e

recent_authors = {}
for t,e in papers.items():
    if 'urldate' not in e:
        e['urldate'] = "{}-01-01".format(e['year'])
    
    if 'link' not in e:
        e['link'] = e['url']
    e['publink'] = """<a href="{}" target="_blank">{}</a>""".format(e['link'], clean_text(e['title']))
    urldate = [int(v) for v in e['urldate'].split('-')]  # urldate = [2020,10,20]
    delta = current_date - datetime.date(*urldate)
    if delta.days > 365*num_years: continue
    authors = [normalise_name(a) for a in e['author']]
    for author in authors:
        if author in recent_authors:
            recent_authors[author].append(e)
        else: recent_authors[author] = [e]
        if author not in coauthors:
            coauthors[author] = set()
        for other in authors:
            if other == author: continue
            coauthors[author].add(other)


authors = dict(filter(lambda d: len(d[1])>=paper_cutoff, recent_authors.items()))
for author in authors:
    authors[author] = sorted(authors[author], key=lambda e: e['urldate'], reverse=True)


coauthors = dict(filter(lambda a: a[0] in authors, coauthors.items()))
for author in coauthors:
    coauthors[author] = list(sorted(coauthors[author].intersection(authors.keys())))

#### Now that we have prepared the data, we are gonna build the graph


PERSONDIV = """<div class="person" id="info-{:d}" style="display:none"><b>{}</b>: {}</div>\n"""

PAPERDIV = """<div class="paper" id="info-{:d}" style="display:none"><b>{}</b>:
<p>{}</p>
<p>Authors: {}</p>
{}
</div>\n"""


def person_link(name):
    return """<a href="/publications.html?q={name}" target="_blank" class="person-link">{name}</a>""".format(name=name)

def parse_map_data(authors,coauthors):
    nodecount = 0
    people = {}
    places = {}
    fields = {}
    edges = []
    for person in authors:
        n = nodecount
        nodecount += 1
        people[person] = {'id': n}
        people[person]['coauthors'] = coauthors[person]
        # else: people[name]['coauthors'] = []
        # for place in d["place"]:
        #     if place not in places:
        #         places[place] = {'id': nodecount, 'people': []}
        #         nodecount += 1
        #     places[place]['people'].append(name)
        #     people[name]['places'].append(place)
        #     edges.append((places[place]['id'],n))
        # for field in d["fields"]:
        #     if field not in fields:
        #         fields[field] = {'id': nodecount, 'people': []}
        #         nodecount += 1
        #     fields[field]['people'].append(name)
        #     people[name]['fields'].append(field)
        #     edges.append((fields[field]['id'],n))
    
    edges = []
    for a, coa in coauthors.items():
        s = people[a]['id']
        for c in coa:
            t = people[c]['id']
            if (s,t) and (t,s) not in edges:
                edges.append((s,t))

    nodedata = ""
    infodata = ""
    # for place, d in places.items():
    #     nodedata += '  addNode({:d},"{}", "place")\n'.format(d['id'],place)
    #     infodata += PLACEDIV.format(d['id'], place, ", ".join(person_link(p) for p in sorted(d['people'])))
    for person, d in people.items():
        nodedata += '  addNode({:d},"{}", "person")\n'.format(d['id'],person)
        authorstr = "<p><i>Latest publications</i><br>" + \
                     "<br>".join(e['publink'] for e in authors[person][:3]) + "</p>"
        authorstr += "<p><i>Coauthors</i>: "+ ", ".join(person_link(p) for p in d['coauthors']) + "</p>"
        infodata += PERSONDIV.format(d['id'], person_link(person), authorstr)
    # for field, d in fields.items():
    #     nodedata += '  addNode({:d},"{}", "field")\n'.format(d['id'],field)
    #     infodata += FIELDDIV.format(d['id'], field, ", ".join(person_link(p) for p in sorted(d['people'])))
    for t,s in edges:
        nodedata += "  addLink({:d},{:d})\n".format(t,s)

    return nodedata, infodata


def generate_map_html(authors, coauthors):
    # with open("mapdata.json",'r', encoding='utf-8') as f:
    #     js = json.load(f)
    nodedata, infodata = parse_map_data(authors, coauthors)
    with open("html/map-person-base.js",'r') as f:
        data = f.read()
    data = data.replace("NODEDATAHERE", nodedata)
    with open("js/person-graph.js", 'w', encoding='utf-8') as f:
        f.write(data)

    with open("html/personmap_base.html", 'r') as f:
        data = f.read()
    data = data.replace("INFODATAHERE", infodata)
    with open("personmap.html", 'w', encoding='utf-8') as f:
        f.write(data)

generate_map_html(authors, coauthors)
