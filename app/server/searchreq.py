""" Get from IMDB API """

import requests

ImdbID = 'tt0128853' #will get from Meredith
API_Call = 'http://www.omdbapi.com/?i=' + ImdbID + '&plot=full&apikey=1cf8834a'

r = requests.get(API_Call)

print(r)


