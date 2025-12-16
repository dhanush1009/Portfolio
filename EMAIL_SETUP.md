# Email Setup Instructions

## Current Status
The contact form is configured with a **mailto fallback** - it will open your default email client when submitted. This works immediately without any setup.

## To Enable Direct Email Sending (Optional)

If you want emails to be sent directly from the website without opening an email client, follow these steps:

### Option 1: EmailJS (Recommended - Takes 3 minutes)

1. **Create Account**
   - Go to https://www.emailjs.com/
   - Click "Sign Up" (it's free)
   - Verify your email

2. **Add Email Service**
   - In the EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose "Gmail" (or any email provider)
   - Click "Connect Account" and authorize with your Gmail
   - Copy your **Service ID** (looks like: `service_xxxxxxx`)

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template:
     ```
     Subject: New Contact from {{from_name}}
     
     You have received a new message from your portfolio:
     
     Name: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     ```
   - Copy your **Template ID** (looks like: `template_xxxxxxx`)

4. **Get Public Key**
   - Go to "Account" → "General"
   - Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxxxxx`)

5. **Update .env File**
   - Open `.env` file in your project root
   - Replace the placeholders:
     ```
     VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
     VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
     VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```

6. **Restart Dev Server**
   ```
   npm run dev
   ```

### Option 2: Keep mailto (Current Setup)
The form currently uses mailto as a fallback. When users submit the form:
- It opens their default email client (Gmail, Outlook, etc.)
- The form data is pre-filled
- They click "Send" in their email client
- Email goes to: sdhanush1009@gmail.com

**Pros**: Works immediately, no setup required  
**Cons**: Less seamless user experience

## Testing
After setup, test the form by:
1. Filling in Name, Email, Message
2. Click "Send Message"
3. Check your email at sdhanush1009@gmail.com
4. You should receive an email with the form data

## Troubleshooting
- If emails don't arrive, check EmailJS dashboard logs
- Verify all IDs are correct in .env file
- Make sure you restarted the dev server after changing .env
- Check browser console (F12) for error messages
