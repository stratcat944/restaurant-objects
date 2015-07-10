// JS16 Restaurant Objects

$(document).on('ready', function() {


var FoodItem = function(name, cal, vegan, glutenFree, citrusFree){
	
	this.name		= name;
	this.cal		= cal;
	this.vegan		= vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;


}

	FoodItem.prototype.toString = function(){
			var menu = " Name: " + this.name + " Calories: " + this.cal + " Vegan: " + this.vegan + " Gluten Free: " + this.glutenFree + " Citrus Free: " + this.citrusFree;
			return menu;
	}


// Food Items

	var burrito = new FoodItem('burrito', 400, false, false, true);
	var rice = new FoodItem('rice', 120, true, true, true);
	var beans = new FoodItem('beans', 300, true, true, true);

	var guacamole = new FoodItem('guacamole', 400, true, true, false);
	var cornChips = new FoodItem('cornChips', 300, true, true, true);
	var salsa = new FoodItem('salsa', 200, true, true, false);

	var tequila = new FoodItem('tequila', 200, true, true, true);
	var sweetSour = new FoodItem('sweetSour', 100, true, true, false);
	var salt = new FoodItem('salt', 0, true, true, true);

// Object Classes

var Drink = function(name, description, price, ingredients){

	this.name 			= name;
	this.description	= description;
	this.price			= price;
	this.ingredients	= ingredients;
}

	Drink.prototype.toString = function(){
		var beverage = " Name: " + this.name + " Description: " + this.description + " Price: $" + this.price + " Ingredients: " + this.ingredients;
		return beverage;
	}


var Plate = function(name, description, price, ingredients){

	this.name 			= name;
	this.description	= description;
	this.price			= price;
	this.ingredients	= ingredients;
}

	Plate.prototype.toString = function(){
			var dinner = " Name: " + this.name + " Description: " + this.description + " Price: $" + this.price + " Ingredients: " + this.ingredients;
			return dinner;
		}

		Plate.prototype.isVegan = function(){
			for(var i = 0; i < ingredients.length; i++){
				if (FoodItem.vegan){
					return true
				}
				else return false
			}
		}

		Plate.prototype.isGlutenFree = function(){
			for(var i = 0; i < ingredients.length; i++){
				if (FoodItem.glutenFree){
					return true
				}
				else return false
			}
		}

		Plate.prototype.isCitrusFree = function(){
			for(var i = 0; i < ingredients.length; i++){
				if (FoodItem.citrusFree){
					return true
				}
				else return false
			}
		}

var Order = function(plate){
	this.plate = plate;
}

	Order.prototype.toString = function(){
			var ticket = "Your Order: " + this.plate;
			return ticket;
		}

var Menu = function(plate){
	this.plate = plate;
}

	Menu.prototype.toString = function(){
			var foodList = "Pick a Plate: " + this.plate;
			return foodList;
		}

var Restaurant = function(name, description, menu){
	this.name 	= name;
	this.description = description;
	this.menu = menu;
}

	Restaurant.prototype.toString = function(){
		var joint = "Welcome to: " + this.name + " Description: " + this.description + " Menu: " + this.menu;
		return joint;
	}

var Customer = function(dietaryPreference){
	this.dietaryPreference = dietaryPreference;
}

	Customer.prototype.toString = function(){
		var person = "Dietary Preference: " + this.dietaryPreference;
		return person;
	}

var burritoPlate = new Plate('Burrito', 'A delicious burrito! ', 8, [burrito, rice, beans]);

var guacamolePlate = new Plate('Guac', 'Green and Good ', 4, [guacamole, cornChips, salsa]);

var margaritaDrink = new Drink('Margarita', 'Top Shelf ', 12, [tequila, sweetSour, salt]);

var MexMenu = new Menu([burritoPlate, guacamolePlate, margaritaDrink]);

var MexRestaurant = new Restaurant('BoCoMex ', 'The worst Mexican food in Colorado!', MexMenu);

console.log(MexRestaurant.toString());

});
