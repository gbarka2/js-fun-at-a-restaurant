//1 & 2 & 3 - complete

function nameMenuItem(food) {
  return `Delicious ${food}`;
}

//4 & 5 - complete

function createMenuItem(name, price, type) {
  var newItem = {
    name: name,
    price: price,
    type: type,
  }
  return newItem;
}

//6 & 7 & 8 & 9

function addIngredients(food, ingredients) {
  if (ingredients.indexOf(food) === -1) {
    ingredients.push(food);
    return ingredients;
  }
}

//10 & 11 & 12 - complete

function formatPrice(initialPrice) {
  var price = "$" + initialPrice;
  return price;
}

//13 & 14 - complete

function decreasePrice(decreasePrice) {
  var tenPercent = (decreasePrice * .10);
  var total = decreasePrice - tenPercent;
  return total.toFixed(2);
}

//15 & 16 & 17 - complete

function createRecipe(title, ingredients, menuItemType) {
  var newRecipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return newRecipe
  console.log(newRecipe);
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
