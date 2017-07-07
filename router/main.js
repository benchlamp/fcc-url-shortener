var mongoose = require("mongoose"),
    randomstring = require("randomstring"),
    UserUrl = require("../models/UserUrl");



module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("index.html")
    });
    
    app.post("/submit", function(req, res) {

        var userKey = randomstring.generate(6);
        var userUrl = new UserUrl({
            url: req.body.userUrl,
            key: userKey
        })
        
        userUrl.save(function(err) {
            if (err) return console.log(err);
        })
        
        //res.send("Your url has been saved at: https://fcc-url-shortener-jamesrea83.c9users.io/retrieve/" + userKey)
        res.send(req.protocol + '://' + req.get('host') + "/retrieve/" + userKey);    
        
    })
    
    
    app.get("/retrieve/:key", function(req, res) {
        UserUrl.findOne({ key: req.params.key }, function(err, userUrl) {
            if (err) throw err;
            res.send("Your saved url is: " + userUrl.url);
        })
    })
    
    
    
}