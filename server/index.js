const Hapi   = require('hapi');
const api    = require('dindin-api');
const inert  = require('inert');
const vision = require('vision');
const hapiAuthCookie = require('hapi-auth-cookie');

const routes = require('./config/routes');
const views  = require('./config/views');

const server = new Hapi.Server();
server.connection({ port: 4000 });

server.bind({
  apiBaseUrl: 'http://localhost:4000/api',
  webBaseUrl: 'http://localhost:4000',
});

server.register([api, inert, vision, hapiAuthCookie], err => {
  if (err) { throw err; }

  server.auth.strategy('session', 'cookie', 'try', {
    password: 'password-that-is-at-least-32-chars',
    isSecure: false,
  });
  server.views(views);
  server.route(routes);
  server.start(() => console.log('Server started at', server.info.uri));
});
