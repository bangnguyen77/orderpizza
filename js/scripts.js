// business logic
function Pizza(pizzaName, pizzaSize, pizzaTopping) {
  this.pizzaName = pizzaName;
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
  // this.pizzaPrice = pizzaPrice;
}

// function Price(size, pizzaPrice) {
//   this.size = size;
//   this.pizzaPrice = pizzaPrice;
// }

Pizza.prototype.price = function() {
  if (pizzaSize ===  "large") {
    this.price = 20;
  } else if (pizzaSize === "medium") {
    this.price = 16;
  } else if (pizzaSize === "small") {
    this.price = 10;
  }
  for (i = 0; i <= pizzaTopping.length; i++) {
    if (pizzaTopping[i] === 'anchovy' || pizzaTopping[i] === 'artichoke') {
      this.price += 1;
    } else if (pizzaTopping[i] === 'cheese' || pizzaTopping[i] === 'pepperroni') {
      this.price += 2;
    }
  }
  // return price;
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
    // var totalPrice = Pizza.pizzaPrice

    $("#reviewOrder").show();
    $("ul#pizzaList").append("<li><span class='pizzaItems'>" + pizzaOrder.pizzaName + ", " + "</span></li>" + "<li><span class='pizzaItems'>" + pizzaOrder.pizzaSize + "</span></li>"+ "<li><span class='pizzaItems'>" + pizzaOrder.price + "</span></li>");

    $("#placeOrder").click(function() {
      $("#reviewOrder").hide();
      $("div.order").show();
    });
  });
});
