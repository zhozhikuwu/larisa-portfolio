@echo off
cd /d "%~dp0"

start cmd /k "py -m http.server 8000 --bind 0.0.0.0"

timeout /t 2 > nul

start cmd /k "cloudflared.exe tunnel --url http://localhost:8000"