const Joi = require("joi");

const coordSchema = Joi.array().length(2).items(Joi.number().required());
const addressSchema = Joi.object({
  building: Joi.string().required(),
  street: Joi.string().required(),
  zipcode: Joi.string().required(),
  coord: coordSchema.required()
});

const gradeSchema = Joi.object({
  date: Joi.date().required(),
  score: Joi.number().integer().min(0).max(10).required()
});

const commentSchema = Joi.object({
  date: Joi.date().required(),
  comment: Joi.string().required(),
  _id: Joi.string().optional()
});

const restaurantSchema = Joi.object({
  name: Joi.string().required(),
  borough: Joi.string().required(),
  cuisine: Joi.string().required(),
  restaurant_id: Joi.string().required(),
  address: addressSchema.required(),
  grades: Joi.array().items(gradeSchema).default([]),
  comments: Joi.array().items(commentSchema).default([])
});

const querySchema = Joi.object({
  borough: Joi.string(),
  cuisine: Joi.string(),
  name: Joi.string(),
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(50).default(10)
});

const cuisineParamSchema = Joi.object({
  cuisine: Joi.string().min(2).max(50).required()
});

module.exports = { restaurantSchema, querySchema, cuisineParamSchema };