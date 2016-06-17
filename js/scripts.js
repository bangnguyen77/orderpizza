// Back-End logic
function Pizza(type, size) {
  this.type = type;
  this.size = size;
  this.toppings = [];
}

function Topping(top1, top2, top3, top4){
  this.top1 = top1;
  this.top2 = top2;
  this.top3 = top3;
  this.top4 = top4;
}

Pizza.prototype.typeSize = function() {
  return this.type + " " + this.size;
}

Toppings.prototype.fullToppings = function() {
  return this.top1 + ", " + this.top2 + ", " + this.top3 + ", " + this.top4;
}

// user interface logic
$(document).ready(function() {
  $("form#selection").submit(function(event) {
    event.preventDefault();

    var pizzaType = $("select#selectPizzas").val();
    var pizzaSize = $("select#selectSizes").val();
    var pizzaToppings = $("div#selectToppings").val();
    var newPizza = new Pizza(pizzaType, pizzaSize);
    var newTopping = new Topping(top1, top2, top3, top4);

    $("ul#pizzaList").append("<li><span class='pizzaItems'>" + newPizza.typeSize() + "</span></li>");


    $(".pizzaList").last().click(function() {
    $("#showFinalSelection").show();
    $("#show-contact h2").text(newPizza.typeSize);

    $("ul#addresses").text("");
    newContact.addresses.forEach(function(address) {
      $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
  });
});
