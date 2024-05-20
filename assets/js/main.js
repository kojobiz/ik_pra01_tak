 // ======================================
  // メガメニュー
  // ======================================
  // PC
  $('.l-header__menu--parent').hover(function() {
    $(this).find('.l-header__mega-menu').stop().addClass('is-open');
  }, function() {
    $(this).find('.l-header__mega-menu').stop().removeClass('is-open');
  });

  // SP
  $('.l-header__menu--toggle').on('click', function() {
    $(this).toggleClass('is-open');
    $(this).parent().find('.l-header__mega-menu').slideToggle();
  });


  // ======================================
  // クリックで展開
  // ======================================
  $('.js-toggle-item dt').on('click', function() {
    $(this).toggleClass('is-open');
    $(this).next('dd').slideToggle();
  });

