export type Store = {
  id: string;
  name: {
    ru: string;
    en: string;
    zh: string;
  };
  address: {
    ru: string;
    en: string;
    zh: string;
  };
  location: {
    latitude: number;
    longitude: number;
  };
  logo: string;
};

export const stores: Store[] = [
  {
    id: "1",
    name: {
      ru: "Самбери",
      en: "Samberi",
      zh: "桑贝里",
    },
    address: {
      ru: "ул. Калинина, 8, 15, Владивосток",
      en: "8/15 Kalinina St., Vladivostok",
      zh: "符拉迪沃斯托克卡利宁街8号15号",
    },
    location: {
      latitude: 43.1198,
      longitude: 131.9048,
    },
        logo: "https://i.pinimg.com/1200x/b5/20/b1/b520b19b411365c095850336c7f256f2.jpg",
  },
  {
    id: "2",
    name: {
      ru: "Самбери",
      en: "Samberi",
      zh: "桑贝里",
    },
    address: {
      ru: "Черёмуховая ул., 15, Владивосток",
      en: "15 Cheryomukhovaya St., Vladivostok",
      zh: "符拉迪沃斯托克樱桃街15号",
    },
    location: {
      latitude: 43.2365,
      longitude: 131.9612,
    },
      logo: "https://i.pinimg.com/1200x/b5/20/b1/b520b19b411365c095850336c7f256f2.jpg",
  },
  {
    id: "3",
    name: {
      ru: "Самбери",
      en: "Samberi",
      zh: "桑贝里",
    },
    address: {
      ru: "Светланская ул., 29, Владивосток",
      en: "29 Svetlanskaya St., Vladivostok",
      zh: "符拉迪沃斯托克斯维特兰斯卡亚街29号",
    },
    location: {
      latitude: 43.1156,
      longitude: 131.8856,
    },
      logo: "https://i.pinimg.com/1200x/b5/20/b1/b520b19b411365c095850336c7f256f2.jpg",
  },
  {
    id: "4",
    name: {
      ru: "Самбери",
      en: "Samberi",
      zh: "桑贝里",
    },
    address: {
      ru: "Семёновская ул., 15, Владивосток",
      en: "15 Semyonovskaya St., Vladivostok",
      zh: "符拉迪沃斯托克谢苗诺夫斯卡亚街15号",
    },
    location: {
      latitude: 43.1167,
      longitude: 131.8933,
    },
    logo: "https://www.schastetc.ru/images/shops/logos/asdVEVgxtgg0aZwlsDdwluWwGQe4BqGZ9gTktw0v.jpg",
  },
];

export const getStoreById = (id: string): Store | undefined => {
  return stores.find((store) => store.id === id);
};
