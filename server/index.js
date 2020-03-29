const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const { PORT } = require('./constants');
const database = require('./database');
const imdb = require('./imdb');

const app = express();

module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());

app.get('/', (request, response) => {
  response.send({'ack': true});
});

app.get('/movies/populate/:id', async (request, response) => {
    var actor_id = request.params.id;
    console.log(actor_id);


    try {
        console.log(`📽️  fetching filmography of ${actor_id}...`);
        const movies = await imdb(actor_id);

        var db_result_message = await database.populateDatabase(movies);
        //console.log(`🍿 ${movies.length} movies found.`);
        //      console.log(JSON.stringify(movies, null, 2));
        //    console.log(`🥇 ${awesome.length} awesome movies found.`);
        //    console.log(JSON.stringify(awesome, null, 2));
        console.log("operation completed")
        response.send(JSON.stringify(db_result_message, null, 2));
    } catch (e) {
        console.error(e);
        response.send("an error occured");
    }
});

app.get('/movies', async (request, response) => {
    var metascore = 70;
    try {
        console.log(`📽️  fetching random must-watch movie...`);
        const movies = await database.getAllMovies();
        const mustwatches = movies.filter(movie => movie.metascore >= metascore);
        var random_index = Math.floor(Math.random() * mustwatches.length);
        var rdm_mustwatch = mustwatches[random_index];
        console.log("operation completed");
        response.contentType('json');
        response.send(JSON.stringify(rdm_mustwatch, null, 2));
    } catch (e) {
        console.error(e);
        response.send("an error occured");
    }
});

app.get('/movies/:id', async (request, response) => {
    var requestParam = request.params.id;
    try {
        if (requestParam === "search") {
            await searchEndpoint(request, response);
        }
        else {
            console.log(`📽️  searching for specific movie...`);
            const movies = await database.getMovies([requestParam]);
            console.log("operation completed");
            response.contentType('json');
            response.send(JSON.stringify(movies, null, 2));
        }
    } catch (e) {
        console.error(e);
        response.send("an error occured");
    }
});

app.get('/movies/search', async (request, response) => {
    await searchEndpoint(request, response);
});

async function searchEndpoint(request, response) {
    var limitParam = request.query["limit"] || "100";
    var metascoreParam = request.query["metascore"] || "0";
    try {
        console.log(`📽️  searching must-watch movies...`);
        const movies = await database.getMoviesMetascoreLimit(parseInt(metascoreParam), parseInt(limitParam));
        console.log("operation completed");
        response.contentType('json');
        response.send(JSON.stringify(movies, null, 2));
    } catch (e) {
        console.error(e);
        response.send("an error occured");
    }
}


app.post('/movies/:id', async (request, response) => {
    var id = request.params.id;
    try {
        console.log(`📽️  fetching random must-watch movie...`);
        const obj = { movie_id: id, date: request.body.date, review: request.body.review };
        var database_result_message = await database.saveDateReview(obj);
        console.log("operation completed");
        response.contentType('json');
        response.send(JSON.stringify(database_result_message, null, 2));
    } catch (e) {
        console.error(e);
        response.send("an error occured");
    }
});


app.listen(PORT);
console.log(`📡 Running on port ${PORT}`);
