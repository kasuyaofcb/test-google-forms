export const validateCheckbox = (event, targetELe, targetValidOn, validClass) => {
  if (!targetELe.checked) {
    targetValidOn.classList.add(validClass);
    event.preventDefault();
  } else {
    targetValidOn.classList.remove(validClass);
  }
};


// テスト環境
