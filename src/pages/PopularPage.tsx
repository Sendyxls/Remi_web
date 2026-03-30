import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Search, Star, Eye } from 'lucide-react';
import { api, PopularProduct } from '../services/api';
import { useCurrency } from '../contexts/CurrencyContext';

const PopularPage: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { currency, convertPrice } = useCurrency();
    const [products, setProducts] = useState<PopularProduct[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadPopularProducts();
    }, []);

    const loadPopularProducts = async () => {
        try {
            setLoading(true);
            const data = await api.getPopularProducts();
            setProducts(data);
        } catch (err) {
            setError(t('popular.error'));
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const formatPrice = (price: number) => {
        const converted = convertPrice(price);
        const symbols = { RUB: '₽', USD: '$', CNY: '¥' };
        return `${Math.round(converted)} ${symbols[currency]}`;
    };

    const handleProductClick = (productId: string) => {
        navigate(`/product/${productId}`);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
                {t('popular.title')}
            </h1>

            <div className="mb-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder={t('popular.search.placeholder')}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>

            <div className="mb-4 text-sm text-gray-600">
                {t('popular.found_count')}: {filteredProducts.length}
            </div>

            {error ? (
                <div className="text-center text-red-600 p-4">
                    {error}
                </div>
            ) : (
                <div className="space-y-4">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => handleProductClick(product.id)}
                            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                        >
                            <div className="flex">
                                <div className="w-24 h-24 bg-gray-200 flex-shrink-0">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://i.pinimg.com/control1/1200x/b5/20/b1/b520b19b411365c095850336c7f256f2.jpg';
                                        }}
                                    />
                                </div>

                                <div className="flex-1 p-3">
                                    <h3 className="font-semibold text-gray-900 line-clamp-2">
                                        {product.name}
                                    </h3>

                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-lg font-bold text-blue-600">
                                            {formatPrice(product.price)}
                                        </span>

                                        <div className="flex items-center text-sm">
                                            <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                                            <span>{product.rating}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center text-xs text-gray-500 mt-1">
                                        <Eye className="w-3 h-3 mr-1" />
                                        <span>{product.scan_count} {t('popular.views')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PopularPage;