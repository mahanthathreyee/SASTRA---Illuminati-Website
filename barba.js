var preloaderImage = new Image();
$(document).ready(() => {
    Barba.Pjax.start();
    preloaderImage.src = 'preloader.gif';
});


var FadeTransition = Barba.BaseTransition.extend({
    start: function() {

        Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));

        $('.preloader').fadeIn('slow').css({
            'display': 'flex'
        });
        $('.preloader').prepend(preloaderImage);
    },

    fadeOut: function() {
        $(this.oldContainer).animate({
            opacity: 0
        });
        return $(this.oldContainer).hide().promise();
    },

    fadeIn: function() {
        this.done();
    }
});


Barba.Pjax.getTransition = function() {
    return FadeTransition;
};

Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus, container) {

    if ($('.barba-container').attr('data-location') == 'magazine') {
        $.ajax({
            url: "modernizr.2.5.3.min.js",
            dataType: "script"
        });
        $.ajax({
            url: "hash.js",
            dataType: "script"
        });
        $.ajax({
            url: "flipbook.js",
            dataType: "script"
        });
        $('link[href="index.css"]').remove();
        $('link[href="members.css"]').remove();
    } else if (($('.barba-container').attr('data-location') == 'main')) {
        $('link[href="members.css"]').remove();
        $('link[href="magzine.css"]').remove();
        $('head').prepend('<link rel="stylesheet" type="text/css" href="index.css">');
        $('head').prepend('<link rel="stylesheet" type="text/css" href="flicker.css">');
        $('head').prepend('<link rel="stylesheet" type="text/css" href="linkHover.css">');
    } else if (($('.barba-container').attr('data-location') == 'members')){
        $('link[href="index.css"]').remove();
        $('link[href="magazine.css"]').remove();
        $('head').prepend('<link rel="stylesheet" type="text/css" href="members.css">');
    }
});

Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus, container) {
    $('.barba-container').hide();
    $('.preloader').fadeIn('slow').css({
        'display': 'flex'
    });
    if ($('.preloader > img').length == 0)
        $('.preloader').prepend(preloaderImage);
    var lenImages = $('img').length;
    var tmpImgCount = 0;
    var completeFlag = 0;
    $('img').each(function() {
        var tmpImg = new Image();
        console.log($(this).attr('src'));
        if ($(this).attr('src') == undefined) {
            lenImages--;
            return true;
        }
        tmpImg.src = $(this).attr('src');
        tmpImg.onload = () => {
            ++tmpImgCount;
            console.log(lenImages + ' ' + tmpImgCount);
            $('.preloader > span').css({
                'width': parseInt(tmpImgCount / lenImages * 100) + '%'
            });
            if (tmpImgCount == lenImages) {
                $('.preloader > span').css({
                    'width': '0'
                });
                $('.preloader').fadeOut('slow');
                $('.preloader > img').remove()
                $('.barba-container').show();
            }
        };
    });
    if (completeFlag == 1 || lenImages == 0) {
        $('.preloader > span').css({
            'width': '0'
        });
        $('.preloader').fadeOut('slow');
        $('.preloader > img').remove()
        $('.barba-container').show();
    }
});