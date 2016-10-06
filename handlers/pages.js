const superagent = require('superagent');

function home(request, reply) {
  const apiUrl = this.apiBaseUrl + '/recipes';
  superagent.get(apiUrl)
    .then(response => response.body)
    .then(response => reply.view('index', { recipes: response }));
}

module.exports = {
  home,
}
