var Genres=[];
var counter = 1;
function GetGenres() {
	var Selected_Genre = document.getElementById("Genre");
	var x = Selected_Genre.options[Selected_Genre.selectedIndex].text;
	Genres.push(x);
  counter++;
	document.getElementById("Number").innerHTML = "Genre Preference #" + counter;
	//delete below after
	//document.getElementById("pTest").innerHTML = Genres.toString();
	//document.getElementById("pTest").innerHTML = "sadasd"+Genres.toString();
}
