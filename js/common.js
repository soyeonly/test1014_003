$(document).ready(function(){ //실행틀 시작

  //검색창 팝업
  $("#search-bar").hide();

  $(".search-btn").click(function(){
    $("#search-bar").slideDown();
  });

  $(".search-close").click(function(){
    $("#search-bar").slideUp();
  });



  // PC 메뉴 
  $(".gnb-2depth").hide();

  $(".gnb > li").mouseenter(function(){
    $(this).children(".gnb-2depth").stop().slideDown();
  });
  $(".gnb > li").mouseleave(function(){
    $(this).children(".gnb-2depth").stop().slideUp();
  });



    //모바일메뉴
    $(".m-ham").click(function(){
      $(".m-gnb-wrap").animate({ "left" : "0" });
    });
  
    $(".m-gnb-close").click(function(){
      $(".m-gnb-wrap").animate({ "left" : "100%" });
      $(".m-gnb-2depth").hide(); //닫았을 때 메뉴창도 모두 접기
    });



  
    //모바일 2차 메뉴
    $(".m-gnb-2depth").hide();
    $(".m-gnb > li").mouseenter(function(){
      $(this).children(".m-gnb-2depth").stop().slideDown();
      $(this).siblings().children(".m-gnb-2depth").stop().slideUp();
    });

    $(".m-gnb > li").mouseleave(function(){
      $(this).children(".m-gnb-2depth").stop().slideUp();
    });

    $(".m-gnb > li").click(function(){
      $(".m-gnb-wrap").animate({ "left" : "100%" });
    });
    $(".m-gnb-2depth > li").click(function(){
      $(".m-gnb-wrap").animate({ "left" : "100%" });
    });

}); //실행틀 끝