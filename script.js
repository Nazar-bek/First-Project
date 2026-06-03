// let name = "Nazarbek";

// let user = {
//   name: "Ali",
//   city: "Toshkent",
// };

// let { age = 18} = user;

// console.log(age);

// let arr1 = [1,2,3,4]
// let arr3 = [5,6,7,8]
// let newArr = [...arr1, ...arr3]
// console.log(newArr);

// let user= {
//   name:"Ali",
//   age:20
// };

// let newUser = {
//     ...user,
//     city: "Tashkent"
// }

// console.log(newUser);

// function sum(name, ...numbers) {
//   console.log(name);

//   console.log(numbers);
// }

// sum("Nazarbek", 1, 2, 4, 5, 6, 7, 6);


// let arr = [1,2,3];

// let result = arr.forEach(num => num*2)

// console.log(arr);

let user= {
  name:"Ali",
  age:20,
  address: {
    city: "Tashkent"
  }
};

let copy =JSON.parse(JSON.stringify(user))
copy.address.city = "Vali"
console.log(user.address.city);


// let copy = {
//     ...user,
// }

// copy.address.city = "Vali"
// console.log(user.address.city);

