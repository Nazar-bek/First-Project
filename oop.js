// class Car {
//   constructor(brand, model, color) {
//     this.brand = brand;
//     this.model = model;
//     this.color = color;
//   }

//   brandCar() {
//     console.log(`The brand: ${this.brand}`);
//   }
//   fullInfo(){
//     console.log(`The car: ${this.brand}, ${this.model}, ${this.color}`);
//   }
// }

// const car = new Car("Toyoto", "camri", "black");
// car._speed = 100
// console.log(car.speedGet);

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   makeSound() {
//     throw new Error("makeSound() metodini implementatsiya qilish kerak!");
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     console.log(`${this.name} akkilaydi`);
//   }
// }

// const dog = new Dog("Sharik")

// class Vihicle{
//     constructor(brand, model){
//         this.brand = brand
//         this.model = model
//     }

//     displayInfo(){
//         console.log(`${this.brand} ${this.model}`);
//     }
// }

// class Car extends Vihicle{
//     constructor(brand,model, year){
//         super(brand, model)
//         this.year = year
//     }

//     displayInfo(){
//         super.displayInfo()
//         console.log(this.year);

//     }
// }
// const myCar = new Car("BMW", "M5 F90", 2024)

// myCar.displayInfo()
class Animal {
  speak() {
    console.log("Hayvonni ovozi yozilishi kerak");
  }
}

class Dog extends Animal{
    speak(){
        console.log("It akkilaydi");
    }
}

class Cat extends Animal{
    speak(){
        console.log("mushuk muyovlaydi");
    }
}

const dog = new Dog()
const cat = new Cat()
dog.speak()
cat.speak()