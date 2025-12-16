# Gmail App Password Setup

To send emails from your portfolio contact form, you need to create a Gmail App Password.

## Steps to Create Gmail App Password:

1. **Go to your Google Account**: https://myaccount.google.com/
2. **Enable 2-Factor Authentication** (if not already enabled):
   - Go to Security → 2-Step Verification
   - Follow the prompts to enable it

3. **Create App Password**:
   - Go to Security → 2-Step Verification
   - Scroll down to "App passwords"
   - Click "App passwords"
   - Select "Mail" and "Other (Custom name)"
   - Enter name: "Portfolio Contact Form"
   - Click "Generate"
   - **Copy the 16-character password** (it looks like: xxxx xxxx xxxx xxxx)

4. **Create .env file** in the `server` folder:
   ```
   EMAIL_USER=sdhanush1009@gmail.com
   EMAIL_PASS=your_16_char_app_password_here
   PORT=5000
   ```
   Replace `your_16_char_app_password_here` with the actual app password

5. **Important**: Remove spaces from the app password when pasting

## Security Note:
- Never commit the `.env` file to Git
- The `.gitignore` file already excludes it
- App passwords are safer than using your actual Gmail password

## Alternative Email Providers:

If you don't want to use Gmail, you can use:
- **Outlook**: Change service to 'hotmail'
- **Yahoo**: Change service to 'yahoo'
- **Custom SMTP**: Configure with host, port, secure settings
