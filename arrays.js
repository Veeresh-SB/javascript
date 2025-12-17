// const users = [
//     { id: 1, name: "Yash", age: 25 },
//     { id: 2, name: "Amit", age: 22 },
//     { id: 3, name: "Ravi", age: 28 },
//     { id: 4, name: "Neha", age: 24 }
// ];

// const use = users.find(u => u.age === 25);        // first matching element
// const user = users.findLast(u => u.age === 25);   // last matching element
// const filter = users.filter(u => u.age === 25);   // all matching elements

// // FIXED map syntax + logic
// const map = users.map(u => u.name === "Yash");

// console.log(user);
// console.log(use);
// console.log(filter);
// console.log(map);

// const user = {
//     name: "ASDF",
//     height: 5.5
// };

// // Choose ONE of these (not both)

// // Object.freeze(user); // ❄️ no add, no delete, no modify
// Object.seal(user);      // 🔒 modify allowed, add/delete NOT allowed

// user.name = "DON";     // works with seal
// user.sal = 35;         // ignored (cannot add)
// delete user.height;    // ignored (cannot delete)

// console.log(user);

let numbers = [1, 2, 3, 4];

// Using forEach (just prints, does not create new array)
numbers.forEach(function (number) {
    console.log(number * 2);
});

// Using map (creates new array)
let double = numbers.map(function(num) {
    return num * 2;
});

console.log(double);

