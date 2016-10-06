const handlebars = require('handlebars');

module.exports = {
  engines: { hbs: handlebars },
  relativeTo: __dirname,
  path: '../../client/views',
  layoutPath: '../../client/views/layout',
  layout: true,
  isCached: false,
  partialsPath: '../../client/views/partials',
};
