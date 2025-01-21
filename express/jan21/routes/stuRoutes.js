const express=require('express');
const Router=express.Router();
const stuController=require('../controller/stuController')

Router.get('/homepage',stuController.homepage)
Router.get('/about',stuController.aboutstu)
Router.get('/courses',stuController.courses)
Router.get("/ourfees",stuController.ourfees)

module.exports=Router