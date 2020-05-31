// https://strapi.io/documentation/v3.x/concepts/middlewares.html

module.exports = ({ env }) => ({
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
    logger: {
      level: "debug",
      exposeInContext: true,
      requests: false
    },
    parser: {
      enabled: true,
      multipart: true,
    },
    gzip: {
      enabled: true
    },
    responseTime: {
      enabled: false
    },
    csp: {
      enabled: true,
      policy: ["block-all-mixed-content"]
    },
    p3p: {
      enabled: true,
      value: ""
    },
    hsts: {
      enabled: true,
      maxAge: 31536000,
      includeSubDomains: true
    },
    xframe: {
      enabled: true,
      value: "SAMEORIGIN"
    },
    xss: {
      enabled: true,
      mode: "block"
    },
    cors: {
      enabled: true,
      headers: [ 'Content-Type', 'Authorization', 'X-Frame-Options, bearerauth'],
      origin: env('CORS_ORIGINS', 'http://localhost:8080, http://localhost:1337')
    },
    ip: {
      enabled: true,
      whiteList: [ env('IP_WHITELIST', '127.0.0.1') ],
      blackList: []
    }    
  },
})
