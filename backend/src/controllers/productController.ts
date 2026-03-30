import { Request, Response } from 'express';
import { products, prices, stores, reviews } from '../db/mockData';

// Функция для получения переведенного текста
const getTranslation = (data: string | null | undefined, lang: string): string => {
    if (!data) return '';
    try {
        const parsed = JSON.parse(data);
        return parsed[lang] || parsed.ru || data;
    } catch {
        return data;
    }
};

export const getProductByBarcode = (req: Request, res: Response) => {
    const { barcode } = req.params;
    const lang = (req.query.lang as string) || 'ru';

    const product = products.find(p => p.barcode === barcode);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    // Находим цены для товара
    const productPrices = prices.filter(p => p.product_id === product.id);

    // Находим магазины с ценами
    const alternatives = productPrices.map(price => {
        const store = stores.find(s => s.id === price.store_id);
        return {
            storeName: getTranslation(store?.name || '', lang),
            address: store?.address || '',
            price: price.price,
            distance: '500 м'
        };
    });

    // Находим отзывы
    const productReviews = reviews
        .filter(r => r.product_id === product.id)
        .map(r => ({
            author: r.author,
            date: r.date.toISOString().split('T')[0],
            text: getTranslation(r.text, lang),
            rating: r.rating
        }));

    const basePrice = productPrices.length > 0
        ? Math.min(...productPrices.map(p => p.price))
        : 0;

    res.json({
        id: product.id,
        barcode: product.barcode,
        name: getTranslation(product.name, lang),
        price: basePrice,
        rating: product.average_rating,
        description: getTranslation(product.description, lang),
        composition: getTranslation(product.composition, lang),
        image: product.image_url,
        alternatives,
        reviews: productReviews
    });
};

export const getProductById = (req: Request, res: Response) => {
    const { id } = req.params;
    const lang = (req.query.lang as string) || 'ru';

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    const productPrices = prices.filter(p => p.product_id === product.id);

    const alternatives = productPrices.map(price => {
        const store = stores.find(s => s.id === price.store_id);
        return {
            storeName: getTranslation(store?.name || '', lang),
            address: store?.address || '',
            price: price.price,
            distance: '500 м'
        };
    });

    const productReviews = reviews
        .filter(r => r.product_id === product.id)
        .map(r => ({
            author: r.author,
            date: r.date.toISOString().split('T')[0],
            text: getTranslation(r.text, lang),
            rating: r.rating
        }));

    const basePrice = productPrices.length > 0
        ? Math.min(...productPrices.map(p => p.price))
        : 0;

    res.json({
        id: product.id,
        barcode: product.barcode,
        name: getTranslation(product.name, lang),
        price: basePrice,
        rating: product.average_rating,
        description: getTranslation(product.description, lang),
        composition: getTranslation(product.composition, lang),
        image: product.image_url,
        alternatives,
        reviews: productReviews
    });
};

export const getPopularProducts = (req: Request, res: Response) => {
    const lang = (req.query.lang as string) || 'ru';

    // Возвращаем все товары, отсортированные по рейтингу
    const popularProducts = [...products]
        .sort((a, b) => b.average_rating - a.average_rating)
        .slice(0, 10)
        .map(product => {
            const productPrices = prices.filter(p => p.product_id === product.id);
            const minPrice = productPrices.length > 0
                ? Math.min(...productPrices.map(p => p.price))
                : 0;

            return {
                id: product.id,
                name: getTranslation(product.name, lang),
                price: minPrice,
                rating: product.average_rating,
                image: product.image_url,
                scan_count: Math.floor(Math.random() * 1000) + 100
            };
        });

    res.json(popularProducts);
};