// $(".remove").on("click", function(){
//     alert($(this).closest(".post").data().id)
//  })
// $(".remove").on("click", function(){
//     alert($(this).closest(".post").find(".comment").text())
//   })
//Spot Check 1
// const $btn = $("button"); 
// $btn.on("click", function(){
//     const $current = $(this); 
//     console.log($current.closest    ("div").find("span").text())
// })
//Spot Check 2
// const $btn = $("button");
// $btn.on("click",function(){
//     console.log($(".container").find("p").text())
// })

// Excercise

const $generator = $(".generator")
const $validator = $(".validator")

$generator.on("click", function(){
    const $current = $(this)
    const $currentProcessor = $current.closest(".processor")
    const $currentComputer = $current.closest(".computer")

    const obj = {
                cmp_id: $currentComputer.data().id,
                processor_id:$currentProcessor.attr('id'),
                BUS_number:$currentComputer.find(".BUS").text()
                }

    console.log(`processor-id:${obj.processor_id} \ncomputer-id:${obj.id}\nBUS-Number: ${obj.BUS_number}`)
})

$validator.on("click", function(){
    const $current = $(this);
    const $currentComputer = $current.closest(".computer") 
    const $currentGenerator =  $currentComputer.find(".generator")
    const $currentMB =  $currentComputer.find(".MB")

    console.log($currentGenerator.text())
    console.log($currentMB.text())
    console.log($currentComputer.find(".QR").first().text())
    console.log($currentComputer.find(".QR").last().text())
})