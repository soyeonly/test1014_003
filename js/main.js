$(document).ready(function(){

  //풀페이지  
  var page = $('#fullpage').fullpage({
    menu : '.gnb',
    anchors : ['main','menu1', 'menu2','menu3','menu4','menu5'],

    afterLoad: function(origin, destination, direction, trigger) {
      if(destination == 2){
        $("header").hide();
      }
      else if(destination == 3){
        $("header").hide();
      }
      else if(destination == 4){
        $("header").hide();
      }
      else if(destination == 5){
        $("header").hide();
      }
      else if(destination == 6){
        $("header").hide();
      }
      else{
        $("header").show();
      }

      deleteLog = true;
    }
  });


  // $(window).on("hashchange", function(){
  //   var hashname = location.hash;
    
  //   if(hashname == "#main"){
  //       $("header").show();
  //   }else{
  //       $("header").hide();
  //   }


  





  //메인비주얼 - 영상재생/일시정지
  $(".play").hide();

  $(".pause").on("click",function(){
    $("#mv-video").get(0).pause();

    $(".pause").hide();
    $(".play").show();
  });

   $(".play").on("click",function(){
    $("#mv-video").get(0).play();

    $(".pause").show();
    $(".play").hide();
   });







   //EXHIBITION 스와이퍼
   var exh = new Swiper(".exh", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    centeredSlides: true,

    breakpoints: {
      1080 : {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop : true,

    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });





  //NOTICE 스와이퍼
  var not = new Swiper(".s-notice", {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: {
      nextEl: ".s-notice-wrap .swiper-button-next",
      prevEl: ".s-notice-wrap .swiper-button-prev",
    },
    breakpoints: {
      700 : {
        slidesPerView: 1.5,
        spaceBetween: 50,
      },
      960 : {
        slidesPerView: 2.5,
        spaceBetween: 50,
      },
      1200 : {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1400 : {
        slidesPerView: 3.5,
        spaceBetween: 50,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop : true,
  });



});