const axios = require('axios');
 
// Make a request for a user with a given ID
let omdb = function() {
    this.findMovie = function(movie) {

        const url = 'http://www.omdbapi.com/?apikey=3089e91d&' + movie;
        axios.get(url)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    };
};
