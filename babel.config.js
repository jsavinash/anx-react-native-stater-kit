module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './src/app',
          '@assets': './src/assets',
          '@common': './src/common',
          '@layout': './src/layout',
          '@models': './src/models',
          '@navigation': './src/navigation',
          '@scenes': './src/scenes',
        },
      },
    ],
  ],
};
