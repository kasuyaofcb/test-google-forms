// const key = $('#recap').attr('data-sitekey'); // reCAPTCHAのsitekeyを取得

// $('.bl_form').on('submit', function (e) {
//   e.preventDefault(); //sumitを止める
//   grecaptcha.ready(function () {
//     grecaptcha.execute(key, { action: 'submit' }).then(function (token) {
//       //recapchaを実行
//       $('#recap').val(token); //戻り値tokenを#recapに格納
//       $('.bl_form').unbind('submit').submit(); //formをsubmit
//       $('.bl_form_message').show(); //送信後メッセージを表示
//     });
//   });
// });

const siteKey = '6LeY1LkmAAAAAKlLB_-uuGHRPRnuTJ1aaqwrXBU9'; // ご自身のreCAPTCHAのサイトキーに置き換えてください

function onSubmit(token) {
  // reCAPTCHAが正常に完了した場合に実行される関数
  // ここでフォームの送信処理を行います
  document.querySelector('.bl_form').submit(); // フォームを送信
  document.querySelector('.bl_form_message').style.display = 'block'; // 送信後メッセージを表示
}

document.querySelector('.bl_form').addEventListener('submit', function(e) {
  e.preventDefault(); // submitを止める
  grecaptcha.ready(function() {
    grecaptcha.execute(siteKey, { action: 'submit' }).then(onSubmit);
  });
});
