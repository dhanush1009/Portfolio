# 📧 Contact Form Email Setup Guide

Your contact form has **dual email delivery** system for maximum reliability:

## Current Status ✅

### 1. **FormSubmit (Active & Working)**
- ✅ Already configured and working
- ✅ Sends to: **sdhanush1009@gmail.com**
- ✅ No additional setup needed
- ✅ Works as fallback if EmailJS fails

### 2. **EmailJS (Optional - For Better Reliability)**
Currently uses FormSubmit, but you can add EmailJS for primary delivery:

## How to Set Up EmailJS (Recommended)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Set Up Email Service
1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail recommended)
4. Connect your **sdhanush1009@gmail.com** account
5. Copy the **Service ID**

### Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template content:

```
From: {{from_name}}
Email: {{reply_to}}

Message:
{{message}}
```

4. Set **To Email**: sdhanush1009@gmail.com
5. Copy the **Template ID**

### Step 4: Get Public Key
1. Go to **"Account"** → **"General"**
2. Find your **Public Key**
3. Copy it

### Step 5: Configure Environment Variables
1. Create a `.env` file in the `Portfolio` folder:

```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Replace the `xxxxxxx` with your actual IDs

### Step 6: Add .env to .gitignore
Ensure your `.gitignore` includes:
```
.env
.env.local
```

### Step 7: Restart Development Server
```bash
npm run dev
```

## How It Works 🔄

1. **With EmailJS configured**: 
   - Primary: EmailJS sends the email
   - If EmailJS fails → FormSubmit automatically takes over
   
2. **Without EmailJS configured**:
   - FormSubmit handles all emails (currently active)

## Testing

1. Fill out the contact form on your website
2. Check **sdhanush1009@gmail.com** inbox
3. You should receive the message within seconds

## Verification for FormSubmit (Current Setup)

FormSubmit requires one-time email verification:

1. The first time someone submits the form, FormSubmit sends a verification email to **sdhanush1009@gmail.com**
2. Click the verification link in that email
3. After verification, all future submissions will be delivered automatically

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables in your hosting platform:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

2. Don't commit `.env` file to GitHub

## Troubleshooting

### Email not received?
1. Check spam/junk folder
2. Verify FormSubmit email (if first time)
3. Check browser console for errors
4. Ensure internet connection is stable

### Want to change recipient email?
Update in [App.jsx](Portfolio/src/App.jsx):
- Line 193: FormSubmit endpoint
- Line 218: EmailJS `to_email` parameter

### Rate Limits
- **FormSubmit Free**: 50 emails/month
- **EmailJS Free**: 200 emails/month
- Combined: Excellent reliability

## Current Configuration

✅ **Recipient**: sdhanush1009@gmail.com  
✅ **Primary Method**: FormSubmit (Active)  
✅ **Fallback Method**: EmailJS (If configured)  
✅ **Form Fields**: Name, Email, Message  
✅ **Status Messages**: Sending/Success/Error  

## Support

- EmailJS Docs: https://www.emailjs.com/docs/
- FormSubmit Docs: https://formsubmit.co/

---

**Note**: Your contact form is already functional with FormSubmit. Adding EmailJS is optional but recommended for enhanced reliability.
