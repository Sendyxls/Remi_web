import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProductCard from '../components/Product/ProductCard';
import { api, ApiProduct } from '../services/api';

const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<ApiProduct | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            loadProduct(id);
        }
    }, [id]);

    const loadProduct = async (productId: string) => {
        try {
            setLoading(true);
            setError(null);
            const data = await api.getProductById(productId);
            setProduct(data);
        } catch (err) {
            setError('Товар не найден');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="p-4">
                <button
                    onClick={() => navigate('/')}
                    className="mb-4 text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                    <ArrowLeft className="w-4 h-4" /> Назад
                </button>
                <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
                    {error || 'Товар не найден'}
                </div>
            </div>
        );
    }

    return (
        <div className="p-4">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
                <ArrowLeft className="w-4 h-4" /> Назад
            </button>
            <ProductCard product={product} />
        </div>
    );
};

export default ProductPage;