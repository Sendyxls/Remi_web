@echo off
echo Generating SSL certificates...

:: Создаем приватный ключ
openssl genrsa -out localhost-key.pem 2048

:: Создаем запрос на сертификат
openssl req -new -key localhost-key.pem -out localhost.csr -subj "/CN=localhost"

:: Создаем самоподписанный сертификат
openssl x509 -req -in localhost.csr -signkey localhost-key.pem -out localhost.pem -days 365

del localhost.csr

echo Certificates created:
echo - localhost-key.pem (private key)
echo - localhost.pem (certificate)
echo.
echo Now run: node server.js
pause