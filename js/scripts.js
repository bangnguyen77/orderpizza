// business logic
function Pizza(pizzaName, pizzaSize, pizzaTopping) {
  this.pizzaName = pizzaName;
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
  // this.pizzaTopping.push();
}

Pizza.prototype.price = function(size, pizzaTopping) {
  if (size ===  "large") {
    this.price = 20;
  } else if (size === "medium") {
    this.price = 16;
  } else if (size === "small") {
    this.price = 10;
  }
  for (i = 0; i <= toppings.length; i++) {
    if (toppings[i] === 'anchovy' || toppings[i] === 'artichoke') {
      this.price += 1;
    } else if (toppings[i] === 'cheese' || toppings[i] === 'pepperroni') {
      this.price += 2;
    }
  }
  return this.price;
}

$(document).ready(function() {
  $("#selection").submit(function(event) {

    event.preventDefault();

    var pizzaName = $("select#selectPizzas").val();
    var pizzaSize = $("select#selectSizes").val();
    var pizzaTopping = $("input:checkbox:checked").map(function () {
     return $(this).val()
   }).get();
    var pizzaOrder = new Pizza(pizzaName, pizzaSize, pizzaTopping);



    $("#reviewOrder").show();
    debugger;
    $("ul#pizzaList").append("<li><span class='pizzaItems'>" + pizzaOrder.pizzaName + "</span></li>");


    $("#placeOrder").click(function() {
      $("div.order").show();
      $(".order h2").text(newPizza.nameSize());
      $("span .toppings").text((this).toppingOrder);
      $("span .price").text(Pizza.toppings);

      $("p#price-display").show();
   $("p#price-display").text("The cost of your pizza is $" + totalPrice + ".");
   $("#your-pizzas").append('<li>' + newPizza.pizzaName() + '<li>');
   $("form").trigger("reset");
    });
  });
});
