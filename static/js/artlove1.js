$(function() {
  'use strict';
  document['addEventListener']('touchstart', function() {}, false);
  $(function() {
    $('body')['wrapInner']('<div class="wsmenucontainer" />');
    $('<div class="overlapblackbg"></div>')['prependTo']('.wsmenu');
    $('#wsnavtoggle')['click'](function() {
      $('body')['toggleClass']('wsactive')
    });
    $('.overlapblackbg')['click'](function() {
      $('body')['removeClass']('wsactive')
    });
    $('.wsmenu > .wsmenu-list > li')['has']('.sub-menu')['prepend']('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
    $('.wsmenu > .wsmenu-list > li')['has']('.wsmegamenu')['prepend']('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
    $('.wsmenu-click')['click'](function() {
      $(this)['toggleClass']('ws-activearrow')['parent']()['siblings']()['children']()['removeClass']('ws-activearrow');
      $('.wsmenu > .wsmenu-list > li > .sub-menu, .wsmegamenu')['not']($(this)['siblings']('.wsmenu > .wsmenu-list > li > .sub-menu, .wsmegamenu'))['slideUp']('slow');
      $(this)['siblings']('.sub-menu')['slideToggle']('slow');
      $(this)['siblings']('.wsmegamenu')['slideToggle']('slow')
    });
    $('.wsmenu > .wsmenu-list > li > ul > li')['has']('.sub-menu')['prepend']('<span class="wsmenu-click02"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
    $('.wsmenu > .wsmenu-list > li > ul > li > ul > li')['has']('.sub-menu')['prepend']('<span class="wsmenu-click02"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
    $('.wsmenu-click02')['click'](function() {
      $(this)['children']('.wsmenu-arrow')['toggleClass']('wsmenu-rotate');
      $(this)['siblings']('li > .sub-menu')['slideToggle']('slow')
    });
    $(window)['on']('resize', function() {
      if ($(window)['outerWidth']() < 992) {
        $('.wsmenu')['css']('height', $(this)['height']() + 'px');
        $('.wsmenucontainer')['css']('min-width', $(this)['width']() + 'px')
      } else {
        $('.wsmenu')['removeAttr']('style');
        $('.wsmenucontainer')['removeAttr']('style');
        $('body')['removeClass']('wsactive');
        $('.wsmenu > .wsmenu-list > li > .wsmegamenu, .wsmenu > .wsmenu-list > li > ul.sub-menu, .wsmenu > .wsmenu-list > li > ul.sub-menu > li > ul.sub-menu, .wsmenu > .wsmenu-list > li > ul.sub-menu > li > ul.sub-menu > li > ul.sub-menu')['removeAttr']('style');
        $('.wsmenu-click')['removeClass']('ws-activearrow');
        $('.wsmenu-click02 > i')['removeClass']('wsmenu-rotate')
      }
    });
    $(window)['trigger']('resize')
  });
  $(window)['on']('load', function() {
    $('.wsmobileheader .wssearch')['on']('click', function() {
      $(this)['toggleClass']('wsopensearch')
    });
    $('body, .wsopensearch .fa.fa-times')['on']('click', function() {
      $('.wssearch')['removeClass']('wsopensearch')
    });
    $('.wssearch, .wssearchform form')['on']('click', function(_0xf3cbx1) {
      _0xf3cbx1['stopPropagation']()
    })
  })
}())


$(document).ready(function(){
  var mySwiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    speed: 1000,
    autoplay: 4000
  });

  var submitIcon = $('.searchbox-icon');
  var inputBox = $('.searchbox-input');
  var searchBox = $('.searchbox');
  var isOpen = false;
  submitIcon.click(function(){
    if(isOpen == false){
      searchBox.addClass('searchbox-open');
      inputBox.val('');
      setTimeout(function() {
        inputBox.focus();
      }, 300);
      isOpen = true;
    } else {
      searchBox.removeClass('searchbox-open');
      inputBox.focusout();
      isOpen = false;
    }
  });  
  submitIcon.mouseup(function(){
    return false;
  });
  searchBox.mouseup(function(){
    return false;
  });
  $(document).mouseup(function(){
    if(isOpen == true){
      $('.searchbox-icon').css('display','block');
      submitIcon.click();
    }
  });
});

function buttonUp(){
  var inputVal = $('.searchbox-input').val();
  inputVal = $.trim(inputVal).length;
  if( inputVal !== 0){
    $('.searchbox-icon').css('display','none');
  } else {
    $('.searchbox-input').val('');
    $('.searchbox-icon').css('display','block');
  }
}