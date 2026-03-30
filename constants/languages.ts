export type Language = {
  code: string;
  name: string;
  nativeName: string;
};

export const languages: Language[] = [
  {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
  },
  {
    code: "en",
    name: "English",
    nativeName: "English",
  },
  {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
  },
];

export const getLanguageByCode = (code: string): Language => {
  return languages.find((language) => language.code === code) || languages[0];
};