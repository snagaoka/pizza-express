$(function(){

	$.ajax("/orders", {

		method: "GET",

		success: function(data){

			var orderQueue = $("<ul></ul>");
			
			for (var i = 0; i < data.length; i++) {

				var eachOrder = $("<li></li>");

					eachOrder.append(data[i].size); // show size in order queue

					data[i].toppings.meats.forEach(function(element, index){
						eachOrder.append(element); // show meats in order queue
					});

					data[i].toppings.veggies.forEach(function(element, index){
						eachOrder.append(element); // show meats in order queue
					});

				orderQueue.append(eachOrder);

			}

			$(".order-list").append(orderQueue);

		}

		// failure: function(error){
			// if(err)res.send(500, err);
			// console.log('error');
		// }
	});
	
});