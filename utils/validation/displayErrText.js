export const displayErrText = (event, type, val, formEle, msgEle, regex) => {
	const setErrText = (errText) => {
		formEle.classList.add("pageForm__item--valiOn");
		msgEle.textContent = errText;
		event.preventDefault();
	};

	const preventEn = formEle.classList.contains("pageForm__item--name");
	const nameElement = document.querySelector(".pageForm__itemChoice--valiName");
	const nameText = nameElement ? nameElement.value : "";

	const preventEnDoc = formEle.classList.contains(
		"pageDocumentForm__item--name"
	);
	const nameElementDoc = document.querySelector(
		".pageDocumentForm__itemChoice--valiName"
	);
	const nameTextDoc = nameElementDoc ? nameElementDoc.value : "";

	const kanjiKanaRegex = /^[ぁ-んァ-ヶー一-龯]+$/;

	if (
		type === "tell" &&
		(!libphonenumber.isValidNumber(val, "JP") || !val.match(regex))
	) {
		setErrText("正しく入力してください。");
	} else if (type === "post" && !val.match(regex) && val.length !== 0) {
		setErrText("正しく入力してください。");
	} else if (!val.match(regex)) {
		const isPreventEn = preventEn || preventEnDoc;
		const isValidName =
			kanjiKanaRegex.test(nameText) && kanjiKanaRegex.test(nameTextDoc);

		setErrText(
			isPreventEn && !isValidName
				? "全角かな、カナ、漢字で入力してください"
				: "正しく入力してください。"
		);
	} else {
		formEle.classList.remove("pageForm__item--valiOn");
	}
};

// テスト環境
