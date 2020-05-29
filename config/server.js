
module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 1337),
  url: env('PROXY_URL', ''),
  emitErrors: true,
  admin: {
    autoOpen: false
  },
});
