var chai = require("chai");
var assert = chai.assert;

var {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
} = require("../src/restaurant");
//1
describe("restaurant.js", function() {
  describe("createRestaurant", function() {
    it("should be a function", function () {
      assert.isFunction(createRestaurant);
    });
//2
    it("should have a name", function () {
      var pizzaRestaurant = createRestaurant("Sexy Pizza");
      assert.equal(pizzaRestaurant.name, "Sexy Pizza");
    });
//3
    it("should be able to have a different name", function () {
      var arepaRestaurant = createRestaurant("Quiero Arepas");

      assert.equal(arepaRestaurant.name, "Quiero Arepas");
    });
//4
    it("should have menus", function() {
      var pizzaRestaurant = createRestaurant("Sexy Pizza");

      assert.isObject(pizzaRestaurant.menus);
    });
//5
    it("should have different types of menus", function() {
      var pizzaRestaurant = createRestaurant("Sexy Pizza");

      assert.deepEqual(pizzaRestaurant.menus.breakfast, []);
      assert.deepEqual(pizzaRestaurant.menus.lunch, []);
      assert.deepEqual(pizzaRestaurant.menus.dinner, []);
    });
  });
//6
  describe("addMenuItem", function() {
    it("should be a function", function() {
      assert.isFunction(addMenuItem);
    });
//7
    it("should add an item to the lunch menu", function() {
      var pizzaRestaurant = createRestaurant("Sexy Pizza");
      var bbqPizza = {
        name: "BBQ Chicken",
        price: "12.49",
        type: "lunch"
      };

      addMenuItem(pizzaRestaurant, bbqPizza);

      assert.equal(pizzaRestaurant.menus.lunch[0], bbqPizza);
    });
//8
    it("should add an item to the lunch menu if the menu already has items", function () {
      var pizzaRestaurant = createRestaurant("Sexy Pizza");
      var bbqPizza = {
        name: "BBQ Chicken",
        price: "12.49",
        type: "lunch"
      };

      var cheesePizza = {
        name: "Cheese",
        price: "10.49",
        type: "lunch"
      };

      var hawaiianPizza = {
        name: "Hawaiian",
        price: "12.49",
        type: "lunch"
      };

      addMenuItem(pizzaRestaurant, bbqPizza);

      assert.equal(pizzaRestaurant.menus.lunch.length, 1);
      assert.deepEqual(pizzaRestaurant.menus.lunch, [bbqPizza]);

      addMenuItem(pizzaRestaurant, cheesePizza);
      addMenuItem(pizzaRestaurant, hawaiianPizza);

      assert.equal(pizzaRestaurant.menus.lunch.length, 3);
      assert.deepEqual(pizzaRestaurant.menus.lunch, [bbqPizza, cheesePizza, hawaiianPizza]);
    });
//9
    it("should add menu items to the correct menu automatically", function() {
      var pizzaRestaurant = createRestaurant("Sexy Pizza");
      var bbqPizza = {
        name: "BBQ Chicken Pizza",
        price: "12.49",
        type: "lunch"
      };

      var baconEggsPizza = {
        name: "Bacon and Eggs Pizza",
        price: "13.49",
        type: "breakfast"
      };

      addMenuItem(pizzaRestaurant, bbqPizza);
      addMenuItem(pizzaRestaurant, baconEggsPizza);

      assert.equal(pizzaRestaurant.menus.lunch[0], bbqPizza);
      assert.equal(pizzaRestaurant.menus.breakfast[0], baconEggsPizza);
    });
//10
    it("shouldn't add the same menu item more than once", function() {
      var pizzaRestaurant = createRestaurant("Sexy Pizza");
      var bbqPizza = {
        name: "BBQ Chicken Pizza",
        price: "12.49",
        type: "lunch"
      };

      var baconEggsPizza = {
        name: "Bacon and Eggs Pizza",
        price: "13.49",
        type: "breakfast"
      };

      addMenuItem(pizzaRestaurant, bbqPizza);
      addMenuItem(pizzaRestaurant, baconEggsPizza);
      addMenuItem(pizzaRestaurant, baconEggsPizza);

      assert.deepEqual(pizzaRestaurant.menus, {
        breakfast: [baconEggsPizza], lunch: [bbqPizza], dinner: []
      });
    });
  });
//11
  describe("removeMenuItem", function() {
    it("should be a function", function () {
      assert.isFunction(removeMenuItem);
    });
//12
    it("should remove an item from the menu to update it", function() {
      var pizzaRestaurant = createRestaurant("Sexy Pizza");
      var bbqPizza = {
        name: "BBQ Chicken Pizza",
        price: "12.49",
        type: "lunch"
      };

      var veggiePizza = {
        name: "Veggie Pizza",
        price: "11.49",
        type: "dinner"
      };

      var baconEggsPizza = {
        name: "Bacon and Eggs Pizza",
        price: "13.49",
        type: "breakfast"
      };

      addMenuItem(pizzaRestaurant, bbqPizza);
      addMenuItem(pizzaRestaurant, baconEggsPizza);
      addMenuItem(pizzaRestaurant, veggiePizza);

      var result = removeMenuItem(pizzaRestaurant, "Bacon and Eggs Pizza", "breakfast");

      assert.deepEqual(pizzaRestaurant.menus, {
        breakfast: [], lunch: [bbqPizza], dinner: [veggiePizza]
      });
      assert.equal(result, "No one is eating our Bacon and Eggs Pizza - it has been removed from the breakfast menu!");
    });
//13
    it("should remove a different item from the menu to update it", function () {
      var pizzaRestaurant = createRestaurant("Sexy Pizza");
      var bbqPizza = {
        name: "BBQ Chicken Pizza",
        price: "12.49",
        type: "lunch"
      };

      var veggiePizza = {
        name: "Veggie Pizza",
        price: "11.49",
        type: "dinner"
      };

      var baconEggsPizza = {
        name: "Bacon and Eggs Pizza",
        price: "13.49",
        type: "breakfast"
      };

      addMenuItem(pizzaRestaurant, bbqPizza);
      addMenuItem(pizzaRestaurant, baconEggsPizza);
      addMenuItem(pizzaRestaurant, veggiePizza);

      var result = removeMenuItem(pizzaRestaurant, "Veggie Pizza", "dinner");

      assert.deepEqual(pizzaRestaurant.menus, {
        breakfast: [baconEggsPizza], lunch: [bbqPizza], dinner: []
      });
      assert.equal(result, "No one is eating our Veggie Pizza - it has been removed from the dinner menu!");
    });
//14
    it("should only remove a menu item if it is on the menu", function() {
      var arepaRestaurant = createRestaurant("Quiero Arepas");
      var error = removeMenuItem(arepaRestaurant, "Mom's Spaghetti", "lunch");

      assert.equal(error, "Sorry, we don't sell Mom's Spaghetti, try adding a new recipe!");
    });
  });
});
