import json

with open("mapdata.json",'r', encoding='utf-8') as f:
    js = json.load(f)

nodecount = 0
people = {}
places = {}
fields = {}
edges = []
for p, d in js["people"].items():
    last, first = p.split(',')
    n = nodecount
    nodecount += 1
    people[first.strip()+ " " + last.strip()] = n
    for place in d["place"]:
        if place not in places:
            places[place] = nodecount
            nodecount += 1
        edges.append((places[place],n))
    for field in d["fields"]:
        if field not in fields:
            fields[field] = nodecount
            nodecount += 1
        edges.append((fields[field],n))
            
output = ""
for place, n in places.items():
    output += '  addNode({:d},"{}", "place")\n'.format(n,place)
for person, n in people.items():
    output += '  addNode({:d},"{}", "person")\n'.format(n,person)
for field, n in fields.items():
    output += '  addNode({:d},"{}", "field")\n'.format(n,field)

for t,s in edges:
    output += "  addLink({:d},{:d})\n".format(t,s)

with open("html/map-js-base.js",'r') as f:
    data = f.read()

data = data.replace("NODEDATAHERE", output)

with open("js/force-directed-graph.js", 'w', encoding='utf-8') as f:
    f.write(data)
