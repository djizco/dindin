const handlebars = require('handlebars');

module.exports = {
  engines: { hbs: handlebars },
  isCached: false,
  relativeTo: __dirname,
  path: '../../client/views',
  layout: true,
  layoutPath: '../../client/views/layout',
  partialsPath: '../../client/views/partials',
  helpersPath: '../../client/views/helpers',
};
