import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Scan, Star, MapPin, Settings } from 'lucide-react';

const Navigation: React.FC = () => {
    const { t } = useTranslation();

    const navItems = [
        { path: '/', icon: Scan, label: 'nav.scan' },
        { path: '/popular', icon: Star, label: 'nav.popular' },
        { path: '/stores', icon: MapPin, label: 'nav.stores' },
        { path: '/settings', icon: Settings, label: 'nav.settings' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
            <div className="flex justify-around items-center h-16">
                {navItems.map(({ path, icon: Icon, label }) => (
                    <NavLink
                        key={path}
                        to={path}
                        className={({ isActive }) =>
                            `flex flex-col items-center justify-center flex-1 h-full ${isActive ? 'text-blue-600' : 'text-gray-600'
                            }`
                        }
                    >
                        <Icon className="w-6 h-6" />
                        <span className="text-xs mt-1">{t(label)}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Navigation;