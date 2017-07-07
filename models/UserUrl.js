var mongoose = require("mongoose");

var userUrlSchema = mongoose.Schema({
    url: String,
    key: String
})

var UserUrl = mongoose.model("UserUrl", userUrlSchema);

module.exports = UserUrl;