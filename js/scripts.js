// business logic
function Pizza(pizzaName, pizzaSize, pizzaTopping) {
  this.pizzaName = pizzaName;
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
}

function Price(size, price) {
  this.size = size;
  this.price = price;
}

Pizza.prototype.price = function(size, pizzaTopping) {
  if (size ===  "large") {
    this.price = 20;
  } else if (size === "medium") {
    this.price = 16;
  } else if (size === "small") {
    this.price = 10;
  }
  for (i = 0; i <= pizzaTopping.length; i++) {
    if (pizzaTopping[i] === 'anchovy' || pizzaTopping[i] === 'artichoke') {
      this.price += 1;
    } else if (pizzaTopping[i] === 'cheese' || pizzaTopping[i] === 'pepperroni') {
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
    var totalPrice = Pizza.prize

    $("#reviewOrder").show();
    $("ul#pizzaList").append("<li><span class='pizzaItems'>" + pizzaOrder.pizzaName + ", " + "</span></li>" + "<li><span class='pizzaItems'>" + pizzaSize + "</span></li>"+ "<li><span class='pizzaItems'>" + totalPrice + "</span></li>");
    debugger;
    // $("p#cost").append("<p><span class='cost'>"Your pizza costs: + price"</span></p>");
    // $("button#placeOrder").trigger("reset");

    $("#placeOrder").click(function() {
      $("#reviewOrder").hide();
      $("div.order").show();
    });
  });
});
