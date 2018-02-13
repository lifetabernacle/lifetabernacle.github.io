// Header dynamics
(function($) {
  var $window = $(window),
    $header = $('header'),
    $fab = $('a.sidenav-button'),
    $nav = $('nav'),
    $name = $('a.brand-logo');

  $window.resize(function resize(){
    if ($window.width() < 993) {
      return $header.addClass('navbar-fixed'),
        $fab.removeClass('btn btn-floating btn-large waves-effect waves-light black');
    }

    $header.removeClass('mobile'),
    $fab.addClass('btn btn-floating btn-large waves-effect waves-light black'),
    $nav.removeClass('teal'),
    $nav.addClass('transparent z-depth-0'),
    $name.removeClass('center');
  }).trigger('resize');
})(jQuery);

// Side nav
$('.sidenav-button').sideNav();

// Tooltips
$('.tooltipped').tooltip({delay: 50});

// Smooth scroll to top FAB
jQuery(document).ready(function($) {
  $(window).scroll(function() {
    if ($(this).scrollTop() < 200) {
      $('.to-top').fadeOut();
    } else {
      $('.to-top').fadeIn();
    }
  });
  $('.to-top').on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 'fast');
    return false;
  });
});

// Copy to clipboard
new Clipboard('.copy');