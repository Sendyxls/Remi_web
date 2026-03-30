const { exec } = require('child_process');
const fs = require('fs');

console.log('=================================');
console.log('Generating SSL certificates...');
console.log('=================================\n');

// Проверяем наличие openssl
exec('openssl version', (error, stdout) => {
    if (error) {
        console.error('❌ OpenSSL not found!');
        console.log('\n📌 Please install OpenSSL:');
        console.log('   1. Download from: https://slproweb.com/products/Win32OpenSSL.html');
        console.log('   2. Choose: Win64 OpenSSL v3.3.x');
        console.log('   3. Install to: C:\\Program Files\\OpenSSL-Win64');
        console.log('   4. During installation, choose:');
        console.log('      - Copy OpenSSL DLLs to: The OpenSSL binaries (/bin) directory');
        console.log('   5. Add to PATH: C:\\Program Files\\OpenSSL-Win64\\bin');
        console.log('\n📌 After installation, restart terminal and run:');
        console.log('   node generate-cert.js\n');
        console.log('📌 Alternative: Use ngrok');
        console.log('   npm install -g ngrok');
        console.log('   ngrok http 3000\n');
        process.exit(1);
    }

    console.log('✅ OpenSSL found:', stdout.trim());
    console.log('\nGenerating certificates...\n');

    // Генерируем приватный ключ
    exec('openssl genrsa -out localhost-key.pem 2048', (err) => {
        if (err) {
            console.error('❌ Error generating key:', err.message);
            process.exit(1);
        }
        console.log('✅ Private key created: localhost-key.pem');

        // Генерируем сертификат
        exec('openssl req -new -key localhost-key.pem -out localhost.csr -subj "/CN=localhost"', (err) => {
            if (err) {
                console.error('❌ Error generating CSR:', err.message);
                process.exit(1);
            }
            console.log('✅ CSR created: localhost.csr');

            // Подписываем сертификат
            exec('openssl x509 -req -in localhost.csr -signkey localhost-key.pem -out localhost.pem -days 365', (err) => {
                if (err) {
                    console.error('❌ Error generating certificate:', err.message);
                    process.exit(1);
                }
                console.log('✅ Certificate created: localhost.pem');

                // Удаляем временный файл
                exec('del localhost.csr 2>nul', () => { });

                console.log('\n=================================');
                console.log('✅ SSL certificates ready!');
                console.log('=================================');
                console.log('📁 Files created:');
                console.log('   - localhost-key.pem (private key)');
                console.log('   - localhost.pem (certificate)');
                console.log('\n🚀 Now run: node server.js');
                console.log('📱 Then open on phone: https://YOUR_IP:3000');
                console.log('=================================\n');
            });
        });
    });
});