require("dotenv").config();
let keys = require("./keys.js");

let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);

const axios = require('axios');

let program = process.argv.slice(2)[0];


let myArgs = process.argv.slice(3);
let argString = myArgs[0];

if(myArgs.length > 1){
    for (let i = 1; i < myArgs.length; i++) {
        argString = argString  + '%20'+ myArgs[i];
    }
}

switch(program) {
    
    
    case 'movie-this':
            movieThis(argString)
        break;
    
    case 'spotify-this-song' :
            spotifyThisSong(argString)
        break;
        
    case 'concert-this':
            concertThis(argString)
        break;

    case 'do-what-it-says':
            doWhatItSays();
        break;

default : 
console.log("You messed up")
}

function movieThis(argString){
    axios.get('http://www.omdbapi.com/?apikey=3089e91d&t=' + argString)
    .then(function(movie) {
        var movieData = [
            "Title: " + movie.data.Title,
            "Year: " + movie.data.Year,
            "IMDB Rating: " + movie.data.imdbRating,
            "RT Rating: "+ movie.data.Ratings[1],
            "Country: "+ movie.data.Country,
            "Language: "+ movie.data.Language,
            "Plot: "+ movie.data.Plot,
            "Actors: "+ movie.data.Actors,
        ].join ("\n\n");
        console.log(movieData);
    })
    .catch(error => {
        console.log(error);
    });
}

function spotifyThisSong(argString){
    spotify
        .request('https://api.spotify.com/v1/search?q=' + argString +'&type=track&market=US')
        .then(function(song) {
            var trackData = [
                "Artist: " +  song.tracks.items[0].artists[0].name,
                "Song Name: " + song.tracks.items[0].name,
                "Link: " + song.tracks.items[0].album.external_urls.spotify,
                "Album: "+ song.tracks.items[0].album.name,
            ].join ("\n\n");
                console.log(trackData);
            })
            .catch(function(err) {
                console.error('Error occurred: ' + err); 
            });
}

function concertThis(argString){
    axios.get('https://rest.bandsintown.com/artists/' + argString + '/events?app_id=codingbootcamp')
          .then(function(concert){
            var moment = require('moment');
            var time = (moment(concert.data[0].datetime).format('M/D/YYYY hh:mm A'));

            var concertData = [
                "Venue: " +  concert.data[0].venue.name,
                "Address: " + concert.data[0].venue.city + ', ' + concert.data[0].venue.region,
                "Date: " + time
            ].join ("\n\n");
            console.log(concertData);

          })
          .catch(error => {
            console.log(error);
          });
}

function doWhatItSays(){
    const fs = require("fs");
    fs.readFile('random.txt', "utf8", function(error, data){
        const lines = data.trim().split('\n');
        for (const line of lines){
            const numbers = line.split(", ");
            switch(numbers[0]) {
    
    
                case 'movie-this':
                        movieThis(numbers[1])
                    break;
                
                case 'spotify-this-song' :
                        spotifyThisSong(numbers[1])
                    break;
                    
                case 'concert-this':
                        concertThis(numbers[1])
                    break;
            
            default : 
            console.log("You messed up")
            }        
        };
    });
}

