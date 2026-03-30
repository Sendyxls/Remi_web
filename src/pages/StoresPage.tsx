import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Construction } from 'lucide-react';

const StoresPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
                {t('nav.stores')}
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="mb-6">
                    <Construction className="w-20 h-20 mx-auto text-yellow-500" />
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('stores.in_development')}
                </h2>

                <p className="text-gray-500">
                    {t('stores.coming_soon')}
                </p>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">ул. Примерная, д. 1</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                        Функция поиска магазинов будет доступна в следующем обновлении
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StoresPage;