const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{
    console.log("Connection open");
})

.catch((err) =>{
    console.log("Error!!!!");
    console.log(err);
});

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

const suicideSquad = new Movie({title: 'Suicide Squad', year: 2021, score:9,rating:'R'})