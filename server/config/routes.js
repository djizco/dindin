const Pages   = require('../handlers/pages');
const Assets  = require('../handlers/assets');
const Actions = require('../handlers/actions');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: Pages.home,
  },
  {
    method: 'GET',
    path: '/{param*}',
    handler: Assets.servePublicDirectory,
  },
  {
    method: 'GET',
    path: '/recipes/{id}',
    handler: Pages.viewRecipe,
  },
  {
    method: 'GET',
    path: '/login',
    handler: Pages.login,
  },
  {
    method: 'POST',
    path: '/login',
    handler: Actions.login,
  },
  {
    method: 'GET',
    path: '/logout',
    handler: Actions.logout,
  },
  {
    method: 'GET',
    path: '/create',
    handler: Pages.createRecipe,
    config: {
      auth: {
        mode: 'required',
      },
    },
  },
  {
    method: 'POST',
    path: '/create',
    handler: Actions.createRecipe,
    config: {
      auth: {
        mode: 'required',
      },
    },
  },
];
