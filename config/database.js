// https://strapi.io/documentation/v3.x/concepts/configurations.html#database

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", '127.0.0.1'),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", 'strapi'),
        username: env("DATABASE_USERNAME", 'postgres'),
        password: env("DATABASE_PASSWORD", ''),
        ssl: false,
      },
      options: {
        pool: {
          min: 0,
          max: 50,
          idleTimeoutMillis: 30000,
          createTimeoutMillis: 30000,
          acquireTimeoutMillis: 30000
        }
      }
    }
  }
});
