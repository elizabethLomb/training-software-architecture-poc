const fs = require('fs');
const path = require('path');
const sql = require('./db');
const logger = require('../../lib/logger');

async function execSeed() {
	const seedsPath = path.join(__dirname, '../sql/v1/seeds');
	if (!fs.existsSync(seedsPath)) {
		logger.warn('Seeds folder does not exist:', seedsPath);
		process.exit(0);
	}
	const files = fs.readdirSync(seedsPath).filter(file => file.endsWith('.sql'));

	try {
		for (const file of files) {
			const filePath = path.join(seedsPath, file);
			const query = fs.readFileSync(filePath, 'utf-8');
			logger.info(`Executing seed: ${file}`);
			await sql.unsafe(query);
		}

		logger.info('All seeds executed successfully');
		process.exit(0);
	} catch (error) {
		logger.error('Error on executing the seeds:', error);
		process.exit(1);
	}
}

module.exports = { execSeed };

if (require.main === module) {
	execSeed();
}
