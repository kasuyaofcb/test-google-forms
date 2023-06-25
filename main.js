document.addEventListener('DOMContentLoaded', function () {
  function checkRadioAct(e) {
    let selectDef = document.querySelector('.pageForm__itemChoice--course');
    let corseDef = document.querySelector('.pageForm__itemChoiceOption--def');
    let corseItem = document.querySelectorAll('.pageForm__itemChoiceOption--taka, .pageForm__itemChoiceOption--shio');
    let dataItem = document.querySelectorAll('.pageForm__date');

    selectDef.selectedIndex = 0;

    //通塾希望教室のラジオボタンがチェック状態であればコースを選択可能にする
    if (e.target.checked) {
      let chosenClass = e.target.value;
      if (chosenClass !== '') {
        if (selectDef.classList.contains('pageForm__itemChoice--bgDarkGrey')) {
          selectDef.classList.remove('pageForm__itemChoice--bgDarkGrey');
        }
        selectDef.disabled = false;
        if (corseDef.textContent !== '-- 選択してください --') {
          corseDef.innerHTML = '-- 選択してください --';
        }
        if (chosenClass === '高田馬場教室') {
          for (let i = 0; i < corseItem.length; i++) {
            if (corseItem[i].classList.contains('pageForm__itemChoiceOption--taka')) {
              corseItem[i].hidden = false;
            } else {
              corseItem[i].hidden = true;
            }
          }
          for (let i = 0; i < dataItem.length; i++) {
            if (dataItem[i].classList.contains('pageForm__date--taka')) {
              dataItem[i].hidden = false;
            } else {
              dataItem[i].hidden = true;
            }
          }
        } else {
          for (let i = 0; i < corseItem.length; i++) {
            if (corseItem[i].classList.contains('pageForm__itemChoiceOption--shio')) {
              corseItem[i].hidden = false;
            } else {
              corseItem[i].hidden = true;
            }
          }
          for (let i = 0; i < dataItem.length; i++) {
            if (dataItem[i].classList.contains('pageForm__date--shio')) {
              dataItem[i].hidden = false;
            } else {
              dataItem[i].hidden = true;
            }
          }
        }
      }
    }
  }

  let checkRadio = document.querySelectorAll('.pageForm__valiClass');
  for (let i = 0; i < checkRadio.length; i++) {
    checkRadio[i].addEventListener('click', checkRadioAct);
  }

  function valiCheck(e) {
    // 通塾希望教室のバリデーション
    let valiClass = document.querySelectorAll('.pageForm__valiClass');
    let valiClassOn = document.querySelector('.pageForm__item--class');
    let classCount = 0;

    for (let i = 0; i < valiClass.length; i++) {
      if (valiClass[i].checked) {
        classCount++;
      }
    }
    if (classCount++ === 0) {
      valiClassOn.classList.add('pageForm__item--valiOn');
      e.preventDefault();
    } else {
      valiClassOn.classList.remove('pageForm__item--valiOn');
    }

    // 希望コースと学年のバリデーション
    let valiSelect = document.querySelectorAll('.pageForm__itemChoice--valiSelect');

    for (let i = 0; i < valiSelect.length; i++) {
      let valiSelectSelectedIndex = valiSelect[i].selectedIndex;
      let valiSelectSelectedOption = valiSelect[i].options[valiSelectSelectedIndex];
      if (valiSelectSelectedOption.classList.contains('pageForm__itemChoiceOption--def')) {
        valiSelect[i].parentNode.classList.add('pageForm__item--valiOn');
        e.preventDefault();
      } else {
        valiSelect[i].parentNode.classList.remove('pageForm__item--valiOn');
      }
    }

    // お問い合わせ要件のバリデーション
    let valiRequestOn = document.querySelector('.pageForm__item--request');
    let valiCheckBtn1 = document.querySelector('.pageForm__valiRequirement1').checked;
    let valiCheckBtn2 = document.querySelector('.pageForm__valiRequirement2').checked;
    let valiCheckBtn3 = document.querySelector('.pageForm__valiRequirement3').checked;

    if (valiCheckBtn1 == false && valiCheckBtn2 == false && valiCheckBtn3 == false) {
      valiRequestOn.classList.add('pageForm__item--valiOn');
      e.preventDefault();
    } else {
      valiRequestOn.classList.remove('pageForm__item--valiOn');
    }

    // 生徒指名と学校名のバリデーション
    let valiInputText = document.querySelectorAll('.pageForm__itemChoice--inputText');
    let textNone = '';

    for (let i = 0; i < valiInputText.length; i++) {
      if (valiInputText[i].value === textNone) {
        valiInputText[i].parentNode.classList.add('pageForm__item--valiOn');
        e.preventDefault();
      } else {
        valiInputText[i].parentNode.classList.remove('pageForm__item--valiOn');
      }
    }

    // メールアドレスのバリデーション
    let valiTextMail = document.querySelector('.pageForm__itemChoice--valiMail');
    let valiTextMailOn = document.querySelector('.pageForm__item--mail');
    let valiTextMailText = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
    let valiMessageMail = document.querySelector('.pageForm__valiText--mail');

    if (valiTextMail.value === textNone) {
      valiTextMailOn.classList.add('pageForm__item--valiOn');
      valiMessageMail.textContent = '入力してください';
      e.preventDefault();
    } else if (!valiTextMail.value.match(valiTextMailText)) {
      valiTextMailOn.classList.add('pageForm__item--valiOn');
      valiMessageMail.textContent = '正しく入力してください';
      e.preventDefault();
    } else {
      valiTextMailOn.classList.remove('pageForm__item--valiOn');
    }

    // 電話番号のバリデーション
    let valiTextTel = document.querySelector('.pageForm__itemChoice--valiTel');
    let valiTextTelOn = document.querySelector('.pageForm__item--tel');
    let valiTextTelNum = /^\(?\d{2,5}\)?[-(\.\s]{0,2}\d{1,4}[-)\.\s]{0,2}\d{3,4}$/;
    let valiMessageTel = document.querySelector('.pageForm__valiText--tel');

    if (valiTextTel.value === textNone) {
      valiTextTelOn.classList.add('pageForm__item--valiOn');
      valiMessageTel.textContent = '入力してください';
      e.preventDefault();
    } else if (!valiTextTel.value.match(valiTextTelNum)) {
      valiTextTelOn.classList.add('pageForm__item--valiOn');
      valiMessageTel.textContent = '正しく入力してください';
      e.preventDefault();
    } else {
      valiTextTelOn.classList.remove('pageForm__item--valiOn');
    }

    // 個人情報の取り扱いについてのバリデーション
    let valiPrivacy = document.querySelector('.pageForm__valiPrivacy');
    let valiPrivacyOn = document.querySelector('.pageForm__item--privacy');
    if (!valiPrivacy.checked) {
      valiPrivacyOn.classList.add('pageForm__item--valiOn');
      e.preventDefault();
    } else {
      valiPrivacyOn.classList.remove('pageForm__item--valiOn');
    }

  }

  let num = 0;
  let validationForm = document.querySelector('.pageForm__form');
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
      let focus = document.querySelectorAll('input,select,textarea');
      for (let i = 0; i < focus.length; i++) {
        focus[i].onchange = function () {
          valiCheck(e);
        };
      }
    }
  });
});



  function onSubmit(token) {
    document.querySelector(".pageForm__form").submit();
  }
