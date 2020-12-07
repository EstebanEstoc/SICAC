module.exports = {
  resolver: {
    /* resolver options */
    sourceExts: ['jsx', 'js', 'json', 'ts', 'tsx'] //add here
  },
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles']
  }
}
