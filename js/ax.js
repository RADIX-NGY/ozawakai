$(function(){
  $('.fnav-item a[href^="#"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
  $('.navbar-nav .nav-item a[href^="#"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    $("#navbar").collapse('hide');
    return false;
  });
  $('.anchor-scroll-g a[href^="#"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    // $("#navbar").collapse('hide');
    return false;
  });
  $('.anchor-scroll-s[href^="#"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    // $("#navbar").collapse('hide');
    return false;
  });
  // $('#mnav .mnav-container').clone().appendTo("#header2 .navbar-collapse");
  // var TargetPos = 190;
  // w = $(window).width();
  // $(window).scroll( function() {
  //   var ScrollPos = $(window).scrollTop();
  //    if (w > 767) {
  //        if( ScrollPos > TargetPos ) {
  //           $('#header2').slideDown();
  //        }
  //        else {
  //           $('#header2').slideUp();
  //        }
  //    }
  //    else{
  //     $('#header2').hide();
  //    }
  // });


  if (w <= 767) {
      hset1=$('.fnav-btn').outerHeight();
      hset2=$('#header').outerHeight();
      wh = $(window).outerHeight();
      nh = wh-(hset1+hset2);
      $('#navbar .navbar-container').css({height: nh+'px'});
  }
  else{
      $('#navbar .navbar-container').removeAttr('style');
  }
});


/* nav scroll show start */

var thisOffset;
var w = $(window).width();
$(window).on('load',function(){
  w = $(window).width();
  //$('#tracking').hide();
  if($('#main-image').length)
  {
    thisOffset = $('#main-image').offset().top;
  }
  else
  {
    thisOffset = $('#page-bg').offset().top;
  }

  if(w < 991){
    setTimeout(function(){
    $('#tracking').show();
    },200);
  }
  else
  {
    setTimeout(function(){
    $('#tracking').hide();
    },200);
  }
});

$(window).scroll(function(){
  w = $(window).width();
if (w > 991) {
  if($(window).scrollTop()>thisOffset){
    $('#tracking').show();
  } else {
    $('#tracking').hide();
  }
}
else
{
  $('#tracking').show();
}
});

$(window).resize(function() {
  w = $(window).width();
  if(w < 991){
    setTimeout(function(){
    $('#tracking').show();
    },200);
  }
  else
  {
    setTimeout(function(){
    $('#tracking').hide();
    },200);
  }
});
/* nav scroll show end */

$(window).resize(function() {
  w = $(window).width();
  if (w <= 767) {
      hset1=$('.fnav-btn').outerHeight();
      //hset2=$('#header').outerHeight();
      wh = $(window).outerHeight();
      nh = wh-(hset1);
      $('#navbar .navbar-container').css({height: nh+'px'});
  }
  else{
      $('#navbar .navbar-container').removeAttr('style');
  }
});



$(function() {
    if (!isPhone()){
      $('.fnav-btn .fnav-item .ico-tel').parent().hide();
        return;
    }
    else
    {

    $('[data-action=call]').each(function() {
        var $ele = $(this);
        var telorg = $(this).text();

        if(telorg==""){
          var telorg = $(this).children('img').attr('alt');
        }
        
        var telfix = telorg.replace(/[^0-9]/g, '');
        console.log(telfix);
        
        //if($ele.data('tel')!=""){telfix=$ele.data('tel');}

        $ele.wrap('<a href="tel:' + telfix + '"></a>');});
        //$ele.wrap('<a href="tel:' + $ele.data('tel') + '"></a>');});
    }
});

function isPhone() {
    return (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0);
}


$(function($) {
  
  var hdnav    = $('#header'),
  hdnoffset = hdnav.offset();
  
  $(window).scroll(function () {
     if($(window).scrollTop() > hdnoffset.top) {
        hdnav.addClass('fixed');
     } else {
        hdnav.removeClass('fixed');
     }
  });
});

// $(document).ready(function(){
//   var $hheight = $(window).height();
//   var $hdisplayHeight = ($hheight / 4);
//   var $hset = $('#header');
//   var scroll = $(window).scrollTop();
//   if(scroll > $hdisplayHeight) {
//     $hset.addClass('set-bg');
//   } else {
//     $hset.removeClass('set-bg');
//   }
// });

// $(function() {
//   var $hheight = $(window).height();
//   var $hdisplayHeight = ($hheight / 4);
//   $(window).scroll(function() {
//     var $hset = $('#header');
//     var scroll = $(window).scrollTop();
//     if(scroll > $hdisplayHeight) {
//       $hset.addClass('set-bg');
//     } else {
//       $hset.removeClass('set-bg');
//     }
//   });
// });


