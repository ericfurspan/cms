module.exports = {
  timeout: 100,
  load: {
    before: ['responseTime', 'logger', 'cors', 'responses', 'gzip'],
    order: [
      "Define the middlewares' load order by putting their name in this array is the right order",
    ],
    after: ['parser', 'router'],
  },
  settings: {
    public: {
      path: './public',
      maxAge: 60000,
    },
  },
}

// const Sentry = require('@sentry/node');
// require('dotenv').config();

// const { SENTRY_DSN } = process.env;
// Sentry.init({
//   dsn: SENTRY_DSN,
//   environment: strapi.config.environment,
// });

// module.exports = strapi => {
//   return {
//     initialize() {
//       strapi.app.use(async (ctx, next) => {
//         try {
//           await next();
//         } catch (error) {
//           Sentry.captureException(error);
//           throw error;
//         }
//       });
//     },
//   };
// };
