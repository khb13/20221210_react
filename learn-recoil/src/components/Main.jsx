import { useTranslation } from "react-i18next";

function Main() {
  const { t, i18n } = useTranslation();
  const changeLngToKo = i18n.changeLanguage("ko");
  const changeLngToEn = i18n.changeLanguage("En");
  return (
    <div>
      <h2>language : {i18n.language}</h2>
      <h3>{t("welcome")}</h3>
      <p>{t("hello World")}</p>
      <button onClick={changeLngToKo}>한글</button>
      <button onClick={changeLngToEn}>ENG</button>
    </div>
  );
}

export default Main;
