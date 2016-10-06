const superagent = require('superagent');

function home(request, reply) {
  const apiUrl = `${this.apiBaseUrl}/recipes`;
  superagent.get(apiUrl)
    .then(response => response.body)
    .then(response => reply.view('index', { recipes: response }))
    .catch(err => console.error(err));
}

function viewRecipe(request, reply) {
  const apiUrl = `${this.apiBaseUrl}/recipes/${request.params.id}`;
  superagent.get(apiUrl)
    .then(response => response.body)
    .then(response => reply.view('recipe', { recipe: response }))
    .catch(err => console.error(err));
}

module.exports = {
  home,
  viewRecipe,
};
