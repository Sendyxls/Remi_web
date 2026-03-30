import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import os from 'os';
import productRoutes from './routes/productRoutes';
import storeRoutes from './routes/storeRoutes';

dotenv.config();

const app: Express = express();
const port: number = parseInt(process.env.PORT || '5000', 10); // Явно преобразуем в число

// Функция для получения локального IP
function getLocalIP(): string {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name] || []) {
            // Проверяем, что это IPv4 и не внутренний интерфейс
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return 'localhost';
}

const localIP = getLocalIP();

// Middleware
app.use(cors({
    origin: '*', // Разрешаем запросы с любых устройств (только для разработки!)
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Логирование запросов (для отладки)
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Routes
app.use('/api/products', productRoutes);
app.use('/api/stores', storeRoutes);

// Health check
app.get('/api/health', (req: Request, res: Response) => {
    res.json({
        status: 'OK',
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use((req: Request, res: Response) => {
    res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((err: any, req: Request, res: Response, next: any) => {
    console.error('Error:', err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Запускаем сервер
app.listen(port, '0.0.0.0', () => {
    console.log('\n=== ShopSmart Backend Server ===');
    console.log(`⚡️ Server is running on port ${port}`);
    console.log(`📦 Local: http://localhost:${port}`);
    console.log(`📱 Network: http://${localIP}:${port}`);
    console.log('\n📌 Available endpoints:');
    console.log(`   Health: http://localhost:${port}/api/health`);
    console.log(`   Products by barcode: http://localhost:${port}/api/products/barcode/4601234567890`);
    console.log(`   Popular products: http://localhost:${port}/api/products/popular`);
    console.log(`   Nearby stores: http://localhost:${port}/api/stores/nearby?lat=55.7558&lng=37.6173`);
    console.log('\n📱 For mobile access:');
    console.log(`   http://${localIP}:${port}/api/health`);
    console.log('================================\n');
});