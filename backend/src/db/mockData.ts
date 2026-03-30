import { Product, Store, Price, Review } from '../models';

export const products: Product[] = [
    {
        id: '1',
        barcode: '4601234567890',
        name: JSON.stringify({
            ru: 'Китайский зеленый чай "Тегуаньинь" Премиум',
            en: 'Chinese Green Tea "Tieguanyin" Premium',
            zh: '中国绿茶"铁观音"特级'
        }),
        description: JSON.stringify({
            ru: 'Высококачественный улун из провинции Фуцзянь. Собирается вручную весной. Имеет нежный цветочный аромат и сладковатое послевкусие. Содержит антиоксиданты, полезные для здоровья.',
            en: 'High-quality oolong from Fujian province. Hand-picked in spring. Has a delicate floral aroma and sweet aftertaste. Contains antioxidants beneficial for health.',
            zh: '来自福建省的高品质乌龙茶。春季手工采摘。具有细腻的花香和甜美的回味。含有有益健康的抗氧化剂。'
        }),
        composition: JSON.stringify({
            ru: 'Чай улун (Тегуаньинь), лепестки жасмина (5%)',
            en: 'Oolong tea (Tieguanyin), jasmine petals (5%)',
            zh: '乌龙茶（铁观音），茉莉花瓣（5%）'
        }),
        image_url: 'https://i.pinimg.com/1200x/d7/47/23/d7472377e0ade91b0865679085f931b1.jpg',
        average_rating: 4.8,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: '2',
        barcode: '6901234567890',
        name: JSON.stringify({
            ru: 'Крем для лица "Жемчужный" Secret Key',
            en: 'Secret Key "Pearl" Face Cream',
            zh: 'Secret Key "珍珠" 面霜'
        }),
        description: JSON.stringify({
            ru: 'Увлажняющий крем с экстрактом жемчуга и гиалуроновой кислотой. Осветляет кожу, выравнивает тон, убирает пигментацию.',
            en: 'Moisturizing cream with pearl extract and hyaluronic acid. Brightens skin, evens out tone, removes pigmentation.',
            zh: '含有珍珠提取物和透明质酸的保湿霜。提亮肤色，均匀肤色，去除色素沉着。'
        }),
        composition: JSON.stringify({
            ru: 'Экстракт жемчуга, гиалуроновая кислота, ниацинамид, масло ши',
            en: 'Pearl extract, hyaluronic acid, niacinamide, shea butter',
            zh: '珍珠提取物，透明质酸，烟酰胺，乳木果油'
        }),
        image_url: 'https://i.pinimg.com/1200x/11/88/29/11882945e05bc54d30aebf450622fbcb.jpg',
        average_rating: 4.5,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: '3',
        barcode: '6921234567890',
        name: JSON.stringify({
            ru: 'Сычуаньский перец горошком',
            en: 'Sichuan Peppercorns',
            zh: '四川花椒'
        }),
        description: JSON.stringify({
            ru: 'Ароматная пряность из провинции Сычуань. Используется в китайской кухне для придания блюдам легкого лимонного аромата.',
            en: 'Aromatic spice from Sichuan province. Used in Chinese cuisine to add a light lemon aroma.',
            zh: '来自四川省的芳香香料。用于中国菜肴，增添淡淡的柠檬香气。'
        }),
        composition: JSON.stringify({
            ru: '100% сычуаньский перец',
            en: '100% Sichuan peppercorns',
            zh: '100% 四川花椒'
        }),
        image_url: 'https://i.pinimg.com/736x/ac/4a/a5/ac4aa55b5be8d5c3bab611284b5ee93c.jpg',
        average_rating: 4.7,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: '4',
        barcode: '6931234567890',
        name: JSON.stringify({
            ru: 'Китайская лапша "Чоу Мейн"',
            en: 'Chinese "Chow Mein" Noodles',
            zh: '中国"炒面"面条'
        }),
        description: JSON.stringify({
            ru: 'Яичная лапша для жарки. Идеально подходит для приготовления традиционной китайской лапши с овощами и мясом.',
            en: 'Egg noodles for frying. Perfect for making traditional Chinese noodles with vegetables and meat.',
            zh: '用于炒制的鸡蛋面。非常适合制作传统的中国面条配蔬菜和肉类。'
        }),
        composition: JSON.stringify({
            ru: 'Мука пшеничная, яйца, соль, куркума',
            en: 'Wheat flour, eggs, salt, turmeric',
            zh: '小麦粉，鸡蛋，盐，姜黄'
        }),
        image_url: 'https://i.pinimg.com/1200x/36/ed/69/36ed6907fc660268967f4baf5f3a034c.jpg',
        average_rating: 4.3,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: '5',
        barcode: '6941234567890',
        name: JSON.stringify({
            ru: 'Соус устричный Lee Kum Kee',
            en: 'Lee Kum Kee Oyster Sauce',
            zh: '李锦记蚝油'
        }),
        description: JSON.stringify({
            ru: 'Традиционный китайский соус из устриц. Придает блюдам глубокий солоновато-сладкий вкус.',
            en: 'Traditional Chinese oyster sauce. Gives dishes a deep salty-sweet taste.',
            zh: '传统中国蚝油。给菜肴带来浓郁的咸甜味道。'
        }),
        composition: JSON.stringify({
            ru: 'Экстракт устриц (30%), сахар, соевый соус, соль',
            en: 'Oyster extract (30%), sugar, soy sauce, salt',
            zh: '蚝汁（30%），糖，酱油，盐'
        }),
        image_url: 'https://i.pinimg.com/736x/ee/1f/d9/ee1fd9f6bb55b00447e9ef7e777bb8ee.jpg',
        average_rating: 4.6,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: '6',
        barcode: '6951234567890',
        name: JSON.stringify({
            ru: 'Чай матча "Matcha Premium"',
            en: '"Matcha Premium" Green Tea',
            zh: '"抹茶特级" 绿茶'
        }),
        description: JSON.stringify({
            ru: 'Японский зеленый чай матча высшего качества. Выращивается в тени, собирается вручную. Обладает насыщенным вкусом.',
            en: 'Highest quality Japanese matcha green tea. Grown in shade, hand-picked. Has a rich taste.',
            zh: '最高品质的日本抹茶绿茶。遮阴种植，手工采摘。味道浓郁。'
        }),
        composition: JSON.stringify({
            ru: '100% зеленый чай матча (Ceremonial grade)',
            en: '100% matcha green tea (Ceremonial grade)',
            zh: '100% 抹茶绿茶（仪式级）'
        }),
        image_url: 'https://i.pinimg.com/736x/36/0b/e6/360be6c31273dc2c967c607553171c16.jpg',
        average_rating: 4.9,
        created_at: new Date(),
        updated_at: new Date()
    }
];

