const key = $('#recap').attr('data-sitekey'); // reCAPTCHAのsitekeyを取得
$('.bl_form').on('submit', function (e) {
  e.preventDefault(); //sumitを止める
  grecaptcha.ready(function () {
    grecaptcha.execute(key, { action: 'submit' }).then(function (token) {
      //recapchaを実行
      $('#recap').val(token); //戻り値tokenを#recapに格納
      $('.bl_form').unbind('submit').submit(); //formをsubmit
      $('.bl_form_message').show(); //送信後メッセージを表示
    });
  });
});
