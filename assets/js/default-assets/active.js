(function ($) {
    'use strict';

    var razo_window = $(window);

    // ****************************
    // :: 1.0 Preloader Active Code
    // ****************************

    razo_window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#razoNav').classyNav();
    }

    // *********************************
    // :: 3.0 Welcome Slides Active Code
    // *********************************

    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.welcome-slides');
        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            autoplayTimeout: 7000,
            nav: false,
            dots: true
        })
        welcomeSlider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
    }

    // ******************************
    // :: 4.0 Latest Slides Active Code
    // ******************************
    if ($.fn.owlCarousel) {
        var latestNewsSlide = $('.razo-latest-news-slide');
        latestNewsSlide.owlCarousel({
            items: 2,
            margin: 50,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            dots: true,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });
    }

    // *******************************
    // :: 5.0 ImagesLoaded Active Code
    // *******************************
    if ($.fn.imagesLoaded) {
        $('.razo-blog-masonary').imagesLoaded(function () {
            // init Isotope
            var $grid = $('.razo-blog-masonary').isotope({
                itemSelector: '.razo-blog-masonary-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.razo-blog-masonary-item'
                }
            });
        });
    }

    // *********************************
    // :: 6.0 Magnific Popup Active Code
    // *********************************
    if ($.fn.magnificPopup) {
        $('.video-play-btn').magnificPopup({
            type: 'iframe'
        });
    }

    // ***************************
    // :: 7.0 Tooltip Active Code
    // ***************************
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // ***********************
    // :: 8.0 WOW Active Code
    // ***********************
    if (razo_window.width() > 767) {
        new WOW().init();
    }

    // ****************************
    // :: 9.0 Jarallax Active Code
    // ****************************
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // ****************************
    // :: 10.0 Scrollup Active Code
    // ****************************
    if ($.fn.scrollUp) {
        razo_window.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="arrow_up"</i>'
        });
    }

    // **************************
    // :: 11.0 Sticky Active Code
    // **************************
    razo_window.on('scroll', function () {
        if (razo_window.scrollTop() > 0) {
            $('.main-header-area').addClass('sticky');
        } else {
            $('.main-header-area').removeClass('sticky');
        }
    });

    // ********************************
    // :: 12.0 CounterUp Active Code
    // ********************************
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 15,
            time: 1500
        });
    }

    // *********************************
    // :: 13.0 Prevent Default 'a' Click
    // *********************************
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    // *********************************
    // :: 14.0 Social Share Active Code
    // *********************************
    $(".social-share-icon").on('click', function () {
        $(this).toggleClass('active');
        $(".razo-social-share-area").toggleClass('active');
    });
    $(".ss-close-btn").on('click', function () {
        $(".razo-social-share-area").removeClass('active');
    });

    // *********************************
    // :: 15.0 audioPlayer Active Code
    // *********************************
    if ($.fn.audioPlayer) {
        $('audio').audioPlayer();
    }

    // *********************************
    // :: 16.0 Countdown Active Code
    // *********************************
    if ($.fn.countdown) {
        $("#clock").countdown("2021/12/10", function (event) {
            $(this).html(event.strftime("<div>%D <span>Days</span></div> <div>%H <span>Hours</span></div> <div>%M <span>Minutes</span></div> <div>%S <span>Seconds</span></div>"));
        });
    }

})(jQuery);