export const stores: Store[] = [
    {
        id: '1',
        name: JSON.stringify({
            ru: 'Чайный домик',
            en: 'Tea House',
            zh: '茶馆'
        }),
        address: 'ул. Советская, 5',
        latitude: 55.7545,
        longitude: 37.6150,
        created_at: new Date()
    },
    {
        id: '2',
        name: JSON.stringify({
            ru: 'Ашан',
            en: 'Auchan',
            zh: '欧尚'
        }),
        address: 'ТЦ Мега, 2 этаж',
        latitude: 55.7600,
        longitude: 37.6300,
        created_at: new Date()
    },
    {
        id: '3',
        name: JSON.stringify({
            ru: 'Золотое яблоко',
            en: 'Golden Apple',
            zh: '金苹果'
        }),
        address: 'ТЦ Галерея',
        latitude: 55.7532,
        longitude: 37.6225,
        created_at: new Date()
    },
    {
        id: '4',
        name: JSON.stringify({
            ru: 'Лэтуаль',
            en: 'Letual',
            zh: 'L\'Etoile'
        }),
        address: 'ул. Кирова, 10',
        latitude: 55.7560,
        longitude: 37.6180,
        created_at: new Date()
    },
    {
        id: '5',
        name: JSON.stringify({
            ru: 'Перекресток',
            en: 'Perekrestok',
            zh: '十字路口'
        }),
        address: 'пр. Мира, 15',
        latitude: 55.7570,
        longitude: 37.6200,
        created_at: new Date()
    },
    {
        id: '6',
        name: JSON.stringify({
            ru: 'Магазин восточных специй',
            en: 'Oriental Spices Store',
            zh: '东方香料店'
        }),
        address: 'ул. Ленина, 25',
        latitude: 55.7580,
        longitude: 37.6160,
        created_at: new Date()
    }
];

