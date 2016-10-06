const handlebars = require('handlebars');

module.exports = {
  engines: { hbs: handlebars },
  relativeTo: __dirname,
  path: '../views',
  layoutPath: '../views/layout',
  layout: true,
  isCached: false,
  partialsPath: '../views/partials',
};
