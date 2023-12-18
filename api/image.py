import requests
# Replace YOUR_API_KEY with your actual API key
api_key = "YOUR_API_KEY"

# Set the endpoint URL and parameters
url = "https://api.freepik.com/v1/search"
params = {
    "query": "cartoon",
    "limit": 10
}

# Set the headers with the API key
headers = {
    "Authorization": f"Bearer {api_key}",
    "Header1": "Value1",
    "Header2": "Value2",
    "Header3": "Value3",
    "Header4": "Value4",
    "Header5": "Value5"
}
import requests 
# Make the API call
api_key = "pbj5XO9QlBzASVljoEvtEkYoJyzJHytRIbGjf28wov2Kr7EZ"
headers = {
    'Accept-Language': 'en-US', 
'Accept': 'application/json',
'Content-Type': 'application/json', 
'X-Freepik-API-Key' :'pbj5XO9QlBzASVljoEvtEkYoJyzJHytRIbGjf28wov2Kr7EZ',

}
def gen_image_free(prompt):
    return requests.get(f"https://api.freepik.com/v1/resources?locale=en-US&page=1&limit=5&order=latest&term={prompt}",  headers=headers)

