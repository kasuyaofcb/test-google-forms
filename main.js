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

const siteKey = document.getElementById('recap').getAttribute('data-sitekey'); // reCAPTCHAのsitekeyを取得

// フォーム送信時の処理を定義
function handleFormSubmit(e) {
  e.preventDefault(); // submitを止める

  grecaptcha.ready(function() {
    grecaptcha.execute(siteKey, { action: 'submit' }).then(function(token) {
      // reCAPTCHAを実行
      document.getElementById('recap').value = token; // 戻り値tokenを#recapに格納
      document.querySelector('.bl_form').removeEventListener('submit', handleFormSubmit); // イベントリスナーの削除
      document.querySelector('.bl_form').submit(); // formをsubmit
      document.querySelector('.bl_form_message').style.display = 'block'; // 送信後メッセージを表示
    }).catch(function(error) {
      console.error('reCAPTCHA execution failed:', error);
      // エラーハンドリングを行う場合はここに処理を記述する
    });
  });
}

// フォームのsubmitイベントにイベントリスナーを登録
document.querySelector('.bl_form').addEventListener('submit', handleFormSubmit);
