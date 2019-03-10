$(window).on('load', ()=>{
    window.scrollTo(0,0);
    setTimeout(() => {
        $('.landing-view > .logo > span').animate({'width':"100%"}, 1300);
    }, 1000  );
});

function scroll_down_page1(){
    $(".container").moveDown();
}