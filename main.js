import { displayErrText } from '/utils/validation/displayErrText.js';
import { validateCheckbox } from '/utils/validation/validateCheckbox.js';

document.addEventListener('DOMContentLoaded', function () {
  // 正規表現を定義
  const textRegex = /^[ぁ-んァ-ン一-龥々ー ]*$/;
  const textNoRegex = /^[ぁ-んァ-ン一-龥々ー0-9 ]*$/;
  const mailRegex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
  const tellRegex = /^\(?\d{2,5}\)?[-(\.\s]{0,2}\d{1,4}[-)\.\s]{0,2}\d{3,4}$/;

  // 各インプットタグのDDM
  const valiTextNameOn = document.querySelector('.pageForm__item--name');
  const valiMessageName = document.querySelector('.pageForm__valiText--name');

  const valiTextSchoolNameOn = document.querySelector('.pageForm__item--schoolName');
  const valiMessageSchoolName = document.querySelector('.pageForm__valiText--schoolName');

  const valiTextMailOn = document.querySelector('.pageForm__item--mail');
  const valiMessageMail = document.querySelector('.pageForm__valiText--mail');

  const valiTextTelOn = document.querySelector('.pageForm__item--tel');
  const valiMessageTel = document.querySelector('.pageForm__valiText--tel');

  function valiCheck(e) {
    // 希望コースと学年のバリデーション
    const valiSelect = document.querySelectorAll('.pageForm__itemChoice--valiSelect');

    for (let i = 0; i < valiSelect.length; i++) {
      const valiSelectSelectedIndex = valiSelect[i].selectedIndex;
      const valiSelectSelectedOption = valiSelect[i].options[valiSelectSelectedIndex];
      if (valiSelectSelectedOption.classList.contains('pageForm__itemChoiceOption--def')) {
        valiSelect[i].parentNode.classList.add('pageForm__item--valiOn');
        e.preventDefault();
      } else {
        valiSelect[i].parentNode.classList.remove('pageForm__item--valiOn');
      }
    }

    // お問い合わせ要件のバリデーション
    const valiRequestOn = document.querySelector('.pageForm__item--request');
    const valiCheckBtn1 = document.querySelector('.pageForm__valiRequirement1').checked;
    const valiCheckBtn2 = document.querySelector('.pageForm__valiRequirement2').checked;
    const valiCheckBtn3 = document.querySelector('.pageForm__valiRequirement3').checked;

    if (valiCheckBtn1 == false && valiCheckBtn2 == false && valiCheckBtn3 == false) {
      valiRequestOn.classList.add('pageForm__item--valiOn');
      e.preventDefault();
    } else {
      valiRequestOn.classList.remove('pageForm__item--valiOn');
    }

    // 生徒指名のバリデーション
    const inputNmaeVal = document.querySelector('.pageForm__itemChoice--valiName').value;
    displayErrText(e, 'text', inputNmaeVal, valiTextNameOn, valiMessageName, textRegex);

    // 学校名のバリデーション
    const inputSchoolNameVal = document.querySelector('.pageForm__itemChoice--valiSchoolName').value;
    displayErrText(e, 'text', inputSchoolNameVal, valiTextSchoolNameOn, valiMessageSchoolName, textNoRegex);

    // メールアドレスのバリデーション
    const inputMailValiue = document.querySelector('.pageForm__itemChoice--valiMail').value;
    displayErrText(e, 'email', inputMailValiue, valiTextMailOn, valiMessageMail, mailRegex);

    // 電話番号のバリデーション
    const inputTellValue = document.querySelector('.pageForm__itemChoice--valiTel').value;
    displayErrText(e, 'tell', inputTellValue, valiTextTelOn, valiMessageTel, tellRegex);

    // 個人情報の取り扱いについてのバリデーション
    const valiPrivacy = document.querySelector('.pageForm__valiPrivacy');
    const valiPrivacyOn = document.querySelector('.pageForm__item--privacy');
    validateCheckbox(e, valiPrivacy, valiPrivacyOn, 'pageForm__item--valiOn');
  }

  let num = 0;
  const validationForm = document.querySelector('.pageForm__form');
  validationForm.addEventListener('submit', function (e) {
    num++;
    valiCheck(e);

    // エラーの最初の要素を取得
    const errorElem = document.querySelector('.pageForm__item--valiOn');
    // エラーがあればエラーの最初の要素の位置へスクロール
    if (errorElem) {
      const rect = errorElem.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const targetPoint = rect + offset - 40; // 40px 上に位置を調整
      window.scrollTo({
        top: targetPoint,
        behavior: 'smooth',
      });
    }
    // 送信ボタンを1回以上押した場合に、入力が変更されたらバリデーション再チェック
    if (num === 1) {
      const focus = document.querySelectorAll('input,select,textarea');
      for (let i = 0; i < focus.length; i++) {
        focus[i].onchange = function () {
          valiCheck(e);
        };
      }
    }
  });

});


// テスト環境
