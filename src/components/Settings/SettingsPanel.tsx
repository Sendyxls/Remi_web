import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCurrency, Currency } from '../../contexts/CurrencyContext';
import { Save, CheckCircle } from 'lucide-react';

const SettingsPanel: React.FC = () => {
    const { t, i18n } = useTranslation();
    const { currency, setCurrency, manualRate, setManualRate } = useCurrency();

    const [selectedLang, setSelectedLang] = useState(i18n.language);
    const [selectedCurr, setSelectedCurr] = useState<Currency>(currency);
    const [rateInput, setRateInput] = useState(manualRate?.toString() || '');
    const [showSaved, setShowSaved] = useState(false);

    const handleSave = () => {
        i18n.changeLanguage(selectedLang);
        setCurrency(selectedCurr);
        const rate = rateInput ? parseFloat(rateInput) : null;
        setManualRate(rate);

        setShowSaved(true);
        setTimeout(() => setShowSaved(false), 2000);
    };

    const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as Currency;
        setSelectedCurr(value);
    };

    // Получаем название валюты для отображения
    const getCurrencyName = (curr: Currency) => {
        switch (curr) {
            case 'RUB': return t('currency.rub');
            case 'USD': return t('currency.usd');
            case 'CNY': return t('currency.cny');
            default: return curr;
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('settings.title')}</h2>

            {/* Выбор языка */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('settings.language')}
                </label>
                <select
                    value={selectedLang}
                    onChange={(e) => setSelectedLang(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                    <option value="ru">{t('language.ru')}</option>
                    <option value="en">{t('language.en')}</option>
                    <option value="zh">{t('language.zh')}</option>
                </select>
            </div>

            {/* Выбор валюты */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('settings.currency')}
                </label>
                <select
                    value={selectedCurr}
                    onChange={handleCurrencyChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                    <option value="RUB">{t('currency.rub')}</option>
                    <option value="USD">{t('currency.usd')}</option>
                    <option value="CNY">{t('currency.cny')}</option>
                </select>
            </div>

            {/* Ручной курс */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('settings.manualRate')}
                </label>
                <input
                    type="number"
                    step="0.01"
                    value={rateInput}
                    onChange={(e) => setRateInput(e.target.value)}
                    placeholder={t('settings.manualRate.placeholder')}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {selectedCurr !== 'RUB' && rateInput && (
                    <p className="text-xs text-gray-500 mt-1">
                        1 {getCurrencyName(selectedCurr)} = {rateInput} RUB
                    </p>
                )}
            </div>

            {/* Кнопка сохранения */}
            <button
                onClick={handleSave}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
                <Save className="w-5 h-5" />
                {t('settings.save')}
            </button>

            {/* Уведомление о сохранении */}
            {showSaved && (
                <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">{t('settings.saved')}</span>
                </div>
            )}
        </div>
    );
};

export default SettingsPanel;