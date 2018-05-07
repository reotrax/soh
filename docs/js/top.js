// ページロード時に読まれる処理
window.onload = function () {
    console.log('onload!');
};



(function() {
    'use strict';

    // jQuery : SmoothScroll
    $('a[href^="#"]').SmoothScroll({
        duration: 1500, // スピード（ミリ秒）
        easing: 'easeOutQuint' // 動き
    });
    
    // jQuery : SlideToggle
    
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



/* メールフォーム（アコーディオン）*/

var sendMail = document.getElementById('contact__send-mail');
var contactForm = document.getElementById('contact__form');
var contactForm_jq = $(contactForm);

function open() {
    'use strict';

    if (contactForm_jq.hasClass('active')) {
        console.log('sendMail off');
        contactForm_jq.toggleClass('active');
    } else {
        console.log('sendMail on');
        contactForm_jq.toggleClass('active');
    }
}

sendMail.onclick = function () {
//    open();
}


$(function () {
    $('.contact__send-mail').on('click', function () {
        $(this).next().slideToggle(300);
    });
});
