var express = require('express');
var router = express.Router();
var database = require('./../models/orders');

// Orders Controller
router.route('/')
  .get(function (req, res) {
    console.log('generating pizza orders');
    database.generateOrders(req, res);
  });

module.exports = router;
