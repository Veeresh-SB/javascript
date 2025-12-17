// const student = {
//     name :"Abcd",
//     age : 25,
//     studentId:"STD001"
// }
// console.log(student.studentId); //accessing the object using dot notation 
// console.log(student['studentId']); // accessing th objectt using bracts 


const student = {
    name: "Abcd", 
    age: 35,
    studentId: "STD001",
    greet: function () {
        console.log("hello " + this.name);
        console.log("i am " + this.age);
        console.log("my ID " + this.studentId);
    }
};

// Modify existing property
student.age = 28;

// Add new property
student.New = "New Name";

// Delete a property (correct syntax)
delete student.New;

// Access a non-existing property
console.log(student.course); // undefined because key does not exist

// Print the object
console.log(student);

// //below exples of the object method 
// //to get all ey was in object 
// console.log(Object.keys(student));
// //too get all values in object
// console.log(Object.values(student));
// // student.greet();
// console.log(Object.entries(student));
