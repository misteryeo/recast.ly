var searchYouTube = (options, callback) => {
  $.ajax ({
    url: '',
    type: 'GET',
    contentType: 'application/json',
    success: (data) => {
      console.log('successful data fetch!');
      console.log(data); //set this to window.exampleVideoData equiv
    },
    error: (data) => {
      console.error('bad dog, no biscuit', data);
    }
  });
};

window.searchYouTube = searchYouTube;
