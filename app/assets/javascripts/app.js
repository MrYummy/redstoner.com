$(function(){
  hljs.initHighlightingOnLoad();
  $('.flash').click(function(){
    $('.flash').animate({
      opacity: 0
    }, 'fast', function(){
      $(this).animate({
        height: 0
      }, 'slow', function(){
        $(this).hide();
      });
    });
  });
  setTimeout(function(){
    $('.flash').animate({
      opacity: 0
    }, 3000, function(){
      $(this).animate({
        height: 0
      }, 'slow', function(){
        $(this).hide();
      });
    });
  }, 4000);
  var pressed = new Array(10);
  var keys    = [38,38,40,40,37,39,37,39,66,65];
  $(document).keydown(function(e) {
    pressed.push(e.keyCode);
    pressed.shift();
    if ( pressed.toString() == keys.toString() ) {
      $('html').css('overflow-x', 'hidden');
      $('body').css('animation', '1s alternate-reverse infinite wiggle');
      $('img').css('transform', 'rotate(180deg)');
    }
  });
  $('pre code').each(function() {
    if ($(this).attr("class")) {
      $(this).parent().attr("lang", $(this).attr("class").replace("hljs", "").trim());
    } else {
      $(this).parent().attr("lang", "(language unknown)");
    }
  });

  updateTimestamps();
  setInterval(updateTimestamps, 1000*10);
});

function updateTimestamps() {
  $('time').ago(function(elem){
    return new Date($(elem).attr('datetime'));
  });
}