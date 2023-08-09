console.log("hello world");
console.log("It's really good");
// window.alert("hello");

// --------VARIABLES--------
// let, var, const.

let age = 21;
let name = "John";
let student = true;

console.log(age);
console.log("Hello", name);

//document.getElementById("p1").innerHTML = "Hello " + name;
//document.getElementById("p2").innerHTML = "You are " + age + "years old";
//document.getElementById("p3").innerHTML = "Enrolled: " + student;

let students = 20; 
//students+=1;
let extraStudents = students%3;

let result = 1+2 * 3+4;
console.log(result);

//let username = window.prompt("What's your name?");
let username;
console.log(username);

document.querySelector("#myBTN").onclick = function() {

    username = document.getElementById("myText").value;
    console.log(username);
};
