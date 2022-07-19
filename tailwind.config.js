const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT ({
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './templates/customers/*.liquid',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
