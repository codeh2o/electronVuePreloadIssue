module.exports = {
  transpileDependencies: ['vuetify'],
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        // Add also your database location
        extraResources: ['src', 'src/res/'],
        preload: 'src/preload.js',
      },
      // This line: add knex and sqlite3
      externals: ['knex', 'sqlite3'],
    },
  },
};
