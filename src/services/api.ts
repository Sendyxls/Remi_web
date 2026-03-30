import { mockProducts, Product as MockProduct } from '../data/mockProducts';

const API_URL = 'http://localhost:5000/api';

// Проверяем, доступен ли бэкенд
let isBackendAvailable = true;

const checkBackend = async () => {
    try {
        const response = await fetch(`${API_URL}/health`);
        return response.ok;
    } catch {
        return false;
    }
};

// Функция для получения переведенного текста из объекта Record
const getTranslatedText = (obj: Record<string, string>, lang: string): string => {
    return obj[lang] || obj.ru || Object.values(obj)[0] || '';
};

// Конвертируем MockProduct в ApiProduct
const convertToApiProduct = (mockProduct: MockProduct, lang: string): ApiProduct => {
    return {
        id: mockProduct.id,
        barcode: mockProduct.barcode,
        name: getTranslatedText(mockProduct.name, lang),
        price: mockProduct.price,
        rating: mockProduct.rating,
        description: getTranslatedText(mockProduct.description, lang),
        composition: getTranslatedText(mockProduct.composition, lang),
        image: mockProduct.image,
        alternatives: mockProduct.alternatives.map(alt => ({
            storeName: getTranslatedText(alt.storeName, lang),
            address: alt.address,
            price: alt.price,
            distance: alt.distance
        })),
        reviews: mockProduct.reviews.map(review => ({
            author: review.author,
            date: review.date,
            text: getTranslatedText(review.text, lang),
            rating: review.rating
        }))
    };
};

// Инициализация: проверяем доступность бэкенда
checkBackend().then(available => {
    isBackendAvailable = available;
    console.log('Backend available:', isBackendAvailable);
});

export interface ApiProduct {
    id: string;
    barcode: string;
    name: string;
    price: number;
    rating: number;
    description: string;
    composition: string;
    image: string;
    alternatives: ApiAlternative[];
    reviews: ApiReview[];
}

export interface ApiAlternative {
    storeName: string;
    address: string;
    price: number;
    distance: string;
}

export interface ApiReview {
    author: string;
    date: string;
    text: string;
    rating: number;
}

export interface PopularProduct {
    id: string;
    name: string;
    price: number;
    rating: number;
    image: string;
    scan_count: number;
}

export interface Store {
    id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    distance: string;
}

const getCurrentLanguage = () => {
    return localStorage.getItem('i18nextLng') || 'ru';
};

export const api = {
    getProductByBarcode: async (barcode: string): Promise<ApiProduct> => {
        const lang = getCurrentLanguage();

        // Если бэкенд доступен, используем его
        if (isBackendAvailable) {
            try {
                const response = await fetch(`${API_URL}/products/barcode/${barcode}?lang=${lang}`);
                if (response.ok) {
                    return response.json();
                }
                // Если бэкенд вернул ошибку, переключаемся на mock
                console.log('Backend error, falling back to mock data');
                isBackendAvailable = false;
            } catch {
                console.log('Backend unavailable, falling back to mock data');
                isBackendAvailable = false;
            }
        }

        // Используем mock данные
        const mockProduct = mockProducts.find(p => p.barcode === barcode);
        if (!mockProduct) {
            throw new Error('Product not found');
        }
        return convertToApiProduct(mockProduct, lang);
    },

    getProductById: async (id: string): Promise<ApiProduct> => {
        const lang = getCurrentLanguage();

        if (isBackendAvailable) {
            try {
                const response = await fetch(`${API_URL}/products/${id}?lang=${lang}`);
                if (response.ok) {
                    return response.json();
                }
                isBackendAvailable = false;
            } catch {
                isBackendAvailable = false;
            }
        }

        const mockProduct = mockProducts.find(p => p.id === id);
        if (!mockProduct) {
            throw new Error('Product not found');
        }
        return convertToApiProduct(mockProduct, lang);
    },

    getPopularProducts: async (): Promise<PopularProduct[]> => {
        const lang = getCurrentLanguage();

        if (isBackendAvailable) {
            try {
                const response = await fetch(`${API_URL}/products/popular?lang=${lang}`);
                if (response.ok) {
                    return response.json();
                }
                isBackendAvailable = false;
            } catch {
                isBackendAvailable = false;
            }
        }

        // Используем mock данные
        return mockProducts.map(product => ({
            id: product.id,
            name: getTranslatedText(product.name, lang),
            price: product.price,
            rating: product.rating,
            image: product.image,
            scan_count: product.scan_count
        })).sort((a, b) => b.scan_count - a.scan_count);
    },

    getNearbyStores: async (lat: number, lng: number): Promise<Store[]> => {
        if (isBackendAvailable) {
            try {
                const response = await fetch(`${API_URL}/stores/nearby?lat=${lat}&lng=${lng}`);
                if (response.ok) {
                    return response.json();
                }
            } catch {
                // fallback to mock
            }
        }

        // Заглушка для магазинов
        return [
            { id: '1', name: 'Чайный домик', address: 'ул. Советская, 5', latitude: 55.7545, longitude: 37.6150, distance: '200 м' },
            { id: '2', name: 'Ашан', address: 'ТЦ Мега', latitude: 55.7600, longitude: 37.6300, distance: '1.2 км' }
        ];
    }
};