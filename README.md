# Personal Portfolio Website

A modern personal portfolio website built with Next.js, Tailwind CSS, and Strapi CMS.

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Backend/CMS**: Strapi 4
- **Database**: SQLite (development)

## Project Structure

```
.
├── frontend/          # Next.js application
│   ├── app/          # Next.js app directory
│   ├── components/   # React components
│   └── lib/          # Utility functions
└── backend/          # Strapi CMS
    ├── config/       # Strapi configuration
    └── src/          # Strapi source files
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher (Note: Strapi 4 works best with Node 18-20)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd justforself-20251119
   ```

2. **Set up the Frontend (Next.js)**

   ```bash
   cd frontend
   npm install
   ```

   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
   ```

3. **Set up the Backend (Strapi)**

   ```bash
   cd backend
   npm install
   ```

   **Important**: Strapi 4 requires a database. The easiest way is to use PostgreSQL with Docker:
   
   ```bash
   # Start PostgreSQL with Docker
   docker run --name strapi-postgres \
     -e POSTGRES_PASSWORD=strapi \
     -e POSTGRES_DB=strapi_dev \
     -p 5432:5432 \
     -d postgres:14
   
   # Add to backend/.env file:
   DATABASE_URL=postgresql://postgres:strapi@localhost:5432/strapi_dev
   ```
   
   See `backend/数据库配置说明.md` for more options.

   Create a `.env` file. **Easiest way**: Run the generator script:
   ```bash
   cd backend
   node generate-env.js
   ```
   
   This will generate all required keys. Copy the output to create your `.env` file.
   
   **Manual method**: Copy `.env.example` and generate keys:
   ```bash
   # Generate APP_KEYS (run 4 times, join with commas)
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   
   # Generate other secrets (run once for each)
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```
   
   See `backend/环境变量说明.md` for detailed instructions in Chinese.

### Running the Application

1. **Start Strapi CMS** (Terminal 1)
   ```bash
   cd backend
   npm run develop
   ```
   
   - Strapi will start on `http://localhost:1337`
   - On first run, you'll be prompted to create an admin account
   - Access the admin panel at `http://localhost:1337/admin`

2. **Start Next.js Frontend** (Terminal 2)
   ```bash
   cd frontend
   npm run dev
   ```
   
   - Frontend will start on `http://localhost:3000`

### Setting up Strapi Content Types

After starting Strapi for the first time:

1. Go to `http://localhost:1337/admin`
2. Navigate to **Content-Type Builder**
3. The following content types should already be configured:
   - **Project** - For portfolio projects
   - **About** - For about page content
   - **Contact** - For contact form submissions

4. **Configure Permissions**:
   - Go to **Settings** → **Users & Permissions Plugin** → **Roles** → **Public**
   - Enable the following permissions:
     - `Project`: `find` and `findOne`
     - `About`: `find`
     - `Contact`: `create`

5. **Add Content**:
   - Go to **Content Manager**
   - Add your projects, about information, etc.

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
npm start
```

**Backend:**
```bash
cd backend
npm run build
npm start
```

## Features

- ✨ Modern, responsive design with Tailwind CSS
- 🌙 Dark mode support
- 📱 Mobile-friendly navigation
- 🎨 Beautiful gradient animations
- 📝 Contact form with validation
- 🚀 Fast performance with Next.js
- 📊 Content management with Strapi CMS

## Customization

### Updating Content

All content is managed through Strapi CMS. Simply log in to the admin panel and update:

- **Projects**: Add/edit your portfolio projects
- **About**: Update your bio and skills
- **Contact**: View contact form submissions

### Styling

The website uses Tailwind CSS. You can customize:

- Colors: Update gradient colors in component files
- Fonts: Modify `app/layout.tsx`
- Layout: Edit component files in `components/`

## API Integration

The frontend includes a Strapi API utility in `lib/strapi.ts`. Example usage:

```typescript
import { fetchStrapi } from '@/lib/strapi';

// Fetch projects
const projects = await fetchStrapi('/projects?populate=*');
```

## License

MIT

## Support

For issues and questions, please open an issue in the repository.
