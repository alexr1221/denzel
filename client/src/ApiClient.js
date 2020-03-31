

async function getAllMovies() {
    try {
        const resp = await fetch('https://denzel-server.alexr1221.now.sh/movies/search')
        const tab = await JSON.parse(resp.body);
        console.log(tab)
        return tab
    } catch (err) {
        // all errors will be captured here for anything in the try block
        console.log(err)
    }
    //return new Promise((success, failed) =>
    //{
    //    try {
    //        fetch('https://denzel-server.alexr1221.now.sh/movies/search').then(function (response) {
    //            if (response.ok) {
    //                success( JSON.parse(response.body));
    //    } else {
    //                console.log('Server error');
    //                failed('server error');
    //    }
    //})
    //    .catch(function (error) {
    //        console.log('fetch function error: ' + error.message);
    //        failed(error.message);
    //    });
    //    }
    //    catch (err) {
    //        failed(err);
    //    }

    //});
    //fetch('https://denzel-server.alexr1221.now.sh/movies/search').then(function (response) {
    //    if (response.ok) {
    //        return JSON.parse(response.body);
    //    } else {
    //        console.log('Server error');
    //    }
    //})
    //    .catch(function (error) {
    //        console.log('fetch function error: ' + error.message);
    //    });
}

module.exports.getAllMovies = getAllMovies