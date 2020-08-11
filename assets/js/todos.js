// check item as done by clikcing
let items = $("ul")
items.on("click","li",(function(){
    // uncheck item if already checked or check if completed
    $(this).toggleClass("completed");
})); 

//delete item if x is clicked
let deleteitem = $("ul")
deleteitem.on("click","span",(function(e){
    
    $(this).parent().fadeOut(500,function(){$(this).remove()});
    e.stopPropagation();

}));
$("input[type='text']").keypress(function(e){
    if(e.which === 13)
    {   //adding new todo
        let newtodo = $(this).val();
        $(this).val("");
        //create new li and add todo
        $('ul').append(`<li><span><i class="fa fa-trash"></i></span> ${newtodo} </li>`)
    }
});
$("h1").on("click",".fa-minus",(function(){
    $("input[type='text']").fadeOut();
    $("h1").html("TO-DO LIST <i class='fa fa-plus'></i>")
}));
$("h1").on("click",".fa-plus",(function(){
    $("input[type='text']").fadeIn();
    $("h1").html("TO-DO LIST <i class='fa fa-minus'></i>")
}));