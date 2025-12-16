# Contact Form Email Setup - Complete Guide

## Overview
Your portfolio contact form now uses **Nodemailer** to send emails directly from your backend server to your Gmail inbox. All sender details (name, email, and message) are properly delivered.

---

## 🎯 What Was Implemented

### Backend (server.js)
- ✅ Express server with CORS enabled
- ✅ Nodemailer configured for Gmail
- ✅ `/api/contact` POST endpoint
- ✅ Email validation and error handling
- ✅ Beautiful HTML email templates
- ✅ Reply-To field set to sender's email for easy responses

### Frontend (App.jsx)
- ✅ API integration with backend
- ✅ Loading state while sending
- ✅ Success/error message display
- ✅ Form validation

---

## 📋 Setup Instructions

### Step 1: Install Server Dependencies

Navigate to the server folder and install packages:

```bash
cd server
npm install
```

### Step 2: Configure Gmail App Password

1. **Enable 2-Step Verification** on your Google Account:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Generate an App Password**:
   - Visit [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" as the app
   - Select "Windows Computer" or "Other" as the device
   - Click "Generate"
   - Copy the 16-character password (it will look like: `xxxx xxxx xxxx xxxx`)

3. **Update the .env file** in the server folder:
   ```env
   EMAIL_USER=sdhanush1009@gmail.com
   EMAIL_PASS=your_16_character_app_password
   PORT=5000
   ```
   ⚠️ **Important**: Paste the app password without spaces

### Step 3: Start Both Servers

#### Option A: Run Both Simultaneously (Recommended)
From the root portfolio folder:
```bash
npm run dev:all
```

#### Option B: Run Separately
Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
npm run server
```

---

## 🧪 Testing

1. **Start both servers** using one of the methods above

2. **Check server status**:
   - Frontend: http://localhost:5173
   - Backend health check: http://localhost:5000
   - You should see: `✅ Email server is ready to send messages` in the backend terminal

3. **Test the contact form**:
   - Fill out the form on your portfolio
   - Click "Send Message"
   - You should see "Sending..." followed by "✓ Message sent successfully!"

4. **Check your Gmail inbox** (sdhanush1009@gmail.com)
   - You should receive a formatted email with:
     - Sender's name
     - Sender's email (as reply-to)
     - Their message

---

## 📧 Email Features

### What You'll Receive
- **From**: Portfolio Contact Form
- **Subject**: Portfolio Contact from [Sender Name]
- **Reply-To**: [Sender's Email] - Click reply to respond directly
- **Body**: Formatted HTML with sender details and message

### Email Template
Emails arrive with a professional format:
- Green header: "New Contact Form Submission"
- Sender's name and email
- Message in a highlighted box
- Clean, responsive design

---

## 🛠️ Troubleshooting

### "Email transporter configuration error"
- ✅ Check that 2-Step Verification is enabled
- ✅ Verify you're using an App Password (not your regular Gmail password)
- ✅ Ensure the password in .env has no spaces
- ✅ Make sure EMAIL_USER matches your Gmail address

### "Failed to send email"
- ✅ Ensure both frontend and backend servers are running
- ✅ Check browser console for CORS errors
- ✅ Verify the backend is accessible at http://localhost:5000

### CORS Error
- ✅ Backend already has CORS enabled for all origins
- ✅ If you deploy, update CORS settings in server.js to allow your domain

### Port Already in Use
If port 5000 is taken:
1. Change PORT in `server/.env` to another port (e.g., 5001)
2. Update the API URL in `src/App.jsx` to match:
   ```javascript
   const response = await fetch('http://localhost:5001/api/contact', {
   ```

---

## 🚀 Deployment Notes

### Environment Variables
When deploying, set these environment variables:
- `EMAIL_USER` - Your Gmail address
- `EMAIL_PASS` - Your Gmail App Password
- `PORT` - Server port (default: 5000)

### Frontend API URL
For production, update the API endpoint in `App.jsx`:
```javascript
const response = await fetch('https://your-backend-domain.com/api/contact', {
```

### CORS Configuration
Update `server.js` to allow only your frontend domain:
```javascript
app.use(cors({
  origin: 'https://your-frontend-domain.com'
}));
```

---

## 📝 Security Notes

- ✅ Never commit your `.env` file to Git (already in `.gitignore`)
- ✅ Use App Passwords, not your main Gmail password
- ✅ The server validates all inputs before sending
- ✅ Email addresses are validated with regex
- ✅ Error messages don't expose sensitive information

---

## 🎨 Status Messages

The form displays three states:
- **Sending...** - Blue text while processing
- **✓ Message sent successfully!** - Green text on success
- **✗ Failed to send message. Please try again.** - Red text on error

All messages auto-dismiss after 5 seconds.

---

## 📞 Support

If emails aren't arriving:
1. Check spam/junk folder
2. Verify server logs show "✅ Email sent successfully"
3. Test with the backend health check endpoint
4. Review the troubleshooting section above

---

## ✨ Features Summary

✅ Real email delivery (no mailto links)
✅ Professional HTML email templates
✅ Sender information preserved
✅ Easy reply functionality
✅ Form validation
✅ Loading states
✅ Error handling
✅ Secure credential storage

**Your contact form is now production-ready!** 🎉
