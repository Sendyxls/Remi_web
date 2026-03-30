import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Camera, Barcode, AlertCircle, X } from 'lucide-react';
import BarcodeScanner from '../components/Scanner/BarcodeScanner';
import { api } from '../services/api';

const ScanPage: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [showScanner, setShowScanner] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleStartScan = () => {
        setShowScanner(true);
        setError(null);
        setShowErrorModal(false);
        setIsProcessing(false);
    };

    const handleScan = async (barcode: string) => {
        if (isProcessing) return;
        setIsProcessing(true);
        setIsScanning(true);
        setShowScanner(false);

        try {
            const product = await api.getProductByBarcode(barcode);
            navigate(`/product/${product.id}`);
        } catch (err) {
            setError(t('error.product.notFound'));
            setShowErrorModal(true);
            console.error(err);
        } finally {
            setIsScanning(false);
            setIsProcessing(false);
        }
    };

    const handleScanError = (errorMsg: string) => {
        if (isProcessing) return;
        setIsProcessing(true);

        setError(errorMsg);
        setShowErrorModal(true);
        setShowScanner(false);

        setTimeout(() => {
            setIsProcessing(false);
        }, 500);
    };

    const handleCloseScanner = () => {
        setShowScanner(false);
    };

    const closeErrorModal = () => {
        setShowErrorModal(false);
        setError(null);
    };

    const tryAgain = () => {
        closeErrorModal();
        handleStartScan();
    };

    const ErrorModal = () => {
        if (!showErrorModal) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl max-w-sm w-full p-6 animate-in fade-in zoom-in duration-200">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center text-red-600">
                            <AlertCircle className="w-6 h-6 mr-2" />
                            <h3 className="text-lg font-semibold">{t('error.product.notFound')}</h3>
                        </div>
                        <button
                            onClick={closeErrorModal}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <p className="text-gray-600 mb-6">
                        {error || t('error.product.notFound')}
                    </p>

                    <div className="space-y-3">
                        <button
                            onClick={tryAgain}
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            {t('error.tryAgain')}
                        </button>
                        <button
                            onClick={closeErrorModal}
                            className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                            {t('error.close')}
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    if (showScanner) {
        return <BarcodeScanner onClose={handleCloseScanner} onScan={handleScan} onError={handleScanError} />;
    }

    return (
        <>
            <div className="p-4">
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                    <div className="mb-6">
                        <Barcode className="w-16 h-16 mx-auto text-gray-400" />
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        {t('scan.barcode_instruction')}
                    </h2>

                    <button
                        onClick={handleStartScan}
                        disabled={isScanning}
                        className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-lg disabled:opacity-50"
                    >
                        <Camera className="w-6 h-6" />
                        {isScanning ? t('message.searching') : t('scan.button')}
                    </button>

                    <div className="mt-4 text-xs text-gray-400">
                        {t('scan.supported_formats')}
                    </div>
                </div>
            </div>

            <ErrorModal />
        </>
    );
};

export default ScanPage;