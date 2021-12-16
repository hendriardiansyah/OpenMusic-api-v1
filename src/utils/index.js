const mapDBToModel = ({
    id,
    title,
    year,
    performer,
    genre,
    duration,
    insertedAt,
    updatedAt,
  }) => ({
    id,
    title,
    year,
    performer,
    genre,
    duration,
    createdAt: insertedAt,
    updatedAt,
  });
  
  module.exports = { mapDBToModel };
  