var FoodItem = function(name, cal, vegan, glutenFree, citrusFree){
	
	this.name		= name;
	this.cal		= cal;
	this.vegan		= vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
}

	

	FoodItem.prototype.toString = function(){
		var menu = "Name: " + this.name + " Calories: " + this.cal + " Vegan: " + this.vegan + " Gluten Free: " + this.glutenFree + " Citrus Free: " + this.citrusFree;
	}

	var BucketOCat = new FoodItem('Fifi', 235, false, true, false);
	var roadKillSpecial = new FoodItem('Squirrel', 120, false, true, true);
	var vegetarianNightmare = new FoodItem('CabbagePatchKid', 500, true, false, false);

// FoodItem.prototype.toString()
	console.log(BucketOCat);
	console.log(roadKillSpecial);
	console.log(vegetarianNightmare);


var Drink = function(name, description, price, ingredients){

	this.name 			= name;
	this.description	= description;
	this.price			= price;
	this.ingredients	= ingredients;
}

var Plate = function(name, description, price, ingredients){

	this.name 			= name;
	this.description	= description;
	this.price			= price;
	this.ingredients	= ingredients;
}

var Order = function(plate){
	this.plate = plate;
}

var Menu = function(plate){
	this.plate = plate;
}

var Restaurant = function(name, description, menu){
	this.name 	= name;
	this.description = description;
	this.menu = menu;
}

var Customer = function(dietaryPreference){
	this.dietaryPreference = dietaryPreference;
}

Drink.prototype.toString = function(){
		var beverage = "Name: " + this.name + " Description: " + this.description + " Price: " + this.price + " Ingredients: " + this.ingredients;
	}

Plate.prototype.toString = function(){
		var dinner = "Name: " + this.name + " Description: " + this.description + " Price: " + this.price + " Ingredients: " + this.ingredients;
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

Order.prototype.toString = function(){
		var ticket = "Your Order: " + this.plate;
	}

Menu.prototype.toString = function(){
		var foodList = "Pick a Plate: " + this.plate;
	}

Restaurant.prototype.toString = function(){
	var joint = "Name of Joint: " + this.name + " Description: " + this.description + " Menu: " + this.menu;
}

Customer.prototype.toString = function(){
	var person = "Dietary Preference: " + this.dietaryPreference;
}







