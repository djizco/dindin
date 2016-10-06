const superagent = require('superagent');

function home(request, reply) {
  const apiUrl = `${this.apiBaseUrl}/recipes`;
  superagent.get(apiUrl)
    .then(response => response.body)
    .then(response => reply.view('index', {
      recipes: response,
      user: request.auth.credentials,
    }))
    .catch(err => console.error(err));
}

function viewRecipe(request, reply) {
  const apiUrl = `${this.apiBaseUrl}/recipes/${request.params.id}`;
  superagent.get(apiUrl)
    .then(response => response.body)
    .then(response => reply.view('recipe', {
      recipe: response,
      user: request.auth.credentials,
    }))
    .catch(err => console.error(err));
}

function createRecipe(request, reply) {
  reply.view('create', {
    user: request.auth.credentials,
  });
}

function login(request, reply) {
  reply.view('login', {
    user: request.auth.credentials,
  });
}

module.exports = {
  home,
  viewRecipe,
  createRecipe,
  login,
};
