// business logic
function Pizza(pizzaName, pizzaSize) {
  this.pizzaName = pizzaName;
  this.pizzaSize = pizzaSize;
  this.toppings = [];
}

function Topping(topping1, topping2, topping3, topping4, topping5) {
  this.pizzaTopping = topping1;
  this.pizzaTopping = topping2;
  this.pizzaTopping = topping3;
  this.pizzaTopping = topping4;
  this.pizzaTopping = topping5;
}

Pizza.prototype.nameSize = function() {
  return this.pizzaName + " " + this.pizzaSize;
}

Topping.prototype.fullTopping = function() {
  return this.topping1 + " " +this.topping2 + " " + this.topping3 + " " + this.topping4 + " " + this.topping5;
}

Pizza.prototype.price = function(price) {
  var price = 0;
  if (pizzaSize === "Small".toLowerCase() && pizzaTopping === "Regular".toLowerCase) {
    return price = 10;
  } else if (pizzaSize === "Small".toLowerCase() && pizzaTopping === "anchovy".toLowerCase) {
    return price = 11;
    }
    else if (pizzaSize === "Small".toLowerCase() && pizzaTopping === "artichoke".toLowerCase) {
    return price = 12;
    }
    else if (pizzaSize === "Small".toLowerCase() && pizzaTopping === "cheese".toLowerCase) {
    return price = 12;
    }
    else if (pizzaSize === "Small".toLowerCase() && pizzaTopping === "pepperroni".toLowerCase) {
    return price = 11;
    }
    else if (pizzaSize === "medium".toLowerCase() && pizzaTopping === "Regular".toLowerCase) {
    return price = 16;
    }
    else if (pizzaSize === "medium".toLowerCase() && pizzaTopping === "anchovy".toLowerCase) {
    return price = 17;
    }
    else if (pizzaSize === "medium".toLowerCase() && pizzaTopping === "artichoke".toLowerCase) {
    return price = 18;
    }
    else if (pizzaSize === "medium".toLowerCase() && pizzaTopping === "cheese".toLowerCase) {
    return price = 18;
    }
    else if (pizzaSize === "medium".toLowerCase() && pizzaTopping === "pepperroni".toLowerCase) {
    return price = 17;
    }
    else if (pizzaSize === "large".toLowerCase() && pizzaTopping === "Regular".toLowerCase) {
    return price = 20;
    }
    else if (pizzaSize === "large".toLowerCase() && pizzaTopping === "anchovy".toLowerCase) {
    return price = 21;
    }
    else if (pizzaSize === "large".toLowerCase() && pizzaTopping === "artichoke".toLowerCase) {
    return price = 22;
    }
    else if (pizzaSize === "large".toLowerCase() && pizzaTopping === "cheese".toLowerCase) {
    return price = 22;
    }
    else if (pizzaSize === "large".toLowerCase() && pizzaTopping === "pepperroni".toLowerCase) {
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
    var toppingOrder = new Topping(pizzaTopping);

    $("ul#pizzaList").append("<li><span class='pizzaItems>" + Pizza.nameSize() + "</span></li>");
    $("ul#pizzaList").append("<li><span class='pizzaItems>" + Topping.fullTopping() + "</span></li>");

    $("#placeOrder").click(function() {
      $(".order").show();
      $(".order h2").text(newPizza.nameSize());
      $(".order .toppings").text(fullTopping);
      $(".order .price").text(Pizza.toppings);
    });
  });
});
