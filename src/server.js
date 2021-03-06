require('dotenv').config();

const Hapi = require('@hapi/hapi');
const songs = require('./api/songs');
const AlbumsService = require('./services/postgres/AlbumsService');
const SongsService = require('./services/postgres/SongsService');
const SongsValidator = require('./validator/songs');
const AlbumsValidator = require('./validator/albums');
const albums = require('./api/albums');

// users
const users = require('./api/users');
const UsersService = require('./services/postgres/UsersService');
const UsersValidator = require('./validator/users');

const init = async () => {
  const songsService = new SongsService();
  const albumsService = new AlbumsService();
  const usersService = new UsersService();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register([
  {
    plugin: songs,
    options: {
      service: songsService,
      validator: SongsValidator,
    },
  },
  {
    plugin: albums,
    options: {
      service: albumsService,
      validator: AlbumsValidator,
    },
    plugin: users,
    options: {
      service: usersService,
      gitvalidator: UsersValidator,
    },
  },
]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
