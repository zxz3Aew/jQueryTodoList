//check off specific todo by clicking
$('ul').on('click', 'li',function(){ //click the <li> inside the <ul>
    // //if li is gray
    // if($(this).css('color') === 'rgb(128, 128, 128)'){
    //     //turn it black & remove line-through
    //     $(this).css({
    //         'color': 'black',
    //         'textDecoration': 'none'
    //     })
    // }
    // //else turn it gray & line-through
    // else{
    //     $(this).css({
    //         'color': 'gray',
    //         'textDecoration': 'line-through'
    //     })
    // }

    $(this).toggleClass('completed');
}); 

//click on X to delete todo
$('ul').on('click', 'span', function(e){ //this code runs when clicked the <span> inside the <ul> => this is what the second argument here means
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
})

//create a new todo
$(':text').keypress(function(e){
    if(e.which === 13){
        //grabbing new todo text from input
        let todoText = $(this).val();
        //clear input
        $(this).val('');
        //create a new li and add to ul
        $('ul').append('<li><span><i class="fas fa-trash"></i></span> ' + todoText +'</li>');
    }
});

//toggle the add new todo button
$('.fa-plus').click(function(){
    $(':text').fadeToggle();
});