$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: 'linear',
    touchMove: true,
    prevArrow:'<button class="slick-prev"> < </button>',
    nextArrow:'<button class="slick-next"> > </button>',


  });

  var imgs = $('.slider img');
  imgs.each(function(){
    var item = $(this).closest('.item');
    item.css({
      'background-image': 'url(' + $(this).attr('src') + ')', 
      'background-position': 'center',
      '-webkit-background-size': 'cover',
      'background-size': 'cover', 
    });
    $(this).hide();
  });
  window.onload= () => {
    let isLoggedIn= localStorage.getItem('email') ;
if (isLoggedIn) {
        document.getElementById('Profile').style.display = 'block';
        document.getElementById('Login').style.display = 'none';
    } else {
        document.getElementById('Profile').style.display = 'none';
        document.getElementById('Login').style.display = 'block';}
    }