$(window).scroll(function(){
    var sticky = $('.tm-header'), 
        scroll = $(window).scrollTop();
    if (scroll >= 2) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
      if( $(window).width() <  767){
        sticky.removeClass('fixed');
      }
  });

$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 1) {
            $(".mobnav").css('background-color', 'rgba(255,255,255,1)');
        } else {
            $(".mobnav").css('background-color', 'transparent');
        }
    });
});
  
$(document).ready(function(){

  
  $(document).on('click', 'a[href^="#home"]', function (event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
  });
  $(document).on('click', 'a[href^="#about"]', function (event) {
      event.preventDefault();
      $('.abright').css("height","400px","transistion","5s");
      $('.ableft').css("margin-top","18px");
      $('.ableft').css("height","443px");
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
});
  
  $(document).on('click', 'a[href^="#about"]', function (event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
      $(".shape").css("left","174px");
  });
  
  $(document).on('click', 'a[href^="#team"]', function (event) {
      event.preventDefault();
  
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
  });
  
  $(document).on('click', 'a[href^="#brand"]', function (event) {
      event.preventDefault();
  
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
  });
  
  $(document).on('click', 'a[href^="#career"]', function (event) {
      event.preventDefault();
  
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
  });
  
  $(document).on('click', 'a[href^="#contact"]', function (event) {
      event.preventDefault();
  
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
  });
  
  
  $(function() {
    $(".topheight li:first-child").append('<span class="shape"></span>').html();
  });
  
  
  /**validations**/
  
     $("#email").keyup(function(){
		var text = "contact@tresmercari.com"
		if($(this).val() == text){
			 $('#email').val('');
			 $(".error").show().delay(1000).fadeOut("slow");
		}
    });
	
	
	  $( "#namefield1" ).keypress(function(e) {
                    var key = e.keyCode;
                    if (key >= 48 && key <= 57) {
                        e.preventDefault();
                    }
      });
  
		
	  $( "#namefield2" ).keypress(function(e) {
                    var key = e.keyCode;
                    if (key >= 48 && key <= 57) {
                        e.preventDefault();
                    }
      });
	  
	   $('#email').on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
  
  });

  /**   $('.topheight a').click(function(){
      $('a').removeClass('active');
      $(this).addClass('active');
      $(".topheight li:first-child a").css("color","#ba7559");
    });
    $(function() {
    $(".topheight li:first-child a").css("color","#333");
  });**/
  
  /* Open when someone clicks on the span element */
  function openNav() {
      document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
      document.getElementById("myNav").style.width = "0%";
  } 
  



  $(window).scroll(function() {
      $('.i').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if ( topOfWindow  > imagePos ) {
              $('.ib').css("width","40%");
          }
      });
      $('.v').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if ( topOfWindow  > imagePos ) {

              $('.vb').css("width","40%");
          }
      });
        $('.t').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if ( topOfWindow  > imagePos ) {
              $('.tb').css("width","40%");
          }
      });
  
      $('.logotext').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if ( topOfWindow  = imagePos ) {
              $('.abright').css("height","443px","transistion","5s");
          }
          else if ( topOfWindow  < imagePos ) {
               $('.abright').css("height","443px","transistion","5s");
          } 
      });
  
        $('.logotext').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if ( topOfWindow   =  imagePos ) {
               $('.ableft').css("margin-top","18px");
               $('.ableft').css("height","443px");
          }
          else if ( topOfWindow   =  imagePos ) {
             $('.ableft').css("margin-top","18px");
             $('.ableft').css("height","443px");
          }
      });
  
      $('.ca').each(function(){
         var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
         if ( topOfWindow  > imagePos ) {
              $('.cright').css("height","410px","transistion","5s");
          } 
      });
  
        $('.ca').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
        if ( topOfWindow   >  imagePos ) {
            $('.cleft').css("margin-top","18px");
            $('.cleft').css("height","400px");
          }
      });
  
        $('.formanim').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if ( topOfWindow  > imagePos ) {
              $('.fright').css("height","443px","transistion","5s");
          } 
      });
  
        $('.formanim').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if ( topOfWindow   >  imagePos ) {
            $('.fleft').css("margin-top","18px");
            $('.fleft').css("height","443px");
          }
      });


      $('.bdanim').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if ( topOfWindow  > imagePos ) {
              $('.bdright').css("height","443px","transistion","5s");
          } 
      });
  
        $('.bdanim').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if ( topOfWindow   >  imagePos ) {
            $('.bdleft').css("margin-top","18px");
            $('.bdleft').css("height","443px");
          }
      });
  
      /** shape**/
 $('.logotext').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if ( topOfWindow  > imagePos ) {
              $('.shape').css('left','168px');
           }
          else if(  imagePos  = topOfWindow ){
              $('.shape').css('left','22px');
          }
      });
  
      $('.teamanim').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if ( topOfWindow  > imagePos ) {
               $('.shape').css('left','331px');
           }
  
          else  if(  imagePos  < topOfWindow ) {
               $('.shape').css('left','170px');
          } 
  
      });
  
  
      $('.brderbrand').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if ( topOfWindow  > imagePos ) {
               $('.shape').css('left','508px');
           }
  
          else  if(  imagePos  < topOfWindow ) {
               $('.shape').css('left','331px');
          }
  
      });
  
      $('.careeranim').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if ( topOfWindow  > imagePos ) {
               $('.shape').css('left','660px');
           }
          else  if(  imagePos  < topOfWindow ) {
               $('.shape').css('left','508px');
          } 
   
      });
  
      $('.brderform').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if ( topOfWindow  > imagePos ) {

               $('.shape').css('left','818px');
           }
          else  if(  imagePos  < topOfWindow ) {
               $('.shape').css('left','660px');
          }
  
      });
  
      if (window.matchMedia('(max-width: 991px)').matches)
  {
    $('.logotext').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if ( topOfWindow  > imagePos ) {
              $('.shape').css('left','146px');  
           }
  
          else if(  imagePos  = topOfWindow ){
              $('.shape').css('left','20px'); 
          }
      });
    $('.teamanim').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if ( topOfWindow  > imagePos ) {
                 $('.shape').css('left','285px'); 
           }
  
          else if(  imagePos  < topOfWindow ){
               $('.shape').css('left','146px');
          }
      });
    $('.brderbrand').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if ( topOfWindow  > imagePos ) {
                 $('.shape').css('left','422px'); 
           }
  
          else if( imagePos  < topOfWindow ){
               $('.shape').css('left','285px');
          }
      });
    $('.careeranim').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if ( topOfWindow  > imagePos ) {
                 $('.shape').css('left','562px'); 
           }
  
          else if(  imagePos  < topOfWindow ){
               $('.shape').css('left','422px');
          }
      });
    $('.brderform').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if ( topOfWindow  > imagePos ) {
                 $('.shape').css('left','690px'); 
           }
  
          else if(  imagePos  < topOfWindow ){
               $('.shape').css('left','562px');
          }
      });
   }
  
    
  }); /**window scrool**/
  
  
  /**for nav**/

    if (window.matchMedia('(max-width: 767px)').matches)
  {
  $(document).ready(function(){
  $(".tm-header a").click(function(){
          $("#myNav").css("width","0%");
      });
  });
  }
  
  //ipad and iphone fix
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
  $('.borderlink a').on('touchstart', function(e) {
    $(this).css("background","#f2f2f2");
    $(this).css("color","#D4554B");
  }); 
    $('.borderlink').on('touchstart', function(e) {
    $(".f1").css("display","none");
    $(".f2").css("display","block");
  }); 
}
  /**for fading plugin**/

  $(document).ready(function() {
                $(window).fadeThis({scrolledOut: false});

  });



