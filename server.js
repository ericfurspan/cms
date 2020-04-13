const strapi = require('strapi');
const Sentry = require('@sentry/node');
require('dotenv').config();

const { NODE_ENV, SENTRY_DSN } = process.env;

// Initialize Sentry monitoring
Sentry.init({
  dsn: SENTRY_DSN,
  environment: NODE_ENV === 'production' ? 'production' : 'development',
})

// Start the server
strapi().start();
