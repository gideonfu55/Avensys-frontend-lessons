// This is an example of using the Fetch API (which involves promises) on a movie database and getting the details (returned in JSON format) of batman movies according to a specified year.

fetch('https://www.omdbapi.com/?s=batman&y=2018&apikey=409d6eaf')
  // this gets the response in json format
  // - it is good practice to console.log the response body first to find out what you are getting, then narrow down to what you are trying to get through the json object key/property.
  .then(response => response.json())
  // you need another .then to retreive the data as the promise is awaiting fulfillment:
  // .then(data => console.log(data))

  // you can also narrow your search to a particular object/item.
  .then(data => data.Search.forEach(item => {
    if (item.Title === 'Batman: Gotham by Gaslight') {
      console.log(item)
    }
  }))

// Fetching details for Guardians of Galaxy Vol 2:
fetch('http://www.omdbapi.com/?i=tt3896198&apikey=409d6eaf')
  .then(response => response.json())
  .then(data => console.log(data.Poster))
