import requests
from bs4 import BeautifulSoup

resp = requests.get('https://www.youtube.com/onepiece')
soup = BeautifulSoup(resp.text, 'html.parser')

channel_id = soup.select_one('meta[property="og:url"]')['content'].strip('/').split('/')[-1]
print(channel_id)
