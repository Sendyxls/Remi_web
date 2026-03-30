import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    ru: {
        translation: {

            //То что забыл

            'popular.found_count': 'Найдено товаров: {count}',
            'stores.in_development': 'В разработке',
            'stores.coming_soon': 'Функция карты магазинов скоро появится',
            'scan.barcode_instruction': 'Наведите камеру на штрих-код товара',
            'scan.supported_formats': 'Поддерживаемые форматы: EAN-13, EAN-8, UPC, Code 128',


            // Навигация
            'nav.scan': 'Сканер',
            'nav.popular': 'Популярное',
            'nav.stores': 'Магазины',
            'nav.settings': 'Настройки',

            // Сканер
            'scan.title': 'Наведите камеру на штрих-код',
            'scan.button': 'Отсканировать товар',
            'scan.tip': 'Для теста можно использовать демо-сканирование',
            'scan.camera.request': 'Запрос доступа к камере...',
            'scan.camera.allow': 'Разрешите доступ к камере в настройках браузера',
            'scan.camera.notFound': 'Камера не найдена на устройстве',
            'scan.camera.error': 'Не удалось получить доступ к камере',
            'scan.demo.tea': 'Демо (чай)',
            'scan.demo.error': 'Демо (ошибка)',
            'scan.supported.formats': 'Поддерживаемые форматы: EAN-13, EAN-8, UPC, Code 128',

            // Карточка товара
            'product.rating': 'Рейтинг среди туристов',
            'product.description': 'Описание',
            'product.composition': 'Состав',
            'product.alternatives': 'Альтернативные предложения',
            'product.reviews': 'Отзывы',
            'product.reviews.empty': 'Пока нет отзывов',
            'product.back': 'Назад',
            'product.price.from': 'от',

            // Популярные товары
            'popular.title': 'Популярные товары',
            'popular.search.placeholder': 'Поиск по названию...',
            'popular.found': 'Найдено товаров',
            'popular.views': 'просмотров',
            'popular.loading': 'Загрузка...',
            'popular.error': 'Не удалось загрузить популярные товары',

            // Магазины
            'stores.title': 'Магазины рядом',
            'stores.location.found': 'Ваше местоположение определено',
            'stores.location.error': 'Не удалось определить местоположение',
            'stores.distance': 'Расстояние',
            'stores.map': 'Карта магазинов',
            'stores.route': 'Построить маршрут',
            'stores.loading': 'Поиск магазинов...',
            'stores.empty': 'Магазины не найдены',

            // Настройки
            'settings.title': 'Настройки',
            'settings.language': 'Язык интерфейса',
            'settings.currency': 'Валюта',
            'settings.manualRate': 'Ручной курс',
            'settings.manualRate.placeholder': 'Введите курс к рублю',
            'settings.rate.hint': '1 {currency} = {rate} RUB',
            'settings.save': 'Сохранить',
            'settings.saved': 'Настройки сохранены',

            // Валюты
            'currency.rub': 'Рубль (₽)',
            'currency.usd': 'Доллар ($)',
            'currency.cny': 'Юань (¥)',
            'currency.rub.short': '₽',
            'currency.usd.short': '$',
            'currency.cny.short': '¥',

            // Языки
            'language.ru': 'Русский',
            'language.en': 'English',
            'language.zh': '中文',

            // Ошибки
            'error.product.notFound': 'Товар с таким штрих-кодом не найден',
            'error.scan.failed': 'Не удалось отсканировать штрих-код',
            'error.camera.permission': 'Доступ к камере запрещен',
            'error.camera.notSupported': 'Ваш браузер не поддерживает доступ к камере',
            'error.general': 'Произошла ошибка',
            'error.tryAgain': 'Попробовать снова',
            'error.close': 'Закрыть',

            // Кнопки
            'button.close': 'Закрыть',
            'button.cancel': 'Отмена',
            'button.save': 'Сохранить',
            'button.scan': 'Сканировать',
            'button.tryAgain': 'Попробовать снова',
            'button.back': 'Назад',

            // Сообщения
            'message.loading': 'Загрузка...',
            'message.noData': 'Нет данных',
            'message.scanning': 'Сканирование...',
            'message.searching': 'Поиск товара...',



        }
    },
    en: {
        translation: {

            'popular.found_count': 'Products found: {count}',
            'stores.in_development': 'In Development',
            'stores.coming_soon': 'Store map feature coming soon',
            'scan.barcode_instruction': 'Point camera at product barcode',
            'scan.supported_formats': 'Supported formats: EAN-13, EAN-8, UPC, Code 128',

            // Navigation
            'nav.scan': 'Scan',
            'nav.popular': 'Popular',
            'nav.stores': 'Stores',
            'nav.settings': 'Settings',

            // Scanner
            'scan.title': 'Point camera at barcode',
            'scan.button': 'Scan product',
            'scan.tip': 'Use demo scan for testing',
            'scan.camera.request': 'Requesting camera access...',
            'scan.camera.allow': 'Please allow camera access in browser settings',
            'scan.camera.notFound': 'Camera not found on device',
            'scan.camera.error': 'Failed to access camera',
            'scan.demo.tea': 'Demo (tea)',
            'scan.demo.error': 'Demo (error)',
            'scan.supported.formats': 'Supported formats: EAN-13, EAN-8, UPC, Code 128',

            // Product card
            'product.rating': 'Tourist rating',
            'product.description': 'Description',
            'product.composition': 'Ingredients',
            'product.alternatives': 'Alternative offers',
            'product.reviews': 'Reviews',
            'product.reviews.empty': 'No reviews yet',
            'product.back': 'Back',
            'product.price.from': 'from',

            // Popular products
            'popular.title': 'Popular products',
            'popular.search.placeholder': 'Search by name...',
            'popular.found': 'Products found',
            'popular.views': 'views',
            'popular.loading': 'Loading...',
            'popular.error': 'Failed to load popular products',

            // Stores
            'stores.title': 'Nearby stores',
            'stores.location.found': 'Your location detected',
            'stores.location.error': 'Unable to detect location',
            'stores.distance': 'Distance',
            'stores.map': 'Store map',
            'stores.route': 'Get directions',
            'stores.loading': 'Finding stores...',
            'stores.empty': 'No stores found',

            // Settings
            'settings.title': 'Settings',
            'settings.language': 'Language',
            'settings.currency': 'Currency',
            'settings.manualRate': 'Manual exchange rate',
            'settings.manualRate.placeholder': 'Enter rate to RUB',
            'settings.rate.hint': '1 {currency} = {rate} RUB',
            'settings.save': 'Save',
            'settings.saved': 'Settings saved',

            // Currencies
            'currency.rub': 'Ruble (₽)',
            'currency.usd': 'Dollar ($)',
            'currency.cny': 'Yuan (¥)',
            'currency.rub.short': '₽',
            'currency.usd.short': '$',
            'currency.cny.short': '¥',

            // Languages
            'language.ru': 'Russian',
            'language.en': 'English',
            'language.zh': 'Chinese',

            // Errors
            'error.product.notFound': 'Product with this barcode not found',
            'error.scan.failed': 'Failed to scan barcode',
            'error.camera.permission': 'Camera access denied',
            'error.camera.notSupported': 'Your browser does not support camera access',
            'error.general': 'An error occurred',
            'error.tryAgain': 'Try again',
            'error.close': 'Close',

            // Buttons
            'button.close': 'Close',
            'button.cancel': 'Cancel',
            'button.save': 'Save',
            'button.scan': 'Scan',
            'button.tryAgain': 'Try again',
            'button.back': 'Back',

            // Messages
            'message.loading': 'Loading...',
            'message.noData': 'No data',
            'message.scanning': 'Scanning...',
            'message.searching': 'Searching for product...',
        }
    },
    zh: {
        translation: {

            'popular.found_count': '找到商品: {count}',
            'stores.in_development': '开发中',
            'stores.coming_soon': '商店地图功能即将推出',
            'scan.barcode_instruction': '将相机对准商品条形码',
            'scan.supported_formats': '支持格式: EAN-13, EAN-8, UPC, Code 128',

            // Navigation
            'nav.scan': '扫描',
            'nav.popular': '热门',
            'nav.stores': '商店',
            'nav.settings': '设置',

            // Scanner
            'scan.title': '将相机对准条形码',
            'scan.button': '扫描商品',
            'scan.tip': '可使用演示扫描进行测试',
            'scan.camera.request': '请求相机权限...',
            'scan.camera.allow': '请在浏览器设置中允许相机访问',
            'scan.camera.notFound': '未找到相机设备',
            'scan.camera.error': '无法访问相机',
            'scan.demo.tea': '演示 (茶)',
            'scan.demo.error': '演示 (错误)',
            'scan.supported.formats': '支持格式: EAN-13, EAN-8, UPC, Code 128',

            // Product card
            'product.rating': '游客评分',
            'product.description': '描述',
            'product.composition': '成分',
            'product.alternatives': '其他商店报价',
            'product.reviews': '评论',
            'product.reviews.empty': '暂无评论',
            'product.back': '返回',
            'product.price.from': '起价',

            // Popular products
            'popular.title': '热门商品',
            'popular.search.placeholder': '按名称搜索...',
            'popular.found': '找到商品',
            'popular.views': '次浏览',
            'popular.loading': '加载中...',
            'popular.error': '加载热门商品失败',

            // Stores
            'stores.title': '附近商店',
            'stores.location.found': '已检测到您的位置',
            'stores.location.error': '无法检测位置',
            'stores.distance': '距离',
            'stores.map': '商店地图',
            'stores.route': '获取路线',
            'stores.loading': '寻找商店...',
            'stores.empty': '未找到商店',

            // Settings
            'settings.title': '设置',
            'settings.language': '界面语言',
            'settings.currency': '货币',
            'settings.manualRate': '手动汇率',
            'settings.manualRate.placeholder': '输入对卢布的汇率',
            'settings.rate.hint': '1 {currency} = {rate} 卢布',
            'settings.save': '保存',
            'settings.saved': '设置已保存',

            // Currencies
            'currency.rub': '卢布 (₽)',
            'currency.usd': '美元 ($)',
            'currency.cny': '人民币 (¥)',
            'currency.rub.short': '₽',
            'currency.usd.short': '$',
            'currency.cny.short': '¥',

            // Languages
            'language.ru': '俄语',
            'language.en': '英语',
            'language.zh': '中文',

            // Errors
            'error.product.notFound': '未找到此条形码的商品',
            'error.scan.failed': '扫描条形码失败',
            'error.camera.permission': '相机权限被拒绝',
            'error.camera.notSupported': '您的浏览器不支持相机访问',
            'error.general': '发生错误',
            'error.tryAgain': '重试',
            'error.close': '关闭',

            // Buttons
            'button.close': '关闭',
            'button.cancel': '取消',
            'button.save': '保存',
            'button.scan': '扫描',
            'button.tryAgain': '重试',
            'button.back': '返回',

            // Messages
            'message.loading': '加载中...',
            'message.noData': '暂无数据',
            'message.scanning': '扫描中...',
            'message.searching': '搜索商品...',
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;