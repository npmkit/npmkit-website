module.exports = {
  webpack(config) {
    // Allow to import `system-font-css` as a raw string
    config.module.rules.push({
      test: /\.css$/,
      use: 'raw-loader',
    });
    return config;
  },
};
