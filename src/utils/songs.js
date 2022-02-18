const mapDBToModel = ({
    id,
    title,
    year,
    genre,
    performer,
    duration,
    albumId,
  }) => ({
    id,
    title,
    year,
    genre,
    performer,
    duration,
    albumid: albumId,
  });
  
  module.exports = { mapDBToModel };
  