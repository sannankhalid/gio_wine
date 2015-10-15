// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_self

{
  var bodyPaddingTop = $('body').css('padding-top');
  bodyPaddingTop = Number(bodyPaddingTop.substring(0, bodyPaddingTop.length-2));
  var relativeHeaderHeight = $('#header').outerHeight(true);
  var current_position = $('#header').css('position');
  var fixedHeaderHeight = 83; // height(73) + margin-bottom(10)

  var start_to_fix_header = (bodyPaddingTop + relativeHeaderHeight) - fixedHeaderHeight;
  var calc_for_fixed_report = function() {
    var current_scroll_top = this.scrollY;
    if ((current_scroll_top > start_to_fix_header) && (current_position != 'fixed'))
    {
      $('#header').addClass('fixed');
      $('body').css('padding-top', bodyPaddingTop+relativeHeaderHeight);
      current_position = 'fixed';
    }
    else if ((current_scroll_top < (start_to_fix_header + 1)) && (current_position == 'fixed'))
    {
      $('#header').removeClass('fixed');
      $('body').css('padding-top', bodyPaddingTop);
      current_position = 'relative';
    }
  };
  $(window).scroll(calc_for_fixed_report);
  calc_for_fixed_report();
}
