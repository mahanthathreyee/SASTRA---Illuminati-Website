$(document).ready(() => {
  Barba.Pjax.start();
});


var FadeTransition = Barba.BaseTransition.extend({
  start: function() {

    Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));

    $('.preloader').fadeIn('slow').css({
      'display': 'flex'
    });
    $('.preloader > img').attr('src', 'preloader.gif');
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
    $('head').append('<link rel="stylesheet" type="text/css" href="index.css">');
  }
});

Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus, container) {
  $('.barba-container').hide();
  $('.preloader').fadeIn('slow').css({
    'display': 'flex'
  });
  if ($('.preloader > img').attr('src') == '')
    $('.preloader > img').attr('src', 'preloader.gif');
  var lenImages = $('img').length;
  var tmpImgCount = 0;
  $('img').each(function() {
    var tmpImg = new Image();
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
        $('.preloader > img').attr('src', '');
        $('.barba-container').show();
      }
    };
  });
});