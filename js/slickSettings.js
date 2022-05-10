// Initialization gallery slider
$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerMode: true,
              variableWidth: false,
              autoplay: true,
              autoplaySpeed: 1500,
            }
          },
        ]
    });
});

// SlickSort for gallery slider
$(".filter span").on('click', function(){
    var filter = $(this).data('filter');
    $(".slider").slick('slickUnfilter');
    
    if(filter == 'construction'){
      $(".slider").slick('slickFilter','.construction');
    }
    else if(filter == 'interiorDesign'){
      $(".slider").slick('slickFilter','.interiorDesign');
    }
    else if(filter == 'renovation'){
      $(".slider").slick('slickFilter','.renovation');
    }
    else if(filter == 'landscaps'){
        $(".slider").slick('slickFilter','.landscaps');
    }
    else if(filter == 'all'){
      $(".slider").slick('slickUnfilter');
    }
});

// Toggle class "activeF" for gallery slider
$(".filter span").on('click', function(){
    $(".activeF").removeClass('activeF');
    $(this).addClass('activeF');
});

// Initialization testimonials slider
$(document).ready(function(){
    $('.slideshow-testimonials').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1300,
        arrows: true,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              arrows: false,
              variableWidth: false,
              autoplay: true,
              autoplaySpeed: 1500,
              fade: true,
              cssEase: 'linear'
            }
          },
        ]
    });
});