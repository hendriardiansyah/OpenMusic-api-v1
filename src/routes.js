const { deleteSongByIdHandler } = require('./handler');
const { editSongByIdHandler } = require('./handler');
const { getSongByIdHandler } = require('./handler');
const { addSongHandler, getAllSongsHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/songs',
    handler: addSongHandler,
  },
  {
    method: 'GET',
    path: '/songs',
    handler: getAllSongsHandler,
  },
  {
    method: 'GET',
    path: '/songs/{songId}',
    handler: getSongByIdHandler,
  },
  {
    method: 'PUT',
    path: '/songs/{songId}',
    handler: editSongByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/songs/{songId}',
    handler: deleteSongByIdHandler,
  },
];

module.exports = routes;
