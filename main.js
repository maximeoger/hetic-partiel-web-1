var ui = {
    back_to_top : document.getElementById("backtotop"),
    header : document.getElementById('header-wrapper')
}


document.addEventListener('scroll', function(){
    console.log(event);
    if( window.pageYOffset > 200 ){
        ui.back_to_top.classList.add('visible');
    }else{
        ui.back_to_top.classList.remove('visible');
    }
});

document.addEventListener('wheel', function(event){
    if(event.deltaY >= 0){
        console.log(event.deltaY);
        ui.header.classList.add('header-is_hidden');
    }else{
        ui.header.classList.remove('header-is_hidden');
    }
});

ui.back_to_top.addEventListener('click', function(){
    document.documentElement.scrollTop = document.body.scrollTop = 0;
    ui.header.classList.remove('header-is_hidden');
});