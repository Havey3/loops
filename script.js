var i = 0;

while(i<100){
    console.log("TWEET TWEET");
    i++;
}

for(var i = 0; i < 100; i++){
    console.log("TWEET TWEET");
}

var favoriteFoods = ["chicken", "bacon", "apples", "steak", "cake"];
for(var i=0; i < favoriteFoods.length; i++){
    console.log(favoriteFoods[i])
}

var interests = ["hiking", "skiing", "playing videogames", "Game of Thrones", "South Park"];

for (var i=0; i < interests.length; i++){
    if(interests[i] === "skiing"){
        interests[i] = interests[i].toLowerCase();
        console.log("My favorite interests is: " + interests[i])
    }
    console.log ("One of my interests is: " + interests[i])
    
}

var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for (var i=0; i < harryPotterTitles.length; i++){
    console.log("Harry Potter " +harryPotterTitles[i])
}

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for (var i=0; i < grades.length; i++){
    if(grades[i] <= 60){
        console.log("You got a F")
    if(grades[i] < 70 && grades[i] < 76){
      console.log("You got a D")
    }
    if(grades[i] < 77 && grades[i] < 84){
      console.log("You got a C")
    }
    if(grades[i] < 84 && grades[i] < 92){
      console.log("You got a B")
    }
    if(grades[i] < 93 && grades[i] < 100){
      console.log("You got a A")
    }
}
}

var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

for (var i=0; i < sentenceArray.length; i++){
  if(i % 4 == 1 && i % 4 !== 0){
    console.log("MOOOOO")
  }
  else {
    console.log(sentenceArray[i])
  }
}

var downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];

var HTMLString = "";
var listContainer = document.querySelector("#restaurants-list");

for (var i=0; i < downtownRestaurants.length; i++){

  HTMLString = HTMLString + `<li>${downtownRestaurants[i]}</li>`;

}
listContainer.innerHTML = HTMLString;





var movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      currentlyPlaying: true,
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    }, 
    {
      title: "The Grinch",
      rating: "G",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "A Star is Born",
      rating: "R",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    },
    {
      title: "Robin Hood",
      rating: "PG-13",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
    }
  ]

  var htmlString0 =   `
  <h2>${movieSchedule[0].title}</h2>
  <p>${movieSchedule[0].rating}</p>
  <img class = "poster" src=${movieSchedule[0].poster} alt="movie_poster"/>
  `
  var htmlString1 =   `
  <h2>${movieSchedule[1].title}</h2>
  <p>${movieSchedule[1].rating}</p>
  <img class = "poster" src=${movieSchedule[1].poster} alt="movie_poster"/>
  `
  var htmlString2 =   `
  <h2>${movieSchedule[2].title}</h2>
  <p>${movieSchedule[2].rating}</p>
  <img class = "poster" src=${movieSchedule[2].poster} alt="movie_poster"/>
  `
  var htmlString3 =   `
  <h2>${movieSchedule[3].title}</h2>
  <p>${movieSchedule[3].rating}</p>
  <img class = "poster" src=${movieSchedule[3].poster} alt="movie_poster"/>
  `
  var htmlString4 =   `
  <h2>${movieSchedule[4].title}</h2>
  <p>${movieSchedule[4].rating}</p>
  <img class = "poster" src=${movieSchedule[4].poster} alt="movie_poster"/>
  `



  for (var i=0; i < movieSchedule.length; i++){
    var movie = document.querySelector("#movie-schedule");
    movie.innerHTML = (htmlString0 + htmlString1 + htmlString2 + htmlString3 + htmlString4);
  }