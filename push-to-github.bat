@echo off
echo ========================================
echo TripEase - Push to GitHub Script
echo ========================================
echo.

echo Checking Git status...
git status

echo.
echo Attempting to push to GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ✅ SUCCESS! Repository pushed to GitHub successfully!
    echo.
    echo Next steps:
    echo 1. Go to https://github.com/overhelmingcoder/TripEase
    echo 2. Set repository to Public
    echo 3. Add topics: nextjs, weather-app, ai-travel, vercel, tripease
    echo 4. Set up branch protection rules
    echo 5. Configure GitHub Actions secrets
) else (
    echo.
    echo ❌ Push failed. This might be due to:
    echo - Network connectivity issues
    echo - Authentication problems
    echo - Repository doesn't exist yet
    echo.
    echo Alternative solutions:
    echo 1. Create repository manually on GitHub first
    echo 2. Use GitHub Desktop application
    echo 3. Use VS Code Git integration
    echo 4. Check your internet connection
)

echo.
pause
