'use strict';

process.chdir(__dirname);

(() => {
  const strapi = require('strapi');
  strapi.start();
})();