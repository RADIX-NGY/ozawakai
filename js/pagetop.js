$(document).ready(function(){
  $('body').append('<div id=\"pagetop\"></div>');
  var $height = $(window).height();
  var $displayHeight = ($height / 4);
  var $btn = $('#pagetop');
  var scroll = $(window).scrollTop();
  if(scroll > $displayHeight) {
    $btn.addClass('is-active');
  } else {
    $btn.removeClass('is-active');
  }
});
$(function() {
  var $root = $('html, body');
  var $btn = $('#pagetop');
  $btn.click(function() {
    var scroll = $(window).scrollTop();
    $root.animate({
      scrollTop: 0
    },
    {
      duration: 1000,
      easing: 'swing'
    });
  });
});
$(function() {
  var $height = $(window).height();
  var $displayHeight = ($height / 4);
  $(window).scroll(function() {
    var $btn = $('#pagetop');
    var scroll = $(window).scrollTop();
    if(scroll > $displayHeight) {
      $btn.addClass('is-active');
    } else {
      $btn.removeClass('is-active');
    }
  });
});