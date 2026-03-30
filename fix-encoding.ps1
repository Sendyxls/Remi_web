# fix-encoding.ps1
$files = Get-ChildItem -Path src -Include *.ts,*.tsx,*.js,*.jsx,*.json -Recurse

foreach ($file in $files) {
    try {
        # Читаем файл как UTF-8
        $content = Get-Content $file.FullName -Raw -Encoding UTF8
        # Записываем обратно как UTF-8 без BOM
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.UTF8Encoding]::new($false))
        Write-Host "Fixed: $($file.FullName)" -ForegroundColor Green
    } catch {
        Write-Host "Error with $($file.FullName): $_" -ForegroundColor Red
    }
}

Write-Host "Done!" -ForegroundColor Yellow