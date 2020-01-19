var titles = [];
var ids = [];
var genreIds = [];
var movieImgs = [];
var descriptions = [];
var inputGenre1 = 16;
var inputGenre2 = 35;
var inputGenre3 = 0;
var inputGenre4 = 0;

let url = 'https://api.themoviedb.org/3/discover/movie?api_key=df425d80bcec33e26f4f164ed6a940e9&with_genres=';

if(inputGenre1) {
  url += ',' + '' + inputGenre1;
}
if (inputGenre2) {
  url += ',' + '' + inputGenre2
} 
if(inputGenre3) {
  url += ',' + '' + inputGenre3
}
if(inputGenre4) {
  url += ',' + '' + inputGenre4;
}

const https = require('https');
https.get(url, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    let i = 0;
    for(i = 0; i < 5; i++) {
      titles.push(JSON.parse(data).results[i].title);
      console.log(titles[i]);
      ids.push(JSON.parse(data).results[i].id);
      genreIds.push(JSON.parse(data).results[i].genre_ids);
      movieImgs.push(JSON.parse(data).results[i].poster_path);
      descriptions.push(JSON.parse(data).results[i].overview);
      console.log(descriptions[i]);
    //console.log(JSON.parse(data).results);
    }

  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});


