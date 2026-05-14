# JopMatch

> 🗺️ Marketplace geolocado de profesionales — Lima, Perú

Plataforma web moderna (PWA) que conecta usuarios con profesionales, freelancers y proveedores de servicios cercanos en tiempo real.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local
# Fill in your Supabase and Mapbox credentials

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 15 | Framework (App Router) |
| TypeScript | Language |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| next-intl | i18n (ES/EN) |
| Supabase | Backend (Auth, DB, Storage) |
| Zustand | State Management |
| Mapbox GL | Maps |

## 📁 Project Structure

```
src/
├── app/[locale]/     # Pages (i18n routing)
├── components/       # Reusable UI components
├── i18n/             # Internationalization config
├── lib/              # Supabase clients, utilities
├── providers/        # React context providers
├── store/            # Zustand state stores
├── types/            # TypeScript type definitions
```

## 🌐 Internationalization

- Default: Español (es)
- Secondary: English (en)
- Auto-detect browser language

## 📱 PWA

The app supports:
- Home screen installation
- Standalone display mode
- Optimized for mobile

## 📄 License

Private — All rights reserved.
