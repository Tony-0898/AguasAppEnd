module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // other plugins...
    ['react-native-reanimated/plugin', {
      relativeSourceLocation: true,
      simplify: true,
    }],
  ],
  env: {
    production: {
      plugins: ['react-native-reanimated/plugin'],
    },
  },
};
