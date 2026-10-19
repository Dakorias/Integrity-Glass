@echo off
setlocal
cd /d "%~dp0"

set "APP_URL=http://127.0.0.1:5173/"

call :is_site_running
if not errorlevel 1 goto open_browser

where npm.cmd >nul 2>nul
if errorlevel 1 (
    echo npm was not found. Install Node.js, then run this file again.
    pause
    exit /b 1
)

start "Integrity Glass Dev Server" /D "%~dp0" cmd.exe /k "npm.cmd run dev -- --host 127.0.0.1 --port 5173 --strictPort"

for /l %%i in (1,1,45) do (
    call :is_site_running
    if not errorlevel 1 goto open_browser
    timeout /t 1 /nobreak >nul
)

echo The Integrity Glass server did not become ready at %APP_URL%.
echo Check the server window for errors. Port 5173 must be available.
pause
exit /b 1

:open_browser
start "" "%APP_URL%"
exit /b 0

:is_site_running
powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "try { $r = Invoke-WebRequest -UseBasicParsing -Uri '%APP_URL%' -TimeoutSec 2; if ($r.StatusCode -eq 200 -and $r.Content -match '<title>Integrity Glass') { exit 0 } } catch {}; exit 1" >nul 2>&1
exit /b %errorlevel%