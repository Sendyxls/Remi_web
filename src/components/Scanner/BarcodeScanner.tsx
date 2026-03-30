import React, { useState, useEffect, useRef } from 'react';
import { X, CameraOff } from 'lucide-react';
import { BrowserMultiFormatReader } from '@zxing/browser';
import { useTranslation } from 'react-i18next';

interface BarcodeScannerProps {
    onClose: () => void;
    onScan: (barcode: string) => void;
    onError?: (error: string) => void;
}

const BarcodeScanner: React.FC<BarcodeScannerProps> = ({ onClose, onScan, onError }) => {
    const { t } = useTranslation();
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [isScanningActive, setIsScanningActive] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const codeReaderRef = useRef<BrowserMultiFormatReader | null>(null);
    const hasScannedRef = useRef(false); // Предотвращает многократное сканирование

    // Остановка сканирования
    const stopScanner = () => {
        if (codeReaderRef.current) {
            try {
                codeReaderRef.current = null;
            } catch (err) {
                console.error('Error stopping scanner:', err);
            }
        }
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
    };

    // Инициализация сканера
    useEffect(() => {
        hasScannedRef.current = false;

        const initScanner = async () => {
            try {
                if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                    setErrorMessage(t('error.camera.notSupported'));
                    setHasPermission(false);
                    return;
                }


                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: { exact: 'environment' } }
                }).catch(async () => {
                    return await navigator.mediaDevices.getUserMedia({ video: true });
                });

                streamRef.current = stream;

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.setAttribute('playsinline', 'true');
                    await videoRef.current.play();
                }

                setHasPermission(true);

                const codeReader = new BrowserMultiFormatReader();
                codeReaderRef.current = codeReader;

                if (codeReader && videoRef.current) {
                    await codeReader.decodeFromVideoElement(
                        videoRef.current,
                        (result, error) => {
                            // Если уже отсканировали - игнорируем
                            if (hasScannedRef.current) return;

                            if (result && isScanningActive) {
                                hasScannedRef.current = true;
                                const barcode = result.getText();
                                console.log('Scanned barcode:', barcode);
                                setIsScanningActive(false);

                                // Останавливаем сканирование
                                stopScanner();

                                // Вызываем onScan
                                onScan(barcode);
                            }
                        }
                    );
                }

            } catch (err: any) {
                console.error('Camera error:', err);
                setHasPermission(false);

                if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
                    setErrorMessage(t('error.camera.permission'));
                } else if (err.name === 'NotFoundError') {
                    setErrorMessage(t('error.camera.notFound'));
                } else {
                    setErrorMessage(t('error.camera.error'));
                }
            }
        };

        initScanner();

        return () => {
            stopScanner();
        };
    }, [onScan, isScanningActive]);

    

    if (hasPermission === null) {
        return (
            <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
                <div className="text-white text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p>{t('message.loading')}</p>
                </div>
            </div>
        );

    }

    if (!hasPermission) {
        return (
            <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
                <div className="bg-white p-6 rounded-lg max-w-md w-full">
                    <CameraOff className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-center mb-2">
                        {t('error.camera.permission')}
                    </h3>
                    <p className="text-gray-600 text-center mb-4">
                        {errorMessage || t('error.camera.error')}
                    </p>
                    <div className="bg-yellow-50 p-3 rounded mb-4">
                        <p className="text-sm font-semibold text-yellow-800 mb-1">💡 {t('scan.tip')}:</p>
                        <ul className="text-xs text-yellow-700 list-disc list-inside">
                            <li>{t('scan.camera.allow')}</li>
                            <li>{t('scan.supported_formats')}</li>
                        </ul>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                        {t('button.close')}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black z-50">
            <button
                onClick={() => {
                    stopScanner();
                    onClose();
                }}
                className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70"
            >
                <X className="w-6 h-6" />
            </button>

            <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center pointer-events-none">
                <div className="relative">
                    <div className="w-72 h-40 border-2 border-blue-500 rounded-lg bg-transparent"></div>
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-blue-500"></div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-blue-500"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-blue-500"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-blue-500"></div>
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500 animate-scan-line"></div>
                </div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-white text-lg font-semibold mb-2">
                    {t('scan.title')}
                </p>
                <p className="text-gray-300 text-sm">
                    {t('scan.supported_formats')}
                </p>
            </div>
        </div>
    );
};

export default BarcodeScanner;