var lastpos = 0;
document.addEventListener('scroll', () => {   
    let scroll_pos = $(this).scrollTop();
    if(scroll_pos - lastpos > 0
        && scroll_pos/$('.starting-section').height() * 100 > 60){
            anime({
                targets: '.sticky-header',
                height: '100px',
                duration: 50,
                easing: 'easeOutQuint'
            });        
            $('.sticky-header > img').css({height:"100px"});
    }
    else if(scroll_pos - lastpos < 0
        && scroll_pos/$('.starting-section').height() * 100 < 60){
            $('.sticky-header > img').css({height:"0"}); 
            anime({
                targets: '.sticky-header',
                height: '0',
                duration: 50,
                easing: 'easeOutQuint',
            });  
    }

    lastpos = scroll_pos;
});

function scroll_down_page(){
    $("html,body").animate({scrollTop: $('.container').offset().top});               
}

function scroll_up_page(){
    $("html,body").animate({scrollTop: 0});                   
}