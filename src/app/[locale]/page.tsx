'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Header, BottomNav } from '@/components/layout';
import { SearchBar } from '@/components/ui/search-bar';
import { CategoryGrid } from '@/components/ui/category-grid';
import { LocationPrompt } from '@/components/ui/location-prompt';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { ProfessionalCard } from '@/components/cards/professional-card';
import { ChevronRight, TrendingUp, MapPin } from 'lucide-react';

// Demo data for professionals (will be replaced with Supabase data)
const demoProfessionals = [
  {
    name: 'Carlos Méndez',
    service: 'Gasfitería · Reparaciones generales',
    rating: 4.9,
    reviewCount: 127,
    distance: '0.8 km',
    avatar: '',
    isAvailable: true,
    isVerified: true,
    priceRange: 'S/50-120',
  },
  {
    name: 'María Torres',
    service: 'Limpieza · Hogares y oficinas',
    rating: 4.8,
    reviewCount: 89,
    distance: '1.2 km',
    avatar: '',
    isAvailable: true,
    isVerified: true,
    priceRange: 'S/40-80',
  },
  {
    name: 'Diego Paredes',
    service: 'Electricidad · Instalaciones',
    rating: 4.7,
    reviewCount: 64,
    distance: '2.1 km',
    avatar: '',
    isAvailable: false,
    isVerified: true,
    priceRange: 'S/60-150',
  },
  {
    name: 'Ana Lucía Vega',
    service: 'Pintura · Interiores y exteriores',
    rating: 4.9,
    reviewCount: 52,
    distance: '1.5 km',
    avatar: '',
    isAvailable: true,
    isVerified: false,
    priceRange: 'S/80-200',
  },
  {
    name: 'Roberto Sánchez',
    service: 'Carpintería · Muebles a medida',
    rating: 4.6,
    reviewCount: 41,
    distance: '3.0 km',
    avatar: '',
    isAvailable: true,
    isVerified: true,
    priceRange: 'S/100-300',
  },
];

function SectionHeader({
  title,
  icon: Icon,
  showViewAll = true,
}: {
  title: string;
  icon: React.ElementType;
  showViewAll?: boolean;
}) {
  const t = useTranslations('home');

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Icon
          size={18}
          style={{ color: 'var(--color-primary)' }}
          strokeWidth={2.5}
        />
        <h2
          className="text-base font-bold"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--color-text-primary)',
          }}
        >
          {title}
        </h2>
      </div>

      {showViewAll && (
        <button
          className="flex items-center gap-0.5 text-xs font-semibold transition-colors"
          style={{ color: 'var(--color-primary)' }}
        >
          {t('viewAll')}
          <ChevronRight size={14} />
        </button>
      )}
    </div>
  );
}

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <Header />

      <main className="safe-bottom">
        <div className="container-app py-4 space-y-6">
          {/* Greeting + Language Switcher */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-between"
          >
            <div>
              <p
                className="text-sm"
                style={{ color: 'var(--color-text-tertiary)' }}
              >
                {t('greeting')} 👋
              </p>
              <h1
                className="text-xl font-bold mt-0.5"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-text-primary)',
                }}
              >
                {t('searchPlaceholder').replace('¿', '').replace('?', '')}
              </h1>
            </div>
            <LanguageSwitcher />
          </motion.div>

          {/* Search Bar */}
          <SearchBar />

          {/* Location Prompt */}
          <LocationPrompt />

          {/* Popular Services */}
          <section>
            <SectionHeader
              title={t('popularServices')}
              icon={TrendingUp}
            />
            <CategoryGrid />
          </section>

          {/* Top Professionals */}
          <section>
            <SectionHeader
              title={t('topProfessionals')}
              icon={MapPin}
            />
            <div className="space-y-3">
              {demoProfessionals.map((pro, i) => (
                <ProfessionalCard key={pro.name} {...pro} index={i} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
