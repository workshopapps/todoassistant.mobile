const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  

  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      // eslint-disable-next-line no-dupe-keys
    //   assetExts: assetExts.push('cjs', 'mjs'),
      sourceExts: [...sourceExts, 'svg'],
    },

  };
})();


// // Learn more https://docs.expo.io/guides/customizing-metro
// const { getDefaultConfig } = require('expo/metro-config');

// // eslint-disable-next-line no-undef
// const defaultConfig = getDefaultConfig(__dirname);
// defaultConfig.resolver.assetExts.push('cjs');

// // eslint-disable-next-line no-undef
// module.exports = getDefaultConfig(__dirname);
