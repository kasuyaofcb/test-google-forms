import { displayErrText } from 'utils/validation/displayErrText.js';
import { validateCheckbox } from 'utils/validation/validateCheckbox.js';

document.addEventListener('DOMContentLoaded', function () {
  // 正規表現を定義
  const textRegex = /^[ぁ-んァ-ン一-龥々ーA-Za-z 　]*$/;
  const mailRegex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
  const tellRegex = /^\(?\d{2,5}\)?[-(\.\s]{0,2}\d{1,4}[-)\.\s]{0,2}\d{3,4}$/;

  // 生徒指名のインプットタグとエラーメッセージ用のDOM
  const valiNameOn = document.querySelector('.pageDocumentForm__item--name');
  const valiMessageName = document.querySelector('.pageDocumentForm__valiText--name');
  // 電話番号のインプットタグとエラーメッセージ用のDOM
  const valiTelOn = document.querySelector('.pageDocumentForm__item--tel ');
  const valiMessageTel = document.querySelector('.pageDocumentForm__valiText--tel');
  // メールアドレスのインプットタグとエラーメッセージ用のDOM
  const valiMailOn = document.querySelector('.pageDocumentForm__item--mail ');
  const valiMessageMail = document.querySelector('.pageDocumentForm__valiText--mail');

  function valiCheck(e) {

    // 生徒指名のバリデーション
    const inputNmaeVal = document.querySelector('.pageDocumentForm__itemChoice--valiName').value;
    displayErrText(e, 'text', inputNmaeVal, valiNameOn, valiMessageName, textRegex);

    // 学年のバリデーション
    const valiGrade = document.querySelector('.pageDocumentForm__itemChoice--valiGrade');
    const valiGradeSelectedIndex = valiGrade.selectedIndex;
    const valiGradeSelectedOption = valiGrade.options[valiGradeSelectedIndex];
    if (valiGradeSelectedOption.classList.contains('pageDocumentForm__itemChoiceOptionDef')) {
      valiGrade.parentNode.classList.add('pageDocumentForm__item--valiOn');
      e.preventDefault();
    } else {
      valiGrade.parentNode.classList.remove('pageDocumentForm__item--valiOn');
    }

    // 電話番号のバリデーション
    const inputTellValue = document.querySelector('.pageDocumentForm__itemChoice--valiTel').value;
    displayErrText(e, 'tell', inputTellValue, valiTelOn, valiMessageTel, tellRegex);

    // メールアドレスのバリデーション
    const inputMailValiue = document.querySelector('.pageDocumentForm__itemChoice--valiMail').value;
    displayErrText(e, 'email', inputMailValiue, valiMailOn, valiMessageMail, mailRegex);

    // 個人情報の取り扱いについてのバリデーション
    const valiPrivacy = document.querySelector('.pageDocumentForm__valiPrivacy');
    const valiPrivacyOn = document.querySelector('.pageDocumentForm__item--privacy');
    validateCheckbox(e, valiPrivacy, valiPrivacyOn, 'pageDocumentForm__item--valiOn');
  }

  let num = 0;
  const validationForm = document.querySelector('.pageDocumentForm__form');
  validationForm.addEventListener('submit', function (e) {
    num++;
    valiCheck(e);

    // エラーの最初の要素を取得
    const errorElem = document.querySelector('.pageDocumentForm__item--valiOn');
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
