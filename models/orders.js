var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var orders = {}

mongoose.connect('mongodb://bob:nom@ds063809.mongolab.com:63809/pizza-express');

var OrdersSchema = Schema({
  size: String,
  toppings: {
    meat: Array,
    veggies: Array
  }
});

var Order = mongoose.model('Order', OrdersSchema);

orders.getAllPizzaOrders = function (req, res) {
  // console.log('start ret');
  Order.find({}, function (err, orders) {
    if (err) {
      console.log("error getting all pizzas", err); return;
    }
    
    res.send(orders);
    console.log(orders);
  });
};

orders.generateOrders = function (req, res) {
  var newOrder = new Order({
    size: "small",
    toppings: {
      meat: [
        "Bacon",
        "Ham"
      ],
      veggies: [
        "Spinach",
        "Black Olives"
      ]
    }
  });

  newOrder.save();
  res.send(200);

};

module.exports = orders;