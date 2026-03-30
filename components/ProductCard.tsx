import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCurrency } from '../../contexts/CurrencyContext';
import { MapPin } from 'lucide-react';
import { Product, Alternative, Review } from '../../data/mockProducts';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { t } = useTranslation();
    const { currency, convertPrice } = useCurrency();

    const formatPrice = (price: number) => {
        const converted = convertPrice(price);
        const symbols = { RUB: '₽', USD: '$', CNY: '¥' };
        return `${Math.round(converted)} ${symbols[currency]}`;
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Изображение товара */}
            <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Информация о товаре */}
            <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>

                {/* Цена и рейтинг */}
                <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-bold text-blue-600">
                        {formatPrice(product.price)}
                    </span>
                    <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                        <span className="text-yellow-600 font-semibold">★</span>
                        <span className="ml-1 font-semibold">{product.rating}</span>
                        <span className="text-gray-600 text-sm ml-1">/5</span>
                    </div>
                </div>

                {/* Рейтинг среди туристов */}
                <div className="mb-6 text-sm text-gray-600">
                    {t('product.rating')}: {product.rating} / 5
                </div>

                {/* Описание */}
                <div className="mb-4">
                    <h2 className="font-semibold text-gray-900 mb-2">{t('product.description')}</h2>
                    <p className="text-gray-700">{product.description}</p>
                </div>

                {/* Состав */}
                <div className="mb-6">
                    <h2 className="font-semibold text-gray-900 mb-2">{t('product.composition')}</h2>
                    <p className="text-gray-700">{product.composition}</p>
                </div>

                {/* Альтернативные предложения */}
                <div className="mb-6">
                    <h2 className="font-semibold text-gray-900 mb-3">{t('product.alternatives')}</h2>
                    <div className="space-y-3">
                        {product.alternatives.map((alt: Alternative, index: number) => (
                            <div key={index} className="border rounded-lg p-3 hover:bg-gray-50">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-medium">{alt.storeName}</h3>
                                        <div className="flex items-center text-sm text-gray-600 mt-1">
                                            <MapPin className="w-4 h-4 mr-1" />
                                            {alt.address}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-lg font-semibold text-green-600">
                                            {formatPrice(alt.price)}
                                        </span>
                                        <div className="text-sm text-gray-500">{alt.distance}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Отзывы */}
                <div>
                    <h2 className="font-semibold text-gray-900 mb-3">{t('product.reviews')}</h2>
                    {product.reviews.length > 0 ? (
                        <div className="space-y-4">
                            {product.reviews.map((review: Review, index: number) => (
                                <div key={index} className="border-t pt-3">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium">{review.author}</span>
                                        <div className="flex items-center">
                                            <span className="text-yellow-500 mr-1">★</span>
                                            <span className="text-sm">{review.rating}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-sm">{review.text}</p>
                                    <span className="text-xs text-gray-500 mt-1 block">{review.date}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 text-sm">{t('product.reviews.empty')}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;