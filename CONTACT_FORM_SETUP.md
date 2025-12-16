# 🚀 Portfolio Contact Form - Complete Setup Guide

## ✅ What I've Done

I've created a **complete backend solution** that eliminates the FormSubmit activation error. Your contact form now uses a Node.js server that sends emails directly via Gmail.

## 📋 Quick Setup (3 Steps)

### Step 1: Install Server Dependencies
```bash
cd server
npm install
cd ..
```

### Step 2: Install Frontend Dependency
```bash
npm install
```

### Step 3: Set Up Gmail App Password

1. **Go to**: https://myaccount.google.com/security
2. **Enable 2-Factor Authentication** (if not enabled)
3. **Create App Password**:
   - Go to Security → 2-Step Verification → App passwords
   - Select "Mail" → "Other (Custom name)" → Enter "Portfolio"
   - Click "Generate"
   - **Copy the 16-character password**

4. **Edit** `server/.env` file:
   ```env
   EMAIL_USER=sdhanush1009@gmail.com
   EMAIL_PASS=your_16_char_app_password_here
   PORT=5000
   ```

   Replace `your_16_char_app_password_here` with the app password (remove spaces)

## 🎯 Running Your Portfolio

**Option 1: Run Everything Together (Recommended)**
```bash
npm run dev:all
```
This starts both frontend (port 3000) and backend (port 5000)

**Option 2: Run Separately**

Terminal 1:
```bash
npm run dev
```

Terminal 2:
```bash
npm run server
```

## ✨ How It Works Now

1. **User fills the contact form** → Clicks "Send Message"
2. **Frontend sends data** → `http://localhost:5000/api/send-email`
3. **Backend (Node.js + Nodemailer)** → Sends email via Gmail
4. **Email arrives** → Your inbox at sdhanush1009@gmail.com
5. **Success message** → User sees "Message sent successfully!"

## 🔥 Features

✅ **No Activation Required** - Works immediately after setup  
✅ **Professional Email Template** - Beautiful HTML formatted emails  
✅ **Reply-To Configured** - Click reply to respond to sender directly  
✅ **Validation** - Email format and required fields checked  
✅ **Error Handling** - Clear error messages if something fails  
✅ **Fallback Support** - Falls back to EmailJS if backend is down  

## 📧 Email Format

You'll receive beautifully formatted emails with:
- Sender's name and email
- Message content
- Timestamp
- Easy "Reply" button (pre-filled with sender's email)

## 🐛 Troubleshooting

### Error: "Email delivery error: Unable to send email"
**Solution**: Make sure the backend server is running:
```bash
npm run server
```

### Error: "Invalid login: 535-5.7.8 Username and Password not accepted"
**Solution**: 
1. Check that 2FA is enabled on your Gmail
2. Create a new App Password
3. Update `server/.env` with the correct password
4. Remove all spaces from the password

### Backend not starting?
**Solution**:
```bash
cd server
npm install
npm start
```

### Port 5000 already in use?
**Solution**: Change PORT in `server/.env` to another port (e.g., 5001)
Then update the URL in `App.jsx` line 179:
```javascript
const response = await fetch("http://localhost:5001/api/send-email", {
```

## 📱 Testing

1. Start both servers: `npm run dev:all`
2. Open browser: `http://localhost:5173`
3. Fill out the contact form
4. Click "Send Message"
5. Check your email: sdhanush1009@gmail.com

You should see:
- ✅ "Sending..." message
- ✅ "Message sent successfully!" after ~2 seconds
- ✅ Email in your inbox within seconds

## 🌐 Production Deployment

When deploying to production (Vercel, Netlify, Render):

1. **Deploy Backend**:
   - Use Render, Railway, or Heroku for the Node.js server
   - Add environment variables in the hosting platform
   - Get your backend URL (e.g., `https://your-app.onrender.com`)

2. **Update Frontend**:
   Change the fetch URL in `App.jsx`:
   ```javascript
   const response = await fetch("https://your-app.onrender.com/api/send-email", {
   ```

3. **Deploy Frontend**:
   - Deploy to Vercel/Netlify as usual
   - No additional environment variables needed

## 📂 What Files Were Created/Modified

**Created:**
- `server/server.js` - Express server with Nodemailer
- `server/package.json` - Server dependencies
- `server/.env` - Email credentials (you need to add app password)
- `server/.env.example` - Template for .env
- `server/SETUP_GMAIL.md` - Gmail setup instructions

**Modified:**
- `src/App.jsx` - Updated form submission logic
- `package.json` - Added concurrently and new scripts

**Protected:**
- `.gitignore` - Already protects .env files

## 🎉 That's It!

Your contact form is now production-ready and will **work perfectly without any activation** once you complete the 3-step setup above!

Need help? Check `server/SETUP_GMAIL.md` for detailed Gmail setup instructions.
