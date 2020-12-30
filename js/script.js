const numberOfFilmes = prompt("How many films do you watch?", '');

const personalMovieDB = {
    count: numberOfFilmes,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of the last watched film?', ''),
      b = prompt('How much do you like this film?', ''),
      c = prompt('One of the last watched film?', ''),
      d = prompt('How much do you like this film?', ''); 

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

