module.exports = ({ env }) => {
  // Use PostgreSQL if DATABASE_URL is provided
  if (env('DATABASE_URL')) {
    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: env('DATABASE_URL'),
          ssl: env.bool('DATABASE_SSL', false) && {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
          },
        },
        debug: false,
      },
    };
  }
  
  // Default: Use SQLite for development
  // Note: If you get "Unknown dialect sqlite" error, you need to install sqlite3:
  // npm install sqlite3 --save
  // Or use PostgreSQL by setting DATABASE_URL in .env
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      useNullAsDefault: true,
    },
  };
};

