#Pizza Express

Pizza Express has become popular, so they are hiring some developers to help organize their orders!

Their site has a form for placing pizza orders, and another page to show all of the pizzas that are in the queue.

After the pizza is created, the order can be removed from the queue.

#Pizza

- size
  - "Large"
  - "Medium"
  - "Small"

- toppings
  - meat
    - "Pepperoni"
    - "Ham"
    - "Beef Topping"
    - "Italian Sausage"
    - "Pork Topping"
    - "Grilled Chicken"
    - "Bacon"
  - veggies
    - "Spinach"
    - "Green Peppers"
    - "Red Onions"
    - "Mushrooms"
    - "Black Olives"
    - "Tomatoes"
    - "Pineapple"
    - "Jalapenos"
    - "Garlic"

#REST API

The server is designed to accept 3 types of responses.

##GET

- `/orders`
  - Returns all orders in the queue


##POST

- `/orders`
  - Creates a new order

##DELETE

- `/orders/:orderId`
  - Removes a order from the queue
