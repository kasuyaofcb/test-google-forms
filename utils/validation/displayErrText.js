export const displayErrText = (event, type, val, formEle, msgEle, regex) => {
  const setErrText = (errText) => {
    formEle.classList.add('pageForm__item--valiOn');
    msgEle.textContent = errText;
    event.preventDefault();
  };

  const preventEn = formEle.classList.contains('pageForm__item--name');
  const nameText = document.querySelector('.pageForm__itemChoice--valiName').value;
  const kanjiKanaRegex = /^[ぁ-んァ-ヶー一-龯]+$/;


  if (val.length === 0) {
    setErrText('正しく入力してください。');
    return;
  }

  if (type === 'tell') {
    if (!libphonenumber.isValidNumber(val, 'JP') || !val.match(regex)) {
      setErrText('正しく入力してください。');
    } else {
      formEle.classList.remove('pageForm__item--valiOn');
    }
  } else {
    if (!val.match(regex)) {

      if (preventEn && !kanjiKanaRegex.test(nameText)) {
        setErrText('全角かな、カナ、漢字で入力してください');
      }else{
      setErrText('正しく入力してください。');
      }
    } else {
      formEle.classList.remove('pageForm__item--valiOn');
    }
  }
};
