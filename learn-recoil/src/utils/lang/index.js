import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ko from "./ko.json";

const resouces = { en, ko };

i18n.use(initReactI18next).init({ resouces, lng: ko });
