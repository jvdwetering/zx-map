import bibtexparser
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.select import Select
import os
import time
import json

def clean_text(s):
    return s.replace('{','').replace('}','').replace(r'\rm','').replace("  "," ").strip()

chrome_driver = os.getcwd() +"\\chromedriver.exe"
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--window-size=1920x1080")
url = "https://ui.adsabs.harvard.edu/"

q = "Interacting Quantum Observables"
def scrape(q):
    driver = webdriver.Chrome(chrome_options=chrome_options, executable_path=chrome_driver)
    driver.get(url)
    def find(driver):
        element = driver.find_elements_by_name("q")
        if element:
            return element[0]
        else:
            return False
    s = WebDriverWait(driver, 8).until(find)
    s.send_keys('citations("{}")'.format(q))
    driver.set_page_load_timeout(10)
    time.sleep(1)
    btn = driver.find_element_by_class_name("search-submit")
    btn.click()
    def find2(driver):
        element = driver.find_elements_by_name("per-page-select")
        if element:
            return element[0]
        else:
            return False
    try: drop = Select(WebDriverWait(driver, 8).until(find2))
    except Exception:
        driver.quit()
        return []
    drop.select_by_value("200")
    time.sleep(5)
    results = [r.text for r in driver.find_elements_by_class_name("s-results-title")]
    driver.quit()
    return results

with open('zx-papers.bib',encoding='utf-8') as bibtex_file:
        bib_database = bibtexparser.load(bibtex_file)
papers = []
for e in bib_database.entries:
    papers.append(clean_text(e['title']))

with open("cite_data.json",encoding='utf-8') as f:
    js = json.load(f)
    cites = js["cited_by"]

for paper in papers:
    if paper in cites:
        continue
    print("Finding citations for",paper)
    results = scrape(paper)
    print(len(results), "results found")
    cites[paper] = results
    js["cited_by"] = cites
    with open("cite_data.json",'w',encoding='utf-8') as f:
        json.dump(js,f,ensure_ascii=False,indent=4,sort_keys=True)
    
