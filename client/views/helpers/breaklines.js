const Handlebars = require('Handlebars');

module.exports = text =>
  new Handlebars.SafeString(Handlebars.Utils.escapeExpression(text).replace(/(\r\n|\n|\r)/gm, '<br>'));
