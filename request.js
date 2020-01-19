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

const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', url, true)
request.onload = function() {
    var data = JSON.parse(this.response)
       if (request.status >= 200 && request.status < 400) {
            let i = 0;
            //data.forEach(results => {
            for (i = 0; i < 5; i++) {  
                const card = document.createElement('div')
                card.setAttribute('class', 'card')
                const h1 = document.createElement('h1')
                h1.textContent = data.results[i].title

                const p = document.createElement('p')
                //movie.description = 
                let des = data.results[i].overview
      p.textContent = `${des}`
                container.appendChild(card)
                card.appendChild(h1)
                card.appendChild(p)
            }
            //})
        } else {
            const errorMessage = document.createElement('marquee')
            errorMessage.textContent = `Gah, it's not working!`
            app.appendChild(errorMessage)
        }
}
request.send()

