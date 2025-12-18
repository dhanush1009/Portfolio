# Portfolio Deployment Guide

## The Problem You Had

When you deployed your portfolio, you got a `net::ERR_CONNECTION_REFUSED` error because:
- Your app was trying to connect to `http://localhost:5000` 
- This only works on your local computer, not when deployed online
- The backend server wasn't deployed or accessible

## The Solution

Your portfolio now uses environment variables to point to the correct backend URL.

---

## Deployment Options

### Option 1: Deploy Both Frontend and Backend (Recommended)

#### Step 1: Deploy Backend Server to Render (Free)

1. **Create account** at [Render.com](https://render.com)

2. **Create New Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select your repository

3. **Configure the service**:
   ```
   Name: portfolio-backend (or any name you like)
   Region: Choose closest to you
   Branch: main
   Root Directory: Portfolio/server
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   ```

4. **Add Environment Variables**:
   - Click "Environment" tab
   - Add these variables:
     ```
     EMAIL_USER=your-gmail@gmail.com
     EMAIL_PASS=your-gmail-app-password
     PORT=5000
     ```
   
   **Important**: Use Gmail App Password, not your regular password
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification
   - Go to App Passwords
   - Generate new app password
   - Use that password for `EMAIL_PASS`

5. **Deploy**: Click "Create Web Service"

6. **Copy your backend URL**: e.g., `https://portfolio-backend-xyz.onrender.com`

#### Step 2: Deploy Frontend to Vercel/Netlify (Free)

**Using Vercel:**

1. **Create account** at [Vercel.com](https://vercel.com)

2. **Import project**:
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Select the `Portfolio` directory as root

3. **Configure**:
   ```
   Framework Preset: Vite
   Root Directory: Portfolio
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Add Environment Variable**:
   - Go to "Settings" → "Environment Variables"
   - Add:
     ```
     VITE_API_URL = https://your-backend-url.onrender.com
     ```
   - Replace with YOUR actual backend URL from Step 1

5. **Deploy**: Click "Deploy"

**Using Netlify:**

1. **Create account** at [Netlify.com](https://netlify.com)

2. **Deploy**:
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub and select repository
   
3. **Configure**:
   ```
   Base directory: Portfolio
   Build command: npm run build
   Publish directory: Portfolio/dist
   ```

4. **Add Environment Variable**:
   - Go to "Site settings" → "Environment variables"
   - Add:
     ```
     VITE_API_URL = https://your-backend-url.onrender.com
     ```

5. **Deploy**: Click "Deploy site"

---

### Option 2: Use EmailJS (No Backend Needed - Easier!)

If you don't want to deploy a backend, use EmailJS:

1. **Sign up** at [EmailJS.com](https://www.emailjs.com/) (Free tier: 200 emails/month)

2. **Setup**:
   - Add Email Service (Gmail/Outlook/etc.)
   - Create Email Template
   - Get your Service ID, Template ID, and Public Key

3. **Update your `.env` file**:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Install EmailJS**:
   ```bash
   npm install @emailjs/browser
   ```

5. **Update App.jsx** - Replace the `handleFormSubmit` function with:
   ```javascript
   import emailjs from '@emailjs/browser';
   
   const handleFormSubmit = async (e) => {
     e.preventDefault();
     setFormStatus("sending");

     try {
       await emailjs.send(
         import.meta.env.VITE_EMAILJS_SERVICE_ID,
         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
         {
           from_name: formData.name,
           from_email: formData.email,
           message: formData.message,
         },
         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
       );

       setFormStatus("success");
       setFormData({ name: "", email: "", message: "" });
       setTimeout(() => setFormStatus(""), 5000);
     } catch (error) {
       console.error('Error:', error);
       setFormStatus("error");
       setTimeout(() => setFormStatus(""), 5000);
     }
   };
   ```

6. **Deploy** only the frontend to Vercel/Netlify (no backend needed!)

---

## Testing Before Deployment

### Test Locally:

1. **Start Backend**:
   ```bash
   cd Portfolio/server
   npm install
   npm start
   ```

2. **Start Frontend** (in new terminal):
   ```bash
   cd Portfolio
   npm install
   npm run dev
   ```

3. **Test the contact form** at `http://localhost:5173`

---

## Troubleshooting

### Still getting connection errors?

1. **Check `.env` file**:
   - Make sure `VITE_API_URL` is set correctly
   - Restart development server after changing `.env`

2. **Check backend is running**:
   - Visit your backend URL directly (e.g., `https://your-backend.onrender.com`)
   - Should see: `{"status": "ok", "message": "Portfolio Contact Form API is running"}`

3. **Check browser console**:
   - Open DevTools (F12)
   - Look for the actual URL being called
   - Should NOT be localhost when deployed

4. **CORS errors?**
   - Make sure your backend has CORS enabled (already done in server.js)

### Free Tier Limitations:

- **Render**: Sleeps after 15 min of inactivity (first request takes ~30 seconds to wake up)
- **Vercel**: 100 GB bandwidth/month
- **Netlify**: 100 GB bandwidth/month

---

## Quick Commands

```bash
# Install dependencies
cd Portfolio
npm install

cd server
npm install

# Run locally
cd Portfolio
npm run dev

# Build for production
npm run build
```

---

## Need Help?

Common issues:
- **"Cannot find module"**: Run `npm install` in both Portfolio and Portfolio/server folders
- **CORS errors**: Backend must have CORS enabled (check server.js)
- **Email not sending**: Check Gmail app password, enable "Less secure app access"
- **Build fails**: Check all imports and environment variables

---

## Recommended Approach

**For beginners**: Use EmailJS (Option 2) - It's simpler and free!

**For learning/portfolio**: Deploy both frontend and backend (Option 1) - Shows full-stack skills!
