// const mathOperations = function(){
//     const add = function(x, y){
//         return x + y
//     }
//     return add
// }

// const foo = function () {
//     const x = 1
  
//     const bar = function () {
//       console.log(x) //notice this inner function using the outer function's variable
//     }
  
//     return bar
//   }
  
//   const baz = foo() //out here, x doesn't exist
//   baz() //but when we invoke baz, we're printing x!

//Spot Check 1

// const family = () =>{
//     members = [];
//     const birth = name =>{
//         members.push(name);
//         console.log(members);
//     }
//     return birth;
// }

// const giveBirth = family(); 

// giveBirth("Hagai");
// giveBirth("Shahar");
// giveBirth("Ziv");

//=======
//Modules
//=======

// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }

//     return {
//         add,
//         subtract,
//         multiply,
//         divide
//     }
// }

// let myCalc = mathOperations();
// console.log(myCalc.add(13,29));
// console.log(myCalc.multiply(1.75,24));
// console.log(myCalc.multiply(7,myCalc.divide(36,6)));

// Clouseres & modules 

// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// // usersModule.listUsers()
// usersModule.addUser('Ziv')
// usersModule.addUser('Elyahu')
// usersModule.listUsers()

// Exercise 1

// const StringFormatter = function(){
//     const capitalizeFirst = (str) =>{
//         return str[0].toUpperCase()+ str.slice(1);
//     }
//     const skewerCase = (str) =>{
//         return str.split(" ").join("-");
//     }
//     return{
//         capitalizeFirst,
//         skewerCase
//     }
// }

// const formatter = StringFormatter()
// console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
// console.log(formatter.skewerCase("blue box is a very cool product")) //should print blue-box

//Excercise 2 

// const Bank = function(){
//     let _money = 500;
//     const depositCash = cash =>{
//         money += cash;
//     }
//     const checkBalance = () =>{
//         console.log(_money);
//     }

//     return{
//         deposit:depositCash,
//         showBalance:checkBalance
//     }
// }

// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950

//Exercise 3
// const SongsManager = function(){
//     const _start = "https://www.youtube.com/watch?v="
//     const _songs = {
//         "sax": "3JZ4pnNtyxQ",
//         "how long": "CwfoyVa980U"
//     }
//     const addSong = (songName , url) =>{
//         let equalSignIndex = url.indexOf("=") + 1;
//         _songs[songName] = (url.slice(equalSignIndex))
//     }
//     const getSong = (song) =>{
//         console.log(_start + _songs[song]);
//     }

//     return{addSong, getSong}
// }

// const songsManager = SongsManager()
// songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
// songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
// songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

// songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
// songsManager.getSong("how long") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
// songsManager.getSong("ain't me") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ


