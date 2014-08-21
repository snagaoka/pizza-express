var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var placeOrder = require('./../lib/generateOrder');
var orders = {};

// mongodb URL here
mongoose.connect();

var OrdersSchema = Schema({
  sizes: String,
  toppings: {
    meats: Array,
    veggies: Array
  }
});

var Order = mongoose.model('Order', OrdersSchema);

orders.getAllPizzaOrders = function(req, res){
  Order.find({}, function (err, orders) {
    if (err) {
      console.log("error getting all pizzas", err); return;
    }
    res.send(orders);
  });
};

orders.createOrder = function(req, res){
  var newOrder = new Order({
    sizes: req.param('sizes'),
    toppings: {
      meats: req.param('meats'),
      veggies: req.param('veggies')
    }
  });

  newOrder.save(function (err){
    
  });
};


// abandon hope, ye who hits this route more than once
orders.generateOrders = function (req, res) {
  var newOrder = new Order(placeOrder.generate());

  newOrder.save();
};

module.exports = orders;