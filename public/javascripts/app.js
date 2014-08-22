$(function(){

	$.ajax("/orders", {

		method: "GET",

		success: function(data){

			var orderQueue = $("<ul></ul>");
			
			for (var i = 0; i < data.length; i++) {

				var eachPizzaSize = data[i].size;
				var eachPizzaMeatTopping = data[i].toppings.meats;
				var eachPizzaVeggieTopping = data[i].toppings.veggies;
				var eachPizza = eachPizzaSize + eachPizzaMeatTopping + eachPizzaVeggieTopping

				orderQueue.append("<li>" + eachPizza + "</li>");

			}

			$(".order-list").append(orderQueue);

		}

		// failure: function(error){
			// if(err)res.send(500, err);
			// console.log('error');
		// }
	});
	
});