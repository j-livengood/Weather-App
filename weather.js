const https = require('https');
const http = require('http');
const api = require('./api.json');

function get(query) {
  const request = http.get(`http://api.wunderground.com/api/${api.key}/conditions/q/${query}.json`);

  console.dir(request);
}