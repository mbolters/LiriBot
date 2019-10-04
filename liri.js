require("dotenv").config();
let keys = require("./keys.js");

let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);

const axios = require('axios');

let program = process.argv.slice(2)[0];


let myArgs = process.argv.slice(3);
let argString = "";

myArgs.forEach(function(arg){
    argString = argString + arg + '%20';
});

switch(program) {
    
    
    case 'movie-this':
        axios.get('http://www.omdbapi.com/?apikey=3089e91d&' + argString)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
        break;

    
    case 'spotify-this-song' :
        spotify
        .request('https://api.spotify.com/v1/search?q=' + argString +'&type=track&market=US')
        .then(function(ids) {
            console.log(ids.tracks.items[0].id);
            
            spotify
            .request('https://api.spotify.com/v1/artists/' + ids + '/top-tracks?country=US')
            .then(function(song) {
                var trackData = [
                    "Band: " +  song.tracks[0].album.artists[0].name,
                    "Album: " + song.tracks[0].album.name,
                    "Top Song: " + song.tracks[0].name,
                    "Release Date: "+ song.tracks[0].album.release_date,
                ].join ("\n\n");
            // console.log(trackData);
            })
            .catch(function(err) {
                console.error('Error occurred: ' + err); 
            });
        }) 
        .catch(function(err) {
            console.error('Error occurred: ' + err); 
        });
        break;
        
        
    case 'concert-this':

        axios.get('https://rest.bandsintown.com/artists/' + argString + '/events?app_id=codingbootcamp')
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
        break;

default : 
console.log("You Fucked up")
}




