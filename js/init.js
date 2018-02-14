// Side nav
var elem = document.querySelector('.sidenav');
var instance = M.Sidenav.init(elem, options);

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