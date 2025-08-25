# Setup Instructions

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/contactform

# Email Configuration (Gmail example)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=admin@yoursite.com
```

## MongoDB Setup

1. Install MongoDB locally or use MongoDB Atlas
2. If using local MongoDB, start the service:
   ```bash
   mongod
   ```
3. Update the `MONGODB_URI` in `.env.local` with your connection string

## Email Setup (Optional)

1. For Gmail, create an App Password:
   - Go to Google Account settings
   - Enable 2-factor authentication
   - Generate an App Password
   - Use this password in `EMAIL_PASSWORD`

2. Update the email variables in `.env.local`

## Running the Application

```bash
npm run dev
```

The contact form will work even if email is not configured - it will just save to the database.