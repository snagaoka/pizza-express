var express = require('express');
var router = express.Router();
var database = require('./../models/orders');

// Orders Controller
router.route('/')
  .get(function (req, res) {
    for (var i = 0; i < 20; i++) {
      database.generateOrders();
    }

    res.send("Generating your mock data");

  });

module.exports = router;
