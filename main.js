var ui = {
    back_to_top : document.getElementById("backtotop")
}


document.addEventListener('scroll', function(){
    if( window.pageYOffset > 200 ){
        ui.back_to_top.classList.add('visible');
    }else{
        ui.back_to_top.classList.remove('visible');
    }
});

ui.back_to_top.addEventListener('click', function(){
    document.documentElement.scrollTop = document.body.scrollTop = 0;
});