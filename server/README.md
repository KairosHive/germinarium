# Apothecary Server - Railway Deployment

## Setup on Railway

1. **Create a new project** on Railway (railway.app)

2. **Add PostgreSQL database**:
   - Click "New" → "Database" → "PostgreSQL"
   - Wait for it to provision

3. **Deploy the server**:
   - Click "New" → "GitHub Repo" 
   - Or use "Empty Service" and connect this `server` folder
   - Set the root directory to `/server` if deploying from the main repo

4. **Environment Variables** (auto-configured by Railway):
   - `DATABASE_URL` - Automatically set when you link PostgreSQL
   - `PORT` - Automatically set by Railway

5. **Get your API URL**:
   - Go to Settings → Domains
   - Generate a domain (e.g., `apothecary-server-production.up.railway.app`)

## Configure the Frontend

After deploying, update the frontend to use your Railway URL:

**Option A: Set in browser console (for testing)**
```javascript
localStorage.setItem('apothecary_api_url', 'https://YOUR-RAILWAY-URL.up.railway.app');
```

**Option B: Hardcode in main.html** (for production)
Change line ~840 in main.html:
```javascript
const API_URL = 'https://YOUR-RAILWAY-URL.up.railway.app';
```

## Local Development

```bash
cd server
npm install

# Set up local PostgreSQL or use Railway's connection string
export DATABASE_URL="postgresql://user:pass@localhost:5432/apothecary"

npm start
```

## API Endpoints

- `POST /api/login` - Login/register with username
- `POST /api/save` - Save progress
- `GET /api/load/:username` - Load progress
- `GET /api/health` - Health check
