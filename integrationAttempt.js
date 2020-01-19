var Genres=[];
var counter = 1;
let scifi =[0]
let fantasy= [0]
let action=[0]
let adventure=[0]
let animation=[0]
let family=[0]
let comedy=[0]
let documentary=[0]
let history=[0]
let crime=[0]
let mystery=[0]
let war=[0]
let drama=[0]
let horror=[0]
let thriller=[0]
let romance=[0]
var titles = [];
var ids = [];
var genreIds = [];
var movieImgs = [];
var descriptions = [];
var ratings = [];
var inputGenre1 = 16;
var inputGenre2 = 35;
var inputGenre3 = 0;
var inputGenre4 = 0;

var first={SCIENCE_FICTION:history,
       FANTASY: fantasy,
       ACTION: action,
       ADVENTURE:adventure
      }

var second={ANIMATION:animation,
        FAMILY:family,
        COMEDY:comedy
       }

var third={DOCUMENTARY:[],
       HISTORY: history,
       WAR:war
      }

var fourth = {CRIME:crime,
          MYSERY:mystery,
          WAR:war,
          DRAMA:drama
}

var fifth={HORROR:horror,
       THRILLER:thriller
      }

var sixth={ROMANCE:romance,
       DRAMA:drama,
       COMEDY:comedy
    }

hello_arr = [first,second,third,fourth,fifth,sixth]

function GetGenres() {
        var Selected_Genre = document.getElementById("Genre");
        var x = Selected_Genre.options[Selected_Genre.selectedIndex].text;
        Genres.push(x);
        document.getElementById("Number").innerHTML = "Genre Preference " + counter;
        //delete below after
        //document.getElementById("pTest").innerHTML = Genres.toString();
        //document.getElementById("pTest").innerHTML = "sadasd"+Genres.toString();
        counter++;
        if (Genres.length < 4) {
          apiRequest();

        } else {
          count_groups();
        }
}

function count_groups(){
  Genres.forEach(fucntion(element) {
    if (element == "Science Fiction") {
        scifi[0]++;
    } else if (element == "Fantasy") {
        fantasy[0]++;
    } else if (element == "Action") {
        action[0]++;
    } else if (element == "Adventure") {
        adventure[0]++;
    } else if (element == "Animation") {
        animation[0]++;
    } else if (element == "Family") {
        family[0]++;
    } else if (element == "Comedy") {
        comedy[0]++;
    } else if (element == "Documentary") {
        documentary[0]++;
    } else if (element == "History") {
        history[0]++;
    } else if (element == "Crime") {
        crime[0]++;
    } else if (element == "Mystery") {
        mystery[0]++;
    } else if (element == "War") {
        war[0]++;
    } else if (element == "Drama") {
        drama[0]++;
    } else if (element == "Horror") {
        horror[0]++;
    } else if (element == "Thriller") {
        thriller[0]++;
    } else if (element == "Romance") {
        romance[0]++;
    }
  })

  let count1 = scifi[0] + fantasy[0] + action[0] + adventure[0]
  let count2= animation[0] + family[0] + comedy[0]
  let count3= documentary[0] + history[0]
  let count4= crime[0] + mystery[0] + war[0] + drama[0]
  let count5= horror[0] + thriller[0]
  let count6= romance[0] + drama[0] + comedy[0]

  let sample_array=[count1,count2,count3,count4,count5,count6]

  let eq_list = []
  let main_genres = []


  //????
  //by here you have main_genres

//now put final decisions
let max = sample_array[0];
for(let i = 0; i < sample_array; i++) {
  if (max < sample_array[i]) {
    max = sample_array[i];
  }
}
let eq_list = [];
for (let i = 0; i < sample_array.length) {
  if (sample_array[i] == max) {
    eq_list.push(i);
  }
}

//here goes eq function
if(eq_list.length > 1) {
  //do the things of fucntion
}

//by here u have main genres (from eq fxn)

let final_list = [];
let andy = sample_array.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
let total = Genres.length

if (sample_array[andy] > total / 2) {
  //Object.keys(obj).length;
  for (let i = 0; i < Object.keys(hello_arr[andy]).length;) {
    final_list.push(i);
    //and this is the best
  }
} else {
  //get best genres or whatever
  let all_counts = [];

  sample_array.forEach(element => all_counts.push(element))
  all_counts.sort();
  all_counts.reverse();

  for (int i = 0; i < 2; i++) {
    max = 0
    andy = sample_array.indexOf(all_counts[i]);
    let maxgenre = 0;

    for (let j = 0; j < Object.keys(hello_arr[andy]).length; j++) {
      //i don think this is correct syntax
      if (hello_arr[andy].key[0] > max) {
          max = hello_arr[andy].key[0]
          maxgenre = hello_arr[andy].key;
      }
    }
    if(typeof(maxgenre) == string) {
      final_list.push(maxgenre);
    }
}
}
}

function apiRequest() {
  

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
            for (i = 0; i < 10; i++) {  
                const card = document.createElement('div')
                card.setAttribute('class', 'card')
                const h1 = document.createElement('h1')
                h1.textContent = data.results[i].title

                titles.push(data.results[i].title)
                descriptions.push(data.results[i].overview)
                ratings.push(data.results[i].vote_average);
                const p = document.createElement('p')
              
                //movie.description = 
                let des = data.results[i].overview
                let rat = data.results[i].vote_average
                p.textContent = `${des}`
              
                container.appendChild(card)
                card.appendChild(h1)
                card.appendChild(p)
            }

            //sort based on avg vote?
            

            let j = 0;
            for(j = 0; j < 10; j++) {
                document.getElementById("Title" + '' + j).innerHTML = titles[j];
                document.getElementById("Description" + '' + j).innerHTML = descriptions[j];
                
            }
        } else {
            const errorMessage = document.createElement('marquee')
            errorMessage.textContent = `Gah, it's not working!`
            app.appendChild(errorMessage)
        }
}
request.send()

}
