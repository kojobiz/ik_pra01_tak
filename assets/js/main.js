
const windowSize = window.innerWidth;

$(function(){

  // ======================================
  // ハンバーガーアイコン
  // ======================================
  var state = false;
  var scrollpos;
  var naviTarget = '#spNaviMenu';

  function menuOpen() {
    if(state == false) {
      scrollpos = $(window).scrollTop();
      $('body').addClass('fixed').css({'top': -scrollpos});
      $(naviTarget).fadeIn();
      // $(naviTarget).addClass('is-open');
      $('#header').addClass('is-open');
      $('#hamburgerMenu').addClass('is-open');
      $('#hamburgerMenu .label').text('CLOSE');
      state = true;
    } else {
      $('body').removeClass('fixed').css({'top': 0});
      window.scrollTo( 0 , scrollpos );
      $(naviTarget).fadeOut();
      // $(naviTarget).removeClass('is-open');
      $('#header').removeClass('is-open');
      $('#hamburgerMenu').removeClass('is-open');
      $('#hamburgerMenu .label').text('MENU');
      state = false;
    }
    return false;
  }

  $('#hamburgerMenu').on('click', function() {
    menuOpen();
  });


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



  // ======================================
  // 要素が画面内に入ったらスライドイン
  // ======================================
  const animFadeUp = gsap.utils.toArray(".animFadeUp");
  animFadeUp.forEach((el, index) => {
    let dataDelay = el.dataset.delay || 0;
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: dataDelay,
      scrollTrigger: {
        // invalidateOnRefresh: true,
        trigger: el,
        start: 'top bottom',
        // toggleActions: 'play none none reverse',
        // markers: true,
        toggleClass: {
          targets: el,
          className: "is-animated",
        },
        once: true,
      },
    });
  });

  ScrollTrigger.batch(".anim-batch-list > *", {
    // interval: 0.1, // time window (in seconds) for batching to occur. 
    // batchMax: 3,   // maximum batch size (targets)
    onEnter: batch => gsap.from(batch, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2
    }),
    toggleClass: "is-animated",
    once: true,
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.js-parallax').forEach(wrap => {
    const y = wrap.getAttribute('data-y') || -100;
    
    gsap.to(wrap, {
      y: y,    
      scrollTrigger: {
        trigger: wrap,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
        //markers: true
      }
    })
  });


  // MVテキストアニメーション
  $(".hero-text-anim").each(function() {
    var content = $(this).html();
    var trimText = $.trim(content);
    var newText = "";

    trimText.split("").forEach(function(e) {
      if(e == ' '){
        // 空白対策
        newText += '<span> </span>';
      } else {
        newText += '<span>' + e + '</span>';
      }
    });
    $(this).html(newText);
  });

  gsap.set('.hero-text01 span', { y: 20, autoAlpha: 0 });
  gsap.set('.hero-text02 span', { y: 20, autoAlpha: 0 });
  gsap.set('.hero-text03 span', { y: 20, autoAlpha: 0 });

  const TL = gsap.timeline();
  TL.to('.hero-text01 span', { y: 0, autoAlpha: 1, stagger: 0.05 })
    .to('.hero-text02 span', { y: 0, autoAlpha: 1, stagger: 0.05 })
    .to('.hero-text03 span', { y: 0, autoAlpha: 1, stagger: 0.05 });

  // gsap.fromTo(
  //   ".js-text span", // アニメーションさせる要素
  //   {
  //     autoAlpha: 0, // アニメーション開始前は透明
  //     y: 20, // 20px下に移動
  //   },
  //   {
  //     autoAlpha: 1, // アニメーション後は出現(透過率0)
  //     y: 0, // 20px上に移動
  //     repeat: -1, // リピート無限
  //     repeatDelay: 1.2, // 1.2秒遅れでリピート
  //     stagger: 0.2, // 0.2秒遅れて順番に再生
  //   }
  // );


  // 対象の要素を取得
  // gsap.utils.toArray('.p-home__hero--copy span').forEach(paragraph => {
  //   const textContent = paragraph.textContent;

  //   const newTextContent = [...textContent]
  //     .map((char) => `<span>${char}</span>`)
  //     .join("");
  //   // 新しい文字列をHTMLに挿入
  //   paragraph.innerHTML = newTextContent;

  //   gsap.fromTo(
  //     paragraph + " > span", // アニメーションさせる要素
  //     {
  //       autoAlpha: 0, // アニメーション開始前は透明
  //       y: 20, // 20px下に移動
  //     },
  //     {
  //       autoAlpha: 1, // アニメーション後は出現(透過率0)
  //       y: 0, // 20px上に移動
  //       repeat: -1, // リピート無限
  //       repeatDelay: 1.2, // 1.2秒遅れでリピート
  //       stagger: 0.2, // 0.2秒遅れて順番に再生
  //     }
  //   );
  // });

  // $(window).scroll(function() {
  //   animSlideUp();
  // });

  // animSlideUp();

  // function animSlideUp() {
  //   $('.animSlideUp').each(function() {
  //     const targetPosition = $(this).offset().top;
  //     const windowHeight = $(window).height();
  //     const scroll = $(window).scrollTop();

  //     let buffer;
  //     if ($(window).width() > 768) {
  //       buffer = 0;
  //     } else {
  //       buffer = 0;
  //     }

  //     if(scroll > targetPosition - windowHeight + buffer) {
  //       $(this).addClass("is-anim");
  //     } else {
  //       $(this).removeClass('is-anim');
  //     }
  //   });
  // };

  // ======================================
  // 高さを合わせる
  // ======================================
  // $('.footer-area01 dd').matchHeight();

});

const swiper = new Swiper("#heroSlider", {
  loop: true,
  effect: 'fade',
  speed: 1000,
  autoplay: { // 自動再生させる
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '#heroPagination',
    clickable: true,
  },
});


// ======================================
// スムーススクロール
// ======================================
$(function(){
	var headerHeight = $('#header').height();
	var scrollAdjust = headerHeight;

  var urlHash = location.hash;
  if(urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function () {
      scrollToAnker(urlHash) ;
    }, 100);
  }

  //通常のクリック時
  $('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var hash = href == "#" || href == "" ? 'html' : href;
    scrollToAnker(hash);
    return false;
  });

  // 指定したアンカー(#ID)へアニメーションでスクロール
  function scrollToAnker(hash) {
    var target = $(hash);
    var position = target.offset().top - scrollAdjust;
    $('body,html').stop().animate({scrollTop:position}, 1000);
  }

  // 別ページのアンカーリンク ?id=○○ で遷移
  $(window).on('load', function() {
    var url = $(location).attr('href');
    if(url.indexOf("?id=") != -1){
      var id = url.split("?id=");
      var $target = $('#' + id[id.length - 1]);
      if($target.length){
        $('body').removeClass('fixed');
        $('.start_overlay').hide();
        var pos = $target.offset().top - scrollAdjust;
        $("html, body").animate({scrollTop:pos}, 1000);
      }
    }
  });

});