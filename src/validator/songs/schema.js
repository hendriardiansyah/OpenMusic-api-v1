const Joi = require('joi');

const NotePayloadSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().integer().required(),
  performer: Joi.string().required(),
  genre: Joi.string().required(),
  duration: Joi.number().required(),
});

module.exports = { NotePayloadSchema };
