var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 'd00919ba63c54f2ebdb6e189ad0ecb67',
  secret: '42f0339fcc1f4b6996d71b01547e4ee3'
});
 
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });