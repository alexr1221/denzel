/* eslint-disable no-console, no-process-exit */
const imdb = require('./imdb');
const DENZEL_IMDB_ID = 'nm0000243';
const database = require('./database');
const METASCORE = 77;

//module.exports.start = async (actor = DENZEL_IMDB_ID, metascore = METASCORE) => {
//    return new Promise((success, failed) => {
//        try {
//            console.log(`📽️  fetching filmography of ${actor}...`);
//            const movies = await imdb(actor);
//            const awesome = movies.filter(movie => movie.metascore >= metascore);

//            await database.populateDatabase(movies);
//            //console.log(`🍿 ${movies.length} movies found.`);
//            //      console.log(JSON.stringify(movies, null, 2));
//            //    console.log(`🥇 ${awesome.length} awesome movies found.`);
//            //    console.log(JSON.stringify(awesome, null, 2));
//            success();
//        } catch (e) {
//            console.error(e);
//            failed(e);
//        }
//    });
//};

//const [, , id, metascore] = process.argv;

//start(id, metascore);
