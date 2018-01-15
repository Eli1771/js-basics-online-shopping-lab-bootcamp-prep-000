var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100) + 1;
 cart.push({[item]: price});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.");
  } else {
    var contents = "In your cart, you have ";
    for (var i = 0; i < cart.length - 1; i++) {
      var item = Object.getOwnPropertyNames(cart[i]);
      contents += `${item} at ${cart[item]}, `;
    }
    var last = Object.getOwnPropertyNames(cart[cart.length]);
    contents += `and ${last} at ${cart[last]}.`;
    console.log(contents);
  }
}

function total() {
 var sum = 0;
 for (var i = 0; i < cart.length; i++) {
  for (let item in cart[i]) {
    sum += cart[i][item];
  }
 }
 return sum;
}

function removeFromCart(item) {
  var itemInCart = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
     cart = cart.slice(0, i).concat(cart.slice(i + 1));
     itemInCart = true;
     return cart;
   } else {
      console.log("That item is not in your cart.");
      return cart;
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
