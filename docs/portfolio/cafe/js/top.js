// ページロード時に読まれる処理
window.onload = function () {
    console.log('onload!');
};



(function ($) {
    'use strict';

    // jQuery : SmoothScroll
    $('a[href^="#"]').SmoothScroll({
        duration: 1500, // スピード（ミリ秒）
        easing: 'easeOutQuint' // 動き
    });
});


// jQueri : slick - カルーセル
$(document).ready(function () {
    $('.main-image').slick({
        // アクセシビリティ。左右ボタンで画像の切り替えをできるかどうか
        accessibility: true,
        // 自動再生。trueで自動再生される。
        autoplay: true,
        // 自動再生で切り替えをする時間
        autoplaySpeed: 3000,
        // 自動再生や左右の矢印でスライドするスピード
        speed: 400,
        adaptiveHeight: true,
        // 自動再生時にスライドのエリアにマウスオンで一時停止するかどうか
        pauseOnHover: false,
        // 自動再生時にドットにマウスオンで一時停止するかどうか
        pauseOnDotsHover: false,
        // 切り替えのアニメーション。ease,linear,ease-in,ease-out,ease-in-out
        cssEase: 'ease',
        // 画像下のドット（ページ送り）を表示
        dots: true,
        // ドットのclass名をつける
        dotsClass: 'slick-dots',
        // ドラッグができるかどうか
        draggable: true,
        // 切り替え時のフェードイン設定。trueでon
        fade: false,
        // 左右の次へ、前へボタンを表示するかどうか
        arrows: true,
        // 無限スクロールにするかどうか。最後の画像の次は最初の画像が表示される。
        infinite: true,
        // 最初のスライダーの位置
        initialSlide: 0,
        // 画像の遅延表示。‘ondemand’or'progressive'
        lazyLoad: 'ondemand',
        // スライドのエリアにマウスオーバーしている間、自動再生を止めるかどうか。
        pauseOnHover: false,
        // スライドのエリアに画像がいくつ表示されるかを指定
        slidesToShow: 1,
        // 一度にスライドする数
        slidesToScroll: 1,
        // タッチスワイプに対応するかどうか
        swipe: true,
        // 縦方向へのスライド
        vertical: false,
        // 表示中の画像を中央へ
        centerMode: false,
        // 中央のpadding
        centerPadding: 'auto'
    });
});



/* スクロール位置でページトップ移動ボタンの表示/非表示 */

//jQuery
$(window).scroll(function () {

    'use strict';



    /* ボタンの表示/非表示 */
    var btn_scroll_default_bottom = 60;
    var btn_scroll = $('#scroll-top');
    var footer = $('#footer');

    btn_scroll.css('display', 'none');

    // ページトップから見たウィンドウ上部の座標
    var window_offset_y = window.pageYOffset;
    console.log('window_offset_y: ' + window_offset_y);

    if (window_offset_y > 303) {
        btn_scroll.css('display', 'block');
        btn_scroll.css('opacity', '1.0');
    } else {
        btn_scroll.css('opacity', '0.0');
        btn_scroll.css('display', 'none');
    }



    /* 停止位置の設定 */

    // フッターのY座標
    var footer_offsetTop = footer.offset().top;

    // ウィンドウ底辺がフッター上部座標を超えた分のpx
    var window_height = document.documentElement.clientHeight;
    var window_bottom = window_offset_y + window_height;

    // footerの画面表示された高さ
    var footer_heading = window_bottom - footer_offsetTop;

    // if (フッターのY座標 <= ボタンのY座標) かつ、（ボタンbottom座標 < footerの画面表示された高さ）
    if ((footer_offsetTop <= window_bottom) && (btn_scroll.height() < footer_heading)) {
        btn_scroll.css('bottom', footer_heading);
    } else {
        btn_scroll.css('bottom', btn_scroll_default_bottom);
    }

});



/*  */

//
