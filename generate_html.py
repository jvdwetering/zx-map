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

HTML = r"""<a target="_blank" href="{url}">{title}</a>, {authors}, <i>{journal}</i> ({year}).<br>
Keywords: {keywords}.&nbsp;&nbsp;
<span class="abstract">{abstract}</span>&nbsp;&nbsp;
<span class="bibdata"><pre><code>{bibdata}</code></pre></span>"""

keyword_pubs = dict()

def entry_to_html(entry):
    db = BibDatabase()
    db.entries = [entry]
    raw_bibdata = writer.write(db)
    
    e = bibtexparser.customization.author(entry)
    bibtexparser.customization.convert_to_unicode(entry)
    authors = ""
    if len(e['author'])==1:
        authors = normalise_name(e['author'][0])
    else:
        for a in e['author'][:-2]:
            p1, p2 = a.split(',')
            authors += normalise_name(a) + ", "
        authors += normalise_name(e['author'][-2]) + " and "
        authors += normalise_name(e['author'][-1])

    if 'journal' in entry:
        journal = entry['journal']
    elif 'booktitle' in entry:
        journal = entry['booktitle']
    else:
        journal = entry['note']
    journal = journal.replace('\n', ' ')

    if 'keyword' in entry:
        keywords = [s.strip() for s in entry['keyword'].split(',')]
    else: keywords = []
    keyword_html = ", ".join('<a target="_blank" href="{kw}.html">{kw}</a>'.format(kw=kw) for kw in keywords)
    html = HTML.format(url = entry['link'], title=entry['title'],
                       authors = authors, journal = journal,
                       year = entry['year'], abstract=entry['abstract'],
                       bibdata=raw_bibdata, keywords = keyword_html)
    for kw in keywords:
        if kw in keyword_pubs: keyword_pubs[kw].append(html)
        else: keyword_pubs[kw] = [html]

    keyword_html = ", ".join('<a target="_blank" href="keywords/{kw}.html">{kw}</a>'.format(kw=kw) for kw in keywords)
    html = HTML.format(url = entry['link'], title=entry['title'],
                       authors = authors, journal = journal,
                       year = entry['year'], abstract=entry['abstract'],
                       bibdata=raw_bibdata, keywords = keyword_html)
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

def generate_keyword_page(kw):
    entries = keyword_pubs[kw]
    output = "<ul>\n"
    for e in entries:
        output += '<li class="pub_entry">' + e + "</li>" +"\n"
    output += "</ul>\n \n"
    return output

def generate_keyword_html():
    l = list(keyword_pubs.keys())
    l.sort(key=lambda v: len(keyword_pubs[v]),reverse=True)
    return ", ".join('<a target="_blank" href="keywords/{kw}.html">{kw}</a> ({n:d})'.format(kw=kw,n=len(keyword_pubs[kw])) for kw in l)

def to_clipboard(s):
    try:
        from Tkinter import Tk
    except ImportError:
        from tkinter import Tk
    r = Tk()
    r.withdraw()
    r.clipboard_clear()
    r.clipboard_append(s)
    r.update() # now it stays on the clipboard after the window is closed
    r.destroy()

if __name__ == '__main__':
    with open('zx-papers.bib',encoding='utf-8') as bibtex_file:
        bib_database = bibtexparser.load(bibtex_file)
        bib_data = library_to_html(bib_database)
    with open('html/expand.js') as f:
        js_base = f.read()
    #Generate main page
    with open('html/base_html.html') as f:
        html_base = f.read()
    output = html_base.format(keywords=generate_keyword_html(), content=bib_data,javascript=js_base)
    f = open("publications.html",'wb')
    f.write(output.encode('utf-8'))
    f.close()
    #Generate keyword pages
    with open('html/keyword_page.html') as f:
        html_base = f.read()
    for kw in keyword_pubs:
        content = generate_keyword_page(kw)
        output = html_base.format(keyword=kw,content=content,javascript=js_base)
        f = open("keywords/{}.html".format(kw.lower()),'wb')
        f.write(output.encode('utf-8'))
        f.close()
