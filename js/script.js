$(".sub_bg,.sub").hide()
$(".menu>li").mouseover(function(){
 $(".sub_bg,.sub").stop().slideDown();
})
$(".menu>li").mouseout(function(){
 $(".sub_bg,.sub").stop().slideUp();
})


$(".con1_list>li").click(function(){
    $(".page1").addClass("on")
})







$(".sitemap_bg").hide();

$(".sitemap_bg").hide();
$(".m_btn").click(function(){
    $(".sitemap_bg").stop().slideDown();

})

$(".close").click(function(){
    $(".sitemap_bg").slideUp();
})
let winWidth=$(window).outerWidth();
if(winWidth<=992)
    $(".sitemap_bg").addClass("mobile")
    $(".mobile .site_sub").hide();//sitemap_bg에 추가해서 사용
    $(".mobile .site_map>li").click();
    $(this).children(".site_sub").stop().slideToggle();
    $(this).siblings().children(".site_sub").stop().slideUp();
    $(this).toggleClass("site_toggle");
    $(this).siblings()
.removeClass("site_toggle")

$(".site_sub").hide();
$(".site_map>li").click(function(){
    $(this).children(".site_sub").slideToggle();
    $(this).siblings().children(".site_sub").slideUp();
    $(this).toggleClass("site_toggle");
    $(this).siblings().removeClass("site_toggle")
})//end if

/*$(window).resize(function(){
    location.reload();
})
    */

let resizeTimer=null;//setTimeout함수 저장될 변수
function rload(){
    location.reload();
}
$(window).resize(function(){
    clearTimeout(resizeTimer);//실행중인 setTimeout을 취소하는 함수
    resizeTimer = setTimeout(rload,400); //0.4초뒤 호출.
})










const main=new Swiper('.main .swiper',{
    loop:true,
    autoplay:{delay:3000},
    navigation:{prevEl:'.main .btn_prev',nextEl:'.main .btn_next'},
    pagination:{el:'.btns .swiper-pagination',type:'fraction'}

})


const pagingSwiper=new Swiper('.main .swiper',{
    loop:true,
    pagination:{
        el:".ctrl_box>.swiper-pagination",
        type:"progressbar",
        
    },
})
main.controller.control=pagingSwiper;//swiper2개 연결하여 pagination 사용




/*footer*/
$(".family_list").hide();
$(".family_btn").click(function(){
    $(".family_list").toggle();
    $(".family_btn").toggleClass("toggle")
})

$(".top_btn").click(function(){
    $("html").animate({scrollTop:0},500)
})


AOS.init();

