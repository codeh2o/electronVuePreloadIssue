module.exports = {
  // transpileDependencies: ['vuetify'],
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: false,
      builderOptions: {
        // Add also your database location
        extraResources: ['src', 'src/res/'],
        // preload: { preload: 'src/preload.js' }
      },
      // This line: add knex and sqlite3
      externals: ['knex', 'sqlite3'],
    },
  },
};
