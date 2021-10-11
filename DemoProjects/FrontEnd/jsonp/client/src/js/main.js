var $ = require('jquery');
require('bootstrap/dist/css/bootstrap.css');

$(document).ready(function() {
  $.ajax('http://localhost:3000/data', {
    dataType: 'jsonp'
  })
    .then(function(data){
      $('body').append(function() {
        return '<ul class="list-group">' + data.map(function(d) {
          return '<li>' + d.name + '</li>';
        }).join('') + '</ul>';
      });
    });
});