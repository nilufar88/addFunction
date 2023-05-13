'use strict';

let numberOfFilms;

function start() {
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('How many films have you seen?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('What is your last watched film?', '');
              b = prompt('How would you evaluate it?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Too less');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('The classic watcher');
    } else if (personalMovieDB.count >= 30) {
        console.log('The fan');
    } else {
        console.log('There is an error');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
     if (!hidden) {
        console.log(personalMovieDB);
     }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB[i - 1] = prompt(`Your favourite genre number ${i}`);
    }
}

writeYourGenres();