/* Firefox scroll */

(function(doc) {

  var root = doc.documentElement,
      scrollbarWidth, scrollEvent;

  // Not ideal, but better than UA sniffing.
  if ("MozAppearance" in root.style) {

    // determine the vertical scrollbar width
    scrollbarWidth = root.clientWidth;
    root.style.overflow = "scroll";
    scrollbarWidth -= root.clientWidth;
    root.style.overflow = "";

    // create a synthetic scroll event
    scrollEvent = doc.createEvent("UIEvent")
    scrollEvent.initEvent("scroll", true, true);

    // event dispatcher
    function scrollHandler() {
      doc.dispatchEvent(scrollEvent)
    }

    // detect mouse events in the document scrollbar track
    doc.addEventListener("mousedown", function(e) {
      if (e.clientX > root.clientWidth - scrollbarWidth) {
        doc.addEventListener("mousemove", scrollHandler, false);
        doc.addEventListener("mouseup", function() {
          doc.removeEventListener("mouseup", arguments.callee, false);
          doc.removeEventListener("mousemove", scrollHandler, false);
        }, false)
      }
    }, false)

    // override mouse wheel behaviour.
    doc.addEventListener("DOMMouseScroll", function(e) {
      // Don't disable hot key behaviours
      if (!e.ctrlKey && !e.shiftKey) {
        root.scrollTop += e.detail * 16;
        scrollHandler.call(this, e);
        e.preventDefault()
      }
    }, false)

  }
})(document);

