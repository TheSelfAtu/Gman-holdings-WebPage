var startPos = 0,
    winScrollTop = 0;
var windowWidth = window.innerWidth;

// 小さい画面のときはナビバーをfixedにしない,logoの大きさを小さく
$(document).ready(function () {
    if (windowWidth < 768) {
        $('.cb-header').removeClass("cb-header")
        $('nav>.navbar-brand').css("font-size",'1rem')

}
});
  

// ナビバー　下にスクロールで出現、上にスクロールで消える
$(window).on('scroll', function () {
    winScrollTop = $(this).scrollTop();
    if (windowWidth > 768) {

        if (winScrollTop < startPos) {
            $('.cb-header').slideUp();
        } else {

            $('.cb-header').slideDown();
        }
    

    if (winScrollTop === 0) {
        $('.cb-header').slideUp();
    }
    startPos = winScrollTop;
}
});

$('.navbar-nav>li>a , .dropdown-menu>a').on('click', function () {
    if (this.id != 'navbarDropdown') {
        $('.navbar-collapse').collapse('hide');
    }
});

// 小さい画面のときはナビバーをfixedにしない,logoの大きさを小さく
$(document).ready(function () {
    if (windowWidth < 768) {
        $('.alt-parallax').css("display","flex")
        $('.parallax').css("display","none")

}
});