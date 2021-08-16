
// スティッキーヘッダ

$(function(){
  var $win = $(window),
        $fv = $('.fv'),
        $header = $('.header'),
        fvHeight = $fv.outerHeight();
        fixedClass = 'fixed',
  
      $win.on('load scroll', function(){
        var value = $(this).scrollTop();
        if($win.width() > 768){
          if( value > fvHeight){
          $header.addClass(fixedClass);
        }else{
          $header.removeClass(fixedClass);
        }
      }
      });
  });

  //ハンバーガーメニューの開閉
$('.burger-btn').on('click',function(){
  $('.nav-wrapper').fadeToggle(300);
  $('.burger-btn').toggleClass('cross');
  $('body').toggleClass('noscroll');
});

$('.nav-list').on('click',function(){
  $('.burger-btn').removeClass('cross');
});


 if( $(window).width() < 768 ){
  $('.nav-item>a').on('click',function(){
    $('.nav-wrapper').fadeOut(500);
    $('.burger-btn').removeClass('close');
    $('body').removeClass('noscroll');
  });

}
  
