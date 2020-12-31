let numberOfFilmes; 

function start() {
    numberOfFilmes = +prompt("How many films do you watch?", '');

    while(numberOfFilmes == "" || numberOfFilmes == null || isNaN(numberOfFilmes)) {
        numberOfFilmes = +prompt("How many films do you watch?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilmes,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
    
        const a = prompt('One of the last watched film?', ''),
              b = prompt('How much do you like this film?', '');
        
        if(a != null && b != null && a != '' && b != '' && a.length <50 && b.length < 50 ) {
            personalMovieDB.movies[a] = b;
            console.log("Correct value");  
        } else {
            console.log("Incorrect value");
            const incorrect = prompt("Please, write valid data");
            i--;
        }
    }
    
}

//rememberMyFilms();

function detectedPersonalLevel() {
    if(personalMovieDB.count >=1 && personalMovieDB.count < 10) {
        console.log("You watch a few films");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are an average person");
    } else if (personalMovieDB.count >= 30) {
        console.log("You are movie buff");
    } else {
        console.log("Something is wrong");
    }
}  

//detectedPersonalLevel();      

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Your favorite genre is ${i}`);
    }
}

writeYourGenres();


