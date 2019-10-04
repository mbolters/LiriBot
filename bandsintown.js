// // var bandsintown = require('bandsintown')(APP_ID);
 
// // bandsintown
// //   .getArtistEventList('')
// //   .then(function(events) {
// //     // return array of events
// //   });
// console.log("Bands In town");

// let Spotify = require('node-spotify-api');
// let myArgs = process.argv.slice(2);
// let bandName = "";

// myArgs.forEach(function(arg){
//     bandName = bandName + arg + '%20';
// });


// var spotify = new Spotify({
//   id: 'd00919ba63c54f2ebdb6e189ad0ecb67',
//   secret: '42f0339fcc1f4b6996d71b01547e4ee3'
// });
 
// spotify
//   .request('https://api.spotify.com/v1/search?q=' + bandName +'&type=artist')
//   .then(function(artist) {
//     let id = (artist.artists.items[0].id); 
   
//     spotify
//     .request('https://api.spotify.com/v1/artists/' + id + '/top-tracks?country=US')
//     .then(function(toptracks) {
//         var trackData = [
//             "Band: " +  toptracks.tracks[0].album.artists[0].name,
//             "Album: " + toptracks.tracks[0].album.name,
//             "Top Song: " + toptracks.tracks[0].name,
//             "Release Date: "+ toptracks.tracks[0].album.release_date,
//           ].join ("\n\n");
//           console.log(trackData);
//   })
  
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
//   });
//   })
  
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
//   });