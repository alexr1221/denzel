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

app.get('/movies/populate', async (request, response) => {
    var actor_id = request.query["id"];
    var metascore = 72;
    console.log(actor_id);


    try {
        console.log(`📽️  fetching filmography of ${actor_id}...`);
        const movies = await imdb(actor_id);
        const awesome = movies.filter(movie => movie.metascore >= metascore);

        var db_result_message = await database.populateDatabase(movies);
        //console.log(`🍿 ${movies.length} movies found.`);
        //      console.log(JSON.stringify(movies, null, 2));
        //    console.log(`🥇 ${awesome.length} awesome movies found.`);
        //    console.log(JSON.stringify(awesome, null, 2));
        response.send("operation completed - " + db_result_message);
    } catch (e) {
        console.error(e);
        response.send("an error occured");
    }
});

app.listen(PORT);
console.log(`📡 Running on port ${PORT}`);
