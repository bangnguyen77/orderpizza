// business logic
function Pizza(pizzaName, pizzaSize, pizzaTopping) {
  this.pizzaName = pizzaName;
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
}

Pizza.prototype.calculatePrice = function() {
  if (this.pizzaSize ===  "large") {
    this.price = 20;
  } else if (this.pizzaSize === "medium") {
    this.price = 16;
  } else if (this.pizzaSize === "small") {
    this.price = 10;
  }
  for (i = 0; i <= this.pizzaTopping.length; i++) {
    if (this.pizzaTopping[i] === 'anchovy' || this.pizzaTopping[i] === 'artichoke') {
      this.price += 1;
    } else if (this.pizzaTopping[i] === 'cheese' || this.pizzaTopping[i] === 'pepperroni') {
      this.price += 2;
    }
  }
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
    pizzaOrder.calculatePrice();

    $("#reviewOrder").show();
    $("ul#pizzaList").append("<li><span class='pizzaItems'>" + pizzaOrder.pizzaName + ", " + "</span></li>" + "<li><span class='pizzaItems'>" + pizzaOrder.pizzaSize + "</span></li>"+ "<li><span class='pizzaItems'>" + pizzaOrder.price + "</span></li>");

    $("#placeOrder").click(function() {
      $("#reviewOrder").hide();
      $("div.order").show();
    });
  });
});
