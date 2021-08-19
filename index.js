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

// const suicideSquad = new Movie({title: 'Suicide Squad', year: 2021, score:9,rating:'R'})

Movie.insertMany([
    {title: 'Shang Chi', year:2021, score:9.7, rating:'PG-13'},
    {title: 'Free Guy', year:2021, score:9.3, rating:'PG-13'},
    {title: 'Deadpool', year:2016, score:9.9, rating:'R'}
    
])

.then(data =>{
    console.log("It worked!!!");
    console.log(data);
})

.catch((err) =>{
    console.log("ERROR!!!");
})