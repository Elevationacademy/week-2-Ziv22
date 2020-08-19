const posts = [
                {
                name:"ziv",
                text:"Hi"
                },
                {
                name:"Yonatan",
                text:"Bye"
                }
            ];

const render =  function(){
    $("#result-container").empty();

    for(post in posts){
        $("#result-container").append(`<p class="list-item"><strong>${posts[post].name}:</<strong> ${posts[post].text}</p>`)
    }
}

$("#submit").on("click",function(){
    const name = $("#name").val()
    const text = $("#text").val()
    posts.push({name,text})
    $("#name").val(" ")
    $("#text").val(" ")
    render();
})

$("#result-container").on("click",".list-item",function(){
    for(post in posts){
        const name = $(this).text()
        if(`${posts[post].name}: ${posts[post].text}`  == name){
            posts.splice(post,1);
        }
    }
    render();
})

render();



