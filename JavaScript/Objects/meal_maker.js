const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    
    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizersIn) {
      this._appetizers = appetizersIn;
    },
    get mains() {
      return this._mains;
    },
    set mains(mainsIn) {
      this._mains = mainsIn;
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertsIn) {
      this._desserts = dessertsIn;
    },
  },
  
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
},
  
  ///===============================================================
  
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    
    this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
  },
};

menu.addDishToCourse('appetizers', 'Conch Salad', 10.50);
menu.addDishToCourse('appetizers', 'Grouper Fingers', 7.25);
menu.addDishToCourse('appetizers', 'Conch Fritters', 5.50);

menu.addDishToCourse('mains', 'Grouper Dinner', 22.95);
menu.addDishToCourse('mains', 'Surf and Turf', 34.95);
menu.addDishToCourse('mains', 'Grilled Snapper', 22.95);

menu.addDishToCourse('desserts', 'Guava Duff', 6.00);
menu.addDishToCourse('desserts', 'Pineapple Tart', 4.50);
menu.addDishToCourse('desserts', 'Banana Bread', 5.15);

let meal = menu.generateRandomMeal();

console.log(meal);
