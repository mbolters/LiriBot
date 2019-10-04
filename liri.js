require("dotenv").config();
let keys = require("./keys.js");

let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
let bandsInTown = new Spotify(keys.spotify);

let program = process.argv.slice(2)[0];


let myArgs = process.argv.slice(3);
let bandName = "";

myArgs.forEach(function(arg){
    bandName = bandName + arg + '%20';
});

switch(program) {
    case 'movie-this':
        bandsInTown
        .request('https://api.spotify.com/v1/search?q=' + bandName +'&type=artist')
        .then(function(artist) {
          console.log('asdfasdfasfasdfasdfada');   
        })
        .catch(function(err) {
          console.error('Error occurred: ' + err); 
        });
        break;
    case 'spotify-this-song' :
        spotify
        .request('https://api.spotify.com/v1/search?q=' + bandName +'&type=artist')
        .then(function(artist) {
          let id = (artist.artists.items[0].id); 
         
          spotify
          .request('https://api.spotify.com/v1/artists/' + id + '/top-tracks?country=US')
          .then(function(toptracks) {
              var trackData = [
                  "Band: " +  toptracks.tracks[0].album.artists[0].name,
                  "Album: " + toptracks.tracks[0].album.name,
                  "Top Song: " + toptracks.tracks[0].name,
                  "Release Date: "+ toptracks.tracks[0].album.release_date,
                ].join ("\n\n");
                console.log(trackData);
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
        bandsInTown
        .request('https://api.spotify.com/v1/search?q=' + bandName +'&type=artist')
        .then(function(artist) {
          console.log('asdfasdfasfasdfasdfada');   
        })
        .catch(function(err) {
          console.error('Error occurred: ' + err); 
        });
        break;
    default : 
    console.log("You Fucked up")
    }




