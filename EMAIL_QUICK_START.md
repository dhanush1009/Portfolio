# Email Implementation - Quick Start Guide

## ✅ Implementation Complete!

Your portfolio contact form now uses **Nodemailer** to send real emails through your backend server. Here's what was done:

### Files Created/Modified:
1. **[server/server.js](Portfolio/server/server.js)** - Backend Express server with Nodemailer
2. **[server/.env](Portfolio/server/.env)** - Environment variables (needs your Gmail App Password)
3. **[src/App.jsx](Portfolio/src/App.jsx)** - Updated to use backend API instead of mailto links

---

## 🚀 Quick Start (3 Steps)

### 1. Get Your Gmail App Password

You need a Gmail App Password (NOT your regular password):

1. Enable 2-Factor Authentication: https://myaccount.google.com/security
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Copy the 16-character password

### 2. Update the .env File

Edit `server/.env` and replace `your_gmail_app_password_here` with your actual App Password:

```env
EMAIL_USER=sdhanush1009@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop    ← Paste your 16-char password here
PORT=5000
```

### 3. Run Both Servers

**Option A - Run Both Together (Recommended):**
```bash
npm run dev:all
```

**Option B - Run Separately:**

Terminal 1:
```bash
npm run dev
```

Terminal 2:
```bash
npm run server
```

---

## ✅ What to Expect

### Backend Terminal (http://localhost:5000)
```
🚀 Server is running on http://localhost:5000
📧 Email configured for: sdhanush1009@gmail.com
✅ Email server is ready to send messages
```

If you see ❌ instead of ✅, check your .env file and App Password.

### Frontend Terminal (http://localhost:5173)
Your React app will be running normally.

### Testing the Form
1. Go to http://localhost:5173
2. Scroll to the Contact section
3. Fill out the form
4. Click "Send Message"
5. You should see: "✓ Message sent successfully!"
6. Check your Gmail inbox for the email

---

## 📧 Email Format

You'll receive emails like this:

**Subject:** Portfolio Contact from [Name]  
**From:** Portfolio Contact Form  
**Reply-To:** [Sender's Email] ← Click reply to respond directly

The email will have a nice HTML format with:
- Sender's name
- Sender's email
- Their message in a formatted box

---

## 🛠️ Troubleshooting

### Still seeing ❌ Email configuration error?
- Double-check you enabled 2-Factor Authentication
- Make sure you're using an App Password (not regular password)
- Remove any spaces from the password in .env
- Verify EMAIL_USER matches your Gmail address

### Form says "Failed to send message"?
- Make sure both servers are running
- Check if backend shows "✅ Email server is ready"
- Look in browser console (F12) for error details

### Email not arriving?
- Check your spam/junk folder
- Verify backend shows "✅ Email sent successfully" in terminal
- Make sure your Gmail App Password is correct

---

## 📝 How It Works

1. **User fills form** → Enters name, email, message
2. **Frontend sends data** → POST request to `http://localhost:5000/api/contact`
3. **Backend validates** → Checks all fields and email format
4. **Nodemailer sends email** → Uses Gmail SMTP to send
5. **You receive email** → Arrives in your Gmail inbox (sdhanush1009@gmail.com)

---

## 🎯 API Endpoints

### GET `/`
Health check endpoint
```json
{
  "status": "ok",
  "message": "Portfolio Contact Form API is running",
  "timestamp": "2025-12-16T..."
}
```

### POST `/api/contact`
Send contact form email

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello! I'd like to work with you."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Email sent successfully!",
  "messageId": "<...@gmail.com>"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Error description"
}
```

---

## 🔒 Security Features

✅ Input validation (checks all required fields)  
✅ Email format validation (regex check)  
✅ Environment variables (credentials not in code)  
✅ CORS enabled (frontend can access API)  
✅ Error handling (doesn't expose sensitive info)  
✅ App Password (not your main Gmail password)

---

## 📦 Dependencies Installed

Backend (`server/package.json`):
- **express** - Web framework
- **cors** - Cross-origin resource sharing
- **nodemailer** - Email sending
- **dotenv** - Environment variables

Frontend already has what it needs.

---

## 🚀 Deployment

When deploying to production:

1. **Update API URL** in `src/App.jsx`:
   ```javascript
   const response = await fetch('https://your-backend.com/api/contact', {
   ```

2. **Set Environment Variables** on your hosting platform:
   - EMAIL_USER=sdhanush1009@gmail.com
   - EMAIL_PASS=your_app_password
   - PORT=5000

3. **Update CORS** in `server.js` to allow only your domain:
   ```javascript
   app.use(cors({ origin: 'https://your-portfolio.com' }));
   ```

---

## 🎉 You're All Set!

Your contact form is now production-ready with:
- ✅ Real email delivery
- ✅ Professional HTML templates
- ✅ Form validation
- ✅ Loading states
- ✅ Error handling
- ✅ Secure credentials

Just add your Gmail App Password to `.env` and you're good to go!

---

**Need more details?** Check [EMAIL_WORKING_GUIDE.md](Portfolio/EMAIL_WORKING_GUIDE.md) for the complete documentation.
