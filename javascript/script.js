AOS.init();

document.addEventListener('DOMContentLoaded', function() {
  loadHeader();
  loadFooter();
  });

      // Get all slide elements
      const slides = document.querySelectorAll('.slide');
      // Set initial slide index to 0
      let currentSlideIndex = 0;

      // Function to show current slide and hide all other slides
      function showSlide() {
        for (let i = 0; i < slides.length; i++) {
          if (i === currentSlideIndex) {
            slides[i].style.display = 'inline-block';
          } else {
            slides[i].style.display = 'none';
          }
        }
      }

      // Function to advance to next slide after 5 seconds
      function advanceSlide() {
        currentSlideIndex++;
        if (currentSlideIndex >= slides.length) {
          currentSlideIndex = 0;
        }
        showSlide();
        setTimeout(advanceSlide, 6000);
      }

      // Start advancing slides
      advanceSlide();

     //READ MORE BUTTONS
     function myFunction() {
       var dots = document.getElementById("dots");
       var moreText = document.getElementById("more");
       var btnText = document.getElementById("moreBtn");
       
       if (dots.style.display === "none") {
         dots.style.display = "inline";
         btnText.innerHTML = "Read more...";
         moreText.style.display = "none";
       } else {
         dots.style.display = "none";
         btnText.innerHTML = "Read less";
         moreText.style.display = "inline";
       }
     }

      //READ MORE BUTTONS 2
      function myFunction2() {
        var dots2 = document.getElementById("dots2");
        var moreText2 = document.getElementById("more2");
        var btnText2 = document.getElementById("moreBtn2");
        
        if (dots2.style.display === "none") {
          dots2.style.display = "inline";
          btnText2.innerHTML = "Read more...";
          moreText2.style.display = "none";
        } else {
          dots2.style.display = "none";
          btnText2.innerHTML = "Read less";
          moreText2.style.display = "inline";
        }
      }
      
      //READ MORE BUTTONS 3
      function myFunction3() {
        var dots3 = document.getElementById("dots3");
        var moreText3 = document.getElementById("more3");
        var btnText3 = document.getElementById("moreBtn3");
        
        if (dots3.style.display === "none") {
          dots3.style.display = "inline";
          btnText3.innerHTML = "Read more...";
          moreText3.style.display = "none";
        } else {
          dots3.style.display = "none";
          btnText3.innerHTML = "Read less";
          moreText3.style.display = "inline";
        }
      }



      const cards = document.querySelectorAll(".card__inner");

cards.forEach(card => {
  card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
  });
});



//COUNTER SECTION
function visible(partial) {
  var $t = partial,
      $w = jQuery(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

  return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

}

$(window).scroll(function(){

if(visible($('.count-digit')))
  {
    if($('.count-digit').hasClass('counter-loaded')) return;
    $('.count-digit').addClass('counter-loaded');

$('.count-digit').each(function () {
var $this = $(this);
jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
  duration: 5000,
  easing: 'swing',
  step: function () {
    $this.text(Math.ceil(this.Counter));
  }
});
});
  }
})

