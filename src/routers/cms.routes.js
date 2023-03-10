const express = require('express');
const cmsController = require('../controllers/cms.controllers');
const {validateId} = require('../middlewares/cms.validations');

const cmsRoutes = express.Router();

cmsRoutes.route('/contentTypes')
    .get(cmsController.getContentTypes)
    .post(cmsController.createContentType);

cmsRoutes.route('/contentTypes/:id')
    .get(validateId, cmsController.getContentType)
    .post(validateId, cmsController.createContentTypeEntry)
    .put(validateId, cmsController.updateContentType)
    .delete(validateId, cmsController.deleteContentType);

cmsRoutes.route('/contentTypes/:id/:entryId')
    .delete(validateId, cmsController.deleteContentTypeEntry)
    .put(validateId, cmsController.updateContentTypeEntry);

cmsRoutes.route('/contentTypes/:id/fields/change')
    .get(validateId, cmsController.getContentTypeFields)
    .put(validateId, cmsController.changeContentTypeFieldNames);

module.exports = cmsRoutes;
