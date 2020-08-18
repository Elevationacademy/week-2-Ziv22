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
const timer =  setInterval(function(){
    console.log(new Date())
  }, 1000)

const stop = () =>{clearInterval(timer)};

  