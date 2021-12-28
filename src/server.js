require('dotenv').config();

const Hapi = require('@hapi/hapi');
const songs = require('./api/songs');
const AlbumsService = require('./services/postgres/AlbumsService');
const SongsService = require('./services/postgres/SongsService');
const SongsValidator = require('./validator/songs');
const AlbumsValidator = require('./validator/albums')

const init = async () => {
  const songsService = new SongsService();
  // const albumsService = new AlbumsService();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    /* host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0', */
    /* host: process.env.NODE_ENV !== 'production'?'localhost' : '0.0.0.0', */
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register({
    plugin: songs,
    options: {
      service: songsService,
      validator: SongsValidator,
    },
  });

  // await server.register({
  //   plugin: songs,
  //   options: {
  //     service: albumsService,
  //     validator: AlbumsValidator,
  //   },
  // });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
