$(document).ready(function(){
  $('li.nav-link>a.nav-link').click(function(e){
    if ($(this).attr('href')!='cv.html') {
      e.preventDefault();
      var href=$(this).attr('href');
      $('html, body').animate({
        scrollTop: $(href).offset().top-30
      }, 'slow');
    }
  });
  $('#pdf').hide();
  $("ul.tab>li>a").click(function(e){
    e.preventDefault();
    $("ul.tab>li>a").removeClass('active');
    var category=$(this).attr('data-project');
    switch (category) {
      case 'all':
        $(".projects").show();
        $(this).addClass('active');
        break;
      case 'php':
        $(".projects").hide();
        $("div[data-project='php']").show();
        $(this).addClass('active');
        break;
      case 'laravel':
        $(".projects").hide();
        $("div[data-project='laravel']").show();
        $(this).addClass('active');
        break;
      case 'psdToHtml':
        $(".projects").hide();
        $("div[data-project='psdToHtml']").show();
        $(this).addClass('active');
        break;
      default:
        $('.projects').show();
        break;
    }
  });
  $('#show_video').click(function(e){
    e.preventDefault();
    $('#play_video').attr('src','projects/movie.mp4');
    $('.display_video').show();
    $('#play_video').show();
    $('body').css('overflow','hidden');
  });
  $('.certi').click(function(){
    $('#pdf').attr('src',$(this).attr('data-pdf'));
    $('#pdf').show();
    $('.display_video').show();
    $('body').css('overflow','hidden');
  });
  $('.bg-black').click(function(e){
    e.stopPropagation();
  });
  $('#play_video').click(function(e){
    e.stopPropagation();
  });
  $("span.close").click(function(e){
    $('.display_video').hide();
    $('#play_video').hide();
    $('#pdf').hide();
    $('#pdf').attr('src','');
    $('#play_video').attr('src','');
    $('body').css('overflow','auto');
  });
  $('.display_video').click(function(e){
    $('.display_video').hide();
    $('#play_video').hide();
    $('#pdf').hide();
    $('#pdf').attr('src','');
    $('#play_video').attr('src','');
    $('body').css('overflow','auto');
  });
});
