$(function(){
  $('.menu-trigger').on('click', function(event){
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});


// ・.on('click', function()は、.menu-triggerがクリックされたときに、処理が行われるように設定。
// 　　→.menu-triggerは、ハンバーガーアイコン<a class="menu-trigger" href="#">に設定されている。

// ・.toggleClass()は、指定されているclass（ここではactive）をトグル処理するメソッド。
// 　　→トグル処理では、該当のclass属性がある場合にはclassが削除され、ない場合にはclassが追加される。
// 　　　→.menu-trigger.active span:nth-child(1)～(3)の各CSSによって、activeクラスになったときにアイコンが「×」になるように設定されている。
// 　　　→$(this).toggleClass('active');と書くことで、アイコンが切り替わる。

// ・.fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッド。
// 　　→ハンバーガーメニューを開いたときの状態を設定。

// ・#sp-menuが開いたときに、.fadeToggle()が処理されるように設定。
// 　　→#sp-menuは、ハンバーガーメニュー<div id="sp-menu">に設定されている。
// 　　　→ハンバーガーメニューがクリックされたときに、フェードインとフェードアウトが交互に実行されるようになる。