// $(document).ready(function() {
//     var hashTabName = document.location.hash;
//     if (hashTabName=="#t-basic") {
//         $('.nav-pills li a')[0].click();
//     }
//     else if (hashTabName=="#t-pro") {
//         $('.nav-pills li a')[1].click();
//     }
//     else if (hashTabName=="#t-athlete") {
//         $('.nav-pills li a')[2].click();
//     }
//     // else if (hashTabName=="#outline") {
//     //     $('.nav-pills li a')[1].click();
//     // }
//     else if (hashTabName=="#h-profile") {
//         $('.nav-pills li a')[1].click();
//     }
//     else if (hashTabName=="#f-profile") {
//         $('.nav-pills li a')[1].click();
//     }

$(".nav-item a").click(function() {
  $(this).parent().parent().parent().removeClass("show");
});



// });

// $(window).on("load", function(){
//     var agent = navigator.userAgent;
//     if(agent.search(/iPhone/) != -1 || agent.search(/iPad/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1){
//       var scrolledY = $(window).scrollTop();
//       h1=$("#header").outerHeight();
//       h2=$("#main-image").outerHeight();
//       if(h2 === undefined){h2=$("#page-bg").outerHeight();}
//       h3=$(".layer1").outerHeight();
//       h4=$(".layer2").outerHeight();
//       h5=$("#category-nav").outerHeight();
//       if(h5 === undefined){h5=0;}
//       $('.layer1').css('background-position', 'left ' + ((scrolledY-(h1+h2+h5))) + 'px');
//       $('.layer2').css('background-position', 'left ' + ((scrolledY-(h1+h2+h3+h5))) + 'px');
//       $('.layer3').css('background-position', 'left ' + ((scrolledY-(h1+h2+h3+h4+h5))) + 'px');
//     }
//     else
//     {
//       $('.layer1').css('background-attachment', 'fixed');
//       $('.layer2').css('background-attachment', 'fixed');
//       $('.layer3').css('background-attachment', 'fixed');
//     }
// })

// $(window).scroll(function() {
//     var agent = navigator.userAgent;
//     if(agent.search(/iPhone/) != -1 || agent.search(/iPad/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1){
//       var scrolledY = $(window).scrollTop();
//       h1=$("#header").outerHeight();
//       h2=$("#main-image").outerHeight();
//       if(h2 === undefined){h2=$("#page-bg").outerHeight();}
//       h3=$(".layer1").outerHeight();
//       h4=$(".layer2").outerHeight();
//       h5=$("#category-nav").outerHeight();
//       if(h5 === undefined){h5=0;}
//       $('.layer1').css('background-position', 'left ' + ((scrolledY-(h1+h2+h5))) + 'px');
//       $('.layer2').css('background-position', 'left ' + ((scrolledY-(h1+h2+h3+h5))) + 'px');
//       $('.layer3').css('background-position', 'left ' + ((scrolledY-(h1+h2+h3+h4+h5))) + 'px');
//     }
//     else
//     {
//       $('.layer1').css('background-attachment', 'fixed');
//       $('.layer2').css('background-attachment', 'fixed');
//       $('.layer3').css('background-attachment', 'fixed');
//     }
// });


// function init() {
//     var px_change   = 200;
//     window.addEventListener('scroll', function(e){
//         if ( $(window).scrollTop() > px_change ) {
//             $("#wrapper").addClass("scroll-down");
//         } else if ( $("#wrapper").hasClass("scroll-down") ) {
//             $("#wrapper").removeClass("scroll-down");
//         }
//     });
// }
// window.onload = init();

/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="bfred-it:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

objectFitImages('.main img');
objectFitImages('.main-sub img');
objectFitImages('.slider img');
objectFitImages('.page-bg img');
objectFitImages('.bg-section img');
objectFitImages('.bg-cover img');
objectFitImages('.bg-4by3 img');
objectFitImages('.bg-3by2 img');
objectFitImages('.bg-1by1 img');
objectFitImages('.catalogue-img img');
objectFitImages('.bg-footer img');

$(function(){
     var hashTabName = document.location.hash;
     if (hashTabName!="") {
       setTimeout(function(){
       var position = $(hashTabName).offset().top;
       $("html, body").animate({scrollTop:position}, 0, "swing");
       },1000);
     }
});



AOS.init({
  offset: 50,
  duration: 1200,
  delay: 0,
  once: true,
  easing: 'ease-in-out-back',
  disable: 'mobile',
  disable: function () {
  var maxWidth = 1050;
  return window.innerWidth < maxWidth;
  }
});


$('input').on('change', function () {
    var file = $(this).prop('files')[0];
    $('.form-file-text').text(file.name);
});