const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Прокси для API
app.use('/api', createProxyMiddleware({
    target: 'http://localhost:5000',
    changeOrigin: true,
}));

// Статические файлы React
app.use(express.static(path.join(__dirname, 'build')));

// Все остальные маршруты - отдаем index.html
// Исправленный синтаксис для Express 5
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Проверяем наличие сертификатов
const keyPath = path.join(__dirname, 'localhost-key.pem');
const certPath = path.join(__dirname, 'localhost.pem');

if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
    console.error('\n❌ SSL certificates not found!');
    console.log('Please generate certificates first:\n');
    console.log('1. Install OpenSSL from: https://slproweb.com/products/Win32OpenSSL.html');
    console.log('2. Run these commands:');
    console.log('   openssl genrsa -out localhost-key.pem 2048');
    console.log('   openssl req -new -key localhost-key.pem -out localhost.csr -subj "/CN=localhost"');
    console.log('   openssl x509 -req -in localhost.csr -signkey localhost-key.pem -out localhost.pem -days 365');
    console.log('   del localhost.csr\n');
    process.exit(1);
}

// Создаем HTTPS сервер
const options = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
};

https.createServer(options, app).listen(3000, '0.0.0.0', () => {
    console.log('\n=== ShopSmart HTTPS Server ===');
    console.log('✅ Server is running on https://localhost:3000');
    console.log('📱 For mobile access:');

    // Получаем IP адрес
    const os = require('os');
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                console.log(`   https://${iface.address}:3000`);
            }
        }
    }
    console.log('================================\n');
    console.log('⚠️  Note: Browser will show security warning');
    console.log('   Click "Advanced" → "Proceed to site"\n');
});