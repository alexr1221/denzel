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
                    success("Number of documents inserted: " + res.insertedCount);
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