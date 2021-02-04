let numberOfFilms;

function start() {
     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
     while ( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
     }
}

// start();

const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false,
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", "");
            const b = prompt ("На сколько оцените его?", "");
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    
    }
};

// personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel = function(){
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов.");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель.");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман.");
    } else {
        console.log("Произошла ошибка.");
    };
}

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB = function(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

// personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres = function() {
    for (let i = 1; i <= 3; i++) {   
        let item;
        do  {
            item = prompt(`Ваш любимый жанр под номером ${i}?`);
        } while (item == '' || item == null);
        personalMovieDB.genres[i - 1] = item;
    }
    personalMovieDB.genres.forEach(function(item, i) {
        console.log(`Любимый жанр #${i + 1} - это ${item}`);
    });
}    

personalMovieDB.writeYourGenres();

// второе задание
personalMovieDB.toggleVisibleMyDB = function() {
    if (personalMovieDB.privat == false) {
        personalMovieDB.privat = true;
    } else {
        personalMovieDB.privat = false;
    };
}; 

test = function() {
    personalMovieDB.showMyDB(personalMovieDB.privat);
    personalMovieDB.toggleVisibleMyDB();
    personalMovieDB.showMyDB(personalMovieDB.privat);
};
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);
test();