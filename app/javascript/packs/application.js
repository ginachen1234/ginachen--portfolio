import "bootstrap";


$(document).ready(function(){
  var stars=800;
  var $stars=$(".stars");
  var r=800;
  for(var i=0;i<stars;i++){
    var $star=$("<div/>").addClass("star");
    $stars.append($star);
  }
  $(".star").each(function(){
    var cur=$(this);
    var s=0.2+(Math.random()*1);
    var curR=r+(Math.random()*300);
    cur.css({
      transformOrigin:"0 0 "+curR+"px",
      transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")"

    })
  })
})




// cards





$(document).ready(function(){

  $('.element-card').on('click', function(){

    if ( $(this).hasClass('open') ) {
      $(this).removeClass('open');
    } else {
      $('.element-card').removeClass('open');
      $(this).addClass('open');
    }

  });

});
//footer
var instaFeed = new Instafeed({
              get: 'user',
              userId: 34139106,
              accessToken: '34139106.467ede5.2e8f6b6a9cf846f6bd23169b624aca22',
              target: 'instafeed',
              sortBy: 'most-liked',
              limit: 200,
              resolution: 'thumbnail'
}); instaFeed.run();
//

