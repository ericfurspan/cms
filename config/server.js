// https://strapi.io/documentation/v3.x/concepts/configurations.html#server

module.exports = ({ env }) => ({
  host: 'localhost',
  port: 1337,
  url: env('PROXY_URL', ''),
  emitErrors: true,
  admin: {
    autoOpen: false
  },
});
