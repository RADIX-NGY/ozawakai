function initTop() {
    $(".txt-mv").addClass("active")
}
function setCommonTop(e) {
    $(".cover-bg").animate({
        width: "100%"
    }, 200, "easeInQuart", function () {
        $(".cover-bg2").animate({
            width: "100%"
        }, 200, "easeInQuart", function () {
            $(".cover-bg3").animate({
                width: "100%"
            }, 200, "easeInQuart", function () {
                setTimeout(function () {
                    $(".block-top").addClass(
                        e
                            ? "fadeie"
                            : "fade"
                    ),
                    setTimeout(function () {
                        $(".block-top").hide(),
                        $(".wrapper-home").show(),
                        $("#slider").sliderPro({
                            width: 850,
                            height: 520,
                            fade: !0,
                            arrows: !1,
                            fadeArrows: !1,
                            buttons: !1,
                            touchSwipe: !1,
                            autoplayOnHover: "none",
                            autoplay: !0,
                            fadeDuration: 1e3,
                            autoplayDelay: 4e3,
                            breakpoints: {}
                        }),
                        $(".wrapper-home").hide(),
                        $(".wrapper-home").fadeIn(600, function () {
                            $(".txt-mv").addClass("active"),
                            AOS.init({
                                easing: "ease-out-cubic",
                                delay: 200,
                                offset: 0,
                                duration: 500,
                                once: !0
                            })
                        })
                    }, 1e3)
                }, 1400)
            })
        })
    })
}
$(function () {
    function e() {
        $("svg").each(function () {
            var e = $(this);
            if ("none" == e.css("display"))
                return !0;

            var t = e.width(),
                o = e
                    .context
                    .viewBox
                    .baseVal,
                n = o.width,
                i = o.height,
                a = i * t / n;
            e.height(a)
        })
    }
    var t = navigator.userAgent;
    (t.indexOf("iPhone") > 0 && -1 == t.indexOf("iPod") || t.indexOf("Android") > 0 && t.indexOf("Mobile") > 0 && -1 == t.indexOf("SC-01C") && -1 == t.indexOf("A1_07")) && $(".tel-link").each(function () {
        var e = $(this).find("img"),
            t = e.length
                ? e.attr("alt")
                : $(this).text();
        $(this).wrap("<a href='tel:" + t.replace(/-/g, "") + "'></a>")
    }),
    $("a[href^=#].scroll-link").click(function () {
        var e = 400,
            t = $(this).attr("href"),
            o = $(
                "#" == t || "" == t
                    ? "html"
                    : t
            ),
            n = o.offset().top - 50;
        return $("body,html").animate({
            scrollTop: n
        }, e, "swing"),
        !1
    }),
    $(".match").matchHeight(),
    $(".scroll-top").click(function () {
        return $("body,html").animate({
            scrollTop: 0
        }, 500),
        !1
    });
    var o = $("#nav-fixed");
    if ($(window).scroll(function () {
        $(window).scrollTop() > 80
            ? o.addClass("scrolled")
            : o.removeClass("scrolled")
    }), $(".wrapper-home").length) {
        var n = t.indexOf("MSIE "),
            i = $(".bar-preload"),
            a = [
                "img/common/bg-top-01.jpg", "img/common/bg-top-02.jpg", "img/common/bg-top-03.jpg", "img/common/bg-top-04.jpg"
            ],
            s = new $.ImgLoader({
                srcs: a,
                pipesize: 1,
                delay: 200,
                timeout: 500,
                useXHR2: !1
            });
        if (s.on("progress", function (e) {
            var t = e.loadedRatio;
            i.animate({
                width: 100 *t
            }, 300)
        }), s.on("allload", function () {
            i.animate({
                width: "100%"
            }, 300, "linear", function () {
                $(".content-block-top").addClass("show"),
                setTimeout(function () {
                    i.hide()
                }, 100),
                setTimeout(function () {
                    e(),
                    n > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)
                        ? ($("#logo-svg").hide(), $("#logo-svg path").css("stroke", "#fff"), $("#logo-svg").fadeIn("100", function () {
                            setTimeout(function () {
                                setCommonTop(!0)
                            }, 1e3)
                        }))
                        : ($("#logo-svg path").css("stroke", "#fff"), new Vivus("logo-svg", {
                            duration: 150,
                            type: "oneByOne",
                            start: "autostart",
                            pathTimingFunction: Vivus.EASE_IN
                        }, function () {
                            setTimeout(function () {
                                setCommonTop(!1)
                            }, 400)
                        }))
                }, 1e3)
            })
        }), s.load(), $("svg").length > 0) {
            var r = !1;
            $(window).resize(function () {
                r !== !1 && clearTimeout(r),
                r = setTimeout(function () {
                    e()
                }, 200)
            })
        }
    } else 
        AOS.init({
            easing: "ease-out-cubic",
            delay: 200,
            offset: 0,
            duration: 500,
            once: !0
        }),
        $("#slider").sliderPro({
            width: "100%",
            height: 520,
            fade: !0,
            arrows: !1,
            fadeArrows: !1,
            buttons: !1,
            touchSwipe: !1,
            autoplayOnHover: "none",
            autoplay: !0,
            fadeDuration: 1e3,
            autoplayDelay: 4e3,
            breakpoints: {
                768: {
                    height: 240
                }
            }
        }),
        $(".txt-mv").addClass("active")
    
}),
jQuery.extend(jQuery.easing, {
    easeInQuart: function (e, t, o, n, i) {
        return n * (t /= i) * t * t * t + o
    }
});