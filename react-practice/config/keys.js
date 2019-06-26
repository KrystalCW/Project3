if (process.env.NODE_ENV === 'dev') {
    module.exports = require('./keys_dev');
} else {
    mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/itemslist");
}