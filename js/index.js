var startPos = 0,
    winScrollTop = 0;
var windowWidth = window.outerWidth;


$(document).ready(function () {
    //７６８px以下の時
    if (windowWidth < 1200) {
        // ナビバーをfixedにしない,logoの大きさを小さく
        $('.cb-header').removeClass("cb-header")
        $('nav>.navbar-brand').css("font-size", '1rem')
        //パララックスをやめ画像に置き換え
        $('.alt-parallax').css("display", "flex")
        $('.parallax').css("display", "none")

    }
});


// ナビバー　下にスクロールで出現、上にスクロールで消える
$(window).on('scroll', function () {
    winScrollTop = $(this).scrollTop();
    if (windowWidth >= 1200) {

        if (winScrollTop < startPos) {
            $('.cb-header').slideUp();
        } else {

            $('.cb-header').slideDown();
        }
        startPos = winScrollTop;


        if (winScrollTop === 0) {
            $('.cb-header').slideUp();
        }

    }
});
// ナビバーでクリック後にドロップダウンメニューを隠す
$('.navbar-nav>li>a , .dropdown-menu>a').on('click', function () {
    if (this.id != 'navbarDropdown') {
        $('.navbar-collapse').collapse('hide');
    }
});