const Hapi  = require('hapi');
const api   = require('dindin-api');
const inert = require('inert');

const routes = require('./routes');

const server = new Hapi.Server();
server.connection({ port: 4000 });

server.bind({
  apiBaseUrl: 'http://localhost:4000/api',
  webBaseUrl: 'http://localhost:4000',
});

server.register([api, inert], err => {
  if (err) { throw err; }

  server.route(routes);
  server.start(() => console.log('Server started at', server.info.uri));
});
