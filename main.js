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

// const siteKey = '6LeY1LkmAAAAAKlLB_-uuGHRPRnuTJ1aaqwrXBU9'; // ご自身のreCAPTCHAのサイトキーに置き換えてください

// function onSubmit(token) {
//     // reCAPTCHAが正常に完了した場合に実行される関数
//     // ここでフォームの送信処理を行います
//     document.querySelector('.bl_form').submit(); // フォームを送信
//     document.querySelector('.bl_form_message').style.display = 'block'; // 送信後メッセージを表示
//   }

//   function loadRecaptcha() {
//     grecaptcha.ready(function() {
//       grecaptcha.execute(siteKey, { action: 'submit' }).then(onSubmit);
//     });
//   }

//   window.addEventListener('load', loadRecaptcha);

// function onSubmit(token) {
//     // reCAPTCHAの値を取得した後の処理を記述します
//     console.log(token); // reCAPTCHAの値をコンソールに出力する例
//     // ここでフォームの送信などの処理を行います
//   }
//   grecaptcha.ready(function() {
//     grecaptcha.execute('6LeY1LkmAAAAAKlLB_-uuGHRPRnuTJ1aaqwrXBU9', { action: 'submit' }).then(onSubmit);
//   });

  const siteKey = '6LeY1LkmAAAAAKlLB_-uuGHRPRnuTJ1aaqwrXBU9'; // ご自身の reCAPTCHA のサイトキーに置き換えてください

function onSubmit(token) {
  // reCAPTCHA が正常に完了した場合に実行される関数
  // ここでフォームの送信処理を行います
  document.querySelector('.bl_form').submit(); // フォームを送信
  document.querySelector('.bl_form_message').style.display = 'block'; // 送信後メッセージを表示
}

function loadRecaptcha() {
  grecaptcha.ready(function() {
    grecaptcha.execute(siteKey, { action: 'submit' }).then(onSubmit);
  });
}


// フォームの送信イベントで reCAPTCHA を読み込むように設定
document.querySelector('.bl_form').addEventListener('submit', function(e) {
  e.preventDefault(); // 送信イベントのデフォルト動作を停止
  loadRecaptcha(); // reCAPTCHA を読み込む
});
