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

  if ($('.barba-container').attr('data-location') != 'main') {
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
  } else {
    $('head').prepend('<link rel="stylesheet" type="text/css" href="index.css">');
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
  $('img').each(function() {
    var tmpImg = new Image();
    console.log($(this).attr('src'));
    if($(this).attr('src') == undefined){
      lenImages --;
      return true;
    }
    tmpImg.src = $(this).attr('src');
    tmpImg.onload = () => {
      ++tmpImgCount;
      $('.preloader > span').css({
        'width': parseInt(tmpImgCount / lenImages * 100) + '%'
      })
      if (tmpImgCount == lenImages) {
        console.log('completed Loading');
        $('.preloader > span').css({
          'width': '0'
        });
        $('.preloader').fadeOut('slow');
        $('.preloader > img').remove()
        $('.barba-container').show();
      }
    };
  });
});