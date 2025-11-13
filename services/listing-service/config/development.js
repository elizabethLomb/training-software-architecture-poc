const developmentConfig = {
  server: {
    port: process.env.PORT || 5003,
    host: process.env.NODE_SERVER || 'http://127.0.0.1',
    env: process.env.NODE_ENV || 'development',
  },
  databases: {
    postgreSql: {
      connectionString: process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/listing_service',
    },
  },
};

module.exports = developmentConfig;