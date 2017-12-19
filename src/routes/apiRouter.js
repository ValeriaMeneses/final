const Router = require('express').Router;
const fs = require('fs-extra');
const CV = require('../models/CV.js');
const Category = require('../models/Category.js');



const apiRouter = Router();

function getCVs(req, res) {
  CV
    .query()
    .then(data => res.json(data).status(20));
}

function getCvId(req, res) {
  CV
    .query()
    .findById(req.params.id)
    .then(cv => {
      return res.json(cv).status(200)
    })
    .catch(error => {
      return res.send(error).status(500)
    });
}

function createCV(req, res) {
  CV
    .query()
    .insert(req.body)
    .then(newCv =>{
      return res.json(newCv).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    })

}

function updateCV(req, res) {
  CV
    .query()
    .updateAndFetchById(req.params.id, req.body)
    .then(cvUpdated => {
      return res.json(cvUpdated).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    });
}


function getCategory(req, res) {
  Category
    .query()
    .eager('curriculums')
    .then(data => res.json(data));
}

function getCategoryId(req, res) {
  Category
    .query()
    .findById(req.params.id)
    .then(categories => {
      return res.json(categories).status(200)
    })
    .catch(error => {
      return res.send(error).status(500)
    });
}

function createCategory(req, res) {
  Category
    .query()
    .insert(req.body)
    .then(newCategory =>{
      return res.json(newCategory).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    })

}

function updateCategory(req, res) {
  Category
    .query()
    .updateAndFetchById(req.params.id, req.body)
    .then(cvUpdated => {
      return res.json(cvUpdated).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    });
}


apiRouter
  .get('/cvs', getCVs)
  .get('/cvs/:id', getCvId)
  .post('/cvs', createCV)
  .put('/cvs/:id', updateCV);

apiRouter
  .get('/category', getCategory)
  .get('/category/:id', getCategoryId)
  .post('/category', createCategory)
  .put('/category/:id', updateCategory);



module.exports = apiRouter;
