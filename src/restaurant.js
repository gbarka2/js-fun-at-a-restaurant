
function createRestaurant(name, menus) {
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
  return restaurant
};
function addMenuItem(restaurant, newItem) {
  if (newItem.type === "breakfast" && !restaurant.menus.breakfast.includes(newItem)) {
    return restaurant.menus.breakfast.push(newItem);
  } else if (newItem.type === "lunch" && !restaurant.menus.lunch.includes(newItem)) {
    return restaurant.menus.lunch.push(newItem);
  } else if (newItem.type === "dinner" && !restaurant.menus.dinner.includes(newItem)) {
    return restaurant.menus.dinner.push(newItem);
  }
}
function removeMenuItem(restaurant, removeItemName, removeMenuName) {
  for (var i = 0; i < restaurant.menus[removeMenuName].length; i++) {
    if (restaurant.menus[removeMenuName][i].name === removeItemName ) {
      restaurant.menus[removeMenuName].splice(i, 1);
      return `No one is eating our ${removeItemName} - it has been removed from the ${removeMenuName} menu!`
    }
  }
  for (var i = 0; i < restaurant.name.length; i++) {
    if (restaurant.name[i] !== "Sexy Pizza") {
      return `Sorry, we don't sell ${removeItemName}, try adding a new recipe!`
    }
  }
  return restaurant
}









module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
