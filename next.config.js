const withTM = require('next-transpile-modules')(['d3-array', 'd3-geo', '@heathmont/moon-charts', 'react-simple-maps', 'internmap']); // pass the modules you would like to see transpiled

module.exports = withTM({
  future: {
    webpack5: true,
  },
});