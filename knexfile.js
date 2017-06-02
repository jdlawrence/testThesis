const config = require('config');
console.log('*****', config['knex']['connection']);
module.exports = config['knex'];
