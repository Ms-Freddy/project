"use strict" ;


//const result = confirm("Ты здесь  каброн ?", "");

//console.log(result);



const numberOfFilms =prompt("Сколько фильмов вы уже посмотрели ?", "");

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

const a =prompt("Один из просмотренных фильмов ?", "");
const b =prompt("На сколько оцените его?", "") ;
const c =prompt("Один из просмотренных фильмов ?", "");
const d =prompt("На сколько оцените его?", "") ;

personalMovieDB.movies[a] = b ;
personalMovieDB.movies[c] = d ;

console.log(personalMovieDB);





