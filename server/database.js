const mongo = require('mongodb').MongoClient;


module.exports.populateDatabase = async docs => {
    return new Promise((success, failed)=>{
        mongo.connect("mongodb+srv://alex:mongom@ddenzel-pwqvc.azure.mongodb.net/", function (err, db) {
            if (err) failed(err);
            var dbo = db.db("ddenzel");
            try {
                console.log("trying populate...");
                dbo.collection("movies").insertMany(docs, function (err, res) {
                    if (err) throw err;
                    console.log("Number of documents inserted: " + res.insertedCount);
                    db.close();
                    success({ total: res.insertedCount });
                });
            }
            catch (e) {
                console.log(e);
                failed(e)
            }
        });
    });
};

module.exports.getAllMovies = async() => {
    return new Promise((success, failed) => {
        mongo.connect("mongodb+srv://alex:mongom@ddenzel-pwqvc.azure.mongodb.net/", function (err, db) {
            if (err) failed(err);
            var dbo = db.db("ddenzel");
            try {
                console.log("trying find...");
                dbo.collection("movies").find().toArray(function (err, res) {
                    if (err) throw err;
                    db.close();
                    success(res);
                });
            }
            catch (e) {
                console.log(e);
                failed(e)
            }
        });
    });
};

module.exports.getMovies = async (idArray) => {
    return new Promise((success, failed) => {
        mongo.connect("mongodb+srv://alex:mongom@ddenzel-pwqvc.azure.mongodb.net/", function (err, db) {
            if (err) failed(err);
            var dbo = db.db("ddenzel");
            try {
                console.log("trying find...");
                dbo.collection("movies").find({ "id": { $in: idArray } }).toArray(function (err, res) {
                    if (err) throw err;
                    db.close();
                    success(res);
                });
            }
            catch (e) {
                console.log(e);
                failed(e)
            }
        });
    });
};

module.exports.getMoviesMetascoreLimit = async (metascore, limit) => {
    return new Promise((success, failed) => {
        mongo.connect("mongodb+srv://alex:mongom@ddenzel-pwqvc.azure.mongodb.net/", function (err, db) {
            if (err) failed(err);
            var dbo = db.db("ddenzel");
            try {
                console.log("trying find...");
                dbo.collection("movies").find({ "metascore": { $gte: metascore } }).sort({ "metascore": -1 }).limit(limit).toArray(function (err, res) {
                    if (err) throw err;
                    db.close();
                    success(res);
                });
            }
            catch (e) {
                console.log(e);
                failed(e)
            }
        });
    });
};

module.exports.saveDateReview = async (data) => {
    return new Promise((success, failed) => {
        mongo.connect("mongodb+srv://alex:mongom@ddenzel-pwqvc.azure.mongodb.net/", function (err, db) {
            if (err) failed(err);
            var dbo = db.db("ddenzel");
            try {
                console.log("trying find...");
                dbo.collection("movies").insertOne(data, function (err, res) {
                    if (err) throw err;
                    console.log("Number of documents inserted: " + res.insertedCount);
                    db.close();
                    success({ _id: res.insertedId });
                });
            }
            catch (e) {
                console.log(e);
                failed(e)
            }
        });
    });
};