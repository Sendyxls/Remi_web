import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CurrencyProvider } from './contexts/CurrencyContext';
import Navigation from './components/Layout/Navigation';
import ScanPage from './pages/ScanPage';
import PopularPage from './pages/PopularPage';
import StoresPage from './pages/StoresPage';
import ProductPage from './pages/ProductPage';
import SettingsPanel from './components/Settings/SettingsPanel';
import './i18n/config';

function App() {
    return (
        <CurrencyProvider>
            <Router>
                <div className="min-h-screen bg-gray-50 pb-16">
                    <Routes>
                        <Route path="/" element={<ScanPage />} />
                        <Route path="/popular" element={<PopularPage />} />
                        <Route path="/stores" element={<StoresPage />} />
                        <Route path="/settings" element={<SettingsPanel />} />
                        <Route path="/product/:id" element={<ProductPage />} />
                    </Routes>
                    <Navigation />
                </div>
            </Router>
        </CurrencyProvider>
    );
}

export default App;