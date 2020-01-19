var titles = [];
var ids = [];
var genreIds = [];
var genreWord = [];//["","","","","","","","","",""];
var descriptions = [];
var ratings = [];
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


var request = new XMLHttpRequest()
request.open('GET', url, true)
request.onload = function() {
    var data = JSON.parse(this.response)
       if (request.status >= 200 && request.status < 400) {
            //data.forEach(results => {
            for (let i = 0; i < 10; i++) {
                //const card = document.createElement('div')
                //card.setAttribute('class', 'card')
                //const h1 = document.createElement('h1')
                //h1.textContent = data.results[i].title

                titles.push(data.results[i].title)
                descriptions.push(data.results[i].overview)
                genreIds.push(data.results[i].genre_ids[0]);

            }
            //sort based on avg vote?
            //let j = 0;
            for(let j = 0; j < 10; j++) {
                document.getElementById("Title" + '' + j).innerHTML = titles[j];
                document.getElementById("Description" + '' + j).innerHTML = descriptions[j];

                if (genreIds[j] == 28) {
                  //genreWord.push("Action");
                  document.getElementById("MovieGenre" + '' + j).innerHTML = "Action";
                } else if (genreIds[j] == 12) {
                   //genreWords.push("Adventure");
                   document.getElementById("MovieGenre" + '' + j).innerHTML = "Adventure";
                } else if (genreIds[j] == 16) {
                  //genreWord.push("Animation");
                  document.getElementById("MovieGenre" + '' + j).innerHTML = "Animation";
                } else if (genreIds[j] == 35) {
                   //genreWord.push("Comedy");
                   document.getElementById("MovieGenre" + '' + j).innerHTML = "Comedy";
                } else if (genreIds[j] == 80) {
                   //genreWord.push("Crime");
                   document.getElementById("MovieGenre" + '' + j).innerHTML = "Crime";
                } else if (genreIds[j] == 99) {
                  //genreWord.push("Documentary");
                  document.getElementById("MovieGenre" + '' + j).innerHTML = "Documentary";
                } else if (genreIds[j] == 18) {
                  //genreWord[i].push("Drama");
                  document.getElementById("MovieGenre" + '' + j).innerHTML = "Drama";
                } else if (genreIds[j] == 10751) {
                  //genreWord.push("Family");
                  document.getElementById("MovieGenre" + '' + j).innerHTML = "Family";
                } else if (genreIds[j] == 36) {
                   //genreWord.push("History");
                   document.getElementById("MovieGenre" + '' + j).innerHTML = "History";
                } else if (genreIds[j] == 27) {
                  //genreWord.push("Horror");
                  document.getElementById("MovieGenre" + '' + j).innerHTML = "Horror";
                } else if (genreIds[j] == 9648) {
                  //genreWord.push("Mystery");
                  document.getElementById("MovieGenre" + '' + j).innerHTML = "Mystery";
                } else if (genreIds[j] == 10749) {
                  //genreWord.push("Romance");
                  document.getElementById("MovieGenre" + '' + j).innerHTML = "Romance";
                } else if (genreIds[j] == 878) {
                  genreWord.push("Science Fiction");
                  document.getElementById("MovieGenre" + '' + j).innerHTML = "Science Fiction";
                } else if (genreIds[j] == 53) {
                  genreWord.push("Thriller");
                  document.getElementById("MovieGenre" + '' + j).innerHTML = "Thriller";
                } else if (genreIds[j] == 10752) {
                  //genreWord.push("War");
                  document.getElementById("MovieGenre" + '' + j).innerHTML = "War";
                }

                //document.getElementById("MovieGenre" + '' + j).innerHTML = genreWord[j];

            }
        } else {
            const errorMessage = document.createElement('marquee')
            errorMessage.textContent = `Gah, it's not working!`
            app.appendChild(errorMessage)
        }
}
request.send()
