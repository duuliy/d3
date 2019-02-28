// babel.config.js
module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'v9.7.1',
          },
        },
      ],
    ],
  };