import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

//SOLUTION VIDEO METHOD
// var searchYouTube = (query, callback) => {
//   $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos',
//     {
//       youtubeApiKey: YOUTUBE_API_KEY,
//       q: query
//     })
//     .done((items) => {
//       if (callback) {
//         callback(items);
//       }
//     })
//     .fail(({responseJSON}) => {
//       responseJSON.error.errors.forEach((err) => console.error(err));
//     });
// };

var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {q: query},
    success: (data) => {
      console.log(data);
      callback(data);
    },
    error: console.log('YouTube: Failed to fetch videos')
  });
};

export default searchYouTube;
