document.addEventListener('scroll', () => {   
    let scroll_pos = $(this).scrollTop();
    if(scroll_pos+ 100 >= $('.main').offset().top - 500&& scroll_pos+ 100 <= $('.main').offset().top + $('.main').height() - 200){
        $('.main').addClass('team1');
        $('.main').addClass('main1');
    }
    else{
        $('.main').removeClass('team1');
        $('.main').removeClass('main1');
    }
    if(scroll_pos+ 100 >= $('.cybertech').offset().top - 500&& scroll_pos+ 100 <= $('.cybertech').offset().top + $('.cybertech').height() - 200){
        $('.cybertech').addClass('team1');
        $('.cybertech').addClass('cybertech1');
    }
    else{
        $('.cybertech').removeClass('team1');
        $('.cybertech').removeClass('cybertech1');
    }
    if(scroll_pos+ 100 >= $('.magnatech').offset().top - 500&& scroll_pos+ 100 <= $('.magnatech').offset().top + $('.magnatech').height() - 200){
        $('.magnatech').addClass('team1');
        $('.magnatech').addClass('magnatech1');
    }
    else{
        $('.magnatech').removeClass('team1');
        $('.magnatech').removeClass('magnatech1');
    }
    if(scroll_pos+ 100 >= $('.niyantra').offset().top - 500&& scroll_pos+ 100 <= $('.niyantra').offset().top + $('.niyantra').height() - 200){
        $('.niyantra').addClass('team1');
        $('.niyantra').addClass('niyantra1');
    }
    else{
        $('.niyantra').removeClass('team1');
        $('.niyantra').removeClass('niyantra1');
    }
    if(scroll_pos+ 100 >= $('.structura').offset().top - 500&& scroll_pos+ 100 <= $('.structura').offset().top + $('.structura').height() - 200){
        $('.structura').addClass('team1');
        $('.structura').addClass('structura1');
    }
    else{
        $('.structura').removeClass('team1');
        $('.structura').removeClass('structura1');
    }
    if(scroll_pos+ 100 >= $('.design').offset().top - 500&& scroll_pos+ 100 <= $('.design').offset().top + $('.design').height() - 200){
        $('.design').addClass('team1');
        $('.design').addClass('design1');
    }
    else{
        $('.design').removeClass('team1');
        $('.design').removeClass('design1');
    }
});
