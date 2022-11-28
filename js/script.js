const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

for (let i = 0; i < 2; i++) {//первый способ
    const film = prompt("Один из последних просмотренных фильмов?", "");
    const rating = prompt("На сколько оцените его?", "");
    if (film == null||rating==null) {
        i--;
    }else if (film == '' || rating==''|| film.length > 50) {
        i--;
    } else {
        personalMovieDB.movies[film] = rating;
    }
}

let i = 0;
while (i < 2) {//второй способ
    const film = prompt("Один из последних просмотренных фильмов?", "");
    const rating = prompt("На сколько оцените его?", "");
    if (film == null || rating == null) {
        
    } else if (film == '' || rating == '' || film.length > 50) {
        
    } else {
        personalMovieDB.movies[film] = rating;
        i++
    }
}

do {//третий способ
    const film = prompt("Один из последних просмотренных фильмов?", "");
    const rating = prompt("На сколько оцените его?", "");
    if (film == null || rating == null) {

    } else if (film == '' || rating == '' || film.length > 50) {

    } else {
        personalMovieDB.movies[film] = rating;
        i++
    }
}
while (i < 2)
console.log(personalMovieDB.movies);
