$(document).ready(function(){
  var menu_flag=false;
  $("#show_list").click(function(e){
    e.stopPropagation();
    if (menu_flag) {
      $('.navbar-nav').slideUp();
      menu_flag=false;
    }else{
      $('.navbar-nav').slideDown();
      menu_flag=true;
    }
  });
  $('.navbar-nav').click(function(e){
    e.stopPropagation();
  });
  $("html").click(function(){
    if (menu_flag) {
      $('.navbar-nav').slideUp();
      menu_flag=false;
    }
  });
  $('img.shop').css('height',$('img.shop').css('width'));
  $(window).resize(function(){
    $('img.shop').css('height',$('img.shop').css('width'));
  });

  $('a.scroll_spy').click(function(e){
      var href=$(this).attr('href');
      $('html, body').animate({
        scrollTop: $(href).offset().top-50
      }, 'slow');
  });
});
