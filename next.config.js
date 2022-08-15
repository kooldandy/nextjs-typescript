const path = require('path');

/* next.config.js  */
module.exports = {
    i18n: {
      locales: ["en"],
      defaultLocale: "en",
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  };