
// Exercise 1
const newPerson = $("#text-box"); 
const addButton = $("#add");
$("body").append(`<ul id="list"></ul>`) 

addButton.on("click",function(){
   $("#list").append(`<li>${newPerson.val()}</li>`) 
   newPerson.val(" ");
})

// $("#list").on("click","li",function(){
//     $(this).remove()
// })

// Exercise 3
// const firstSqare = $("<div id='square1' class='box'><div>");
// const secondSqare = $("<div id='square2' class='box'><div>");
// const container = $("<div id='container'><div>");

// $("body").append(container);
// $("#container").append(firstSqare); 
// $("#container").append(secondSqare); 

// $("#container").on("mouseover",".box",function(){
//     $(".box").css("background-color","red");
//     $(this).css("background-color","purple");
// })


$(".item").on("click",function(){
    if($(this).data().instock){
        $("#cart").append(`<div>${$(this).text()}</div>`)
    }
})