!function(t){if("function"==typeof define&&define.amd&&define("uikit",function(){var i=window.UIkit||t(window,window.jQuery,window.document);return i.load=function(t,e,n,o){var s,a=t.split(","),r=[],l=(o.config&&o.config.uikit&&o.config.uikit.base?o.config.uikit.base:"").replace(/\/+$/g,"");if(!l)throw new Error("Please define base path to UIkit in the requirejs config.");for(s=0;s<a.length;s+=1){var c=a[s].replace(/\./g,"/");r.push(l+"/components/"+c)}e(r,function(){n(i)})},i}),!window.jQuery)throw new Error("UIkit requires jQuery");window&&window.jQuery&&t(window,window.jQuery,window.document)}(function(t,i,e){"use strict";var n={},o=t.UIkit?Object.create(t.UIkit):void 0;if(n.version="2.25.0",n.noConflict=function(){return o&&(t.UIkit=o,i.UIkit=o,i.fn.uk=o.fn),n},n.prefix=function(t){return t},n.$=i,n.$doc=n.$(document),n.$win=n.$(window),n.$html=n.$("html"),n.support={},n.support.transition=function(){var t=function(){var t,i=e.body||e.documentElement,n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in n)if(void 0!==i.style[t])return n[t]}();return t&&{end:t}}(),n.support.animation=function(){var t=function(){var t,i=e.body||e.documentElement,n={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(t in n)if(void 0!==i.style[t])return n[t]}();return t&&{end:t}}(),function(){Date.now=Date.now||function(){return(new Date).getTime()};for(var t=["webkit","moz"],i=0;i<t.length&&!window.requestAnimationFrame;++i){var e=t[i];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var n=0;window.requestAnimationFrame=function(t){var i=Date.now(),e=Math.max(n+16,i);return setTimeout(function(){t(n=e)},e-i)},window.cancelAnimationFrame=clearTimeout}}(),n.support.touch="ontouchstart"in document||t.DocumentTouch&&document instanceof t.DocumentTouch||t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints>0||t.navigator.pointerEnabled&&t.navigator.maxTouchPoints>0||!1,n.support.mutationobserver=t.MutationObserver||t.WebKitMutationObserver||null,n.Utils={},n.Utils.isFullscreen=function(){return document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.fullscreenElement||!1},n.Utils.str2json=function(t,i){try{return i?JSON.parse(t.replace(/([\$\w]+)\s*:/g,function(t,i){return'"'+i+'":'}).replace(/'([^']+)'/g,function(t,i){return'"'+i+'"'})):new Function("","var json = "+t+"; return JSON.parse(JSON.stringify(json));")()}catch(e){return!1}},n.Utils.debounce=function(t,i,e){var n;return function(){var o=this,s=arguments,a=function(){n=null,e||t.apply(o,s)},r=e&&!n;clearTimeout(n),n=setTimeout(a,i),r&&t.apply(o,s)}},n.Utils.removeCssRules=function(t){var i,e,n,o,s,a,r,l,c,u;t&&setTimeout(function(){try{for(u=document.styleSheets,o=0,r=u.length;r>o;o++){for(n=u[o],e=[],n.cssRules=n.cssRules,i=s=0,l=n.cssRules.length;l>s;i=++s)n.cssRules[i].type===CSSRule.STYLE_RULE&&t.test(n.cssRules[i].selectorText)&&e.unshift(i);for(a=0,c=e.length;c>a;a++)n.deleteRule(e[a])}}catch(h){}},0)},n.Utils.isInView=function(t,e){var o=i(t);if(!o.is(":visible"))return!1;var s=n.$win.scrollLeft(),a=n.$win.scrollTop(),r=o.offset(),l=r.left,c=r.top;return e=i.extend({topoffset:0,leftoffset:0},e),c+o.height()>=a&&c-e.topoffset<=a+n.$win.height()&&l+o.width()>=s&&l-e.leftoffset<=s+n.$win.width()?!0:!1},n.Utils.checkDisplay=function(t,e){var o=n.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]",t||document);return t&&!o.length&&(o=i(t)),o.trigger("display.uk.check"),e&&("string"!=typeof e&&(e='[class*="uk-animation-"]'),o.find(e).each(function(){var t=n.$(this),i=t.attr("class"),e=i.match(/uk\-animation\-(.+)/);t.removeClass(e[0]).width(),t.addClass(e[0])})),o},n.Utils.options=function(t){if("string"!=i.type(t))return t;-1!=t.indexOf(":")&&"}"!=t.trim().substr(-1)&&(t="{"+t+"}");var e=t?t.indexOf("{"):-1,o={};if(-1!=e)try{o=n.Utils.str2json(t.substr(e))}catch(s){}return o},n.Utils.animate=function(t,e){var o=i.Deferred();return t=n.$(t),t.css("display","none").addClass(e).one(n.support.animation.end,function(){t.removeClass(e),o.resolve()}),t.css("display",""),o.promise()},n.Utils.uid=function(t){return(t||"id")+(new Date).getTime()+"RAND"+Math.ceil(1e5*Math.random())},n.Utils.template=function(t,i){for(var e,n,o,s,a=t.replace(/\n/g,"\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g,"{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),r=0,l=[],c=0;r<a.length;){if(e=a[r],e.match(/\{\{\s*(.+?)\s*\}\}/))switch(r+=1,e=a[r],n=e[0],o=e.substring(e.match(/^(\^|\#|\!|\~|\:)/)?1:0),n){case"~":l.push("for(var $i=0;$i<"+o+".length;$i++) { var $item = "+o+"[$i];"),c++;break;case":":l.push("for(var $key in "+o+") { var $val = "+o+"[$key];"),c++;break;case"#":l.push("if("+o+") {"),c++;break;case"^":l.push("if(!"+o+") {"),c++;break;case"/":l.push("}"),c--;break;case"!":l.push("__ret.push("+o+");");break;default:l.push("__ret.push(escape("+o+"));")}else l.push("__ret.push('"+e.replace(/\'/g,"\\'")+"');");r+=1}return s=new Function("$data",["var __ret = [];","try {","with($data){",c?'__ret = ["Not all blocks are closed correctly."]':l.join(""),"};","}catch(e){__ret = [e.message];}",'return __ret.join("").replace(/\\n\\n/g, "\\n");',"function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n")),i?s(i):s},n.Utils.events={},n.Utils.events.click=n.support.touch?"tap":"click",t.UIkit=n,n.fn=function(t,e){var o=arguments,s=t.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),a=s[1],r=s[2];return n[a]?this.each(function(){var t=i(this),s=t.data(a);s||t.data(a,s=n[a](this,r?void 0:e)),r&&s[r].apply(s,Array.prototype.slice.call(o,1))}):(i.error("UIkit component ["+a+"] does not exist."),this)},i.UIkit=n,i.fn.uk=n.fn,n.langdirection="rtl"==n.$html.attr("dir")?"right":"left",n.components={},n.component=function(t,e){var o=function(e,s){var a=this;return this.UIkit=n,this.element=e?n.$(e):null,this.options=i.extend(!0,{},this.defaults,s),this.plugins={},this.element&&this.element.data(t,this),this.init(),(this.options.plugins.length?this.options.plugins:Object.keys(o.plugins)).forEach(function(t){o.plugins[t].init&&(o.plugins[t].init(a),a.plugins[t]=!0)}),this.trigger("init.uk.component",[t,this]),this};return o.plugins={},i.extend(!0,o.prototype,{defaults:{plugins:[]},boot:function(){},init:function(){},on:function(t,i,e){return n.$(this.element||this).on(t,i,e)},one:function(t,i,e){return n.$(this.element||this).one(t,i,e)},off:function(t){return n.$(this.element||this).off(t)},trigger:function(t,i){return n.$(this.element||this).trigger(t,i)},find:function(t){return n.$(this.element?this.element:[]).find(t)},proxy:function(t,i){var e=this;i.split(" ").forEach(function(i){e[i]||(e[i]=function(){return t[i].apply(t,arguments)})})},mixin:function(t,i){var e=this;i.split(" ").forEach(function(i){e[i]||(e[i]=t[i].bind(e))})},option:function(){return 1==arguments.length?this.options[arguments[0]]||void 0:void(2==arguments.length&&(this.options[arguments[0]]=arguments[1]))}},e),this.components[t]=o,this[t]=function(){var e,o;if(arguments.length)switch(arguments.length){case 1:"string"==typeof arguments[0]||arguments[0].nodeType||arguments[0]instanceof jQuery?e=i(arguments[0]):o=arguments[0];break;case 2:e=i(arguments[0]),o=arguments[1]}return e&&e.data(t)?e.data(t):new n.components[t](e,o)},n.domready&&n.component.boot(t),o},n.plugin=function(t,i,e){this.components[t].plugins[i]=e},n.component.boot=function(t){n.components[t].prototype&&n.components[t].prototype.boot&&!n.components[t].booted&&(n.components[t].prototype.boot.apply(n,[]),n.components[t].booted=!0)},n.component.bootComponents=function(){for(var t in n.components)n.component.boot(t)},n.domObservers=[],n.domready=!1,n.ready=function(t){n.domObservers.push(t),n.domready&&t(document)},n.on=function(t,i,e){return t&&t.indexOf("ready.uk.dom")>-1&&n.domready&&i.apply(n.$doc),n.$doc.on(t,i,e)},n.one=function(t,i,e){return t&&t.indexOf("ready.uk.dom")>-1&&n.domready?(i.apply(n.$doc),n.$doc):n.$doc.one(t,i,e)},n.trigger=function(t,i){return n.$doc.trigger(t,i)},n.domObserve=function(t,i){n.support.mutationobserver&&(i=i||function(){},n.$(t).each(function(){var t=this,e=n.$(t);if(!e.data("observer"))try{var o=new n.support.mutationobserver(n.Utils.debounce(function(n){i.apply(t,[]),e.trigger("changed.uk.dom")},50));o.observe(t,{childList:!0,subtree:!0}),e.data("observer",o)}catch(s){}}))},n.init=function(t){t=t||document,n.domObservers.forEach(function(i){i(t)})},n.on("domready.uk.dom",function(){n.init(),n.domready&&n.Utils.checkDisplay()}),document.addEventListener("DOMContentLoaded",function(){var t=function(){n.$body=n.$("body"),n.ready(function(t){n.domObserve("[data-uk-observe]")}),n.on("changed.uk.dom",function(t){n.init(t.target),n.Utils.checkDisplay(t.target)}),n.trigger("beforeready.uk.dom"),n.component.bootComponents(),requestAnimationFrame(function(){var t={dir:{x:0,y:0},x:window.pageXOffset,y:window.pageYOffset},i=function(){var e=window.pageXOffset,o=window.pageYOffset;(t.x!=e||t.y!=o)&&(e!=t.x?t.dir.x=e>t.x?1:-1:t.dir.x=0,o!=t.y?t.dir.y=o>t.y?1:-1:t.dir.y=0,t.x=e,t.y=o,n.$doc.trigger("scrolling.uk.document",[{dir:{x:t.dir.x,y:t.dir.y},x:e,y:o}])),requestAnimationFrame(i)};return n.support.touch&&n.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup",i),(t.x||t.y)&&i(),i}()),n.trigger("domready.uk.dom"),n.support.touch&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&n.$win.on("load orientationchange resize",n.Utils.debounce(function(){var t=function(){return i(".uk-height-viewport").css("height",window.innerHeight),t};return t()}(),100)),n.trigger("afterready.uk.dom"),n.domready=!0};return("complete"==document.readyState||"interactive"==document.readyState)&&setTimeout(t),t}()),n.$html.addClass(n.support.touch?"uk-touch":"uk-notouch"),n.support.touch){var s,a=!1,r="uk-hover",l=".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";n.$html.on("mouseenter touchstart MSPointerDown pointerdown",l,function(){a&&i("."+r).removeClass(r),a=i(this).addClass(r)}).on("mouseleave touchend MSPointerUp pointerup",function(t){s=i(t.target).parents(l),a&&a.not(s).removeClass(r)})}return n}),function(t){function i(t,i,e,n){return Math.abs(t-i)>=Math.abs(e-n)?t-i>0?"Left":"Right":e-n>0?"Up":"Down"}function e(){c=null,h.last&&(void 0!==h.el&&h.el.trigger("longTap"),h={})}function n(){c&&clearTimeout(c),c=null}function o(){a&&clearTimeout(a),r&&clearTimeout(r),l&&clearTimeout(l),c&&clearTimeout(c),a=r=l=c=null,h={}}function s(t){return t.pointerType==t.MSPOINTER_TYPE_TOUCH&&t.isPrimary}if(!t.fn.swipeLeft){var a,r,l,c,u,h={},d=750;t(function(){var p,f,m,g=0,v=0;"MSGesture"in window&&(u=new MSGesture,u.target=document.body),t(document).on("MSGestureEnd gestureend",function(t){var i=t.originalEvent.velocityX>1?"Right":t.originalEvent.velocityX<-1?"Left":t.originalEvent.velocityY>1?"Down":t.originalEvent.velocityY<-1?"Up":null;i&&void 0!==h.el&&(h.el.trigger("swipe"),h.el.trigger("swipe"+i))}).on("touchstart MSPointerDown pointerdown",function(i){("MSPointerDown"!=i.type||s(i.originalEvent))&&(m="MSPointerDown"==i.type||"pointerdown"==i.type?i:i.originalEvent.touches[0],p=Date.now(),f=p-(h.last||p),h.el=t("tagName"in m.target?m.target:m.target.parentNode),a&&clearTimeout(a),h.x1=m.pageX,h.y1=m.pageY,f>0&&250>=f&&(h.isDoubleTap=!0),h.last=p,c=setTimeout(e,d),!u||"MSPointerDown"!=i.type&&"pointerdown"!=i.type&&"touchstart"!=i.type||u.addPointer(i.originalEvent.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){("MSPointerMove"!=t.type||s(t.originalEvent))&&(m="MSPointerMove"==t.type||"pointermove"==t.type?t:t.originalEvent.touches[0],n(),h.x2=m.pageX,h.y2=m.pageY,g+=Math.abs(h.x1-h.x2),v+=Math.abs(h.y1-h.y2))}).on("touchend MSPointerUp pointerup",function(e){("MSPointerUp"!=e.type||s(e.originalEvent))&&(n(),h.x2&&Math.abs(h.x1-h.x2)>30||h.y2&&Math.abs(h.y1-h.y2)>30?l=setTimeout(function(){void 0!==h.el&&(h.el.trigger("swipe"),h.el.trigger("swipe"+i(h.x1,h.x2,h.y1,h.y2))),h={}},0):"last"in h&&(isNaN(g)||30>g&&30>v?r=setTimeout(function(){var i=t.Event("tap");i.cancelTouch=o,void 0!==h.el&&h.el.trigger(i),h.isDoubleTap?(void 0!==h.el&&h.el.trigger("doubleTap"),h={}):a=setTimeout(function(){a=null,void 0!==h.el&&h.el.trigger("singleTap"),h={}},250)},0):h={},g=v=0))}).on("touchcancel MSPointerCancel",o),t(window).on("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(i){t.fn[i]=function(e){return t(this).on(i,e)}})}}(jQuery),function(t){"use strict";var i=[];t.component("stackMargin",{defaults:{cls:"uk-margin-small-top",rowfirst:!1},boot:function(){t.ready(function(i){t.$("[data-uk-margin]",i).each(function(){var i=t.$(this);i.data("stackMargin")||t.stackMargin(i,t.Utils.options(i.attr("data-uk-margin")))})})},init:function(){var e=this;t.$win.on("resize orientationchange",function(){var i=function(){e.process()};return t.$(function(){i(),t.$win.on("load",i)}),t.Utils.debounce(i,20)}()),t.$html.on("changed.uk.dom",function(t){e.process()}),this.on("display.uk.check",function(t){this.element.is(":visible")&&this.process()}.bind(this)),i.push(this)},process:function(){var i=this,e=this.element.children();if(t.Utils.stackMargin(e,this.options),!this.options.rowfirst)return this;var n=e.removeClass(this.options.rowfirst).filter(":visible").first().position();return n&&e.each(function(){t.$(this)[t.$(this).position().left==n.left?"addClass":"removeClass"](i.options.rowfirst)}),this}}),function(){var i=[],e=function(t){if(t.is(":visible")){var i=t.parent().width(),e=t.data("width"),n=i/e,o=Math.floor(n*t.data("height"));t.css({height:e>i?o:t.data("height")})}};t.component("responsiveElement",{defaults:{},boot:function(){t.ready(function(i){t.$("iframe.uk-responsive-width, [data-uk-responsive]",i).each(function(){var i,e=t.$(this);e.data("responsiveElement")||(i=t.responsiveElement(e,{}))})})},init:function(){var t=this.element;t.attr("width")&&t.attr("height")&&(t.data({width:t.attr("width"),height:t.attr("height")}).on("display.uk.check",function(){e(t)}),e(t),i.push(t))}}),t.$win.on("resize load",t.Utils.debounce(function(){i.forEach(function(t){e(t)})},15))}(),t.Utils.stackMargin=function(i,e){e=t.$.extend({cls:"uk-margin-small-top"},e),e.cls=e.cls,i=t.$(i).removeClass(e.cls);var n=!1,o=i.filter(":visible:first"),s=o.length?o.position().top+o.outerHeight()-1:!1;s!==!1&&1!=i.length&&i.each(function(){var i=t.$(this);i.is(":visible")&&(n?i.addClass(e.cls):i.position().top>=s&&(n=i.addClass(e.cls)))})},t.Utils.matchHeights=function(i,e){i=t.$(i).css("min-height",""),e=t.$.extend({row:!0},e);var n=function(i){if(!(i.length<2)){var e=0;i.each(function(){e=Math.max(e,t.$(this).outerHeight())}).each(function(){var i=t.$(this),n=e-("border-box"==i.css("box-sizing")?0:i.outerHeight()-i.height());i.css("min-height",n+"px")})}};e.row?(i.first().width(),setTimeout(function(){var e=!1,o=[];i.each(function(){var i=t.$(this),s=i.offset().top;s!=e&&o.length&&(n(t.$(o)),o=[],s=i.offset().top),o.push(i),e=s}),o.length&&n(t.$(o))},0)):n(i)},function(i){t.Utils.inlineSvg=function(e,n){t.$(e||'img[src$=".svg"]',n||document).each(function(){var e=t.$(this),n=e.attr("src");if(!i[n]){var o=t.$.Deferred();t.$.get(n,{nc:Math.random()},function(i){o.resolve(t.$(i).find("svg"))}),i[n]=o.promise()}i[n].then(function(i){var n=t.$(i).clone();e.attr("id")&&n.attr("id",e.attr("id")),e.attr("class")&&n.attr("class",e.attr("class")),e.attr("style")&&n.attr("style",e.attr("style")),e.attr("width")&&(n.attr("width",e.attr("width")),e.attr("height")||n.removeAttr("height")),e.attr("height")&&(n.attr("height",e.attr("height")),e.attr("width")||n.removeAttr("width")),e.replaceWith(n)})})},t.ready(function(i){t.Utils.inlineSvg("[data-uk-svg]",i)})}({})}(UIkit),function(t){"use strict";function i(i,e){e=t.$.extend({duration:1e3,transition:"easeOutExpo",offset:0,complete:function(){}},e);var n=i.offset().top-e.offset,o=t.$doc.height(),s=window.innerHeight;n+s>o&&(n=o-s),t.$("html,body").stop().animate({scrollTop:n},e.duration,e.transition).promise().done(e.complete)}t.component("smoothScroll",{boot:function(){t.$html.on("click.smooth-scroll.uikit","[data-uk-smooth-scroll]",function(i){var e=t.$(this);if(!e.data("smoothScroll")){t.smoothScroll(e,t.Utils.options(e.attr("data-uk-smooth-scroll")));e.trigger("click")}return!1})},init:function(){var e=this;this.on("click",function(n){n.preventDefault(),i(t.$(this.hash).length?t.$(this.hash):t.$("body"),e.options)})}}),t.Utils.scrollToElement=i,t.$.easing.easeOutExpo||(t.$.easing.easeOutExpo=function(t,i,e,n,o){return i==o?e+n:n*(-Math.pow(2,-10*i/o)+1)+e})}(UIkit),function(t){"use strict";var i=t.$win,e=t.$doc,n=[],o=function(){for(var t=0;t<n.length;t++)window.requestAnimationFrame.apply(window,[n[t].check])};t.component("scrollspy",{defaults:{target:!1,cls:"uk-scrollspy-inview",initcls:"uk-scrollspy-init-inview",topoffset:0,leftoffset:0,repeat:!1,delay:0},boot:function(){e.on("scrolling.uk.document",o),i.on("load resize orientationchange",t.Utils.debounce(o,50)),t.ready(function(i){t.$("[data-uk-scrollspy]",i).each(function(){var i=t.$(this);if(!i.data("scrollspy")){t.scrollspy(i,t.Utils.options(i.attr("data-uk-scrollspy")))}})})},init:function(){var i,e=this,o=this.options.cls.split(/,/),s=function(){var n=e.options.target?e.element.find(e.options.target):e.element,s=1===n.length?1:0,a=0;n.each(function(n){var r=t.$(this),l=r.data("inviewstate"),c=t.Utils.isInView(r,e.options),u=r.data("ukScrollspyCls")||o[a].trim();!c||l||r.data("scrollspy-idle")||(i||(r.addClass(e.options.initcls),e.offset=r.offset(),i=!0,r.trigger("init.uk.scrollspy")),r.data("scrollspy-idle",setTimeout(function(){r.addClass("uk-scrollspy-inview").toggleClass(u).width(),r.trigger("inview.uk.scrollspy"),r.data("scrollspy-idle",!1),r.data("inviewstate",!0)},e.options.delay*s)),s++),!c&&l&&e.options.repeat&&(r.data("scrollspy-idle")&&(clearTimeout(r.data("scrollspy-idle")),r.data("scrollspy-idle",!1)),r.removeClass("uk-scrollspy-inview").toggleClass(u),r.data("inviewstate",!1),r.trigger("outview.uk.scrollspy")),a=o[a+1]?a+1:0})};s(),this.check=s,n.push(this)}});var s=[],a=function(){for(var t=0;t<s.length;t++)window.requestAnimationFrame.apply(window,[s[t].check])};t.component("scrollspynav",{defaults:{cls:"uk-active",closest:!1,topoffset:0,leftoffset:0,smoothscroll:!1},boot:function(){e.on("scrolling.uk.document",a),i.on("resize orientationchange",t.Utils.debounce(a,50)),t.ready(function(i){t.$("[data-uk-scrollspy-nav]",i).each(function(){var i=t.$(this);if(!i.data("scrollspynav")){t.scrollspynav(i,t.Utils.options(i.attr("data-uk-scrollspy-nav")))}})})},init:function(){var e,n=[],o=this.find("a[href^='#']").each(function(){"#"!==this.getAttribute("href").trim()&&n.push(this.getAttribute("href"))}),a=t.$(n.join(",")),r=this.options.cls,l=this.options.closest||this.options.closest,c=this,u=function(){e=[];for(var n=0;n<a.length;n++)t.Utils.isInView(a.eq(n),c.options)&&e.push(a.eq(n));if(e.length){var s,u=i.scrollTop(),h=function(){for(var t=0;t<e.length;t++)if(e[t].offset().top>=u)return e[t]}();if(!h)return;c.options.closest?(o.blur().closest(l).removeClass(r),s=o.filter("a[href='#"+h.attr("id")+"']").closest(l).addClass(r)):s=o.removeClass(r).filter("a[href='#"+h.attr("id")+"']").addClass(r),c.element.trigger("inview.uk.scrollspynav",[h,s])}};this.options.smoothscroll&&t.smoothScroll&&o.each(function(){t.smoothScroll(this,c.options.smoothscroll)}),u(),this.element.data("scrollspynav",this),this.check=u,s.push(this)}})}(UIkit),function(t){"use strict";var i=[];t.component("toggle",{defaults:{target:!1,cls:"uk-hidden",animation:!1,duration:200},boot:function(){t.ready(function(e){t.$("[data-uk-toggle]",e).each(function(){var i=t.$(this);if(!i.data("toggle")){t.toggle(i,t.Utils.options(i.attr("data-uk-toggle")))}}),setTimeout(function(){i.forEach(function(t){t.getToggles()})},0)})},init:function(){var t=this;this.aria=-1!==this.options.cls.indexOf("uk-hidden"),this.getToggles(),this.on("click",function(i){t.element.is('a[href="#"]')&&i.preventDefault(),t.toggle()}),i.push(this)},toggle:function(){if(this.totoggle.length){if(this.options.animation&&t.support.animation){var i=this,e=this.options.animation.split(",");1==e.length&&(e[1]=e[0]),e[0]=e[0].trim(),e[1]=e[1].trim(),this.totoggle.css("animation-duration",this.options.duration+"ms"),this.totoggle.each(function(){var n=t.$(this);n.hasClass(i.options.cls)?(n.toggleClass(i.options.cls),t.Utils.animate(n,e[0]).then(function(){n.css("animation-duration",""),t.Utils.checkDisplay(n)})):t.Utils.animate(this,e[1]+" uk-animation-reverse").then(function(){n.toggleClass(i.options.cls).css("animation-duration",""),t.Utils.checkDisplay(n)})})}else this.totoggle.toggleClass(this.options.cls),t.Utils.checkDisplay(this.totoggle);this.updateAria()}},getToggles:function(){this.totoggle=this.options.target?t.$(this.options.target):[],this.updateAria()},updateAria:function(){this.aria&&this.totoggle.length&&this.totoggle.each(function(){t.$(this).attr("aria-hidden",t.$(this).hasClass("uk-hidden"))})}})}(UIkit),function(t){"use strict";t.component("alert",{defaults:{fade:!0,duration:200,trigger:".uk-alert-close"},boot:function(){t.$html.on("click.alert.uikit","[data-uk-alert]",function(i){var e=t.$(this);if(!e.data("alert")){var n=t.alert(e,t.Utils.options(e.attr("data-uk-alert")));t.$(i.target).is(n.options.trigger)&&(i.preventDefault(),n.close())}})},init:function(){var t=this;this.on("click",this.options.trigger,function(i){i.preventDefault(),t.close()})},close:function(){var t=this.trigger("close.uk.alert"),i=function(){this.trigger("closed.uk.alert").remove()}.bind(this);this.options.fade?t.css("overflow","hidden").css("max-height",t.height()).animate({height:0,opacity:0,"padding-top":0,"padding-bottom":0,"margin-top":0,"margin-bottom":0},this.options.duration,i):i()}})}(UIkit),function(t){"use strict";t.component("buttonRadio",{defaults:{activeClass:"uk-active",target:".uk-button"},boot:function(){t.$html.on("click.buttonradio.uikit","[data-uk-button-radio]",function(i){var e=t.$(this);if(!e.data("buttonRadio")){var n=t.buttonRadio(e,t.Utils.options(e.attr("data-uk-button-radio"))),o=t.$(i.target);o.is(n.options.target)&&o.trigger("click")}})},init:function(){var i=this;this.find(i.options.target).attr("aria-checked","false").filter("."+i.options.activeClass).attr("aria-checked","true"),this.on("click",this.options.target,function(e){var n=t.$(this);n.is('a[href="#"]')&&e.preventDefault(),i.find(i.options.target).not(n).removeClass(i.options.activeClass).blur(),n.addClass(i.options.activeClass),i.find(i.options.target).not(n).attr("aria-checked","false"),n.attr("aria-checked","true"),i.trigger("change.uk.button",[n])})},getSelected:function(){return this.find("."+this.options.activeClass)}}),t.component("buttonCheckbox",{defaults:{activeClass:"uk-active",target:".uk-button"},boot:function(){t.$html.on("click.buttoncheckbox.uikit","[data-uk-button-checkbox]",function(i){var e=t.$(this);if(!e.data("buttonCheckbox")){var n=t.buttonCheckbox(e,t.Utils.options(e.attr("data-uk-button-checkbox"))),o=t.$(i.target);o.is(n.options.target)&&o.trigger("click")}})},init:function(){var i=this;this.find(i.options.target).attr("aria-checked","false").filter("."+i.options.activeClass).attr("aria-checked","true"),this.on("click",this.options.target,function(e){var n=t.$(this);n.is('a[href="#"]')&&e.preventDefault(),n.toggleClass(i.options.activeClass).blur(),n.attr("aria-checked",n.hasClass(i.options.activeClass)),i.trigger("change.uk.button",[n])})},getSelected:function(){return this.find("."+this.options.activeClass)}}),t.component("button",{defaults:{},boot:function(){t.$html.on("click.button.uikit","[data-uk-button]",function(i){var e=t.$(this);if(!e.data("button")){t.button(e,t.Utils.options(e.attr("data-uk-button")));e.trigger("click")}})},init:function(){var t=this;this.element.attr("aria-pressed",this.element.hasClass("uk-active")),this.on("click",function(i){t.element.is('a[href="#"]')&&i.preventDefault(),t.toggle(),t.trigger("change.uk.button",[t.element.blur().hasClass("uk-active")])})},toggle:function(){this.element.toggleClass("uk-active"),this.element.attr("aria-pressed",this.element.hasClass("uk-active"))}})}(UIkit),function(t){"use strict";function i(i,e,n,o){if(i=t.$(i),e=t.$(e),n=n||window.innerWidth,o=o||i.offset(),e.length){var s=e.outerWidth();if(i.css("min-width",s),"right"==t.langdirection){var a=n-(e.offset().left+s),r=n-(i.offset().left+i.outerWidth());i.css("margin-right",a-r)}else i.css("margin-left",e.offset().left-o.left)}}var e,n=!1,o={x:{"bottom-left":"bottom-right","bottom-right":"bottom-left","bottom-center":"bottom-center","top-left":"top-right","top-right":"top-left","top-center":"top-center","left-top":"right-top","left-bottom":"right-bottom","left-center":"right-center","right-top":"left-top","right-bottom":"left-bottom","right-center":"left-center"},y:{"bottom-left":"top-left","bottom-right":"top-right","bottom-center":"top-center","top-left":"bottom-left","top-right":"bottom-right","top-center":"bottom-center","left-top":"left-bottom","left-bottom":"left-top","left-center":"left-center","right-top":"right-bottom","right-bottom":"right-top","right-center":"right-center"},xy:{"bottom-left":"top-right","bottom-right":"top-left","bottom-center":"top-center","top-left":"bottom-right","top-right":"bottom-left","top-center":"bottom-center","left-top":"right-bottom","left-bottom":"right-top","left-center":"right-center","right-top":"left-bottom","right-bottom":"left-top","right-center":"left-center"}};t.component("dropdown",{defaults:{mode:"hover",pos:"bottom-left",offset:0,remaintime:800,justify:!1,boundary:t.$win,delay:0,dropdownSelector:".uk-dropdown,.uk-dropdown-blank",hoverDelayIdle:250,preventflip:!1},remainIdle:!1,boot:function(){var i=t.support.touch?"click":"mouseenter";t.$html.on(i+".dropdown.uikit","[data-uk-dropdown]",function(e){var n=t.$(this);if(!n.data("dropdown")){var o=t.dropdown(n,t.Utils.options(n.attr("data-uk-dropdown")));("click"==i||"mouseenter"==i&&"hover"==o.options.mode)&&o.element.trigger(i),o.element.find(o.options.dropdownSelector).length&&e.preventDefault()}})},init:function(){var i=this;this.dropdown=this.find(this.options.dropdownSelector),this.offsetParent=this.dropdown.parents().filter(function(){return-1!==t.$.inArray(t.$(this).css("position"),["relative","fixed","absolute"])}).slice(0,1),this.centered=this.dropdown.hasClass("uk-dropdown-center"),this.justified=this.options.justify?t.$(this.options.justify):!1,this.boundary=t.$(this.options.boundary),this.boundary.length||(this.boundary=t.$win),this.dropdown.hasClass("uk-dropdown-up")&&(this.options.pos="top-left"),this.dropdown.hasClass("uk-dropdown-flip")&&(this.options.pos=this.options.pos.replace("left","right")),this.dropdown.hasClass("uk-dropdown-center")&&(this.options.pos=this.options.pos.replace(/(left|right)/,"center")),this.element.attr("aria-haspopup","true"),this.element.attr("aria-expanded",this.element.hasClass("uk-open")),"click"==this.options.mode||t.support.touch?this.on("click.uk.dropdown",function(e){var n=t.$(e.target);n.parents(i.options.dropdownSelector).length||((n.is("a[href='#']")||n.parent().is("a[href='#']")||i.dropdown.length&&!i.dropdown.is(":visible"))&&e.preventDefault(),n.blur()),i.element.hasClass("uk-open")?(!i.dropdown.find(e.target).length||n.is(".uk-dropdown-close")||n.parents(".uk-dropdown-close").length)&&i.hide():i.show()}):this.on("mouseenter",function(t){i.trigger("pointerenter.uk.dropdown",[i]),i.remainIdle&&clearTimeout(i.remainIdle),e&&clearTimeout(e),n&&n==i||(e=n&&n!=i?setTimeout(function(){e=setTimeout(i.show.bind(i),i.options.delay)},i.options.hoverDelayIdle):setTimeout(i.show.bind(i),i.options.delay))}).on("mouseleave",function(){e&&clearTimeout(e),i.remainIdle=setTimeout(function(){n&&n==i&&i.hide()},i.options.remaintime),i.trigger("pointerleave.uk.dropdown",[i])}).on("click",function(e){var o=t.$(e.target);return i.remainIdle&&clearTimeout(i.remainIdle),n&&n==i?void((!i.dropdown.find(e.target).length||o.is(".uk-dropdown-close")||o.parents(".uk-dropdown-close").length)&&i.hide()):((o.is("a[href='#']")||o.parent().is("a[href='#']"))&&e.preventDefault(),void i.show())})},show:function(){t.$html.off("click.outer.dropdown"),n&&n!=this&&n.hide(!0),e&&clearTimeout(e),this.trigger("beforeshow.uk.dropdown",[this]),this.checkDimensions(),this.element.addClass("uk-open"),this.element.attr("aria-expanded","true"),this.trigger("show.uk.dropdown",[this]),t.Utils.checkDisplay(this.dropdown,!0),n=this,this.registerOuterClick()},hide:function(t){this.trigger("beforehide.uk.dropdown",[this,t]),this.element.removeClass("uk-open"),this.remainIdle&&clearTimeout(this.remainIdle),this.remainIdle=!1,this.element.attr("aria-expanded","false"),this.trigger("hide.uk.dropdown",[this,t]),n==this&&(n=!1)},registerOuterClick:function(){var i=this;t.$html.off("click.outer.dropdown"),setTimeout(function(){t.$html.on("click.outer.dropdown",function(o){e&&clearTimeout(e);t.$(o.target);n!=i||i.element.find(o.target).length||(i.hide(!0),t.$html.off("click.outer.dropdown"))})},10)},checkDimensions:function(){if(this.dropdown.length){this.dropdown.removeClass("uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack").css({"top-left":"",left:"","margin-left":"","margin-right":""}),this.justified&&this.justified.length&&this.dropdown.css("min-width","");var e,n=t.$.extend({},this.offsetParent.offset(),{width:this.offsetParent[0].offsetWidth,height:this.offsetParent[0].offsetHeight}),s=this.options.offset,a=this.dropdown,r=(a.show().offset()||{left:0,top:0},a.outerWidth()),l=a.outerHeight(),c=this.boundary.width(),u=(this.boundary[0]!==window&&this.boundary.offset()?this.boundary.offset():{top:0,left:0},this.options.pos),h={"bottom-left":{top:0+n.height+s,left:0},"bottom-right":{top:0+n.height+s,left:0+n.width-r},"bottom-center":{top:0+n.height+s,left:0+n.width/2-r/2},"top-left":{top:0-l-s,left:0},"top-right":{top:0-l-s,left:0+n.width-r},"top-center":{top:0-l-s,left:0+n.width/2-r/2},"left-top":{top:0,left:0-r-s},"left-bottom":{top:0+n.height-l,left:0-r-s},"left-center":{top:0+n.height/2-l/2,left:0-r-s},"right-top":{top:0,left:0+n.width+s},"right-bottom":{top:0+n.height-l,left:0+n.width+s},"right-center":{top:0+n.height/2-l/2,left:0+n.width+s}},d={};if(e=u.split("-"),d=h[u]?h[u]:h["bottom-left"],this.justified&&this.justified.length)i(a.css({left:0}),this.justified,c);else if(this.options.preventflip!==!0){var p;switch(this.checkBoundary(n.left+d.left,n.top+d.top,r,l,c)){case"x":"x"!==this.options.preventflip&&(p=o.x[u]||"right-top");break;case"y":"y"!==this.options.preventflip&&(p=o.y[u]||"top-left");break;case"xy":this.options.preventflip||(p=o.xy[u]||"right-bottom")}p&&(e=p.split("-"),d=h[p]?h[p]:h["bottom-left"],this.checkBoundary(n.left+d.left,n.top+d.top,r,l,c)&&(e=u.split("-"),d=h[u]?h[u]:h["bottom-left"]))}r>c&&(a.addClass("uk-dropdown-stack"),this.trigger("stack.uk.dropdown",[this])),a.css(d).css("display","").addClass("uk-dropdown-"+e[0])}},checkBoundary:function(i,e,n,o,s){var a="";return(0>i||i-t.$win.scrollLeft()+n>s)&&(a+="x"),(e-t.$win.scrollTop()<0||e-t.$win.scrollTop()+o>window.innerHeight)&&(a+="y"),a}}),t.component("dropdownOverlay",{defaults:{justify:!1,cls:"",duration:200},boot:function(){t.ready(function(i){t.$("[data-uk-dropdown-overlay]",i).each(function(){var i=t.$(this);i.data("dropdownOverlay")||t.dropdownOverlay(i,t.Utils.options(i.attr("data-uk-dropdown-overlay")))})})},init:function(){var e=this;this.justified=this.options.justify?t.$(this.options.justify):!1,
        this.overlay=this.element.find("uk-dropdown-overlay"),this.overlay.length||(this.overlay=t.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element)),this.overlay.addClass(this.options.cls),this.on({"beforeshow.uk.dropdown":function(t,n){e.dropdown=n,e.justified&&e.justified.length&&i(e.overlay.css({display:"block","margin-left":"","margin-right":""}),e.justified,e.justified.outerWidth())},"show.uk.dropdown":function(i,n){var o=e.dropdown.dropdown.outerHeight(!0);e.dropdown.element.removeClass("uk-open"),e.overlay.stop().css("display","block").animate({height:o},e.options.duration,function(){e.dropdown.dropdown.css("visibility",""),e.dropdown.element.addClass("uk-open"),t.Utils.checkDisplay(e.dropdown.dropdown,!0)}),e.pointerleave=!1},"hide.uk.dropdown":function(){e.overlay.stop().animate({height:0},e.options.duration)},"pointerenter.uk.dropdown":function(t,i){clearTimeout(e.remainIdle)},"pointerleave.uk.dropdown":function(t,i){e.pointerleave=!0}}),this.overlay.on({mouseenter:function(){e.remainIdle&&(clearTimeout(e.dropdown.remainIdle),clearTimeout(e.remainIdle))},mouseleave:function(){e.pointerleave&&n&&(e.remainIdle=setTimeout(function(){n&&n.hide()},n.options.remaintime))}})}})}(UIkit),function(t){"use strict";var i=[];t.component("gridMatchHeight",{defaults:{target:!1,row:!0,ignorestacked:!1},boot:function(){t.ready(function(i){t.$("[data-uk-grid-match]",i).each(function(){var i,e=t.$(this);e.data("gridMatchHeight")||(i=t.gridMatchHeight(e,t.Utils.options(e.attr("data-uk-grid-match"))))})})},init:function(){var e=this;this.columns=this.element.children(),this.elements=this.options.target?this.find(this.options.target):this.columns,this.columns.length&&(t.$win.on("load resize orientationchange",function(){var i=function(){e.match()};return t.$(function(){i()}),t.Utils.debounce(i,50)}()),t.$html.on("changed.uk.dom",function(t){e.columns=e.element.children(),e.elements=e.options.target?e.find(e.options.target):e.columns,e.match()}),this.on("display.uk.check",function(t){this.element.is(":visible")&&this.match()}.bind(this)),i.push(this))},match:function(){var i=this.columns.filter(":visible:first");if(i.length){var e=Math.ceil(100*parseFloat(i.css("width"))/parseFloat(i.parent().css("width")))>=100;return e&&!this.options.ignorestacked?this.revert():t.Utils.matchHeights(this.elements,this.options),this}},revert:function(){return this.elements.css("min-height",""),this}}),t.component("gridMargin",{defaults:{cls:"uk-grid-margin",rowfirst:"uk-row-first"},boot:function(){t.ready(function(i){t.$("[data-uk-grid-margin]",i).each(function(){var i,e=t.$(this);e.data("gridMargin")||(i=t.gridMargin(e,t.Utils.options(e.attr("data-uk-grid-margin"))))})})},init:function(){t.stackMargin(this.element,this.options)}})}(UIkit),function(t){"use strict";function i(i,e){return e?("object"==typeof i?(i=i instanceof jQuery?i:t.$(i),i.parent().length&&(e.persist=i,e.persist.data("modalPersistParent",i.parent()))):i="string"==typeof i||"number"==typeof i?t.$("<div></div>").html(i):t.$("<div></div>").html("UIkit.modal Error: Unsupported data type: "+typeof i),i.appendTo(e.element.find(".uk-modal-dialog")),e):void 0}var e,n=!1,o=0,s=t.$html;t.component("modal",{defaults:{keyboard:!0,bgclose:!0,minScrollHeight:150,center:!1,modal:!0},scrollable:!1,transition:!1,hasTransitioned:!0,init:function(){if(e||(e=t.$("body")),this.element.length){var i=this;this.paddingdir="padding-"+("left"==t.langdirection?"right":"left"),this.dialog=this.find(".uk-modal-dialog"),this.active=!1,this.element.attr("aria-hidden",this.element.hasClass("uk-open")),this.on("click",".uk-modal-close",function(t){t.preventDefault(),i.hide()}).on("click",function(e){var n=t.$(e.target);n[0]==i.element[0]&&i.options.bgclose&&i.hide()})}},toggle:function(){return this[this.isActive()?"hide":"show"]()},show:function(){if(this.element.length){var i=this;if(!this.isActive())return this.options.modal&&n&&n.hide(!0),this.element.removeClass("uk-open").show(),this.resize(),this.options.modal&&(n=this),this.active=!0,o++,t.support.transition?(this.hasTransitioned=!1,this.element.one(t.support.transition.end,function(){i.hasTransitioned=!0}).addClass("uk-open")):this.element.addClass("uk-open"),s.addClass("uk-modal-page").height(),this.element.attr("aria-hidden","false"),this.element.trigger("show.uk.modal"),t.Utils.checkDisplay(this.dialog,!0),this}},hide:function(i){if(!i&&t.support.transition&&this.hasTransitioned){var e=this;this.one(t.support.transition.end,function(){e._hide()}).removeClass("uk-open")}else this._hide();return this},resize:function(){var t=e.width();if(this.scrollbarwidth=window.innerWidth-t,e.css(this.paddingdir,this.scrollbarwidth),this.element.css("overflow-y",this.scrollbarwidth?"scroll":"auto"),!this.updateScrollable()&&this.options.center){var i=this.dialog.outerHeight(),n=parseInt(this.dialog.css("margin-top"),10)+parseInt(this.dialog.css("margin-bottom"),10);i+n<window.innerHeight?this.dialog.css({top:window.innerHeight/2-i/2-n}):this.dialog.css({top:""})}},updateScrollable:function(){var t=this.dialog.find(".uk-overflow-container:visible:first");if(t.length){t.css("height",0);var i=Math.abs(parseInt(this.dialog.css("margin-top"),10)),e=this.dialog.outerHeight(),n=window.innerHeight,o=n-2*(20>i?20:i)-e;return t.css({"max-height":o<this.options.minScrollHeight?"":o,height:""}),!0}return!1},_hide:function(){this.active=!1,o>0?o--:o=0,this.element.hide().removeClass("uk-open"),this.element.attr("aria-hidden","true"),o||(s.removeClass("uk-modal-page"),e.css(this.paddingdir,"")),n===this&&(n=!1),this.trigger("hide.uk.modal")},isActive:function(){return this.active}}),t.component("modalTrigger",{boot:function(){t.$html.on("click.modal.uikit","[data-uk-modal]",function(i){var e=t.$(this);if(e.is("a")&&i.preventDefault(),!e.data("modalTrigger")){var n=t.modalTrigger(e,t.Utils.options(e.attr("data-uk-modal")));n.show()}}),t.$html.on("keydown.modal.uikit",function(t){n&&27===t.keyCode&&n.options.keyboard&&(t.preventDefault(),n.hide())}),t.$win.on("resize orientationchange",t.Utils.debounce(function(){n&&n.resize()},150))},init:function(){var i=this;this.options=t.$.extend({target:i.element.is("a")?i.element.attr("href"):!1},this.options),this.modal=t.modal(this.options.target,this.options),this.on("click",function(t){t.preventDefault(),i.show()}),this.proxy(this.modal,"show hide isActive")}}),t.modal.dialog=function(e,n){var o=t.modal(t.$(t.modal.dialog.template).appendTo("body"),n);return o.on("hide.uk.modal",function(){o.persist&&(o.persist.appendTo(o.persist.data("modalPersistParent")),o.persist=!1),o.element.remove()}),i(e,o),o},t.modal.dialog.template='<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>',t.modal.alert=function(i,e){e=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},e);var n=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i)+"</div>",'<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">'+e.labels.Ok+"</button></div>"].join(""),e);return n.on("show.uk.modal",function(){setTimeout(function(){n.element.find("button:first").focus()},50)}),n.show()},t.modal.confirm=function(i,e,n){var o=arguments.length>1&&arguments[arguments.length-1]?arguments[arguments.length-1]:{};e=t.$.isFunction(e)?e:function(){},n=t.$.isFunction(n)?n:function(){},o=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},t.$.isFunction(o)?{}:o);var s=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i)+"</div>",'<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">'+o.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-confirm">'+o.labels.Ok+"</button></div>"].join(""),o);return s.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click",function(){t.$(this).is(".js-modal-confirm")?e():n(),s.hide()}),s.on("show.uk.modal",function(){setTimeout(function(){s.element.find(".js-modal-confirm").focus()},50)}),s.show()},t.modal.prompt=function(i,e,n,o){n=t.$.isFunction(n)?n:function(t){},o=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},o);var s=t.modal.dialog([i?'<div class="uk-modal-content uk-form">'+String(i)+"</div>":"",'<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>','<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">'+o.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-ok">'+o.labels.Ok+"</button></div>"].join(""),o),a=s.element.find("input[type='text']").val(e||"").on("keyup",function(t){13==t.keyCode&&s.element.find(".js-modal-ok").trigger("click")});return s.element.find(".js-modal-ok").on("click",function(){n(a.val())!==!1&&s.hide()}),s.on("show.uk.modal",function(){setTimeout(function(){a.focus()},50)}),s.show()},t.modal.blockUI=function(i,e){var n=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i||'<div class="uk-text-center">...</div>')+"</div>"].join(""),t.$.extend({bgclose:!1,keyboard:!1,modal:!1},e));return n.content=n.element.find(".uk-modal-content:first"),n.show()},t.modal.labels={Ok:"Ok",Cancel:"Cancel"}}(UIkit),function(t){"use strict";function i(i){var e=t.$(i),n="auto";if(e.is(":visible"))n=e.outerHeight();else{var o={position:e.css("position"),visibility:e.css("visibility"),display:e.css("display")};n=e.css({position:"absolute",visibility:"hidden",display:"block"}).outerHeight(),e.css(o)}return n}t.component("nav",{defaults:{toggle:">li.uk-parent > a[href='#']",lists:">li.uk-parent > ul",multiple:!1},boot:function(){t.ready(function(i){t.$("[data-uk-nav]",i).each(function(){var i=t.$(this);if(!i.data("nav")){t.nav(i,t.Utils.options(i.attr("data-uk-nav")))}})})},init:function(){var i=this;this.on("click.uk.nav",this.options.toggle,function(e){e.preventDefault();var n=t.$(this);i.open(n.parent()[0]==i.element[0]?n:n.parent("li"))}),this.find(this.options.lists).each(function(){var e=t.$(this),n=e.parent(),o=n.hasClass("uk-active");e.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'),n.data("list-container",e.parent()[o?"removeClass":"addClass"]("uk-hidden")),n.attr("aria-expanded",n.hasClass("uk-open")),o&&i.open(n,!0)})},open:function(e,n){var o=this,s=this.element,a=t.$(e),r=a.data("list-container");this.options.multiple||s.children(".uk-open").not(e).each(function(){var i=t.$(this);i.data("list-container")&&i.data("list-container").stop().animate({height:0},function(){t.$(this).parent().removeClass("uk-open").end().addClass("uk-hidden")})}),a.toggleClass("uk-open"),a.attr("aria-expanded",a.hasClass("uk-open")),r&&(a.hasClass("uk-open")&&r.removeClass("uk-hidden"),n?(r.stop().height(a.hasClass("uk-open")?"auto":0),a.hasClass("uk-open")||r.addClass("uk-hidden"),this.trigger("display.uk.check")):r.stop().animate({height:a.hasClass("uk-open")?i(r.find("ul:first")):0},function(){a.hasClass("uk-open")?r.css("height",""):r.addClass("uk-hidden"),o.trigger("display.uk.check")}))}})}(UIkit),function(t){"use strict";var i={x:window.scrollX,y:window.scrollY},e=(t.$win,t.$doc,t.$html),n={show:function(n){if(n=t.$(n),n.length){var o=t.$("body"),s=n.find(".uk-offcanvas-bar:first"),a="right"==t.langdirection,r=s.hasClass("uk-offcanvas-bar-flip")?-1:1,l=r*(a?-1:1),c=window.innerWidth-o.width();i={x:window.pageXOffset,y:window.pageYOffset},n.addClass("uk-active"),o.css({width:window.innerWidth-c,height:window.innerHeight}).addClass("uk-offcanvas-page"),o.css(a?"margin-right":"margin-left",(a?-1:1)*(s.outerWidth()*l)).width(),e.css("margin-top",-1*i.y),s.addClass("uk-offcanvas-bar-show"),this._initElement(n),s.trigger("show.uk.offcanvas",[n,s]),n.attr("aria-hidden","false")}},hide:function(n){var o=t.$("body"),s=t.$(".uk-offcanvas.uk-active"),a="right"==t.langdirection,r=s.find(".uk-offcanvas-bar:first"),l=function(){o.removeClass("uk-offcanvas-page").css({width:"",height:"","margin-left":"","margin-right":""}),s.removeClass("uk-active"),r.removeClass("uk-offcanvas-bar-show"),e.css("margin-top",""),window.scrollTo(i.x,i.y),r.trigger("hide.uk.offcanvas",[s,r]),s.attr("aria-hidden","true")};s.length&&(t.support.transition&&!n?(o.one(t.support.transition.end,function(){l()}).css(a?"margin-right":"margin-left",""),setTimeout(function(){r.removeClass("uk-offcanvas-bar-show")},0)):l())},_initElement:function(i){i.data("OffcanvasInit")||(i.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas",function(i){var e=t.$(i.target);if(!i.type.match(/swipe/)&&!e.hasClass("uk-offcanvas-close")){if(e.hasClass("uk-offcanvas-bar"))return;if(e.parents(".uk-offcanvas-bar:first").length)return}i.stopImmediatePropagation(),n.hide()}),i.on("click","a[href*='#']",function(i){var e=t.$(this),o=e.attr("href");"#"!=o&&(t.$doc.one("hide.uk.offcanvas",function(){var i;try{i=t.$(e[0].hash)}catch(n){i=""}i.length||(i=t.$('[name="'+e[0].hash.replace("#","")+'"]')),i.length&&t.Utils.scrollToElement?t.Utils.scrollToElement(i,t.Utils.options(e.attr("data-uk-smooth-scroll")||"{}")):window.location.href=o}),n.hide())}),i.data("OffcanvasInit",!0))}};t.component("offcanvasTrigger",{boot:function(){e.on("click.offcanvas.uikit","[data-uk-offcanvas]",function(i){i.preventDefault();var e=t.$(this);if(!e.data("offcanvasTrigger")){t.offcanvasTrigger(e,t.Utils.options(e.attr("data-uk-offcanvas")));e.trigger("click")}}),e.on("keydown.uk.offcanvas",function(t){27===t.keyCode&&n.hide()})},init:function(){var i=this;this.options=t.$.extend({target:i.element.is("a")?i.element.attr("href"):!1},this.options),this.on("click",function(t){t.preventDefault(),n.show(i.options.target)})}}),t.offcanvas=n}(UIkit),function(t){"use strict";function i(i,e,n){var o,s=t.$.Deferred(),a=i,r=i;return n[0]===e[0]?(s.resolve(),s.promise()):("object"==typeof i&&(a=i[0],r=i[1]||i[0]),t.$body.css("overflow-x","hidden"),o=function(){e&&e.hide().removeClass("uk-active "+r+" uk-animation-reverse"),n.addClass(a).one(t.support.animation.end,function(){n.removeClass(""+a).css({opacity:"",display:""}),s.resolve(),t.$body.css("overflow-x",""),e&&e.css({opacity:"",display:""})}.bind(this)).show()},n.css("animation-duration",this.options.duration+"ms"),e&&e.length?(e.css("animation-duration",this.options.duration+"ms"),e.css("display","none").addClass(r+" uk-animation-reverse").one(t.support.animation.end,function(){o()}.bind(this)).css("display","")):(n.addClass("uk-active"),o()),s.promise())}var e;t.component("switcher",{defaults:{connect:!1,toggle:">*",active:0,animation:!1,duration:200,swiping:!0},animating:!1,boot:function(){t.ready(function(i){t.$("[data-uk-switcher]",i).each(function(){var i=t.$(this);if(!i.data("switcher")){t.switcher(i,t.Utils.options(i.attr("data-uk-switcher")))}})})},init:function(){var i=this;if(this.on("click.uk.switcher",this.options.toggle,function(t){t.preventDefault(),i.show(this)}),this.options.connect){this.connect=t.$(this.options.connect),this.connect.find(".uk-active").removeClass(".uk-active"),this.connect.length&&(this.connect.children().attr("aria-hidden","true"),this.connect.on("click","[data-uk-switcher-item]",function(e){e.preventDefault();var n=t.$(this).attr("data-uk-switcher-item");if(i.index!=n)switch(n){case"next":case"previous":i.show(i.index+("next"==n?1:-1));break;default:i.show(parseInt(n,10))}}),this.options.swiping&&this.connect.on("swipeRight swipeLeft",function(t){t.preventDefault(),window.getSelection().toString()||i.show(i.index+("swipeLeft"==t.type?1:-1))}));var e=this.find(this.options.toggle),n=e.filter(".uk-active");if(n.length)this.show(n,!1);else{if(this.options.active===!1)return;n=e.eq(this.options.active),this.show(n.length?n:e.eq(0),!1)}e.not(n).attr("aria-expanded","false"),n.attr("aria-expanded","true"),this.on("changed.uk.dom",function(){i.connect=t.$(i.options.connect)})}},show:function(n,o){if(!this.animating){if(isNaN(n))n=t.$(n);else{var s=this.find(this.options.toggle);n=0>n?s.length-1:n,n=s.eq(s[n]?n:0)}var a=this,s=this.find(this.options.toggle),r=t.$(n),l=e[this.options.animation]||function(t,n){if(!a.options.animation)return e.none.apply(a);var o=a.options.animation.split(",");return 1==o.length&&(o[1]=o[0]),o[0]=o[0].trim(),o[1]=o[1].trim(),i.apply(a,[o,t,n])};o!==!1&&t.support.animation||(l=e.none),r.hasClass("uk-disabled")||(s.attr("aria-expanded","false"),r.attr("aria-expanded","true"),s.filter(".uk-active").removeClass("uk-active"),r.addClass("uk-active"),this.options.connect&&this.connect.length&&(this.index=this.find(this.options.toggle).index(r),-1==this.index&&(this.index=0),this.connect.each(function(){var i=t.$(this),e=t.$(i.children()),n=t.$(e.filter(".uk-active")),o=t.$(e.eq(a.index));a.animating=!0,l.apply(a,[n,o]).then(function(){n.removeClass("uk-active"),o.addClass("uk-active"),n.attr("aria-hidden","true"),o.attr("aria-hidden","false"),t.Utils.checkDisplay(o,!0),a.animating=!1})})),this.trigger("show.uk.switcher",[r]))}}}),e={none:function(){var i=t.$.Deferred();return i.resolve(),i.promise()},fade:function(t,e){return i.apply(this,["uk-animation-fade",t,e])},"slide-bottom":function(t,e){return i.apply(this,["uk-animation-slide-bottom",t,e])},"slide-top":function(t,e){return i.apply(this,["uk-animation-slide-top",t,e])},"slide-vertical":function(t,e,n){var o=["uk-animation-slide-top","uk-animation-slide-bottom"];return t&&t.index()>e.index()&&o.reverse(),i.apply(this,[o,t,e])},"slide-left":function(t,e){return i.apply(this,["uk-animation-slide-left",t,e])},"slide-right":function(t,e){return i.apply(this,["uk-animation-slide-right",t,e])},"slide-horizontal":function(t,e,n){var o=["uk-animation-slide-right","uk-animation-slide-left"];return t&&t.index()>e.index()&&o.reverse(),i.apply(this,[o,t,e])},scale:function(t,e){return i.apply(this,["uk-animation-scale-up",t,e])}},t.switcher.animations=e}(UIkit),function(t){"use strict";t.component("tab",{defaults:{target:">li:not(.uk-tab-responsive, .uk-disabled)",connect:!1,active:0,animation:!1,duration:200,swiping:!0},boot:function(){t.ready(function(i){t.$("[data-uk-tab]",i).each(function(){var i=t.$(this);if(!i.data("tab")){t.tab(i,t.Utils.options(i.attr("data-uk-tab")))}})})},init:function(){var i=this;this.current=!1,this.on("click.uk.tab",this.options.target,function(e){if(e.preventDefault(),!i.switcher||!i.switcher.animating){var n=i.find(i.options.target).not(this);n.removeClass("uk-active").blur(),i.trigger("change.uk.tab",[t.$(this).addClass("uk-active"),i.current]),i.current=t.$(this),i.options.connect||(n.attr("aria-expanded","false"),t.$(this).attr("aria-expanded","true"))}}),this.options.connect&&(this.connect=t.$(this.options.connect)),this.responsivetab=t.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'),this.responsivetab.dropdown=this.responsivetab.find(".uk-dropdown"),this.responsivetab.lst=this.responsivetab.dropdown.find("ul"),this.responsivetab.caption=this.responsivetab.find("a:first"),this.element.hasClass("uk-tab-bottom")&&this.responsivetab.dropdown.addClass("uk-dropdown-up"),this.responsivetab.lst.on("click.uk.tab","a",function(e){e.preventDefault(),e.stopPropagation();var n=t.$(this);i.element.children("li:not(.uk-tab-responsive)").eq(n.data("index")).trigger("click")}),this.on("show.uk.switcher change.uk.tab",function(t,e){i.responsivetab.caption.html(e.text())}),this.element.append(this.responsivetab),this.options.connect&&(this.switcher=t.switcher(this.element,{toggle:">li:not(.uk-tab-responsive)",connect:this.options.connect,active:this.options.active,animation:this.options.animation,duration:this.options.duration,swiping:this.options.swiping})),t.dropdown(this.responsivetab,{mode:"click",preventflip:"y"}),i.trigger("change.uk.tab",[this.element.find(this.options.target).not(".uk-tab-responsive").filter(".uk-active")]),this.check(),t.$win.on("resize orientationchange",t.Utils.debounce(function(){i.element.is(":visible")&&i.check()},100)),this.on("display.uk.check",function(){i.element.is(":visible")&&i.check()})},check:function(){var i=this.element.children("li:not(.uk-tab-responsive)").removeClass("uk-hidden");if(!i.length)return void this.responsivetab.addClass("uk-hidden");var e,n,o,s=i.eq(0).offset().top+Math.ceil(i.eq(0).height()/2),a=!1;if(this.responsivetab.lst.empty(),i.each(function(){t.$(this).offset().top>s&&(a=!0)}),a)for(var r=0;r<i.length;r++)e=t.$(i.eq(r)),n=e.find("a"),"none"==e.css("float")||e.attr("uk-dropdown")||(e.hasClass("uk-disabled")||(o=e[0].outerHTML.replace("<a ",'<a data-index="'+r+'" '),this.responsivetab.lst.append(o)),e.addClass("uk-hidden"));this.responsivetab[this.responsivetab.lst.children("li").length?"removeClass":"addClass"]("uk-hidden")}})}(UIkit),function(t){"use strict";t.component("cover",{defaults:{automute:!0},boot:function(){t.ready(function(i){t.$("[data-uk-cover]",i).each(function(){var i=t.$(this);if(!i.data("cover")){t.cover(i,t.Utils.options(i.attr("data-uk-cover")))}})})},init:function(){if(this.parent=this.element.parent(),t.$win.on("load resize orientationchange",t.Utils.debounce(function(){this.check()}.bind(this),100)),this.on("display.uk.check",function(t){this.element.is(":visible")&&this.check()}.bind(this)),this.check(),this.element.is("iframe")&&this.options.automute){var i=this.element.attr("src");this.element.attr("src","").on("load",function(){this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}',"*")}).attr("src",[i,i.indexOf("?")>-1?"&":"?","enablejsapi=1&api=1"].join(""))}},check:function(){this.element.css({width:"",height:""}),this.dimension={w:this.element.width(),h:this.element.height()},this.element.attr("width")&&!isNaN(this.element.attr("width"))&&(this.dimension.w=this.element.attr("width")),this.element.attr("height")&&!isNaN(this.element.attr("height"))&&(this.dimension.h=this.element.attr("height")),this.ratio=this.dimension.w/this.dimension.h;var t,i,e=this.parent.width(),n=this.parent.height();e/this.ratio<n?(t=Math.ceil(n*this.ratio),i=n):(t=e,i=Math.ceil(e/this.ratio)),this.element.css({width:t,height:i})}})}(UIkit);

