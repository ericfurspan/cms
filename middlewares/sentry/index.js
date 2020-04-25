const Sentry = require('@sentry/node');
require('dotenv').config();

const { SENTRY_DSN } = process.env;
Sentry.init({
  dsn: SENTRY_DSN,
  environment: strapi.config.environment,
});

module.exports = strapi => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        try {
          await next();
        } catch (error) {
          Sentry.captureException(error);
          throw error;
        }
      });
    },
  };
};