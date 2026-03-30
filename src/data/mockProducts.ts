export interface Product {
    id: string;
    barcode: string;
    name: Record<string, string>; // ru, en, zh
    price: number;
    rating: number;
    description: Record<string, string>;
    composition: Record<string, string>;
    image: string;
    alternatives: Alternative[];
    reviews: Review[];
    scan_count: number; // реальное количество просмотров
}

export interface Alternative {
    storeName: Record<string, string>;
    address: string;
    price: number;
    distance: string;
}

export interface Review {
    author: string;
    date: string;
    text: Record<string, string>;
    rating: number;
}

export const mockProducts: Product[] = [
    {
        id: '1',
        barcode: '4601234567890',
        name: {
            ru: 'Китайский зеленый чай "Тегуаньинь" Премиум',
            en: 'Chinese Green Tea "Tieguanyin" Premium',
            zh: '中国绿茶"铁观音"特级'
        },
        price: 890,
        rating: 4.8,
        description: {
            ru: 'Высококачественный улун из провинции Фуцзянь. Собирается вручную весной. Имеет нежный цветочный аромат и сладковатое послевкусие. Содержит антиоксиданты, полезные для здоровья.',
            en: 'High-quality oolong from Fujian province. Hand-picked in spring. Has a delicate floral aroma and sweet aftertaste. Contains antioxidants beneficial for health.',
            zh: '来自福建省的高品质乌龙茶。春季手工采摘。具有细腻的花香和甜美的回味。含有有益健康的抗氧化剂。'
        },
        composition: {
            ru: 'Чай улун (Тегуаньинь), лепестки жасмина (5%)',
            en: 'Oolong tea (Tieguanyin), jasmine petals (5%)',
            zh: '乌龙茶（铁观音），茉莉花瓣（5%）'
        },
        image: 'https://i.pinimg.com/1200x/d7/47/23/d7472377e0ade91b0865679085f931b1.jpg',
        scan_count: 1247,
        alternatives: [
            {
                storeName: {
                    ru: 'Чайный домик',
                    en: 'Tea House',
                    zh: '茶馆'
                },
                address: 'ул. Советская, 5',
                price: 950,
                distance: '200 м'
            },
            {
                storeName: {
                    ru: 'Ашан',
                    en: 'Auchan',
                    zh: '欧尚'
                },
                address: 'ТЦ Мега, 2 этаж',
                price: 820,
                distance: '1.2 км'
            },
            {
                storeName: {
                    ru: 'Ozon',
                    en: 'Ozon',
                    zh: 'Ozon'
                },
                address: 'доставка',
                price: 790,
                distance: 'онлайн'
            }
        ],
        reviews: [
            {
                author: 'Елена',
                date: '2024-03-15',
                text: {
                    ru: 'Очень ароматный чай, настоящий Тегуаньинь!',
                    en: 'Very aromatic tea, real Tieguanyin!',
                    zh: '非常香的茶，真正的铁观音！'
                },
                rating: 5
            },
            {
                author: 'Дмитрий',
                date: '2024-03-10',
                text: {
                    ru: 'Хороший вкус, мягкий, без горечи',
                    en: 'Good taste, mild, no bitterness',
                    zh: '味道好，温和，不苦'
                },
                rating: 4
            }
        ]
    },
    {
        id: '2',
        barcode: '6901234567890',
        name: {
            ru: 'Крем для лица "Жемчужный" Secret Key',
            en: 'Secret Key "Pearl" Face Cream',
            zh: 'Secret Key "珍珠" 面霜'
        },
        price: 1250,
        rating: 4.5,
        description: {
            ru: 'Увлажняющий крем с экстрактом жемчуга и гиалуроновой кислотой. Осветляет кожу, выравнивает тон, убирает пигментацию.',
            en: 'Moisturizing cream with pearl extract and hyaluronic acid. Brightens skin, evens out tone, removes pigmentation.',
            zh: '含有珍珠提取物和透明质酸的保湿霜。提亮肤色，均匀肤色，去除色素沉着。'
        },
        composition: {
            ru: 'Экстракт жемчуга, гиалуроновая кислота, ниацинамид, масло ши',
            en: 'Pearl extract, hyaluronic acid, niacinamide, shea butter',
            zh: '珍珠提取物，透明质酸，烟酰胺，乳木果油'
        },
        image: 'https://i.pinimg.com/1200x/11/88/29/11882945e05bc54d30aebf450622fbcb.jpg',
        scan_count: 856,
        alternatives: [
            {
                storeName: {
                    ru: 'Золотое яблоко',
                    en: 'Golden Apple',
                    zh: '金苹果'
                },
                address: 'ТЦ Галерея',
                price: 1350,
                distance: '150 м'
            },
            {
                storeName: {
                    ru: 'Лэтуаль',
                    en: 'Letual',
                    zh: 'L\'Etoile'
                },
                address: 'ул. Кирова, 10',
                price: 1190,
                distance: '500 м'
            }
        ],
        reviews: [
            {
                author: 'Мария',
                date: '2024-03-12',
                text: {
                    ru: 'Крем отлично увлажняет, кожа сияет!',
                    en: 'The cream moisturizes perfectly, the skin glows!',
                    zh: '面霜保湿效果很好，皮肤有光泽！'
                },
                rating: 5
            }
        ]
    },
    {
        id: '3',
        barcode: '6921234567890',
        name: {
            ru: 'Сычуаньский перец горошком',
            en: 'Sichuan Peppercorns',
            zh: '四川花椒'
        },
        price: 450,
        rating: 4.7,
        description: {
            ru: 'Ароматная пряность из провинции Сычуань. Используется в китайской кухне для придания блюдам легкого лимонного аромата.',
            en: 'Aromatic spice from Sichuan province. Used in Chinese cuisine to add a light lemon aroma.',
            zh: '来自四川省的芳香香料。用于中国菜肴，增添淡淡的柠檬香气。'
        },
        composition: {
            ru: '100% сычуаньский перец',
            en: '100% Sichuan peppercorns',
            zh: '100% 四川花椒'
        },
        image: 'https://i.pinimg.com/736x/ac/4a/a5/ac4aa55b5be8d5c3bab611284b5ee93c.jpg',
        scan_count: 523,
        alternatives: [
            {
                storeName: {
                    ru: 'Магазин восточных специй',
                    en: 'Oriental Spices Store',
                    zh: '东方香料店'
                },
                address: 'ул. Ленина, 25',
                price: 490,
                distance: '300 м'
            },
            {
                storeName: {
                    ru: 'Перекресток',
                    en: 'Perekrestok',
                    zh: '十字路口'
                },
                address: 'пр. Мира, 15',
                price: 420,
                distance: '800 м'
            }
        ],
        reviews: [
            {
                author: 'Алексей',
                date: '2024-03-14',
                text: {
                    ru: 'Настоящий сычуаньский перец, очень ароматный',
                    en: 'Real Sichuan pepper, very aromatic',
                    zh: '真正的四川花椒，非常香'
                },
                rating: 5
            }
        ]
    },
    {
        id: '4',
        barcode: '6931234567890',
        name: {
            ru: 'Китайская лапша "Чоу Мейн"',
            en: 'Chinese "Chow Mein" Noodles',
            zh: '中国"炒面"面条'
        },
        price: 320,
        rating: 4.3,
        description: {
            ru: 'Яичная лапша для жарки. Идеально подходит для приготовления традиционной китайской лапши с овощами и мясом.',
            en: 'Egg noodles for frying. Perfect for making traditional Chinese noodles with vegetables and meat.',
            zh: '用于炒制的鸡蛋面。非常适合制作传统的中国面条配蔬菜和肉类。'
        },
        composition: {
            ru: 'Мука пшеничная, яйца, соль, куркума',
            en: 'Wheat flour, eggs, salt, turmeric',
            zh: '小麦粉，鸡蛋，盐，姜黄'
        },
        image: 'https://i.pinimg.com/1200x/36/ed/69/36ed6907fc660268967f4baf5f3a034c.jpg',
        scan_count: 412,
        alternatives: [
            {
                storeName: {
                    ru: 'Ашан',
                    en: 'Auchan',
                    zh: '欧尚'
                },
                address: 'ТЦ Мега',
                price: 299,
                distance: '1.2 км'
            },
            {
                storeName: {
                    ru: 'Лента',
                    en: 'Lenta',
                    zh: 'Lenta'
                },
                address: 'ул. Гагарина, 42',
                price: 310,
                distance: '900 м'
            }
        ],
        reviews: [
            {
                author: 'Наталья',
                date: '2024-03-11',
                text: {
                    ru: 'Отличная лапша, как в китайском ресторане',
                    en: 'Great noodles, like in a Chinese restaurant',
                    zh: '很棒的面条，就像在中国餐馆里一样'
                },
                rating: 5
            }
        ]
    },
    {
        id: '5',
        barcode: '6941234567890',
        name: {
            ru: 'Соус устричный Lee Kum Kee',
            en: 'Lee Kum Kee Oyster Sauce',
            zh: '李锦记蚝油'
        },
        price: 380,
        rating: 4.6,
        description: {
            ru: 'Традиционный китайский соус из устриц. Придает блюдам глубокий солоновато-сладкий вкус.',
            en: 'Traditional Chinese oyster sauce. Gives dishes a deep salty-sweet taste.',
            zh: '传统中国蚝油。给菜肴带来浓郁的咸甜味道。'
        },
        composition: {
            ru: 'Экстракт устриц (30%), сахар, соевый соус, соль',
            en: 'Oyster extract (30%), sugar, soy sauce, salt',
            zh: '蚝汁（30%），糖，酱油，盐'
        },
        image: 'https://i.pinimg.com/736x/ee/1f/d9/ee1fd9f6bb55b00447e9ef7e777bb8ee.jpg',
        scan_count: 678,
        alternatives: [
            {
                storeName: {
                    ru: 'Магазин азиатской кухни',
                    en: 'Asian Cuisine Store',
                    zh: '亚洲美食店'
                },
                address: 'ул. Ленина, 18',
                price: 420,
                distance: '250 м'
            },
            {
                storeName: {
                    ru: 'Глобус',
                    en: 'Globus',
                    zh: 'Globus'
                },
                address: 'ТЦ Континент',
                price: 360,
                distance: '1.5 км'
            }
        ],
        reviews: [
            {
                author: 'Михаил',
                date: '2024-03-13',
                text: {
                    ru: 'Настоящий устричный соус, как в Китае',
                    en: 'Real oyster sauce, like in China',
                    zh: '真正的蚝油，就像在中国一样'
                },
                rating: 5
            }
        ]
    },
    {
        id: '6',
        barcode: '6951234567890',
        name: {
            ru: 'Чай матча "Matcha Premium"',
            en: '"Matcha Premium" Green Tea',
            zh: '"抹茶特级" 绿茶'
        },
        price: 1650,
        rating: 4.9,
        description: {
            ru: 'Японский зеленый чай матча высшего качества. Выращивается в тени, собирается вручную. Обладает насыщенным вкусом.',
            en: 'Highest quality Japanese matcha green tea. Grown in shade, hand-picked. Has a rich taste.',
            zh: '最高品质的日本抹茶绿茶。遮阴种植，手工采摘。味道浓郁。'
        },
        composition: {
            ru: '100% зеленый чай матча (Ceremonial grade)',
            en: '100% matcha green tea (Ceremonial grade)',
            zh: '100% 抹茶绿茶（仪式级）'
        },
        image: 'https://i.pinimg.com/736x/36/0b/e6/360be6c31273dc2c967c607553171c16.jpg',
        scan_count: 934,
        alternatives: [
            {
                storeName: {
                    ru: 'Чайный дом',
                    en: 'Tea House',
                    zh: '茶馆'
                },
                address: 'ул. Пушкина, 12',
                price: 1790,
                distance: '350 м'
            },
            {
                storeName: {
                    ru: 'Coffee Like',
                    en: 'Coffee Like',
                    zh: 'Coffee Like'
                },
                address: 'ТЦ Галерея',
                price: 1590,
                distance: '200 м'
            }
        ],
        reviews: [
            {
                author: 'Елена',
                date: '2024-03-15',
                text: {
                    ru: 'Лучший матча, который я пробовала!',
                    en: 'The best matcha I have ever tried!',
                    zh: '我喝过最好的抹茶！'
                },
                rating: 5
            }
        ]
    }
];