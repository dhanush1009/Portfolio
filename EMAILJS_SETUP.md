# EmailJS Setup Guide for Portfolio Contact Form

Your portfolio now uses EmailJS to send emails directly from the frontend - no backend server needed!

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (Free tier: 200 emails/month)
3. Verify your email

### Step 2: Add Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended - easiest)
   - Outlook
   - Yahoo
   - Or any other SMTP service

4. **For Gmail:**
   - Click "Connect Account"
   - Sign in with your Gmail
   - Allow EmailJS access
   - Give your service a name (e.g., "Portfolio_Gmail")

5. **Copy the Service ID** (looks like `service_xxxxxxx`)

### Step 3: Create Email Template

1. Go to **Email Templates** in dashboard
2. Click **"Create New Template"**
3. Set up the template with these **IMPORTANT** settings:

   **Template Settings:**
   - **Template Name**: Portfolio Contact Form
   
   **Email Settings (Important!):**
   
   **To Email:** 
   ```
   your-email@gmail.com
   ```
   (Your email where you want to receive messages)
   
   **From Name:** 
   ```
   Portfolio Contact - {{from_name}}
   ```
   
   **From Email:** 
   ```
   your-email@gmail.com
   ```
   (Must be your own email for Gmail service)
   
   **Reply To:** 
   ```
   {{reply_to}}
   ```
   ⚠️ **This is CRITICAL** - This makes the sender's email appear when you click Reply!
   
   **Subject:**
   ```
   New Portfolio Message from {{from_name}}
   ```
   
   **Content (HTML):**
   ```html
   <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
     <h2 style="color: #333; border-bottom: 3px solid #4CAF50; padding-bottom: 10px;">
       📧 New Portfolio Message
     </h2>
     
     <div style="background: #f0f8ff; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 5px solid #4CAF50;">
       <h3 style="margin-top: 0; color: #555;">Sender Information:</h3>
       <p style="font-size: 16px; margin: 10px 0;">
         <strong>Name:</strong> {{from_name}}
       </p>
       <p style="font-size: 16px; margin: 10px 0;">
         <strong>Email:</strong> <a href="mailto:{{from_email}}" style="color: #1a73e8; text-decoration: none;">{{from_email}}</a>
       </p>
     </div>
     
     <div style="margin: 20px 0;">
       <h3 style="color: #555;">Message:</h3>
       <div style="background: #ffffff; padding: 20px; border: 2px solid #e0e0e0; border-radius: 8px; line-height: 1.6;">
         {{message}}
       </div>
     </div>
     
     <div style="margin-top: 30px; padding: 15px; background: #fff3cd; border-radius: 5px; border-left: 4px solid #ffc107;">
       <p style="margin: 5px 0; color: #856404;">
         💡 <strong>To Reply:</strong> Click "Reply" button in your email - it will go to {{from_email}}
       </p>
     </div>
     
     <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;">
     
     <p style="color: #888; font-size: 12px; text-align: center;">
       Sent via Portfolio Contact Form | EmailJS
     </p>
   </div>
   ```

4. Click **"Save"**
5. **Test your template** - Click "Test It" button to verify the email looks good
6. **Copy the Template ID** (looks like `template_xxxxxxx`)

### Step 4: Get Your Public Key

1. Go to **Account** → **General** in dashboard
2. Find **"Public Key"** section
3. **Copy your Public Key** (looks like a long string)

### Step 5: Update Your .env File

Open `c:\Portfolio\Portfolio\.env` and update with your credentials:

```env
# API URL Configuration (not needed for EmailJS)
# VITE_API_URL=http://localhost:5000

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Replace:**
- `service_xxxxxxx` with your Service ID from Step 2
- `template_xxxxxxx` with your Template ID from Step 3
- `your_public_key_here` with your Public Key from Step 4

### Step 6: Test Locally

1. **Restart your dev server:**
   ```bash
   cd c:\Portfolio\Portfolio
   npm run dev
   ```

2. **Test the contact form:**
   - Open http://localhost:5173
   - Fill out the contact form
   - Click "Send Message"
   - You should see "Message sent successfully!" ✓

3. **Check your email** - you should receive the message!

### Step 7: Deploy

Now you can deploy just your frontend (no backend needed!):

**Deploy to Vercel:**

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   ```
   Framework: Vite
   Root Directory: Portfolio
   Build Command: npm run build
   Output Directory: dist
   ```
5. **Add Environment Variables:**
   - Go to Settings → Environment Variables
   - Add all three VITE_EMAILJS_* variables
6. Click **Deploy**

**Deploy to Netlify:**

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select your repository
4. Configure:
   ```
   Base directory: Portfolio
   Build command: npm run build
   Publish directory: Portfolio/dist
   ```
5. **Add Environment Variables:**
   - Go to Site settings → Environment variables
   - Add all three VITE_EMAILJS_* variables
6. Click **Deploy site**

---

## 🎨 Template Variables Explained

In your EmailJS template, you can use these variables:

- `{{from_name}}` - Name from the contact form
- `{{from_email}}` - Email address from the contact form
- `{{message}}` - Message from the contact form
- `{{to_name}}` - "Dhanush" (set in the code)

---

## 🔧 Troubleshooting

### "Failed to send message" error?

1. **Check your .env file:**
   - Make sure all three variables are filled in correctly
   - No extra spaces or quotes
   - Restart dev server after changing .env

2. **Check EmailJS dashboard:**
   - Verify your Service is connected
   - Check Template is saved correctly
   - Make sure you're not over the free tier limit (200 emails/month)

3. **Check browser console (F12):**
   - Look for specific error messages
   - "Invalid public key" = wrong public key in .env
   - "Template not found" = wrong template ID

### Email not arriving?

1. **Check spam folder**
2. **Verify "To Email" in template** - should be your email
3. **Test template** in EmailJS dashboard - there's a "Test It" button

### Rate limit errors?

- Free tier: 200 emails/month
- If you need more, upgrade to paid plan ($7/month for 1000 emails)

---

## 💡 Benefits of EmailJS

✅ **No backend server needed** - Saves hosting costs
✅ **Easy setup** - 5 minutes to get working
✅ **Free tier** - 200 emails/month is plenty for a portfolio
✅ **Reliable** - EmailJS handles all the email complexity
✅ **Secure** - API keys stay in environment variables

---

## 📊 Monitoring

Check your EmailJS dashboard to see:
- How many emails sent
- Success/failure rate
- Remaining quota
- Email history

---

## 🔐 Security Notes

- ✅ **Never commit .env file** to Git (it's already in .gitignore)
- ✅ **Public key is safe** to expose (it's meant to be public)
- ✅ **Service/Template IDs are safe** to expose
- ✅ **Your email credentials** stay secure with EmailJS

---

## 🆘 Need Help?

- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com
- Check your browser console for error messages

---

## ✅ Quick Checklist

- [ ] Created EmailJS account
- [ ] Added Gmail service and copied Service ID
- [ ] Created email template and copied Template ID
- [ ] Copied Public Key from Account settings
- [ ] Updated .env file with all three values
- [ ] Restarted dev server
- [ ] Tested contact form locally
- [ ] Received test email successfully
- [ ] Added environment variables to Vercel/Netlify
- [ ] Deployed and tested in production

---

Your contact form is now ready! 🎉