!function(t){var e;window.UIkit&&(e=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-autocomplete",["uikit"],function(){return e||t(UIkit)})}(function(t){"use strict";var e;return t.component("autocomplete",{defaults:{minLength:3,param:"search",method:"post",delay:300,loadingClass:"uk-loading",flipDropdown:!1,skipClass:"uk-skip",hoverClass:"uk-active",source:null,renderer:null,template:'<ul class="uk-nav uk-nav-autocomplete uk-autocomplete-results">{{~items}}<li data-value="{{$item.value}}"><a>{{$item.value}}</a></li>{{/items}}</ul>'},visible:!1,value:null,selected:null,boot:function(){t.$html.on("focus.autocomplete.uikit","[data-uk-autocomplete]",function(e){var i=t.$(this);i.data("autocomplete")||t.autocomplete(i,t.Utils.options(i.attr("data-uk-autocomplete")))}),t.$html.on("click.autocomplete.uikit",function(t){e&&t.target!=e.input[0]&&e.hide()})},init:function(){var e=this,i=!1,s=t.Utils.debounce(function(t){return i?i=!1:void e.handle()},this.options.delay);this.dropdown=this.find(".uk-dropdown"),this.template=this.find('script[type="text/autocomplete"]').html(),this.template=t.Utils.template(this.template||this.options.template),this.input=this.find("input:first").attr("autocomplete","off"),this.dropdown.length||(this.dropdown=t.$('<div class="uk-dropdown"></div>').appendTo(this.element)),this.options.flipDropdown&&this.dropdown.addClass("uk-dropdown-flip"),this.dropdown.attr("aria-expanded","false"),this.input.on({keydown:function(t){if(t&&t.which&&!t.shiftKey)switch(t.which){case 13:i=!0,e.selected&&(t.preventDefault(),e.select());break;case 38:t.preventDefault(),e.pick("prev",!0);break;case 40:t.preventDefault(),e.pick("next",!0);break;case 27:case 9:e.hide()}},keyup:s}),this.dropdown.on("click",".uk-autocomplete-results > *",function(){e.select()}),this.dropdown.on("mouseover",".uk-autocomplete-results > *",function(){e.pick(t.$(this))}),this.triggercomplete=s},handle:function(){var t=this,e=this.value;return this.value=this.input.val(),this.value.length<this.options.minLength?this.hide():(this.value!=e&&t.request(),this)},pick:function(e,i){var s=this,o=t.$(this.dropdown.find(".uk-autocomplete-results").children(":not(."+this.options.skipClass+")")),n=!1;if("string"==typeof e||e.hasClass(this.options.skipClass)){if("next"==e||"prev"==e){if(this.selected){var a=o.index(this.selected);n="next"==e?o.eq(a+1<o.length?a+1:0):o.eq(0>a-1?o.length-1:a-1)}else n=o["next"==e?"first":"last"]();n=t.$(n)}}else n=e;if(n&&n.length&&(this.selected=n,o.removeClass(this.options.hoverClass),this.selected.addClass(this.options.hoverClass),i)){var l=n.position().top,h=s.dropdown.scrollTop(),r=s.dropdown.height();(l>r||0>l)&&s.dropdown.scrollTop(h+l)}},select:function(){if(this.selected){var t=this.selected.data();this.trigger("selectitem.uk.autocomplete",[t,this]),t.value&&this.input.val(t.value).trigger("change"),this.hide()}},show:function(){return this.visible?void 0:(this.visible=!0,this.element.addClass("uk-open"),e&&e!==this&&e.hide(),e=this,this.dropdown.attr("aria-expanded","true"),this)},hide:function(){return this.visible?(this.visible=!1,this.element.removeClass("uk-open"),e===this&&(e=!1),this.dropdown.attr("aria-expanded","false"),this):void 0},request:function(){var e=this,i=function(t){t&&e.render(t),e.element.removeClass(e.options.loadingClass)};if(this.element.addClass(this.options.loadingClass),this.options.source){var s=this.options.source;switch(typeof this.options.source){case"function":this.options.source.apply(this,[i]);break;case"object":if(s.length){var o=[];s.forEach(function(t){t.value&&-1!=t.value.toLowerCase().indexOf(e.value.toLowerCase())&&o.push(t)}),i(o)}break;case"string":var n={};n[this.options.param]=this.value,t.$.ajax({url:this.options.source,data:n,type:this.options.method,dataType:"json"}).done(function(t){i(t||[])});break;default:i(null)}}else this.element.removeClass(e.options.loadingClass)},render:function(t){return this.dropdown.empty(),this.selected=!1,this.options.renderer?this.options.renderer.apply(this,[t]):t&&t.length&&(this.dropdown.append(this.template({items:t})),this.show(),this.trigger("show.uk.autocomplete")),this}}),t.autocomplete});

!function(e){var s;window.UIkit&&(s=e(UIkit)),"function"==typeof define&&define.amd&&define("uikit-search",["uikit"],function(){return s||e(UIkit)})}(function(e){"use strict";e.component("search",{defaults:{msgResultsHeader:"Search Results",msgMoreResults:"More Results",msgNoResults:"No results found",template:'<ul class="uk-nav uk-nav-search uk-autocomplete-results">                                      {{#msgResultsHeader}}<li class="uk-nav-header uk-skip">{{msgResultsHeader}}</li>{{/msgResultsHeader}}                                      {{#items && items.length}}                                          {{~items}}                                          <li data-url="{{!$item.url}}">                                              <a href="{{!$item.url}}">                                                  {{{$item.title}}}                                                  {{#$item.text}}<div>{{{$item.text}}}</div>{{/$item.text}}                                              </a>                                          </li>                                          {{/items}}                                          {{#msgMoreResults}}                                              <li class="uk-nav-divider uk-skip"></li>                                              <li class="uk-search-moreresults" data-moreresults="true"><a href="#" onclick="jQuery(this).closest(\'form\').submit();">{{msgMoreResults}}</a></li>                                          {{/msgMoreResults}}                                      {{/end}}                                      {{^items.length}}                                        {{#msgNoResults}}<li class="uk-skip"><a>{{msgNoResults}}</a></li>{{/msgNoResults}}                                      {{/end}}                                  </ul>',renderer:function(e){var s=this.options;this.dropdown.append(this.template({items:e.results||[],msgResultsHeader:s.msgResultsHeader,msgMoreResults:s.msgMoreResults,msgNoResults:s.msgNoResults})),this.show()}},boot:function(){e.$html.on("focus.search.uikit","[data-uk-search]",function(s){var t=e.$(this);t.data("search")||e.search(t,e.Utils.options(t.attr("data-uk-search")))})},init:function(){var s=this;this.autocomplete=e.autocomplete(this.element,this.options),this.autocomplete.dropdown.addClass("uk-dropdown-search"),this.autocomplete.input.on("keyup",function(){s.element[s.autocomplete.input.val()?"addClass":"removeClass"]("uk-active")}).closest("form").on("reset",function(){s.value="",s.element.removeClass("uk-active")}),this.on("selectitem.uk.autocomplete",function(e,t){t.url?location.href=t.url:t.moreresults&&s.autocomplete.input.closest("form").submit()}),this.element.data("search",this)}})});

!function(t){var e;window.UIkit&&(e=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-datepicker",["uikit"],function(){return e||t(UIkit)})}(function(t){"use strict";var e,n,a=!1;return t.component("datepicker",{defaults:{mobile:!1,weekstart:1,i18n:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},format:"YYYY-MM-DD",offsettop:5,maxDate:!1,minDate:!1,pos:"auto",template:function(e,n){var a,s="";if(s+='<div class="uk-datepicker-nav">',s+='<a href="" class="uk-datepicker-previous"></a>',s+='<a href="" class="uk-datepicker-next"></a>',t.formSelect){var i,r,o,u,c=(new Date).getFullYear(),d=[];for(a=0;a<n.i18n.months.length;a++)a==e.month?d.push('<option value="'+a+'" selected>'+n.i18n.months[a]+"</option>"):d.push('<option value="'+a+'">'+n.i18n.months[a]+"</option>");for(i='<span class="uk-form-select">'+n.i18n.months[e.month]+'<select class="update-picker-month">'+d.join("")+"</select></span>",d=[],o=e.minDate?e.minDate.year():c-50,u=e.maxDate?e.maxDate.year():c+20,a=o;u>=a;a++)a==e.year?d.push('<option value="'+a+'" selected>'+a+"</option>"):d.push('<option value="'+a+'">'+a+"</option>");r='<span class="uk-form-select">'+e.year+'<select class="update-picker-year">'+d.join("")+"</select></span>",s+='<div class="uk-datepicker-heading">'+i+" "+r+"</div>"}else s+='<div class="uk-datepicker-heading">'+n.i18n.months[e.month]+" "+e.year+"</div>";for(s+="</div>",s+='<table class="uk-datepicker-table">',s+="<thead>",a=0;a<e.weekdays.length;a++)e.weekdays[a]&&(s+="<th>"+e.weekdays[a]+"</th>");for(s+="</thead>",s+="<tbody>",a=0;a<e.days.length;a++)if(e.days[a]&&e.days[a].length){s+="<tr>";for(var l=0;l<e.days[a].length;l++)if(e.days[a][l]){var h=e.days[a][l],f=[];h.inmonth||f.push("uk-datepicker-table-muted"),h.selected&&f.push("uk-active"),h.disabled&&f.push("uk-datepicker-date-disabled uk-datepicker-table-muted"),s+='<td><a href="" class="'+f.join(" ")+'" data-date="'+h.day.format()+'">'+h.day.format("D")+"</a></td>"}s+="</tr>"}return s+="</tbody>",s+="</table>"}},boot:function(){t.$win.on("resize orientationchange",function(){a&&a.hide()}),t.$html.on("focus.datepicker.uikit","[data-uk-datepicker]",function(e){var n=t.$(this);n.data("datepicker")||(e.preventDefault(),t.datepicker(n,t.Utils.options(n.attr("data-uk-datepicker"))),n.trigger("focus"))}),t.$html.on("click focus","*",function(n){var s=t.$(n.target);!a||s[0]==e[0]||s.data("datepicker")||s.parents(".uk-datepicker:first").length||a.hide()})},init:function(){if(!t.support.touch||"date"!=this.element.attr("type")||this.options.mobile){var s=this;this.current=this.element.val()?n(this.element.val(),this.options.format):n(),this.on("click focus",function(){a!==s&&s.pick(this.value?this.value:s.options.minDate?s.options.minDate:"")}).on("change",function(){s.element.val()&&!n(s.element.val(),s.options.format).isValid()&&s.element.val(n().format(s.options.format))}),e||(e=t.$('<div class="uk-dropdown uk-datepicker"></div>'),e.on("click",".uk-datepicker-next, .uk-datepicker-previous, [data-date]",function(e){e.stopPropagation(),e.preventDefault();var s=t.$(this);return s.hasClass("uk-datepicker-date-disabled")?!1:void(s.is("[data-date]")?(a.current=n(s.data("date")),a.element.val(a.current.format(a.options.format)).trigger("change"),a.hide()):a.add(s.hasClass("uk-datepicker-next")?1:-1,"months"))}),e.on("change",".update-picker-month, .update-picker-year",function(){var e=t.$(this);a[e.is(".update-picker-year")?"setYear":"setMonth"](Number(e.val()))}),e.appendTo("body"))}},pick:function(s){var i=this.element.offset(),r={left:i.left,right:""};this.current=isNaN(s)?n(s,this.options.format):n(),this.initdate=this.current.format("YYYY-MM-DD"),this.update(),"right"==t.langdirection&&(r.right=window.innerWidth-(r.left+this.element.outerWidth()),r.left="");var o=i.top-this.element.outerHeight()+this.element.height()-this.options.offsettop-e.outerHeight(),u=i.top+this.element.outerHeight()+this.options.offsettop;r.top=u,"top"==this.options.pos?r.top=o:"auto"==this.options.pos&&window.innerHeight-u-e.outerHeight()<0&&o>=0&&(r.top=o),e.css(r).show(),this.trigger("show.uk.datepicker"),a=this},add:function(t,e){this.current.add(t,e),this.update()},setMonth:function(t){this.current.month(t),this.update()},setYear:function(t){this.current.year(t),this.update()},update:function(){var t=this.getRows(this.current.year(),this.current.month()),n=this.options.template(t,this.options);e.html(n),this.trigger("update.uk.datepicker")},getRows:function(t,e){var a=this.options,s=n().format("YYYY-MM-DD"),i=[31,t%4===0&&t%100!==0||t%400===0?29:28,31,30,31,30,31,31,30,31,30,31][e],r=new Date(t,e,1,12).getDay(),o={month:e,year:t,weekdays:[],days:[],maxDate:!1,minDate:!1},u=[];a.maxDate!==!1&&(o.maxDate=isNaN(a.maxDate)?n(a.maxDate,a.format):n().add(a.maxDate,"days")),a.minDate!==!1&&(o.minDate=isNaN(a.minDate)?n(a.minDate,a.format):n().add(a.minDate-1,"days")),o.weekdays=function(){for(var t=0,e=[];7>t;t++){for(var n=t+(a.weekstart||0);n>=7;)n-=7;e.push(a.i18n.weekdays[n])}return e}(),a.weekstart&&a.weekstart>0&&(r-=a.weekstart,0>r&&(r+=7));for(var c=i+r,d=c;d>7;)d-=7;c+=7-d;for(var l,h,f,m,_,p=0,y=0;c>p;p++)l=new Date(t,e,1+(p-r),12),h=o.minDate&&o.minDate>l||o.maxDate&&l>o.maxDate,_=!(r>p||p>=i+r),l=n(l),f=this.initdate==l.format("YYYY-MM-DD"),m=s==l.format("YYYY-MM-DD"),u.push({selected:f,today:m,disabled:h,day:l,inmonth:_}),7===++y&&(o.days.push(u),u=[],y=0);return o},hide:function(){a&&a===this&&(e.hide(),a=!1,this.trigger("hide.uk.datepicker"))}}),n=function(t){function e(t,e,n){switch(arguments.length){case 2:return null!=t?t:e;case 3:return null!=t?t:null!=e?e:n;default:throw new Error("Implement me")}}function n(t,e){return Yt.call(t,e)}function a(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function s(t){Dt.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function i(t,e){var n=!0;return h(function(){return n&&(s(t),n=!1),e.apply(this,arguments)},e)}function r(t,e){fe[t]||(s(e),fe[t]=!0)}function o(t,e){return function(n){return _(t.call(this,n),e)}}function u(t,e){return function(n){return this.localeData().ordinal(t.call(this,n),e)}}function c(){}function d(t,e){e!==!1&&F(t),f(this,t),this._d=new Date(+t._d)}function l(t){var e=v(t),n=e.year||0,a=e.quarter||0,s=e.month||0,i=e.week||0,r=e.day||0,o=e.hour||0,u=e.minute||0,c=e.second||0,d=e.millisecond||0;this._milliseconds=+d+1e3*c+6e4*u+36e5*o,this._days=+r+7*i,this._months=+s+3*a+12*n,this._data={},this._locale=Dt.localeData(),this._bubble()}function h(t,e){for(var a in e)n(e,a)&&(t[a]=e[a]);return n(e,"toString")&&(t.toString=e.toString),n(e,"valueOf")&&(t.valueOf=e.valueOf),t}function f(t,e){var n,a,s;if("undefined"!=typeof e._isAMomentObject&&(t._isAMomentObject=e._isAMomentObject),"undefined"!=typeof e._i&&(t._i=e._i),"undefined"!=typeof e._f&&(t._f=e._f),"undefined"!=typeof e._l&&(t._l=e._l),"undefined"!=typeof e._strict&&(t._strict=e._strict),"undefined"!=typeof e._tzm&&(t._tzm=e._tzm),"undefined"!=typeof e._isUTC&&(t._isUTC=e._isUTC),"undefined"!=typeof e._offset&&(t._offset=e._offset),"undefined"!=typeof e._pf&&(t._pf=e._pf),"undefined"!=typeof e._locale&&(t._locale=e._locale),Ft.length>0)for(n in Ft)a=Ft[n],s=e[a],"undefined"!=typeof s&&(t[a]=s);return t}function m(t){return 0>t?Math.ceil(t):Math.floor(t)}function _(t,e,n){for(var a=""+Math.abs(t),s=t>=0;a.length<e;)a="0"+a;return(s?n?"+":"":"-")+a}function p(t,e){var n={milliseconds:0,months:0};return n.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function y(t,e){var n;return e=I(e,t),t.isBefore(e)?n=p(t,e):(n=p(e,t),n.milliseconds=-n.milliseconds,n.months=-n.months),n}function D(t,e){return function(n,a){var s,i;return null===a||isNaN(+a)||(r(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period)."),i=n,n=a,a=i),n="string"==typeof n?+n:n,s=Dt.duration(n,a),g(this,s,t),this}}function g(t,e,n,a){var s=e._milliseconds,i=e._days,r=e._months;a=null==a?!0:a,s&&t._d.setTime(+t._d+s*n),i&&ft(t,"Date",ht(t,"Date")+i*n),r&&lt(t,ht(t,"Month")+r*n),a&&Dt.updateOffset(t,i||r)}function k(t){return"[object Array]"===Object.prototype.toString.call(t)}function M(t){return"[object Date]"===Object.prototype.toString.call(t)||t instanceof Date}function Y(t,e,n){var a,s=Math.min(t.length,e.length),i=Math.abs(t.length-e.length),r=0;for(a=0;s>a;a++)(n&&t[a]!==e[a]||!n&&S(t[a])!==S(e[a]))&&r++;return r+i}function w(t){if(t){var e=t.toLowerCase().replace(/(.)s$/,"$1");t=re[t]||oe[e]||e}return t}function v(t){var e,a,s={};for(a in t)n(t,a)&&(e=w(a),e&&(s[e]=t[a]));return s}function b(e){var n,a;if(0===e.indexOf("week"))n=7,a="day";else{if(0!==e.indexOf("month"))return;n=12,a="month"}Dt[e]=function(s,i){var r,o,u=Dt._locale[e],c=[];if("number"==typeof s&&(i=s,s=t),o=function(t){var e=Dt().utc().set(a,t);return u.call(Dt._locale,e,s||"")},null!=i)return o(i);for(r=0;n>r;r++)c.push(o(r));return c}}function S(t){var e=+t,n=0;return 0!==e&&isFinite(e)&&(n=e>=0?Math.floor(e):Math.ceil(e)),n}function T(t,e){return new Date(Date.UTC(t,e+1,0)).getUTCDate()}function O(t,e,n){return ot(Dt([t,11,31+e-n]),e,n).week}function W(t){return U(t)?366:365}function U(t){return t%4===0&&t%100!==0||t%400===0}function F(t){var e;t._a&&-2===t._pf.overflow&&(e=t._a[vt]<0||t._a[vt]>11?vt:t._a[bt]<1||t._a[bt]>T(t._a[wt],t._a[vt])?bt:t._a[St]<0||t._a[St]>23?St:t._a[Tt]<0||t._a[Tt]>59?Tt:t._a[Ot]<0||t._a[Ot]>59?Ot:t._a[Wt]<0||t._a[Wt]>999?Wt:-1,t._pf._overflowDayOfYear&&(wt>e||e>bt)&&(e=bt),t._pf.overflow=e)}function G(t){return null==t._isValid&&(t._isValid=!isNaN(t._d.getTime())&&t._pf.overflow<0&&!t._pf.empty&&!t._pf.invalidMonth&&!t._pf.nullInput&&!t._pf.invalidFormat&&!t._pf.userInvalidated,t._strict&&(t._isValid=t._isValid&&0===t._pf.charsLeftOver&&0===t._pf.unusedTokens.length)),t._isValid}function C(t){return t?t.toLowerCase().replace("_","-"):t}function z(t){for(var e,n,a,s,i=0;i<t.length;){for(s=C(t[i]).split("-"),e=s.length,n=C(t[i+1]),n=n?n.split("-"):null;e>0;){if(a=x(s.slice(0,e).join("-")))return a;if(n&&n.length>=e&&Y(s,n,!0)>=e-1)break;e--}i++}return null}function x(t){var e=null;if(!Ut[t]&&Gt)try{e=Dt.locale(),require("./locale/"+t),Dt.locale(e)}catch(n){}return Ut[t]}function I(t,e){return e._isUTC?Dt(t).zone(e._offset||0):Dt(t).local()}function H(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function L(t){var e,n,a=t.match(It);for(e=0,n=a.length;n>e;e++)he[a[e]]?a[e]=he[a[e]]:a[e]=H(a[e]);return function(s){var i="";for(e=0;n>e;e++)i+=a[e]instanceof Function?a[e].call(s,t):a[e];return i}}function P(t,e){return t.isValid()?(e=A(e,t.localeData()),ue[e]||(ue[e]=L(e)),ue[e](t)):t.localeData().invalidDate()}function A(t,e){function n(t){return e.longDateFormat(t)||t}var a=5;for(Ht.lastIndex=0;a>=0&&Ht.test(t);)t=t.replace(Ht,n),Ht.lastIndex=0,a-=1;return t}function N(t,e){var n,a=e._strict;switch(t){case"Q":return qt;case"DDDD":return Rt;case"YYYY":case"GGGG":case"gggg":return a?Xt:At;case"Y":case"G":case"g":return Kt;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return a?Bt:Nt;case"S":if(a)return qt;case"SS":if(a)return Qt;case"SSS":if(a)return Rt;case"DDD":return Pt;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return jt;case"a":case"A":return e._locale._meridiemParse;case"X":return Vt;case"Z":case"ZZ":return Et;case"T":return $t;case"SSSS":return Zt;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return a?Qt:Lt;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Lt;case"Do":return Jt;default:return n=new RegExp(R(Q(t.replace("\\","")),"i"))}}function Z(t){t=t||"";var e=t.match(Et)||[],n=e[e.length-1]||[],a=(n+"").match(se)||["-",0,0],s=+(60*a[1])+S(a[2]);return"+"===a[0]?-s:s}function j(t,e,n){var a,s=n._a;switch(t){case"Q":null!=e&&(s[vt]=3*(S(e)-1));break;case"M":case"MM":null!=e&&(s[vt]=S(e)-1);break;case"MMM":case"MMMM":a=n._locale.monthsParse(e),null!=a?s[vt]=a:n._pf.invalidMonth=e;break;case"D":case"DD":null!=e&&(s[bt]=S(e));break;case"Do":null!=e&&(s[bt]=S(parseInt(e,10)));break;case"DDD":case"DDDD":null!=e&&(n._dayOfYear=S(e));break;case"YY":s[wt]=Dt.parseTwoDigitYear(e);break;case"YYYY":case"YYYYY":case"YYYYYY":s[wt]=S(e);break;case"a":case"A":n._isPm=n._locale.isPM(e);break;case"H":case"HH":case"h":case"hh":s[St]=S(e);break;case"m":case"mm":s[Tt]=S(e);break;case"s":case"ss":s[Ot]=S(e);break;case"S":case"SS":case"SSS":case"SSSS":s[Wt]=S(1e3*("0."+e));break;case"X":n._d=new Date(1e3*parseFloat(e));break;case"Z":case"ZZ":n._useUTC=!0,n._tzm=Z(e);break;case"dd":case"ddd":case"dddd":a=n._locale.weekdaysParse(e),null!=a?(n._w=n._w||{},n._w.d=a):n._pf.invalidWeekday=e;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":t=t.substr(0,1);case"gggg":case"GGGG":case"GGGGG":t=t.substr(0,2),e&&(n._w=n._w||{},n._w[t]=S(e));break;case"gg":case"GG":n._w=n._w||{},n._w[t]=Dt.parseTwoDigitYear(e)}}function E(t){var n,a,s,i,r,o,u;n=t._w,null!=n.GG||null!=n.W||null!=n.E?(r=1,o=4,a=e(n.GG,t._a[wt],ot(Dt(),1,4).year),s=e(n.W,1),i=e(n.E,1)):(r=t._locale._week.dow,o=t._locale._week.doy,a=e(n.gg,t._a[wt],ot(Dt(),r,o).year),s=e(n.w,1),null!=n.d?(i=n.d,r>i&&++s):i=null!=n.e?n.e+r:r),u=ut(a,s,i,o,r),t._a[wt]=u.year,t._dayOfYear=u.dayOfYear}function $(t){var n,a,s,i,r=[];if(!t._d){for(s=J(t),t._w&&null==t._a[bt]&&null==t._a[vt]&&E(t),t._dayOfYear&&(i=e(t._a[wt],s[wt]),t._dayOfYear>W(i)&&(t._pf._overflowDayOfYear=!0),a=at(i,0,t._dayOfYear),t._a[vt]=a.getUTCMonth(),t._a[bt]=a.getUTCDate()),n=0;3>n&&null==t._a[n];++n)t._a[n]=r[n]=s[n];for(;7>n;n++)t._a[n]=r[n]=null==t._a[n]?2===n?1:0:t._a[n];t._d=(t._useUTC?at:nt).apply(null,r),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()+t._tzm)}}function V(t){var e;t._d||(e=v(t._i),t._a=[e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond],$(t))}function J(t){var e=new Date;return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function q(t){if(t._f===Dt.ISO_8601)return void B(t);t._a=[],t._pf.empty=!0;var e,n,a,s,i,r=""+t._i,o=r.length,u=0;for(a=A(t._f,t._locale).match(It)||[],e=0;e<a.length;e++)s=a[e],n=(r.match(N(s,t))||[])[0],n&&(i=r.substr(0,r.indexOf(n)),i.length>0&&t._pf.unusedInput.push(i),r=r.slice(r.indexOf(n)+n.length),u+=n.length),he[s]?(n?t._pf.empty=!1:t._pf.unusedTokens.push(s),j(s,n,t)):t._strict&&!n&&t._pf.unusedTokens.push(s);t._pf.charsLeftOver=o-u,r.length>0&&t._pf.unusedInput.push(r),t._isPm&&t._a[St]<12&&(t._a[St]+=12),t._isPm===!1&&12===t._a[St]&&(t._a[St]=0),$(t),F(t)}function Q(t){return t.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,n,a,s){return e||n||a||s})}function R(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function X(t){var e,n,s,i,r;if(0===t._f.length)return t._pf.invalidFormat=!0,void(t._d=new Date(NaN));for(i=0;i<t._f.length;i++)r=0,e=f({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._pf=a(),e._f=t._f[i],q(e),G(e)&&(r+=e._pf.charsLeftOver,r+=10*e._pf.unusedTokens.length,e._pf.score=r,(null==s||s>r)&&(s=r,n=e));h(t,n||e)}function B(t){var e,n,a=t._i,s=te.exec(a);if(s){for(t._pf.iso=!0,e=0,n=ne.length;n>e;e++)if(ne[e][1].exec(a)){t._f=ne[e][0]+(s[6]||" ");break}for(e=0,n=ae.length;n>e;e++)if(ae[e][1].exec(a)){t._f+=ae[e][0];break}a.match(Et)&&(t._f+="Z"),q(t)}else t._isValid=!1}function K(t){B(t),t._isValid===!1&&(delete t._isValid,Dt.createFromInputFallback(t))}function tt(t,e){var n,a=[];for(n=0;n<t.length;++n)a.push(e(t[n],n));return a}function et(e){var n,a=e._i;a===t?e._d=new Date:M(a)?e._d=new Date(+a):null!==(n=Ct.exec(a))?e._d=new Date(+n[1]):"string"==typeof a?K(e):k(a)?(e._a=tt(a.slice(0),function(t){return parseInt(t,10)}),$(e)):"object"==typeof a?V(e):"number"==typeof a?e._d=new Date(a):Dt.createFromInputFallback(e)}function nt(t,e,n,a,s,i,r){var o=new Date(t,e,n,a,s,i,r);return 1970>t&&o.setFullYear(t),o}function at(t){var e=new Date(Date.UTC.apply(null,arguments));return 1970>t&&e.setUTCFullYear(t),e}function st(t,e){if("string"==typeof t)if(isNaN(t)){if(t=e.weekdaysParse(t),"number"!=typeof t)return null}else t=parseInt(t,10);return t}function it(t,e,n,a,s){return s.relativeTime(e||1,!!n,t,a)}function rt(t,e,n){var a=Dt.duration(t).abs(),s=Mt(a.as("s")),i=Mt(a.as("m")),r=Mt(a.as("h")),o=Mt(a.as("d")),u=Mt(a.as("M")),c=Mt(a.as("y")),d=s<ce.s&&["s",s]||1===i&&["m"]||i<ce.m&&["mm",i]||1===r&&["h"]||r<ce.h&&["hh",r]||1===o&&["d"]||o<ce.d&&["dd",o]||1===u&&["M"]||u<ce.M&&["MM",u]||1===c&&["y"]||["yy",c];return d[2]=e,d[3]=+t>0,d[4]=n,it.apply({},d)}function ot(t,e,n){var a,s=n-e,i=n-t.day();return i>s&&(i-=7),s-7>i&&(i+=7),a=Dt(t).add(i,"d"),{week:Math.ceil(a.dayOfYear()/7),year:a.year()}}function ut(t,e,n,a,s){var i,r,o=at(t,0,1).getUTCDay();return o=0===o?7:o,n=null!=n?n:s,i=s-o+(o>a?7:0)-(s>o?7:0),r=7*(e-1)+(n-s)+i+1,{year:r>0?t:t-1,dayOfYear:r>0?r:W(t-1)+r}}function ct(e){var n=e._i,a=e._f;return e._locale=e._locale||Dt.localeData(e._l),null===n||a===t&&""===n?Dt.invalid({nullInput:!0}):("string"==typeof n&&(e._i=n=e._locale.preparse(n)),Dt.isMoment(n)?new d(n,!0):(a?k(a)?X(e):q(e):et(e),new d(e)))}function dt(t,e){var n,a;if(1===e.length&&k(e[0])&&(e=e[0]),!e.length)return Dt();for(n=e[0],a=1;a<e.length;++a)e[a][t](n)&&(n=e[a]);return n}function lt(t,e){var n;return"string"==typeof e&&(e=t.localeData().monthsParse(e),"number"!=typeof e)?t:(n=Math.min(t.date(),T(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t)}function ht(t,e){return t._d["get"+(t._isUTC?"UTC":"")+e]()}function ft(t,e,n){return"Month"===e?lt(t,n):t._d["set"+(t._isUTC?"UTC":"")+e](n)}function mt(t,e){return function(n){return null!=n?(ft(this,t,n),Dt.updateOffset(this,e),this):ht(this,t)}}function _t(t){return 400*t/146097}function pt(t){return 146097*t/400}function yt(t){Dt.duration.fn[t]=function(){return this._data[t]}}for(var Dt,gt,kt="2.8.3",Mt=("undefined"!=typeof global?global:this,Math.round),Yt=Object.prototype.hasOwnProperty,wt=0,vt=1,bt=2,St=3,Tt=4,Ot=5,Wt=6,Ut={},Ft=[],Gt="undefined"!=typeof module&&module.exports,Ct=/^\/?Date\((\-?\d+)/i,zt=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,xt=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,It=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Ht=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Lt=/\d\d?/,Pt=/\d{1,3}/,At=/\d{1,4}/,Nt=/[+\-]?\d{1,6}/,Zt=/\d+/,jt=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Et=/Z|[\+\-]\d\d:?\d\d/gi,$t=/T/i,Vt=/[\+\-]?\d+(\.\d{1,3})?/,Jt=/\d{1,2}/,qt=/\d/,Qt=/\d\d/,Rt=/\d{3}/,Xt=/\d{4}/,Bt=/[+-]?\d{6}/,Kt=/[+-]?\d+/,te=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ee="YYYY-MM-DDTHH:mm:ssZ",ne=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],ae=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],se=/([\+\-]|\d\d)/gi,ie=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),re={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},oe={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},ue={},ce={s:45,m:45,h:22,d:26,M:11},de="DDD w W M D d".split(" "),le="M D H h m s w W".split(" "),he={M:function(){return this.month()+1},MMM:function(t){return this.localeData().monthsShort(this,t)},MMMM:function(t){return this.localeData().months(this,t)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(t){return this.localeData().weekdaysMin(this,t)},ddd:function(t){return this.localeData().weekdaysShort(this,t)},dddd:function(t){return this.localeData().weekdays(this,t)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return _(this.year()%100,2)},YYYY:function(){return _(this.year(),4)},YYYYY:function(){return _(this.year(),5)},YYYYYY:function(){var t=this.year(),e=t>=0?"+":"-";return e+_(Math.abs(t),6)},gg:function(){return _(this.weekYear()%100,2)},gggg:function(){return _(this.weekYear(),4)},ggggg:function(){return _(this.weekYear(),5)},GG:function(){return _(this.isoWeekYear()%100,2)},GGGG:function(){return _(this.isoWeekYear(),4)},GGGGG:function(){return _(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return S(this.milliseconds()/100)},SS:function(){return _(S(this.milliseconds()/10),2)},SSS:function(){return _(this.milliseconds(),3)},SSSS:function(){return _(this.milliseconds(),3)},Z:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+_(S(t/60),2)+":"+_(S(t)%60,2)},ZZ:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+_(S(t/60),2)+_(S(t)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},fe={},me=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];de.length;)gt=de.pop(),he[gt+"o"]=u(he[gt],gt);for(;le.length;)gt=le.pop(),he[gt+gt]=o(he[gt],2);he.DDDD=o(he.DDD,3),h(c.prototype,{set:function(t){var e,n;for(n in t)e=t[n],"function"==typeof e?this[n]=e:this["_"+n]=e},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(t){return this._months[t.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(t){return this._monthsShort[t.month()]},monthsParse:function(t){var e,n,a;for(this._monthsParse||(this._monthsParse=[]),e=0;12>e;e++)if(this._monthsParse[e]||(n=Dt.utc([2e3,e]),a="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[e]=new RegExp(a.replace(".",""),"i")),this._monthsParse[e].test(t))return e},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(t){return this._weekdays[t.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(t){return this._weekdaysShort[t.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(t){return this._weekdaysMin[t.day()]},weekdaysParse:function(t){var e,n,a;for(this._weekdaysParse||(this._weekdaysParse=[]),e=0;7>e;e++)if(this._weekdaysParse[e]||(n=Dt([2e3,1]).day(e),a="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[e]=new RegExp(a.replace(".",""),"i")),this._weekdaysParse[e].test(t))return e},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(t){var e=this._longDateFormat[t];return!e&&this._longDateFormat[t.toUpperCase()]&&(e=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t]=e),e},isPM:function(t){return"p"===(t+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(t,e){var n=this._calendar[t];return"function"==typeof n?n.apply(e):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(t,e,n,a){var s=this._relativeTime[n];return"function"==typeof s?s(t,e,n,a):s.replace(/%d/i,t)},pastFuture:function(t,e){var n=this._relativeTime[t>0?"future":"past"];return"function"==typeof n?n(e):n.replace(/%s/i,e)},ordinal:function(t){return this._ordinal.replace("%d",t)},_ordinal:"%d",preparse:function(t){return t},postformat:function(t){return t},week:function(t){return ot(t,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),Dt=function(e,n,s,i){var r;return"boolean"==typeof s&&(i=s,s=t),r={},r._isAMomentObject=!0,r._i=e,r._f=n,r._l=s,r._strict=i,r._isUTC=!1,r._pf=a(),ct(r)},Dt.suppressDeprecationWarnings=!1,Dt.createFromInputFallback=i("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(t){t._d=new Date(t._i)}),Dt.min=function(){var t=[].slice.call(arguments,0);return dt("isBefore",t)},Dt.max=function(){var t=[].slice.call(arguments,0);return dt("isAfter",t)},Dt.utc=function(e,n,s,i){var r;return"boolean"==typeof s&&(i=s,s=t),r={},r._isAMomentObject=!0,r._useUTC=!0,r._isUTC=!0,r._l=s,r._i=e,r._f=n,r._strict=i,r._pf=a(),ct(r).utc()},Dt.unix=function(t){return Dt(1e3*t)},Dt.duration=function(t,e){var a,s,i,r,o=t,u=null;return Dt.isDuration(t)?o={ms:t._milliseconds,d:t._days,M:t._months}:"number"==typeof t?(o={},e?o[e]=t:o.milliseconds=t):(u=zt.exec(t))?(a="-"===u[1]?-1:1,o={y:0,d:S(u[bt])*a,h:S(u[St])*a,m:S(u[Tt])*a,s:S(u[Ot])*a,ms:S(u[Wt])*a}):(u=xt.exec(t))?(a="-"===u[1]?-1:1,i=function(t){var e=t&&parseFloat(t.replace(",","."));return(isNaN(e)?0:e)*a},o={y:i(u[2]),M:i(u[3]),d:i(u[4]),h:i(u[5]),m:i(u[6]),s:i(u[7]),w:i(u[8])}):"object"==typeof o&&("from"in o||"to"in o)&&(r=y(Dt(o.from),Dt(o.to)),o={},o.ms=r.milliseconds,o.M=r.months),s=new l(o),Dt.isDuration(t)&&n(t,"_locale")&&(s._locale=t._locale),s},Dt.version=kt,Dt.defaultFormat=ee,Dt.ISO_8601=function(){},Dt.momentProperties=Ft,Dt.updateOffset=function(){},Dt.relativeTimeThreshold=function(e,n){return ce[e]===t?!1:n===t?ce[e]:(ce[e]=n,!0)},Dt.lang=i("moment.lang is deprecated. Use moment.locale instead.",function(t,e){return Dt.locale(t,e)}),Dt.locale=function(t,e){var n;return t&&(n="undefined"!=typeof e?Dt.defineLocale(t,e):Dt.localeData(t),n&&(Dt.duration._locale=Dt._locale=n)),Dt._locale._abbr},Dt.defineLocale=function(t,e){return null!==e?(e.abbr=t,Ut[t]||(Ut[t]=new c),Ut[t].set(e),Dt.locale(t),Ut[t]):(delete Ut[t],null)},Dt.langData=i("moment.langData is deprecated. Use moment.localeData instead.",function(t){return Dt.localeData(t)}),Dt.localeData=function(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return Dt._locale;if(!k(t)){if(e=x(t))return e;t=[t]}return z(t)},Dt.isMoment=function(t){return t instanceof d||null!=t&&n(t,"_isAMomentObject")},Dt.isDuration=function(t){return t instanceof l};for(gt=me.length-1;gt>=0;--gt)b(me[gt]);Dt.normalizeUnits=function(t){return w(t)},Dt.invalid=function(t){var e=Dt.utc(NaN);return null!=t?h(e._pf,t):e._pf.userInvalidated=!0,e},Dt.parseZone=function(){return Dt.apply(null,arguments).parseZone()},Dt.parseTwoDigitYear=function(t){return S(t)+(S(t)>68?1900:2e3)},h(Dt.fn=d.prototype,{clone:function(){return Dt(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var t=Dt(this).utc();return 0<t.year()&&t.year()<=9999?P(t,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):P(t,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var t=this;return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds()]},isValid:function(){return G(this)},isDSTShifted:function(){return this._a?this.isValid()&&Y(this._a,(this._isUTC?Dt.utc(this._a):Dt(this._a)).toArray())>0:!1},parsingFlags:function(){return h({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(t){return this.zone(0,t)},local:function(t){return this._isUTC&&(this.zone(0,t),this._isUTC=!1,t&&this.add(this._dateTzOffset(),"m")),this},format:function(t){var e=P(this,t||Dt.defaultFormat);return this.localeData().postformat(e)},add:D(1,"add"),subtract:D(-1,"subtract"),diff:function(t,e,n){var a,s,i,r=I(t,this),o=6e4*(this.zone()-r.zone());return e=w(e),"year"===e||"month"===e?(a=432e5*(this.daysInMonth()+r.daysInMonth()),s=12*(this.year()-r.year())+(this.month()-r.month()),i=this-Dt(this).startOf("month")-(r-Dt(r).startOf("month")),i-=6e4*(this.zone()-Dt(this).startOf("month").zone()-(r.zone()-Dt(r).startOf("month").zone())),s+=i/a,"year"===e&&(s/=12)):(a=this-r,s="second"===e?a/1e3:"minute"===e?a/6e4:"hour"===e?a/36e5:"day"===e?(a-o)/864e5:"week"===e?(a-o)/6048e5:a),n?s:m(s)},from:function(t,e){return Dt.duration({to:this,from:t}).locale(this.locale()).humanize(!e)},fromNow:function(t){return this.from(Dt(),t)},calendar:function(t){var e=t||Dt(),n=I(e,this).startOf("day"),a=this.diff(n,"days",!0),s=-6>a?"sameElse":-1>a?"lastWeek":0>a?"lastDay":1>a?"sameDay":2>a?"nextDay":7>a?"nextWeek":"sameElse";return this.format(this.localeData().calendar(s,this))},isLeapYear:function(){return U(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(t){var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(t=st(t,this.localeData()),this.add(t-e,"d")):e},month:mt("Month",!0),startOf:function(t){switch(t=w(t)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t?this.weekday(0):"isoWeek"===t&&this.isoWeekday(1),"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(t){return t=w(t),this.startOf(t).add(1,"isoWeek"===t?"week":t).subtract(1,"ms")},isAfter:function(t,e){return e=w("undefined"!=typeof e?e:"millisecond"),"millisecond"===e?(t=Dt.isMoment(t)?t:Dt(t),+this>+t):+this.clone().startOf(e)>+Dt(t).startOf(e)},isBefore:function(t,e){return e=w("undefined"!=typeof e?e:"millisecond"),"millisecond"===e?(t=Dt.isMoment(t)?t:Dt(t),+t>+this):+this.clone().startOf(e)<+Dt(t).startOf(e)},isSame:function(t,e){return e=w(e||"millisecond"),"millisecond"===e?(t=Dt.isMoment(t)?t:Dt(t),+this===+t):+this.clone().startOf(e)===+I(t,this).startOf(e)},min:i("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(t){return t=Dt.apply(null,arguments),this>t?this:t}),max:i("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(t){return t=Dt.apply(null,arguments),t>this?this:t}),zone:function(t,e){var n,a=this._offset||0;return null==t?this._isUTC?a:this._dateTzOffset():("string"==typeof t&&(t=Z(t)),Math.abs(t)<16&&(t=60*t),!this._isUTC&&e&&(n=this._dateTzOffset()),this._offset=t,this._isUTC=!0,null!=n&&this.subtract(n,"m"),a!==t&&(!e||this._changeInProgress?g(this,Dt.duration(a-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,Dt.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},
    parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(t){return t=t?Dt(t).zone():0,(this.zone()-t)%60===0},daysInMonth:function(){return T(this.year(),this.month())},dayOfYear:function(t){var e=Mt((Dt(this).startOf("day")-Dt(this).startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")},quarter:function(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)},weekYear:function(t){var e=ot(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==t?e:this.add(t-e,"y")},isoWeekYear:function(t){var e=ot(this,1,4).year;return null==t?e:this.add(t-e,"y")},week:function(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")},isoWeek:function(t){var e=ot(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")},weekday:function(t){var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")},isoWeekday:function(t){return null==t?this.day()||7:this.day(this.day()%7?t:t-7)},isoWeeksInYear:function(){return O(this.year(),1,4)},weeksInYear:function(){var t=this.localeData()._week;return O(this.year(),t.dow,t.doy)},get:function(t){return t=w(t),this[t]()},set:function(t,e){return t=w(t),"function"==typeof this[t]&&this[t](e),this},locale:function(e){var n;return e===t?this._locale._abbr:(n=Dt.localeData(e),null!=n&&(this._locale=n),this)},lang:i("moment().lang() is deprecated. Use moment().localeData() instead.",function(e){return e===t?this.localeData():this.locale(e)}),localeData:function(){return this._locale},_dateTzOffset:function(){return 15*Math.round(this._d.getTimezoneOffset()/15)}}),Dt.fn.millisecond=Dt.fn.milliseconds=mt("Milliseconds",!1),Dt.fn.second=Dt.fn.seconds=mt("Seconds",!1),Dt.fn.minute=Dt.fn.minutes=mt("Minutes",!1),Dt.fn.hour=Dt.fn.hours=mt("Hours",!0),Dt.fn.date=mt("Date",!0),Dt.fn.dates=i("dates accessor is deprecated. Use date instead.",mt("Date",!0)),Dt.fn.year=mt("FullYear",!0),Dt.fn.years=i("years accessor is deprecated. Use year instead.",mt("FullYear",!0)),Dt.fn.days=Dt.fn.day,Dt.fn.months=Dt.fn.month,Dt.fn.weeks=Dt.fn.week,Dt.fn.isoWeeks=Dt.fn.isoWeek,Dt.fn.quarters=Dt.fn.quarter,Dt.fn.toJSON=Dt.fn.toISOString,h(Dt.duration.fn=l.prototype,{_bubble:function(){var t,e,n,a=this._milliseconds,s=this._days,i=this._months,r=this._data,o=0;r.milliseconds=a%1e3,t=m(a/1e3),r.seconds=t%60,e=m(t/60),r.minutes=e%60,n=m(e/60),r.hours=n%24,s+=m(n/24),o=m(_t(s)),s-=m(pt(o)),i+=m(s/30),s%=30,o+=m(i/12),i%=12,r.days=s,r.months=i,r.years=o},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return m(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*S(this._months/12)},humanize:function(t){var e=rt(this,!t,this.localeData());return t&&(e=this.localeData().pastFuture(+this,e)),this.localeData().postformat(e)},add:function(t,e){var n=Dt.duration(t,e);return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(t,e){var n=Dt.duration(t,e);return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(t){return t=w(t),this[t.toLowerCase()+"s"]()},as:function(t){var e,n;if(t=w(t),"month"===t||"year"===t)return e=this._days+this._milliseconds/864e5,n=this._months+12*_t(e),"month"===t?n:n/12;switch(e=this._days+pt(this._months/12),t){case"week":return e/7+this._milliseconds/6048e5;case"day":return e+this._milliseconds/864e5;case"hour":return 24*e+this._milliseconds/36e5;case"minute":return 24*e*60+this._milliseconds/6e4;case"second":return 24*e*60*60+this._milliseconds/1e3;case"millisecond":return Math.floor(24*e*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+t)}},lang:Dt.fn.lang,locale:Dt.fn.locale,toIsoString:i("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var t=Math.abs(this.years()),e=Math.abs(this.months()),n=Math.abs(this.days()),a=Math.abs(this.hours()),s=Math.abs(this.minutes()),i=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(t?t+"Y":"")+(e?e+"M":"")+(n?n+"D":"")+(a||s||i?"T":"")+(a?a+"H":"")+(s?s+"M":"")+(i?i+"S":""):"P0D"},localeData:function(){return this._locale}}),Dt.duration.fn.toString=Dt.duration.fn.toISOString;for(gt in ie)n(ie,gt)&&yt(gt.toLowerCase());return Dt.duration.fn.asMilliseconds=function(){return this.as("ms")},Dt.duration.fn.asSeconds=function(){return this.as("s")},Dt.duration.fn.asMinutes=function(){return this.as("m")},Dt.duration.fn.asHours=function(){return this.as("h")},Dt.duration.fn.asDays=function(){return this.as("d")},Dt.duration.fn.asWeeks=function(){return this.as("weeks")},Dt.duration.fn.asMonths=function(){return this.as("M")},Dt.duration.fn.asYears=function(){return this.as("y")},Dt.locale("en",{ordinal:function(t){var e=t%10,n=1===S(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n}}),Dt}.call(this),t.Utils.moment=n,t.datepicker});



/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

!function(t){var e={};t.fn.socialButtons=function(a){return a=t.extend({wrapper:'<div class="tm-socialbuttons uk-clearfix">'},a),a.twitter||a.plusone||a.facebook?(a.twitter&&!e.twitter&&(e.twitter=t.getScript("//platform.twitter.com/widgets.js")),a.plusone&&!e.plusone&&(e.plusone=t.getScript("//apis.google.com/js/plusone.js")),window.FB||!a.facebook||e.facebook||(t("body").append('<div id="fb-root"></div>'),function(t,e,a){var o,n=t.getElementsByTagName(e)[0];t.getElementById(a)||(o=t.createElement(e),o.id=a,o.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0",n.parentNode.insertBefore(o,n))}(document,"script","facebook-jssdk"),e.facebook=!0),this.each(function(){var e=t(this).data("permalink"),o=t(a.wrapper).appendTo(this);a.twitter&&o.append('<div><a href="https://twitter.com/share" class="twitter-share-button" data-url="'+e+'" data-count="none">Tweet</a></div>'),a.plusone&&o.append('<div><div class="g-plusone" data-size="medium" data-annotation="none" data-href="'+e+'"></div></div>'),a.facebook&&o.append('<div><div class="fb-like" data-href="'+e+'" data-layout="button_count" data-action="like" data-width="100" data-show-faces="false" data-share="false"></div></div>')})):this},t(function(){window.MooTools&&Element.prototype.hide&&(Element.prototype.hide=function(){})})}(jQuery);

/* Copyright (C) YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

jQuery(function($) {

    var config = $('html').data('config') || {};

    // Social buttons
    $('article[data-permalink]').socialButtons(config);

    // Ripple Effect (by https://codepen.io/440design/pen/iEztk), modified by YOOtheme
    (function(d, x, y){

        $(document).on("click", ".uk-button, .uk-nav-dropdown > li > a, .uk-nav-navbar > li > a, .uk-nav-offcanvas > li > a, .uk-tab > li > a", function(e){

            var ele = $(this), ink = ele.data('ripple');

            if (!ink){
                ink = $("<span class='tm-ripple'></span>").prependTo(ele);
                ele.data('ripple', ink);
            }

            ink.removeClass("tm-animate-ripple");

            if (!ink.height() && !ink.width()){
                d = Math.max(ele.outerWidth(), ele.outerHeight());
                ink.css({height: d, width: d});
            }

            x = e.pageX - ele.offset().left - ink.width()/2;
            y = e.pageY - ele.offset().top - ink.height()/2;

            ink.css({top: y+'px', left: x+'px'}).addClass("tm-animate-ripple");
        });
    })();

    $('.tm-slideset-avion').each(function() {
        var $this = $(this);

        UIkit.$win.on('load resize', function() {
            $('ul.uk-slideset li', $this).removeClass('tm-border-none').filter('.uk-active').last().addClass('tm-border-none');
        });

        $this.on('show.uk.slideset', function(e, set) {
            $(set).last().addClass('tm-border-none');
        });
    });

    // Delete grid-divider border on first item in row
    $('.uk-grid.tm-grid-divider').each(function() {
        var $this = $(this),
            items = $this.children().filter(':visible'), pos;

        if (items.length > 0) {
            pos_cache = items.first().position().left;

            UIkit.$win.on('load resize', UIkit.Utils.debounce((function(fn) {

                fn = function () {

                    items.each(function() {

                        pos = $(this).position();

                        $(this)[pos.left == pos_cache ? 'addClass':'removeClass']('tm-border-none');
                    });

                    return fn;
                }

                return fn();

            })(), 80));
        }

    });

});

/* Copyright (C) YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

!function(e){var a=1,t={lightOrDark:function(e){return this._rgbToHsl.apply(this,this._parseColor(e).slice(0,3))[2]<.6?"dark":"light"},_rgbToHsl:function(e,a,t){e/=255,a/=255,t/=255;var r,s,n=Math.max(e,a,t),i=Math.min(e,a,t),o=(n+i)/2;if(n==i)r=s=0;else{var c=n-i;switch(s=o>.5?c/(2-n-i):c/(n+i),n){case e:r=(a-t)/c+(t>a?6:0);break;case a:r=(t-e)/c+2;break;case t:r=(e-a)/c+4}r/=6}return[r,s,o]},_parseColor:function(e){var a,t;return t=(a=/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(e))?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16),1]:(a=/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(e))?[17*parseInt(a[1],16),17*parseInt(a[2],16),17*parseInt(a[3],16),1]:(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e))?[parseInt(a[1]),parseInt(a[2]),parseInt(a[3]),1]:(a=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(e))?[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10),parseFloat(a[4])]:[255,255,255,0]}};e.fn.particles=function(r){return r=e.extend({color:"auto",opacity:.35},r),this.each(function(){var s=e(this).css("position","relative"),n="particles-"+ ++a,i=e.extend({},r,s.data("particles")||{}),o="dark"==t.lightOrDark(s.css("background-color"))?"#ffffff":"#000000";e("<div></div>").attr("id",n).css({display:"block",position:"absolute",top:0,right:0,bottom:0,left:0}).prependTo(s);i.color&&"auto"!==i.color&&(o=i.color),particlesJS(n,{particles:{number:{value:100,density:{enable:!0,value_area:800}},color:{value:o,opacity:i.opacity},shape:{type:"circle"},opacity:{value:i.opacity,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:o,opacity:i.opacity,width:1},move:{enable:!0,speed:3,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!0,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{resize:!0}},retina_detect:!0})})},e(function(){e("[data-particles]").particles()})}(jQuery);

/* Copyright (C) YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

/*
function hexToRgb(e){var a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(a,function(e,a,t,i){return a+a+t+t+i+i});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function clamp(e,a,t){return Math.min(Math.max(e,a),t)}function isInArray(e,a){return a.indexOf(e)>-1}var pJS=function(e,a){var t=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:t,w:t.offsetWidth,h:t.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var i=this.pJS;a&&Object.deepExtend(i,a),i.tmp.obj={size_value:i.particles.size.value,size_anim_speed:i.particles.size.anim.speed,move_speed:i.particles.move.speed,line_linked_distance:i.particles.line_linked.distance,line_linked_width:i.particles.line_linked.width,mode_grab_distance:i.interactivity.modes.grab.distance,mode_bubble_distance:i.interactivity.modes.bubble.distance,mode_bubble_size:i.interactivity.modes.bubble.size,mode_repulse_distance:i.interactivity.modes.repulse.distance},i.fn.retinaInit=function(){i.retina_detect&&window.devicePixelRatio>1?(i.canvas.pxratio=window.devicePixelRatio,i.tmp.retina=!0):(i.canvas.pxratio=1,i.tmp.retina=!1),i.canvas.w=i.canvas.el.offsetWidth*i.canvas.pxratio,i.canvas.h=i.canvas.el.offsetHeight*i.canvas.pxratio,i.particles.size.value=i.tmp.obj.size_value*i.canvas.pxratio,i.particles.size.anim.speed=i.tmp.obj.size_anim_speed*i.canvas.pxratio,i.particles.move.speed=i.tmp.obj.move_speed*i.canvas.pxratio,i.particles.line_linked.distance=i.tmp.obj.line_linked_distance*i.canvas.pxratio,i.interactivity.modes.grab.distance=i.tmp.obj.mode_grab_distance*i.canvas.pxratio,i.interactivity.modes.bubble.distance=i.tmp.obj.mode_bubble_distance*i.canvas.pxratio,i.particles.line_linked.width=i.tmp.obj.line_linked_width*i.canvas.pxratio,i.interactivity.modes.bubble.size=i.tmp.obj.mode_bubble_size*i.canvas.pxratio,i.interactivity.modes.repulse.distance=i.tmp.obj.mode_repulse_distance*i.canvas.pxratio},i.fn.canvasInit=function(){i.canvas.ctx=i.canvas.el.getContext("2d")},i.fn.canvasSize=function(){i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i&&i.interactivity.events.resize&&window.addEventListener("resize",function(){i.canvas.w=i.canvas.el.offsetWidth,i.canvas.h=i.canvas.el.offsetHeight,i.tmp.retina&&(i.canvas.w*=i.canvas.pxratio,i.canvas.h*=i.canvas.pxratio),i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i.particles.move.enable||(i.fn.particlesEmpty(),i.fn.particlesCreate(),i.fn.particlesDraw(),i.fn.vendors.densityAutoParticles()),i.fn.vendors.densityAutoParticles()})},i.fn.canvasPaint=function(){i.canvas.ctx.fillRect(0,0,i.canvas.w,i.canvas.h)},i.fn.canvasClear=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h)},i.fn.particle=function(e,a,t){if(this.radius=(i.particles.size.random?Math.random():1)*i.particles.size.value,i.particles.size.anim.enable&&(this.size_status=!1,this.vs=i.particles.size.anim.speed/100,i.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=t?t.x:Math.random()*i.canvas.w,this.y=t?t.y:Math.random()*i.canvas.h,this.x>i.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>i.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),i.particles.move.bounce&&i.fn.vendors.checkOverlap(this,t),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var s=e.value[Math.floor(Math.random()*i.particles.color.value.length)];this.color.rgb=hexToRgb(s)}else void 0!=e.value.r&&void 0!=e.value.g&&void 0!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),void 0!=e.value.h&&void 0!=e.value.s&&void 0!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=hexToRgb(this.color.value));this.opacity=(i.particles.opacity.random?Math.random():1)*i.particles.opacity.value,i.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=i.particles.opacity.anim.speed/100,i.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var n={};switch(i.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0}}i.particles.move.straight?(this.vx=n.x,this.vy=n.y,i.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=n.x+Math.random()-.5,this.vy=n.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var r=i.particles.shape.type;if("object"==typeof r){if(r instanceof Array){var c=r[Math.floor(Math.random()*r.length)];this.shape=c}}else this.shape=r;if("image"==this.shape){var o=i.particles.shape;this.img={src:o.image.src,ratio:o.image.width/o.image.height},this.img.ratio||(this.img.ratio=1),"svg"==i.tmp.img_type&&void 0!=i.tmp.source_svg&&(i.fn.vendors.createSvgImg(this),i.tmp.pushing&&(this.img.loaded=!1))}},i.fn.particle.prototype.draw=function(){function e(){i.canvas.ctx.drawImage(r,a.x-t,a.y-t,2*t,2*t/a.img.ratio)}var a=this;if(void 0!=a.radius_bubble)var t=a.radius_bubble;else var t=a.radius;if(void 0!=a.opacity_bubble)var s=a.opacity_bubble;else var s=a.opacity;if(a.color.rgb)var n="rgba("+a.color.rgb.r+","+a.color.rgb.g+","+a.color.rgb.b+","+s+")";else var n="hsla("+a.color.hsl.h+","+a.color.hsl.s+"%,"+a.color.hsl.l+"%,"+s+")";switch(i.canvas.ctx.fillStyle=n,i.canvas.ctx.beginPath(),a.shape){case"circle":i.canvas.ctx.arc(a.x,a.y,t,0,2*Math.PI,!1);break;case"edge":i.canvas.ctx.rect(a.x-t,a.y-t,2*t,2*t);break;case"triangle":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t,a.y+t/1.66,2*t,3,2);break;case"polygon":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t/(i.particles.shape.polygon.nb_sides/3.5),a.y-t/.76,2.66*t/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,1);break;case"star":i.fn.vendors.drawShape(i.canvas.ctx,a.x-2*t/(i.particles.shape.polygon.nb_sides/4),a.y-t/1.52,2*t*2.66/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==i.tmp.img_type)var r=a.img.obj;else var r=i.tmp.img_obj;r&&e()}i.canvas.ctx.closePath(),i.particles.shape.stroke.width>0&&(i.canvas.ctx.strokeStyle=i.particles.shape.stroke.color,i.canvas.ctx.lineWidth=i.particles.shape.stroke.width,i.canvas.ctx.stroke()),i.canvas.ctx.fill()},i.fn.particlesCreate=function(){for(var e=0;e<i.particles.number.value;e++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value))},i.fn.particlesUpdate=function(){for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];if(i.particles.move.enable){var t=i.particles.move.speed/2;a.x+=a.vx*t,a.y+=a.vy*t}if(i.particles.opacity.anim.enable&&(1==a.opacity_status?(a.opacity>=i.particles.opacity.value&&(a.opacity_status=!1),a.opacity+=a.vo):(a.opacity<=i.particles.opacity.anim.opacity_min&&(a.opacity_status=!0),a.opacity-=a.vo),a.opacity<0&&(a.opacity=0)),i.particles.size.anim.enable&&(1==a.size_status?(a.radius>=i.particles.size.value&&(a.size_status=!1),a.radius+=a.vs):(a.radius<=i.particles.size.anim.size_min&&(a.size_status=!0),a.radius-=a.vs),a.radius<0&&(a.radius=0)),"bounce"==i.particles.move.out_mode)var s={x_left:a.radius,x_right:i.canvas.w,y_top:a.radius,y_bottom:i.canvas.h};else var s={x_left:-a.radius,x_right:i.canvas.w+a.radius,y_top:-a.radius,y_bottom:i.canvas.h+a.radius};switch(a.x-a.radius>i.canvas.w?(a.x=s.x_left,a.y=Math.random()*i.canvas.h):a.x+a.radius<0&&(a.x=s.x_right,a.y=Math.random()*i.canvas.h),a.y-a.radius>i.canvas.h?(a.y=s.y_top,a.x=Math.random()*i.canvas.w):a.y+a.radius<0&&(a.y=s.y_bottom,a.x=Math.random()*i.canvas.w),i.particles.move.out_mode){case"bounce":a.x+a.radius>i.canvas.w?a.vx=-a.vx:a.x-a.radius<0&&(a.vx=-a.vx),a.y+a.radius>i.canvas.h?a.vy=-a.vy:a.y-a.radius<0&&(a.vy=-a.vy)}if(isInArray("grab",i.interactivity.events.onhover.mode)&&i.fn.modes.grabParticle(a),(isInArray("bubble",i.interactivity.events.onhover.mode)||isInArray("bubble",i.interactivity.events.onclick.mode))&&i.fn.modes.bubbleParticle(a),(isInArray("repulse",i.interactivity.events.onhover.mode)||isInArray("repulse",i.interactivity.events.onclick.mode))&&i.fn.modes.repulseParticle(a),i.particles.line_linked.enable||i.particles.move.attract.enable)for(var n=e+1;n<i.particles.array.length;n++){var r=i.particles.array[n];i.particles.line_linked.enable&&i.fn.interact.linkParticles(a,r),i.particles.move.attract.enable&&i.fn.interact.attractParticles(a,r),i.particles.move.bounce&&i.fn.interact.bounceParticles(a,r)}}},i.fn.particlesDraw=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h),i.fn.particlesUpdate();for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];a.draw()}},i.fn.particlesEmpty=function(){i.particles.array=[]},i.fn.particlesRefresh=function(){cancelRequestAnimFrame(i.fn.checkAnimFrame),cancelRequestAnimFrame(i.fn.drawAnimFrame),i.tmp.source_svg=void 0,i.tmp.img_obj=void 0,i.tmp.count_svg=0,i.fn.particlesEmpty(),i.fn.canvasClear(),i.fn.vendors.start()},i.fn.interact.linkParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=i.particles.line_linked.opacity-n/(1/i.particles.line_linked.opacity)/i.particles.line_linked.distance;if(r>0){var c=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+r+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(a.x,a.y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}},i.fn.interact.attractParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=t/(1e3*i.particles.move.attract.rotateX),c=s/(1e3*i.particles.move.attract.rotateY);e.vx-=r,e.vy-=c,a.vx+=r,a.vy+=c}},i.fn.interact.bounceParticles=function(e,a){var t=e.x-a.x,i=e.y-a.y,s=Math.sqrt(t*t+i*i),n=e.radius+a.radius;n>=s&&(e.vx=-e.vx,e.vy=-e.vy,a.vx=-a.vx,a.vy=-a.vy)},i.fn.modes.pushParticles=function(e,a){i.tmp.pushing=!0;for(var t=0;e>t;t++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value,{x:a?a.pos_x:Math.random()*i.canvas.w,y:a?a.pos_y:Math.random()*i.canvas.h})),t==e-1&&(i.particles.move.enable||i.fn.particlesDraw(),i.tmp.pushing=!1)},i.fn.modes.removeParticles=function(e){i.particles.array.splice(0,e),i.particles.move.enable||i.fn.particlesDraw()},i.fn.modes.bubbleParticle=function(e){function a(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius}function t(a,t,s,n,c){if(a!=t)if(i.tmp.bubble_duration_end){if(void 0!=s){var o=n-p*(n-a)/i.interactivity.modes.bubble.duration,l=a-o;d=a+l,"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else if(r<=i.interactivity.modes.bubble.distance){if(void 0!=s)var v=s;else var v=n;if(v!=a){var d=n-p*(n-a)/i.interactivity.modes.bubble.duration;"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else"size"==c&&(e.radius_bubble=void 0),"opacity"==c&&(e.opacity_bubble=void 0)}if(i.interactivity.events.onhover.enable&&isInArray("bubble",i.interactivity.events.onhover.mode)){var s=e.x-i.interactivity.mouse.pos_x,n=e.y-i.interactivity.mouse.pos_y,r=Math.sqrt(s*s+n*n),c=1-r/i.interactivity.modes.bubble.distance;if(r<=i.interactivity.modes.bubble.distance){if(c>=0&&"mousemove"==i.interactivity.status){if(i.interactivity.modes.bubble.size!=i.particles.size.value)if(i.interactivity.modes.bubble.size>i.particles.size.value){var o=e.radius+i.interactivity.modes.bubble.size*c;o>=0&&(e.radius_bubble=o)}else{var l=e.radius-i.interactivity.modes.bubble.size,o=e.radius-l*c;o>0?e.radius_bubble=o:e.radius_bubble=0}if(i.interactivity.modes.bubble.opacity!=i.particles.opacity.value)if(i.interactivity.modes.bubble.opacity>i.particles.opacity.value){var v=i.interactivity.modes.bubble.opacity*c;v>e.opacity&&v<=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}else{var v=e.opacity-(i.particles.opacity.value-i.interactivity.modes.bubble.opacity)*c;v<e.opacity&&v>=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}}}else a();"mouseleave"==i.interactivity.status&&a()}else if(i.interactivity.events.onclick.enable&&isInArray("bubble",i.interactivity.events.onclick.mode)){if(i.tmp.bubble_clicking){var s=e.x-i.interactivity.mouse.click_pos_x,n=e.y-i.interactivity.mouse.click_pos_y,r=Math.sqrt(s*s+n*n),p=((new Date).getTime()-i.interactivity.mouse.click_time)/1e3;p>i.interactivity.modes.bubble.duration&&(i.tmp.bubble_duration_end=!0),p>2*i.interactivity.modes.bubble.duration&&(i.tmp.bubble_clicking=!1,i.tmp.bubble_duration_end=!1)}i.tmp.bubble_clicking&&(t(i.interactivity.modes.bubble.size,i.particles.size.value,e.radius_bubble,e.radius,"size"),t(i.interactivity.modes.bubble.opacity,i.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},i.fn.modes.repulseParticle=function(e){function a(){var a=Math.atan2(d,p);if(e.vx=u*Math.cos(a),e.vy=u*Math.sin(a),"bounce"==i.particles.move.out_mode){var t={x:e.x+e.vx,y:e.y+e.vy};t.x+e.radius>i.canvas.w?e.vx=-e.vx:t.x-e.radius<0&&(e.vx=-e.vx),t.y+e.radius>i.canvas.h?e.vy=-e.vy:t.y-e.radius<0&&(e.vy=-e.vy)}}if(i.interactivity.events.onhover.enable&&isInArray("repulse",i.interactivity.events.onhover.mode)&&"mousemove"==i.interactivity.status){var t=e.x-i.interactivity.mouse.pos_x,s=e.y-i.interactivity.mouse.pos_y,n=Math.sqrt(t*t+s*s),r={x:t/n,y:s/n},c=i.interactivity.modes.repulse.distance,o=100,l=clamp(1/c*(-1*Math.pow(n/c,2)+1)*c*o,0,50),v={x:e.x+r.x*l,y:e.y+r.y*l};"bounce"==i.particles.move.out_mode?(v.x-e.radius>0&&v.x+e.radius<i.canvas.w&&(e.x=v.x),v.y-e.radius>0&&v.y+e.radius<i.canvas.h&&(e.y=v.y)):(e.x=v.x,e.y=v.y)}else if(i.interactivity.events.onclick.enable&&isInArray("repulse",i.interactivity.events.onclick.mode))if(i.tmp.repulse_finish||(i.tmp.repulse_count++,i.tmp.repulse_count==i.particles.array.length&&(i.tmp.repulse_finish=!0)),i.tmp.repulse_clicking){var c=Math.pow(i.interactivity.modes.repulse.distance/6,3),p=i.interactivity.mouse.click_pos_x-e.x,d=i.interactivity.mouse.click_pos_y-e.y,m=p*p+d*d,u=-c/m*1;c>=m&&a()}else 0==i.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i)},i.fn.modes.grabParticle=function(e){if(i.interactivity.events.onhover.enable&&"mousemove"==i.interactivity.status){var a=e.x-i.interactivity.mouse.pos_x,t=e.y-i.interactivity.mouse.pos_y,s=Math.sqrt(a*a+t*t);if(s<=i.interactivity.modes.grab.distance){var n=i.interactivity.modes.grab.line_linked.opacity-s/(1/i.interactivity.modes.grab.line_linked.opacity)/i.interactivity.modes.grab.distance;if(n>0){var r=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+n+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x,i.interactivity.mouse.pos_y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}}},i.fn.vendors.eventsListeners=function(){"window"==i.interactivity.detect_on?i.interactivity.el=window:i.interactivity.el=i.canvas.el,(i.interactivity.events.onhover.enable||i.interactivity.events.onclick.enable)&&(i.interactivity.el.addEventListener("mousemove",function(e){if(i.interactivity.el==window)var a=e.clientX,t=e.clientY;else var a=e.offsetX||e.clientX,t=e.offsetY||e.clientY;i.interactivity.mouse.pos_x=a,i.interactivity.mouse.pos_y=t,i.tmp.retina&&(i.interactivity.mouse.pos_x*=i.canvas.pxratio,i.interactivity.mouse.pos_y*=i.canvas.pxratio),i.interactivity.status="mousemove"}),i.interactivity.el.addEventListener("mouseleave",function(e){i.interactivity.mouse.pos_x=null,i.interactivity.mouse.pos_y=null,i.interactivity.status="mouseleave"})),i.interactivity.events.onclick.enable&&i.interactivity.el.addEventListener("click",function(){if(i.interactivity.mouse.click_pos_x=i.interactivity.mouse.pos_x,i.interactivity.mouse.click_pos_y=i.interactivity.mouse.pos_y,i.interactivity.mouse.click_time=(new Date).getTime(),i.interactivity.events.onclick.enable)switch(i.interactivity.events.onclick.mode){case"push":i.particles.move.enable?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):1==i.interactivity.modes.push.particles_nb?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):i.interactivity.modes.push.particles_nb>1&&i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);break;case"remove":i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);break;case"bubble":i.tmp.bubble_clicking=!0;break;case"repulse":i.tmp.repulse_clicking=!0,i.tmp.repulse_count=0,i.tmp.repulse_finish=!1,setTimeout(function(){i.tmp.repulse_clicking=!1},1e3*i.interactivity.modes.repulse.duration)}})},i.fn.vendors.densityAutoParticles=function(){if(i.particles.number.density.enable){var e=i.canvas.el.width*i.canvas.el.height/1e3;i.tmp.retina&&(e/=2*i.canvas.pxratio);var a=e*i.particles.number.value/i.particles.number.density.value_area,t=i.particles.array.length-a;0>t?i.fn.modes.pushParticles(Math.abs(t)):i.fn.modes.removeParticles(t)}},i.fn.vendors.checkOverlap=function(e,a){for(var t=0;t<i.particles.array.length;t++){var s=i.particles.array[t],n=e.x-s.x,r=e.y-s.y,c=Math.sqrt(n*n+r*r);c<=e.radius+s.radius&&(e.x=a?a.x:Math.random()*i.canvas.w,e.y=a?a.y:Math.random()*i.canvas.h,i.fn.vendors.checkOverlap(e))}},i.fn.vendors.createSvgImg=function(e){var a=i.tmp.source_svg,t=/#([0-9A-F]{3,6})/gi,s=a.replace(t,function(a,t,i,s){if(e.color.rgb)var n="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else var n="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return n}),n=new Blob([s],{type:"image/svg+xml;charset=utf-8"}),r=window.URL||window.webkitURL||window,c=r.createObjectURL(n),o=new Image;o.addEventListener("load",function(){e.img.obj=o,e.img.loaded=!0,r.revokeObjectURL(c),i.tmp.count_svg++}),o.src=c},i.fn.vendors.destroypJS=function(){cancelAnimationFrame(i.fn.drawAnimFrame),t.remove(),pJSDom=null},i.fn.vendors.drawShape=function(e,a,t,i,s,n){var r=s*n,c=s/n,o=180*(c-2)/c,l=Math.PI-Math.PI*o/180;e.save(),e.beginPath(),e.translate(a,t),e.moveTo(0,0);for(var v=0;r>v;v++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},i.fn.vendors.exportImg=function(){window.open(i.canvas.el.toDataURL("image/png"),"_blank")},i.fn.vendors.loadImg=function(e){if(i.tmp.img_error=void 0,""!=i.particles.shape.image.src)if("svg"==e){var a=new XMLHttpRequest;a.open("GET",i.particles.shape.image.src),a.onreadystatechange=function(e){4==a.readyState&&(200==a.status?(i.tmp.source_svg=e.currentTarget.response,i.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),i.tmp.img_error=!0))},a.send()}else{var t=new Image;t.addEventListener("load",function(){i.tmp.img_obj=t,i.fn.vendors.checkBeforeDraw()}),t.src=i.particles.shape.image.src}else console.log("Error pJS - No image.src"),i.tmp.img_error=!0},i.fn.vendors.draw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type?i.tmp.count_svg>=i.particles.number.value?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):void 0!=i.tmp.img_obj?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame))},i.fn.vendors.checkBeforeDraw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type&&void 0==i.tmp.source_svg?i.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(i.tmp.checkAnimFrame),i.tmp.img_error||(i.fn.vendors.init(),i.fn.vendors.draw())):(i.fn.vendors.init(),i.fn.vendors.draw())},i.fn.vendors.init=function(){i.fn.retinaInit(),i.fn.canvasInit(),i.fn.canvasSize(),i.fn.canvasPaint(),i.fn.particlesCreate(),i.fn.vendors.densityAutoParticles(),i.particles.line_linked.color_rgb_line=hexToRgb(i.particles.line_linked.color)},i.fn.vendors.start=function(){isInArray("image",i.particles.shape.type)?(i.tmp.img_type=i.particles.shape.image.src.substr(i.particles.shape.image.src.length-3),i.fn.vendors.loadImg(i.tmp.img_type)):i.fn.vendors.checkBeforeDraw()},i.fn.vendors.eventsListeners(),i.fn.vendors.start()};Object.deepExtend=function(e,a){for(var t in a)a[t]&&a[t].constructor&&a[t].constructor===Object?(e[t]=e[t]||{},arguments.callee(e[t],a[t])):e[t]=a[t];return e},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),window.pJSDom=[],window.particlesJS=function(e,a){"string"!=typeof e&&(a=e,e="particles-js"),e||(e="particles-js");var t=document.getElementById(e),i="particles-js-canvas-el",s=t.getElementsByClassName(i);if(s.length)for(;s.length>0;)t.removeChild(s[0]);var n=document.createElement("canvas");n.className=i,n.style.width="100%",n.style.height="100%";var r=document.getElementById(e).appendChild(n);null!=r&&pJSDom.push(new pJS(e,a))},window.particlesJS.load=function(e,a,t){var i=new XMLHttpRequest;i.open("GET",a),i.onreadystatechange=function(a){if(4==i.readyState)if(200==i.status){var s=JSON.parse(a.currentTarget.response);window.particlesJS(e,s),t&&t()}else console.log("Error pJS - XMLHttpRequest status: "+i.status),console.log("Error pJS - File config not found")},i.send()};
*/

// ParticlesJS Config.
/*particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 700
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});*/


/*MUSIC BARS*/
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var canvas = document.getElementById('canvas');

        if (!canvas || !canvas.getContext) {
            return false;
        }

        /********************
         Random Number
         ********************/

        function rand(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        /********************
         Var
         ********************/

        var range = document.getElementById('range');
        var ctx = canvas.getContext('2d');
        var X = canvas.width = window.innerWidth;
        var Y = canvas.height = window.innerHeight;
        var mouseX = null;
        var mouseY = null;
        var triangles = [];
        var triangleNum = range.value;
        var angle = 120;
        var radian = angle * Math.PI / 180;
        var ease = 0.5;
        var friction = 0.5;
        var flg = true;

        /********************
         Animation
         ********************/

        window.requestAnimationFrame =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(cb) {
                setTimeout(cb, 17);
            };

        /********************
         Triangle
         ********************/

        function Triangle(ctx, x, y, i) {
            this.ctx = ctx;
            this.init(x, y, i);
        }

        Triangle.prototype.init = function(x, y, i) {
            this.x = x;
            this.y = y;
            this.x1;
            this.y1;
            this.r = 50;
            this.lw = 5;
            this.a = 30 * i;
            this.rad = this.a * Math.PI / 180;
            this.points = [];
            this.getPoints();
            this.closestIndex = 0;
            this.v = {
                x: 0,
                y: 0
            };
            this.c = {
                r: rand(0, 255),
                g: rand(0, 255),
                b: rand(200, 255)
            };
        };

        Triangle.prototype.getPoints = function() {
            for (var i = 0; i < 3; i++) {
                var x = Math.cos(radian * i) * this.r + this.x;
                var y = Math.sin(radian * i) * this.r + this.y;
                var a = rand(0, 360);
                var rad = a * Math.PI / 180;
                var point = [x, y, rad];
                this.points.push(point);
            }
        };

        var dist = 50;
        Triangle.prototype.draw = function() {
            var ctx  = this.ctx;
            ctx.save();
            ctx.lineWidth = this.lw;
            ctx.globalCompositeOperation = 'lighter';
            ctx.strokeStyle = 'rgb(' + this.c.r + ', ' + this.c.g + ', ' + this.c.b + ')';
            if (flg === true) {
                ctx.translate(this.x, this.y);
                ctx.scale(Math.cos(this.rad) * 2, Math.sin(this.rad) * 2);
                ctx.translate(-this.x, -this.y);
            }
            ctx.beginPath();
            ctx.moveTo(Math.cos(this.points[0][2]) * dist + this.points[0][0], Math.sin(this.points[0][2]) * dist + this.points[0][1]);
            for (var i = 1; i < this.points.length; i++) {
                ctx.lineTo(Math.cos(this.points[i][2]) * dist + this.points[i][0], Math.sin(this.points[i][2]) * dist + this.points[i][1]);
            }
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        };

        Triangle.prototype.closestPoint = function() {
            var ci = 0;
            var dist = Number.MAX_VALUE;
            for (var i = 0; i < this.points.length; i++) {
                var x = mouseX - this.points[i][0];
                var y = mouseY - this.points[i][1];
                var d = x * x + y * y;
                var newDist = Math.floor(Math.sqrt(d));
                if (newDist < dist) {
                    dist = newDist;
                    ci = i;
                }
            }
            this.closestIndex = ci;
        };

        Triangle.prototype.changePoint = function() {
            this.closestPoint();
            var x = this.points[this.closestIndex][0];
            var y = this.points[this.closestIndex][1];
            this.v.x = (mouseX - x) * ease;
            this.v.y = (mouseY - y) * ease;
            this.v.x *= friction;
            this.v.y *= friction;
            this.points[this.closestIndex][0] += this.v.x;
            this.points[this.closestIndex][1] += this.v.y;
        };

        Triangle.prototype.updateParams = function() {
            this.a += 1;
            this.rad = this.a * Math.PI / 180;
            for (var i = 0; i < this.points.length; i++) {
                this.points[i][2] += 0.01;
            }
        };

        Triangle.prototype.render = function(i) {
            this.updateParams();
            this.draw();
        };

        for (var i = 0; i < triangleNum; i++) {
            var t = new Triangle(ctx, X / 2, Y / 2, i);
            triangles.push(t);
        }

        /********************
         Render
         ********************/

        function render() {
            ctx.clearRect(0, 0, X, Y);
            for (var i = 0; i < triangles.length; i++) {
                triangles[i].render(i);
            }
            requestAnimationFrame(render);
        }

        render();

        /********************
         Event
         ********************/

        function onResize() {
            X = canvas.width = window.innerWidth;
            Y = canvas.height = window.innerHeight;
            triangles = [];
            for (var i = 0; i < triangleNum; i++) {
                var t = new Triangle(ctx, X / 2, Y / 2, i);
                triangles.push(t);
            }
        }

        window.addEventListener('resize', function(){
            onResize();
        });

        canvas.addEventListener('click', function(e){
            if (flg === true) {
                flg = false;
            } else {
                flg = true;
            }
        });

        canvas.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            for (var i = 0; i < triangles.length; i++) {
                triangles[i].changePoint();
            }
        });

        canvas.addEventListener('wheel', function(e){
            for (var i = 0; i < triangles.length; i++) {
                triangles[i].lw += e.deltaY / 100;
            }
        });

        canvas.addEventListener('touchmove', function(e) {
            var touch = event.targetTouches[0];
            mouseX = touch.pageX;
            mouseY = touch.pageY;
            for (var i = 0; i < triangles.length; i++) {
                triangles[i].changePoint();
            }
        }, false);

        range.addEventListener('change', function() {
            triangleNum = this.value;
            triangles = [];
            for (var i = 0; i < triangleNum; i++) {
                var t = new Triangle(ctx, X / 2, Y / 2, i);
                triangles.push(t);
            }
        }, false);

    });
})();






(function () {

    var $$ = function (selector, context) {
        var context = context || document;
        var elements = context.querySelectorAll(selector);
        return [].slice.call(elements);
    };

    function _fncSliderInit($slider, options) {
        var prefix = ".fnc-";

        var $slider = $slider;
        var $slidesCont = $slider.querySelector(prefix + "slider__slides");
        var $slides = $$(prefix + "slide", $slider);
        var $controls = $$(prefix + "nav__control", $slider);
        var $controlsBgs = $$(prefix + "nav__bg", $slider);
        var $progressAS = $$(prefix + "nav__control-progress", $slider);

        var numOfSlides = $slides.length;
        var curSlide = 1;
        var sliding = false;
        var slidingAT = +parseFloat(getComputedStyle($slidesCont)["transition-duration"]) * 1000;
        var slidingDelay = +parseFloat(getComputedStyle($slidesCont)["transition-delay"]) * 1000;

        var autoSlidingActive = false;
        var autoSlidingTO;
        var autoSlidingDelay = 5000;
        var autoSlidingBlocked = false;

        var $activeSlide;
        var $activeControlsBg;
        var $prevControl;

        function setIDs() {
            $slides.forEach(function ($slide, index) {
                $slide.classList.add("fnc-slide-" + (index + 1));
            });

            $controls.forEach(function ($control, index) {
                $control.setAttribute("data-slide", index + 1);
                $control.classList.add("fnc-nav__control-" + (index + 1));
            });

            $controlsBgs.forEach(function ($bg, index) {
                $bg.classList.add("fnc-nav__bg-" + (index + 1));
            });
        };

        setIDs();

        function afterSlidingHandler() {
            $slider.querySelector(".m--previous-slide").classList.remove("m--active-slide", "m--previous-slide");
            $slider.querySelector(".m--previous-nav-bg").classList.remove("m--active-nav-bg", "m--previous-nav-bg");

            $activeSlide.classList.remove("m--before-sliding");
            $activeControlsBg.classList.remove("m--nav-bg-before");
            $prevControl.classList.remove("m--prev-control");
            $prevControl.classList.add("m--reset-progress");
            var triggerLayout = $prevControl.offsetTop;
            $prevControl.classList.remove("m--reset-progress");

            sliding = false;
            var layoutTrigger = $slider.offsetTop;

            if (autoSlidingActive && !autoSlidingBlocked) {
                setAutoslidingTO();
            }
        };

        function performSliding(slideID) {
            if (sliding) return;
            sliding = true;
            window.clearTimeout(autoSlidingTO);
            curSlide = slideID;

            $prevControl = $slider.querySelector(".m--active-control");
            $prevControl.classList.remove("m--active-control");
            $prevControl.classList.add("m--prev-control");
            $slider.querySelector(prefix + "nav__control-" + slideID).classList.add("m--active-control");

            $activeSlide = $slider.querySelector(prefix + "slide-" + slideID);
            $activeControlsBg = $slider.querySelector(prefix + "nav__bg-" + slideID);

            $slider.querySelector(".m--active-slide").classList.add("m--previous-slide");
            $slider.querySelector(".m--active-nav-bg").classList.add("m--previous-nav-bg");

            $activeSlide.classList.add("m--before-sliding");
            $activeControlsBg.classList.add("m--nav-bg-before");

            var layoutTrigger = $activeSlide.offsetTop;

            $activeSlide.classList.add("m--active-slide");
            $activeControlsBg.classList.add("m--active-nav-bg");

            setTimeout(afterSlidingHandler, slidingAT + slidingDelay);
        };

        function controlClickHandler() {
            if (sliding) return;
            if (this.classList.contains("m--active-control")) return;
            if (options.blockASafterClick) {
                autoSlidingBlocked = true;
                $slider.classList.add("m--autosliding-blocked");
            }

            var slideID = +this.getAttribute("data-slide");

            performSliding(slideID);
        };

        $controls.forEach(function ($control) {
            $control.addEventListener("click", controlClickHandler);
        });

        function setAutoslidingTO() {
            window.clearTimeout(autoSlidingTO);
            var delay = +options.autoSlidingDelay || autoSlidingDelay;
            curSlide++;
            if (curSlide > numOfSlides) curSlide = 1;

            autoSlidingTO = setTimeout(function () {
                performSliding(curSlide);
            }, delay);
        };

        if (options.autoSliding || +options.autoSlidingDelay > 0) {
            if (options.autoSliding === false) return;

            autoSlidingActive = true;
            setAutoslidingTO();

            $slider.classList.add("m--with-autosliding");
            var triggerLayout = $slider.offsetTop;

            var delay = +options.autoSlidingDelay || autoSlidingDelay;
            delay += slidingDelay + slidingAT;

            $progressAS.forEach(function ($progress) {
                $progress.style.transition = "transform " + (delay / 1000) + "s";
            });
        }

        $slider.querySelector(".fnc-nav__control:first-child").classList.add("m--active-control");

    };

    var fncSlider = function (sliderSelector, options) {
        var $sliders = $$(sliderSelector);

        $sliders.forEach(function ($slider) {
            _fncSliderInit($slider, options);
        });
    };

    window.fncSlider = fncSlider;
}());

fncSlider(".example-slider", { autoSlidingDelay: 8000 });

var $demoCont = document.querySelector(".demo-cont");

[].slice.call(document.querySelectorAll(".fnc-slide__action-btn")).forEach(function ($btn) {
    $btn.addEventListener("click", function () {
        $demoCont.classList.toggle("credits-active");
    });
});

document.querySelector(".demo-cont__credits-close").addEventListener("click", function () {
    $demoCont.classList.remove("credits-active");
});

document.querySelector(".js-activate-global-blending").addEventListener("click", function () {
    document.querySelector(".example-slider").classList.toggle("m--global-blending-active");
});