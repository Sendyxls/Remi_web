export type TranslationKey = 
  | "appName"
  | "home"
  | "scanner"
  | "map"
  | "settings"
  | "language"
  | "currency"
  | "popularProducts"
  | "scan"
  | "scanBarcode"
  | "nearbyStores"
  | "price"
  | "bestPrice"
  | "ingredients"
  | "description"
  | "inStock"
  | "outOfStock"
  | "storeAvailability"
  | "viewOnMap"
  | "back"
  | "searchProducts"
  | "noResults"
  | "scanToCompare"
  | "changeLanguage"
  | "changeCurrency"
  | "aboutApp"
  | "version"
  | "privacyPolicy"
  | "termsOfService"
  | "contactUs"
  | "loading"
  | "error"
  | "retry"
  | "cancel"
  | "ok"
  | "save"
  | "delete"
  | "edit"
  | "add"
  | "remove"
  | "search"
  | "filter"
  | "sort"
  | "asc"
  | "desc"
  | "priceRange"
  | "rating"
  | "distance"
  | "storeInfo"
  | "directions"
  | "website"
  | "phone"
  | "email"
  | "workingHours"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday"
  | "closed"
  | "at"
  | "reviews"
  | "customerReviews"
  | "noReviews";

export const translations: Record<string, Record<TranslationKey, string>> = {
  ru: {
    appName: "ShopSmart",
    home: "Главная",
    scanner: "Сканер",
    map: "Карта",
    settings: "Настройки",
    language: "Язык",
    currency: "Валюта",
    popularProducts: "Популярные товары",
    scan: "Сканировать",
    scanBarcode: "Сканировать штрих-код",
    nearbyStores: "Магазины поблизости",
    price: "Цена",
    bestPrice: "Лучшая цена",
    ingredients: "Состав",
    description: "Описание",
    inStock: "В наличии",
    outOfStock: "Нет в наличии",
    storeAvailability: "Наличие в магазинах",
    viewOnMap: "Показать на карте",
    back: "Назад",
    searchProducts: "Поиск товаров",
    noResults: "Нет результатов",
    scanToCompare: "Отсканируйте штрих-код для сравнения цен",
    changeLanguage: "Изменить язык",
    changeCurrency: "Изменить валюту",
    aboutApp: "О приложении",
    version: "Версия",
    privacyPolicy: "Политика конфиденциальности",
    termsOfService: "Условия использования",
    contactUs: "Связаться с нами",
    loading: "Загрузка...",
    error: "Ошибка",
    retry: "Повторить",
    cancel: "Отмена",
    ok: "ОК",
    save: "Сохранить",
    delete: "Удалить",
    edit: "Редактировать",
    add: "Добавить",
    remove: "Удалить",
    search: "Поиск",
    filter: "Фильтр",
    sort: "Сортировка",
    asc: "По возрастанию",
    desc: "По убыванию",
    priceRange: "Диапазон цен",
    rating: "Рейтинг",
    distance: "Расстояние",
    storeInfo: "Информация о магазине",
    directions: "Маршрут",
    website: "Веб-сайт",
    phone: "Телефон",
    email: "Email",
    workingHours: "Часы работы",
    monday: "Понедельник",
    tuesday: "Вторник",
    wednesday: "Среда",
    thursday: "Четверг",
    friday: "Пятница",
    saturday: "Суббота",
    sunday: "Воскресенье",
    closed: "Закрыто",
    at: "в",
    reviews: "Отзывы",
    customerReviews: "Отзывы покупателей",
    noReviews: "Пока нет отзывов",
  },
  en: {
    appName: "ShopSmart",
    home: "Home",
    scanner: "Scanner",
    map: "Map",
    settings: "Settings",
    language: "Language",
    currency: "Currency",
    popularProducts: "Popular Products",
    scan: "Scan",
    scanBarcode: "Scan Barcode",
    nearbyStores: "Nearby Stores",
    price: "Price",
    bestPrice: "Best Price",
    ingredients: "Ingredients",
    description: "Description",
    inStock: "In Stock",
    outOfStock: "Out of Stock",
    storeAvailability: "Store Availability",
    viewOnMap: "View on Map",
    back: "Back",
    searchProducts: "Search Products",
    noResults: "No Results",
    scanToCompare: "Scan a barcode to compare prices",
    changeLanguage: "Change Language",
    changeCurrency: "Change Currency",
    aboutApp: "About App",
    version: "Version",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    contactUs: "Contact Us",
    loading: "Loading...",
    error: "Error",
    retry: "Retry",
    cancel: "Cancel",
    ok: "OK",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    add: "Add",
    remove: "Remove",
    search: "Search",
    filter: "Filter",
    sort: "Sort",
    asc: "Ascending",
    desc: "Descending",
    priceRange: "Price Range",
    rating: "Rating",
    distance: "Distance",
    storeInfo: "Store Information",
    directions: "Directions",
    website: "Website",
    phone: "Phone",
    email: "Email",
    workingHours: "Working Hours",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    closed: "Closed",
    at: "at",
    reviews: "Reviews",
    customerReviews: "Customer Reviews",
    noReviews: "No reviews yet",
  },
  zh: {
    appName: "ShopSmart",
    home: "首页",
    scanner: "扫描器",
    map: "地图",
    settings: "设置",
    language: "语言",
    currency: "货币",
    popularProducts: "热门产品",
    scan: "扫描",
    scanBarcode: "扫描条形码",
    nearbyStores: "附近商店",
    price: "价格",
    bestPrice: "最优价格",
    ingredients: "成分",
    description: "描述",
    inStock: "有货",
    outOfStock: "缺货",
    storeAvailability: "商店库存",
    viewOnMap: "在地图上查看",
    back: "返回",
    searchProducts: "搜索产品",
    noResults: "没有结果",
    scanToCompare: "扫描条形码比较价格",
    changeLanguage: "更改语言",
    changeCurrency: "更改货币",
    aboutApp: "关于应用",
    version: "版本",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    contactUs: "联系我们",
    loading: "加载中...",
    error: "错误",
    retry: "重试",
    cancel: "取消",
    ok: "确定",
    save: "保存",
    delete: "删除",
    edit: "编辑",
    add: "添加",
    remove: "移除",
    search: "搜索",
    filter: "筛选",
    sort: "排序",
    asc: "升序",
    desc: "降序",
    priceRange: "价格范围",
    distance: "距离",
    storeInfo: "商店信息",
    directions: "路线",
    website: "网站",
    phone: "电话",
    email: "电子邮件",
    workingHours: "营业时间",
    monday: "星期一",
    tuesday: "星期二",
    wednesday: "星期三",
    thursday: "星期四",
    friday: "星期五",
    saturday: "星期六",
    sunday: "星期日",
    closed: "休息",
    at: "在",
    rating: "评分",
    reviews: "评论",
    customerReviews: "客户评论",
    noReviews: "暂无评论",
  },
};

export const getTranslation = (
  key: TranslationKey,
  languageCode: string
): string => {
  const language = languageCode in translations ? languageCode : "en";
  return translations[language][key] || translations.en[key] || key;
};