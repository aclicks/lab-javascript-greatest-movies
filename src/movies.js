// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(e1 => e1.director);
    
return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let counter = 0;
    moviesArray.forEach (e2 => {
        if (e2.director === "Steven Spielberg" && e2.genre.includes("Drama") === true){
           counter = counter + 1;        
        }
        });
    return counter;
}

// Iteration 3: All scores sum - Get the sum of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0
    let sum = moviesArray.reduce((valor, e4) => valor + (e4.score || 0), 0);
    return Math.round(sum / moviesArray.length * 100) / 100
}


// Iteration 4: Drama movies - Get the sum of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(e5 => e5.genre.includes('Drama'));
    if (dramaMovies.length === 0) return 0;
    let sum2 = dramaMovies.reduce((valor2, e6) => valor2 + (e6.score || 0), 0);
    return Math.round(sum2 / dramaMovies.length * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return [...moviesArray].sort((a, b)=> {
        if (a.year === b.year){
          return a.title < b.title ? -1 : 1
        } else {
          return a.year < b.year ? -1 : 1
        }
      })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return [...moviesArray].sort ((a, b) => a.title < b.title ? -1 : 1).slice(0, 20).map(e6 => e6.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let minutos;
    convert = [...moviesArray];
        convert.forEach((e7) => {
            if (e7.duration[1] === "h"){
            min = 1 * (e7.duration[0] * 60);
            }
            if (e7.duration[4] === "m"){
                min += 1 * (e7.duration[3]);
            }
            if (e7.duration[5] === "m"){
                min += 1 * ((e7.duration).substring(3, 5));
            }
            e7.duration = min
        })
    
        return convert;
    }

// BONUS - Iteration 8: Best yearly score sum - Best yearly score sum
function bestYearAvg(moviesArray) {};
