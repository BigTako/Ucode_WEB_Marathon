const movies = new Set();

movies.add({name: "Green Mile",
            relieze: "April 22, 1994",
            cast: [
                "Tom Hanks",
                "Michael Clark Dunkan",
                "Davis Mors",
                "Sam Rockwell"
                ],
            description: "At a Louisiana assisted-living home in 1999, retiree Paul Edgecomb becomes emotional while \
                        viewing the film Top Hat. His companion Elaine becomes concerned, and Paul explains to her \
                        that the film reminded him of events that he witnessed when he was an officer at Cold \
                        Mountain Penitentiary's death row, nicknamed \"The Green Mile\".",
            img: "GreenMile.jpg"
        });

movies.add({   name: "Interstellar",
               relieze: "Novermber 06, 2014",
               cast: [
                    "Mathew McConachi",
                    "Jessica Chestein",
                    "Ann Hataway",
                    "Matt Daymon"
                    ],
                description: "In 2067, humanity is facing global extinction following a global famine, and has abandoned \
                              scientific pursuits such as space exploration. The ex-NASA pilot Joseph Cooper is forced to work as a farmer.\
                              Cooper experiences a gravitational anomaly in his daughter Murph\'s bedroom. He deduces it to be \
                              a pattern of GPS coordinates and arrives at a secret NASA facility headed by Professor Brand. \
                              Brand explains to Cooper that they are trying to find an exoplanet capable of supporting life, \
                              and that he is working on a gravity equation to provide a way to transport large numbers of people there. ",
                img: "Interstellar.jpg"      
              });

movies.add({name: "Fast And Furious 4",
               relieze: "April 28, 2011",
               cast: [
                    "Vin Diesel",
                    "Paul Woker",
                    "Ludacris",
                    "Michelle Rodriguez"
                    ],
                description: "Brian O'Conner, back working for the FBI in Los Angeles, teams up with Dominic \
                              Toretto to bring down a heroin importer by infiltrating his operation.",
                img: "FastAndFurious4.jpg"      
                });


const moviesList = document.getElementById("movies-list");
const moviesInfoContainer = document.getElementById("movie-info-container");

function addMovieInfo(movie){

    let movieInfo = document.createElement("div");
    movieInfo.setAttribute("id", "movie-info");

    movieInfo.innerHTML += `<h1>${movie.name}</h1>`;
    movieInfo.innerHTML += `<h4>${movie.relieze}</h4>`;
    
    let castConstainer = document.createElement("div");
    castConstainer.setAttribute("id", "cast");
    
    for(let i = 0; i < movie.cast.length; i++){
        castConstainer.innerHTML += `<div class="actor-name-container">${movie.cast[i]}</div>`;
    }

    movieInfo.appendChild(castConstainer);
    movieInfo.innerHTML += `<h4>${movie.description}</h4>`;

    moviesInfoContainer.appendChild(movieInfo);
    
    moviesInfoContainer.innerHTML += `<img src="./assets/images/${movie.img}">`;
}

movies.forEach((movie) =>{
    moviesList.innerHTML += `<div class="movie-name">${movie.name}</div>`;
});

let movieNames = document.getElementsByClassName("movie-name");

for (let i = 0; i < movieNames.length; i++) {
    movieNames[i].addEventListener('click', function(){
        movieNames[i].style.borderLeft = "3px solid rgb(5, 133, 215)";
        for (let j = 0; j < movieNames.length; j++) {
            if (i != j){
                movieNames[j].style.borderLeft = "none";        
            }
        }
        
        moviesInfoContainer.innerHTML = "";
        movies.forEach((obj) => {
            if(obj.name === movieNames[i].textContent){
                addMovieInfo(obj);
            };
        });
    });
}

addMovieInfo(Array.from(movies)[0]);

