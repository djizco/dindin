const handlebars = require('handlebars');

module.exports = {
  engines: { hbs: handlebars },
  relativeTo: __dirname,
  path: './views',
  isCached: false,
}
