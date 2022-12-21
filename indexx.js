jQuery(function($) {
  $('#search-trigger').click(function() {
    $('#search-input').toggleClass('search-input-open');
  });
  $(document).click(function(e) {
    if (!$(e.target).closest('.ngen-search-form').length) {
      $('#search-input').removeClass('search-input-open');
    }
  })
});