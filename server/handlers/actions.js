const superagent = require('superagent');

function createRecipe(request, reply) {
  const apiUrl = `${this.apiBaseUrl}/recipes`;
  const token = request.auth.credentials.token;
  superagent.post(apiUrl)
    .send(request.payload)
    .set('Authorization', `Bearer ${token}`)
    .then(() => reply.redirect(this.webBaseUrl))
    .catch(err => console.error(err));
}

function login(request, reply) {
  const apiUrl = `${this.apiBaseUrl}/login`;
  superagent.post(apiUrl)
    .send(request.payload)
    .then(response => {
      if (response.statusCode !== 200) {
        return reply.redirect(`${this.webBaseUrl}/login`);
      }
      request.cookieAuth.set({
        token: response.body.token,
      });
      reply.redirect(this.webBaseUrl);
    })
    .catch(err => console.error(err));
}

function logout(request, reply) {
  request.cookieAuth.clear();
  reply.redirect(this.webBaseUrl);
}

module.exports = {
  createRecipe,
  login,
  logout,
};
