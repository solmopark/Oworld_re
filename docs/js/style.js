// 검색팝업
/*$(document).ready(function(){     
    $("#open-btn").on("click", function(event) {  //팝업오픈 버튼 누르면
    $(".popup-box").show();   //팝업 오픈
    $('.searchArea .modal-mask').addClass('active');
    });
    $("#close-btn").on("click", function(event) { 
        
        $(".popup-box").hide(); 
    $('.searchArea .modal-mask').removeClass('active');
    });  
});*/

// 뉴스 스와이퍼 
let mainSwiper = new Swiper('.view_section .swiper-container', {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 30,
    speed: 1000,
    loop: false,
    loopAdditionalSlides: 1,
    // autoplay:{
    //   autoplay: true,
    //   delay: 3000,
    //   disableOnInteraction: false
    // },
    observer: true,
    observeParents: true,
  });
  
  $('.cate h2').on('click', function(e) {
    const index = $(this).index();
    
    $('.cate h2').removeClass('active');
    $(this).addClass('active');
  
    $('.swiper-container').removeClass('active');
    $('.swiper-container').eq(index).addClass('active');
    
    mainSwiper[index].slideTo(0);
  });