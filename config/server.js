
module.exports = ({ env }) => ({
  host: 'localhost',
  port: 1337,
  url: env('PROXY_URL', ''),
  emitErrors: true,
  admin: {
    autoOpen: false
  },
});
