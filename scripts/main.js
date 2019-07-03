$(document).ready(function() {
    $('.menu-toggler').on('click' , function(){  
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
        
    });

});

function countLetter(ass, tities){
    var result = 0;
    for (let index = 0; index < ass.length; index++) {
        if(ass[i] == titiels){
            result ++;
        }
        
    }
    return result;
}