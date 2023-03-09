const cmsService = require('../services/cms.services');
const CustomError = require('../utils/customError.utils');

const getContentTypes = async (req, res) => {
  try {
    const contentTypes = await cmsService.getContentTypes();
    res.status(200).json(contentTypes);
  } catch (error) {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json(error.message);
    } else {
      res.status(500).json({error: error.message});
    }
  }
};

const createContentType = async (req, res) => {
  try {
    const {contentTypeName, contentTypeFields} = req.body;
    const contentType = await cmsService.createContentType(contentTypeName, contentTypeFields);
    res.status(201).json(contentType);
  } catch (error) {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json(error.message);
    } else {
      res.status(500).json({error: error.message});
    }
  }
};

const getContentType = async (req, res) => {
  try {
    const {id} = req.params;
    const contentTypeEntries = await cmsService.getContentTypeEntries(id);
    res.status(200).json(contentTypeEntries);
  } catch (error) {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json(error.message);
    } else {
      res.status(500).json({error: error.message});
    }
  }
};

const updateContentType = async (req, res) => {
  try {
    const {id} = req.params;
    const {contentTypeName, contentTypeFields, operation} = req.body;
    const contentType = await cmsService.updateContentType(id, contentTypeName, contentTypeFields, operation);
    res.status(200).json(contentType);
  } catch (error) {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json(error.message);
    } else {
      res.status(500).json({error: error.message});
    }
  }
};

const deleteContentType = async (req, res) => {
  try {
    const {id} = req.params;
    const contentType = await cmsService.deleteContentType(id);
    res.status(200).json(contentType);
  } catch (error) {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json(error.message);
    } else {
      res.status(500).json({error: error.message});
    }
  }
};


module.exports = {
  getContentTypes,
  createContentType,
  getContentType,
  updateContentType,
  deleteContentType,
};
