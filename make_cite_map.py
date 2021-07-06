import bibtexparser
import json

months = {'01':'Jan', '02':'Feb', '03':'Mar', '04':'Apr','05':'May','06':'Jun',
          '07':'Jul', '08':'Aug', '09':'Sep', '10':'Oct','11':'Nov','12':'Dec'}

def clean_text(s):
    return s.replace('{','').replace('}','').replace(r'\rm','').replace("  "," ").strip()

def normalise_name(n):
    p1, p2 = n.split(', ')
    return p2.strip() + " " + p1.strip()

with open("cite_data.json",encoding='utf-8') as f:
    js = json.load(f)
    cites = js["cited_by"]

with open('zx-papers.bib',encoding='utf-8') as bibtex_file:
        bib_database = bibtexparser.load(bibtex_file)
papers = dict()
for e in bib_database.entries:
    e = bibtexparser.customization.author(e)
    papers[clean_text(e['title'])] = e

PAPERDIV = """<div class="paper" id="info-{:d}" style="display:none"><b>{}</b>:
<p>{}</p>
<p>Authors: {}</p>
{}
</div>\n"""

nodes = {}
n = 0
nodedata = ""
infodata = ""
for title, entry in papers.items():
    nodes[title] = {'id': n}
    title2 = title
    if len(title)> 15:
        title2 = title[:12] + "..."
    nodedata += '  addNode({:d},"{}", "paper")\n'.format(n,title2)
    authors = [normalise_name(s) for s in entry['author']]
    nodes[title]['authors'] = authors
    if entry['link'].find('arxiv') != -1:
        v = entry['link'].rsplit('/',1)[1][:4] #arxiv year-month
        y = 2000+int(v[:2])
        m = months[v[2:]]
        nodes[title]['date'] = "{} {:d}".format(m,y)
    else:
        nodes[title]['date'] = entry['year']
    nodes[title]['cited_by'] = [c for c in cites[title] if c in papers]
    citetext = ""
    if nodes[title]['cited_by']:
        citetext += "<p>Cited by:\n<br></br>{}</p>".format("<br></br>".join(nodes[title]['cited_by']))
    infodata += PAPERDIV.format(n,title,nodes[title]['date'],", ".join(authors), citetext)
    n += 1

edges = []
for title in papers:
    i = nodes[title]['id']
    for other in nodes[title]['cited_by']:
        #if other not in nodes: continue
        j = nodes[other]['id']
        edges.append((j,i))
        nodedata += "  addLink({:d},{:d})\n".format(j,i)

with open("html/map-js-base-cite.js",'r') as f:
        data = f.read()
data = data.replace("NODEDATAHERE", nodedata)
with open("js/citation-graph.js", 'w', encoding='utf-8') as f:
    f.write(data)

with open("html/citemap_base.html", 'r') as f:
    data = f.read()
data = data.replace("INFODATAHERE", infodata)
with open("citemap.html", 'w', encoding='utf-8') as f:
    f.write(data)
