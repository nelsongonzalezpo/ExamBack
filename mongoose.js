const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const CONNECTION_URL = "mongodb+srv://<nelsonmlglez1>:<Fokcing9..>@cluster0-uzsu3.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect('mongodb+srv://nelsonmlglez1:Focking9..@cluster0-uzsu3.mongodb.net/m&n?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conected to database"))
    .catch((error) => console.log(error));

module.exports = mongoose;