export const prices: Price[] = [
    // Чай Тегуаньинь (id: 1)
    { id: '1', product_id: '1', store_id: '1', price: 950, updated_at: new Date() },
    { id: '2', product_id: '1', store_id: '2', price: 820, updated_at: new Date() },
    // Крем (id: 2)
    { id: '3', product_id: '2', store_id: '3', price: 1350, updated_at: new Date() },
    { id: '4', product_id: '2', store_id: '4', price: 1190, updated_at: new Date() },
    // Перец (id: 3)
    { id: '5', product_id: '3', store_id: '5', price: 420, updated_at: new Date() },
    { id: '6', product_id: '3', store_id: '6', price: 490, updated_at: new Date() },
    // Лапша (id: 4)
    { id: '7', product_id: '4', store_id: '2', price: 299, updated_at: new Date() },
    { id: '8', product_id: '4', store_id: '5', price: 310, updated_at: new Date() },
    // Соус (id: 5)
    { id: '9', product_id: '5', store_id: '6', price: 420, updated_at: new Date() },
    { id: '10', product_id: '5', store_id: '2', price: 360, updated_at: new Date() },
    // Матча (id: 6)
    { id: '11', product_id: '6', store_id: '1', price: 1790, updated_at: new Date() },
    { id: '12', product_id: '6', store_id: '3', price: 1590, updated_at: new Date() }
];

export const reviews: Review[] = [
    // Чай
    {
        id: '1',
        product_id: '1',
        author: 'Елена',
        text: JSON.stringify({
            ru: 'Очень ароматный чай, настоящий Тегуаньинь!',
            en: 'Very aromatic tea, real Tieguanyin!',
            zh: '非常香的茶，真正的铁观音！'
        }),
        rating: 5,
        date: new Date('2024-03-15')
    },
    {
        id: '2',
        product_id: '1',
        author: 'Дмитрий',
        text: JSON.stringify({
            ru: 'Хороший вкус, мягкий, без горечи',
            en: 'Good taste, mild, no bitterness',
            zh: '味道好，温和，不苦'
        }),
        rating: 4,
        date: new Date('2024-03-10')
    },
    // Крем
    {
        id: '3',
        product_id: '2',
        author: 'Мария',
        text: JSON.stringify({
            ru: 'Крем отлично увлажняет, кожа сияет!',
            en: 'The cream moisturizes perfectly, the skin glows!',
            zh: '面霜保湿效果很好，皮肤有光泽！'
        }),
        rating: 5,
        date: new Date('2024-03-12')
    },
    // Перец
    {
        id: '4',
        product_id: '3',
        author: 'Алексей',
        text: JSON.stringify({
            ru: 'Настоящий сычуаньский перец, очень ароматный',
            en: 'Real Sichuan pepper, very aromatic',
            zh: '真正的四川花椒，非常香'
        }),
        rating: 5,
        date: new Date('2024-03-14')
    },
    // Лапша
    {
        id: '5',
        product_id: '4',
        author: 'Наталья',
        text: JSON.stringify({
            ru: 'Отличная лапша, как в китайском ресторане',
            en: 'Great noodles, like in a Chinese restaurant',
            zh: '很棒的面条，就像在中国餐馆里一样'
        }),
        rating: 5,
        date: new Date('2024-03-11')
    },
    // Соус
    {
        id: '6',
        product_id: '5',
        author: 'Михаил',
        text: JSON.stringify({
            ru: 'Настоящий устричный соус, как в Китае',
            en: 'Real oyster sauce, like in China',
            zh: '真正的蚝油，就像在中国一样'
        }),
        rating: 5,
        date: new Date('2024-03-13')
    },
    // Матча
    {
        id: '7',
        product_id: '6',
        author: 'Елена',
        text: JSON.stringify({
            ru: 'Лучший матча, который я пробовала!',
            en: 'The best matcha I have ever tried!',
            zh: '我喝过最好的抹茶！'
        }),
        rating: 5,
        date: new Date('2024-03-15')
    }
];