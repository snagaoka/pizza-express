var express = require('express');
var router = express.Router();
var database = require('./../models/orders');

// Orders Controller
router.route('/:orderAmount')
  .get(function (req, res) {
    var orderAmount = req.param('orderAmount');
    for (var i = 0; i < orderAmount; i++) {
      database.generateOrders();
    }

    res.send("Generating your mock data");

  });

module.exports = router;
