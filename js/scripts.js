// business logic
function Pizza(pizzaName, pizzaSize) {
  this.pizzaName = pizzaName;
  this.pizzaSize = pizzaSize;
  this.toppings = [];
}

Pizza.prototype.nameSize = function() {
  return this.pizzaName + " " + this.pizzaSize;
}

Pizza.prototype.price = function() {
  var price = 0;
  if (pizzaSize === "small" && this.pizzaTopping === "regular" {
    return price = 10;
  } else if (pizzaSize === "small" && this.pizzaTopping === "anchovy") {
    return price = 11;
    }
    else if (pizzaSize === "small" && this.pizzaTopping === "artichoke") {
    return price = 12;
    }
    else if (pizzaSize === "small" && this.pizzaTopping === "cheese") {
    return price = 12;
    }
    else if (pizzaSize === "small" && this.pizzaTopping === "pepperroni") {
    return price = 11;
    }
    else if (pizzaSize === "medium" && this.pizzaTopping === "Regular") {
    return price = 16;
    }
    else if (pizzaSize === "medium" && this.pizzaTopping === "anchovy") {
    return price = 17;
    }
    else if (pizzaSize === "medium" && this.pizzaTopping === "artichoke") {
    return price = 18;
    }
    else if (pizzaSize === "medium" && this.pizzaTopping === "cheese") {
    return price = 18;
    }
    else if (pizzaSize === "medium" && this.pizzaTopping === "pepperroni") {
    return price = 17;
    }
    else if (pizzaSize === "large" && this.pizzaTopping === "Regular") {
    return price = 20;
    }
    else if (pizzaSize === "large" && this.pizzaTopping === "anchovy") {
    return price = 21;
    }
    else if (pizzaSize === "large" && this.pizzaTopping === "artichoke") {
    return price = 22;
    }
    else if (pizzaSize === "large" && this.pizzaTopping === "cheese") {
    return price = 22;
    }
    else if (pizzaSize === "large" && this.pizzaTopping === "pepperroni") {
    return price = 21;
    }
    else {
    return price;
    }
};

$(document).ready(function() {
  $("form#selection").submit(function(event) {
    event.preventDefault();

    var pizzaName = $("select#selectPizzas").val();
    var pizzaSize = $("select#selectSizes").val();
    var pizzaTopping = $("select#selectToppings :selected").val();
    var pizzaOrder = new Pizza(pizzaName, pizzaSize);
    var toppingOrder = pizzaOrder.toppings.push();
debugger;
    $("#reviewOrder").show();
    $("ul#pizzaList").append("<li><span class='pizzaItems>" + Pizza.nameSize() + "</span></li>");


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
