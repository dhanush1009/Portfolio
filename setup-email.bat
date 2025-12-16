@echo off
echo ============================================
echo   Portfolio Contact Form - Setup Wizard
echo ============================================
echo.
echo Before running your portfolio, you need to set up Gmail App Password:
echo.
echo Step 1: Open this link in your browser:
echo https://myaccount.google.com/apppasswords
echo.
echo Step 2: Create an App Password:
echo   - Select "Mail" and "Other (Custom name)"
echo   - Enter name: Portfolio Contact Form
echo   - Click Generate
echo   - Copy the 16-character password
echo.
echo Step 3: Edit server\.env file:
echo   - Replace "your_gmail_app_password_here" with the copied password
echo   - Remove all spaces from the password
echo.
echo Step 4: Run your portfolio:
echo   npm run dev:all
echo.
echo ============================================
echo Press any key to open Gmail App Password setup...
pause >nul
start https://myaccount.google.com/apppasswords
echo.
echo After creating the App Password:
echo 1. Copy it (remove spaces)
echo 2. Edit: server\.env
echo 3. Replace: your_gmail_app_password_here
echo 4. Run: npm run dev:all
echo.
pause
