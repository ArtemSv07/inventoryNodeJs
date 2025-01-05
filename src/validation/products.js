import Joi from 'joi';

export const createProductSchema = Joi.object({
  serialNumber: Joi.string().min(3).max(30).required().messages({
    'string.base': 'serialNumber should be a string',
    'string.min': 'serialNumber should have at least {#limit} characters',
    'string.max': 'serialNumber should have at most {#limit} characters',
    'any.required': 'serialNumber is required',
  }),
  isNew: Joi.number().integer().required().messages({
    'number.base': 'isNew should be a number',
    'number.integer': 'isNew must be an integer',
    'any.required': 'isNew is required',
  }),
  photo: Joi.string().max(30),
  title: Joi.string().min(2).max(30).required().messages({
    'string.base': 'title should be a string',
    'string.min': 'title should have at least {#limit} characters',
    'string.max': 'title should have at most {#limit} characters',
    'any.required': 'title is required',
  }),
  type: Joi.string().min(3).max(30).messages({
    'string.base': 'type should be a string',
    'string.min': 'type should have at least {#limit} characters',
    'string.max': 'type should have at most {#limit} characters',
  }),
  specification: Joi.string().messages({
    'string.base': 'specification should be a string',
  }),
});

export const updateProductSchema = Joi.object({
  serialNumber: Joi.string().min(3).max(30).messages({
    'string.base': 'serialNumber should be a string',
    'string.min': 'serialNumber should have at least {#limit} characters',
    'string.max': 'serialNumber should have at most {#limit} characters',
  }),
  isNew: Joi.number().integer().messages({
    'number.base': 'isNew should be a number',
    'number.integer': 'isNew must be an integer',
  }),
  photo: Joi.string().max(30),
  title: Joi.string().min(2).max(30).messages({
    'string.base': 'title should be a string',
    'string.min': 'title should have at least {#limit} characters',
    'string.max': 'title should have at most {#limit} characters',
  }),
  type: Joi.string().min(3).max(30).messages({
    'string.base': 'type should be a string',
    'string.min': 'type should have at least {#limit} characters',
    'string.max': 'type should have at most {#limit} characters',
  }),
  specification: Joi.string().messages({
    'string.base': 'specification should be a string',
  }),
});
