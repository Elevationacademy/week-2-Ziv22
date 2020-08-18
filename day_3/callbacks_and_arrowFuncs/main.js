//Spot Check 1 

// const first = function(callback){
//     setTimeout(function(){
//         console.log("should be first");
//         callback();
//     }, 3000)
// }
// const second = function(){
//     console.log("should be second");
// }

// first(second);

// SPot check 2 

// let users = []

// const getData = function (func) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         func()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)


//Spot check 3 
// const timer =  setInterval(function(){
//     console.log(new Date())
//   }, 1000)

// const stop = () =>{clearInterval(timer)};

//Spot Check 4  
// const square = number => number * number
// console.log(square(4));

//Spot Check 5
// const getFormalTitle = (title, name) => `${title} ${name}`
// formalTitle = getFormalTitle("Madamme", "Pomfrey")
// console.log(formalTitle)

//THIS
// const suspenseBuilder = {
//   name: "El Mysterio",
//   displayName: function() {

//       console.log("You are going to see the name in 3 seconds...")

//       setTimeout(()=> { //this is the change
//         console.log("The name is: " + this.name)
//     }, 3000)

//   }
// }

// suspenseBuilder.displayName()

//Exercise 1 - Callbacks
// const push = function () {
//   console.log("pushing it!")
// }

// const pull = function () {
//   console.log("pulling it!")
// }

// const pushPull = func => func()

// pushPull(push) //should print "pushing it!"
// pushPull(pull) //should print "pulling it!"


// Exercise 2 - Callbacks
// const returnTime = function (time) {
//   alert('The current time is: ' + time)
// }

// const getTime = (func) =>{
//   const time = new Date()
//   func(time)
// }

// getTime(returnTime)


// Exercise 3 - Callbacks

// const displayData = function (alertDataFunc, logDataFunc, data) {
//   alertDataFunc(data);
//   logDataFunc(data);
// };

// displayData(alert, console.log, "I like to party")

//Exercise 4 - Arrow Functions
// const getSum = (a ,b ,c) => a+b+c
// console.log(getSum(1,2,3));

// Exercise 5 - Arrow Functions

// const capitalize = str => str[0].toUpperCase()+str.slice(1)
// console.log(capitalize("ziv"));  

//Exercise 6 - Arrow functions
// const determineWeather = temp => {
//   if(temp > 25){
//     return "hot"
//   }
//   return "cold"
// }

// const commentOnWeather = temp => `it's ${determineWeather(temp)}`

// console.log(commentOnWeather(30)) //returns "It's hot"
// console.log(commentOnWeather(22)) //returns "It's cold"

// Exercise 7
const explode = (lightFunc, soundFunc, sound) => {
  lightFunc()
  soundFunc(sound)
}
	
const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
	
const makeSound = sound => alert(sound)
	
explode(shineLight, makeSound, "BOOM")
