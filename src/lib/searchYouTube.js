var searchYouTube = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max || 5,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done((data) => {
    console.log('data.items', data.items);
    if (callback) {
      callback(data.items);
    }
  })
  .fail(({responseJSON}) => {
    console.log('responseJSON', responseJSON);
    responseJSON.error.errors.forEach((err) => console.error(err));
  });
};

window.searchYouTube = searchYouTube;




// Check why this doesn't work

  // $.ajax ({
  //   url: 'https://googleapis.com/youtube/v4/search',
  //   type: 'GET',
  //   part: 'snippet', // What is this?
  //   key: options.key,
  //   query: options.query,
  //   maxResults: options.max || 5,
  //   contentType: 'application/json',
  //   success: (data) => {
  //     console.log('successful data fetch!');
  //     console.log('This is data', data); //set this to window.exampleVideoData equiv
  //   },
  //   error: (data) => {
  //     console.error('bad dog, no biscuit', data);
  //   }
  // });