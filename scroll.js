var lastpos = 0;
document.addEventListener('scroll', () => {   
    let scroll_pos = $(this).scrollTop();
    if(scroll_pos - lastpos > 0
        && scroll_pos/$('.starting-section').height() * 100 > 0
        && scroll_pos <= $('.container').offset().top){
            window.scrollTo(0, $('.container').offset().top+1);   
            if($(this).scrollTop() == $('.container').offset().top){
                anime({
                    targets: '.sticky-header',
                    height: '100px',
                    duration: 50,
                    easing: 'easeOutQuint'
                });        
                $('.sticky-header > img').css({height:"100px"});
            }
    }
    else if(scroll_pos - lastpos < 0
        && scroll_pos/$('.starting-section').height() * 100 < 100){
            $('.sticky-header > img').css({height:"0"}); 
            anime({
                targets: '.sticky-header',
                height: '0',
                duration: 50,
                easing: 'easeOutQuint',
                complete: ()=>{
                    window.scrollTo(0, 0);                 
                }
            });  
    }

    lastpos = scroll_pos;
});

function scroll_down_page(){
    window.scrollTo(0, $('.container').offset().top);
}

function scroll_up_page(){
    window.scrollTo(0, 0);
}