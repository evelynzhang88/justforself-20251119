# Quick Start Guide

## First Time Setup

### 1. Install Dependencies

```bash
# Install all dependencies
npm run install:all

# Or install separately:
cd frontend && npm install
cd ../backend && npm install
```

### 2. Configure Environment Variables

**Backend (Strapi):**
```bash
cd backend
```

Create a `.env` file with the following (generate random strings for secrets):

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-key-1,your-app-key-2,your-app-key-3,your-app-key-4
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
```

**Generate secrets:**
```bash
# Run this 4 times for APP_KEYS, and once for each secret
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Frontend (Next.js):**
```bash
cd frontend
```

Create a `.env.local` file:
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

### 3. Start the Applications

**Terminal 1 - Start Strapi:**
```bash
cd backend
npm run develop
```

- First time: Create admin account at `http://localhost:1337/admin`
- Wait for Strapi to fully start

**Terminal 2 - Start Next.js:**
```bash
cd frontend
npm run dev
```

- Frontend will be available at `http://localhost:3000`

### 4. Configure Strapi Permissions

1. Go to `http://localhost:1337/admin`
2. Navigate to **Settings** → **Users & Permissions Plugin** → **Roles** → **Public**
3. Enable permissions:
   - **Project**: `find`, `findOne`
   - **About**: `find`
   - **Contact**: `create`
4. Click **Save**

### 5. Add Content

1. Go to **Content Manager** in Strapi admin
2. Add your projects, about information, etc.
3. Make sure to **Publish** your content

## Development

- Frontend: `http://localhost:3000`
- Strapi Admin: `http://localhost:1337/admin`
- Strapi API: `http://localhost:1337/api`

## Troubleshooting

### Strapi won't start
- Check if port 1337 is available
- Verify `.env` file exists with all required variables
- Check Node.js version (Strapi 4 works best with Node 18-20)

### Frontend can't connect to Strapi
- Ensure Strapi is running
- Check `NEXT_PUBLIC_STRAPI_URL` in `.env.local`
- Verify CORS settings in `backend/config/middlewares.js`

### Content not showing
- Make sure content is **Published** in Strapi
- Check permissions in Strapi admin
- Verify API endpoints are accessible

