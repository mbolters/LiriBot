var bandsintown = require('bandsintown')(APP_ID);
 
bandsintown
  .getArtistEventList('')
  .then(function(events) {
    // return array of events
  });