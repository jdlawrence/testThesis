const config = require('config');
console.log('*****', config['knex']);
module.exports = config['knex'];
