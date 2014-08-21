$(function(){
	$.ajax("/orders", {
		method: "GET",
		success: function(data){
			for (var i = 0; i < data.length; i++) {
				console.log(data[i].size);
				data[i].toppings.meats.forEach(function(element, index){
					console.log(element);
				});
				data[i].toppings.veggies.forEach(function(element, index){
					console.log(element);
				});
			}
		}
		// failure: function(error){

		// }
	});
});