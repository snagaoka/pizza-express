$(function(){

	$("#form").submit(function(event){
		event.preventDefault();
		$.ajax("/orders", {
			method: "POST",
			data: $('#form').serialize(),
			success: function(data){ // put order (object) into an array
				var currentOrder = [data]; 
				showOrderQueue(currentOrder); // calling showOrderQueue with currentOrder
			},
			failure: function(error){
				console.log('error')
			}
		});
	});

	$.ajax("/orders", {
		method: "GET",
		success: showOrderQueue,
		failure: function(error){
			console.log('error');
		}	
	});

	function showOrderQueue(data){ 

			var orderQueue = $("ul.order-list");

			for (var i = 0; i < data.length; i++) {
				console.log(i);
				var eachPizzaSize = data[i].size;
				var eachPizzaMeatTopping = data[i].toppings.meats;
				var eachPizzaVeggieTopping = data[i].toppings.veggies;
				var eachPizza = eachPizzaSize + eachPizzaMeatTopping + eachPizzaVeggieTopping
				orderQueue.prepend("<li>" + eachPizza + "</li>");
			}
			// $(".order-list").append();
		}

});

// static items (form, work-header) go in HTML, dynamic items (order queue) in JS