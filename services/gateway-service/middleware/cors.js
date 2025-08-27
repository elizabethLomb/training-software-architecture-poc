const config = require('config');
const cors = require('cors');

/**
 * Middleware for CORS
 */

const options = config.get('corsOptions');

module.exports = () => cors(options);
