'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Header, BottomNav } from '@/components/layout';
import { Search, SlidersHorizontal, MapPin, Star, Clock } from 'lucide-react';

export default function SearchPage() {
  const t = useTranslations('search');

  const quickFilters = [
    { id: 'available', label: t('available'), icon: Clock, color: 'var(--color-success)' },
    { id: 'nearby', label: '< 2 km', icon: MapPin, color: 'var(--color-primary)' },
    { id: 'top-rated', label: '4.5+', icon: Star, color: 'var(--color-warning)' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <Header />

      <main className="safe-bottom">
        <div className="container-app py-4 space-y-5">
          {/* Search Input */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2"
          >
            <div
              className="flex-1 flex items-center gap-3 rounded-xl px-4 py-3"
              style={{
                backgroundColor: 'var(--color-bg-tertiary)',
                border: '1px solid var(--color-border)',
              }}
            >
              <Search size={18} style={{ color: 'var(--color-text-tertiary)' }} />
              <input
                type="text"
                placeholder={t('placeholder')}
                className="flex-1 bg-transparent border-none outline-none text-sm"
                style={{
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-sans)',
                }}
                id="search-input"
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-11 h-11 rounded-xl"
              style={{
                background: 'var(--gradient-primary)',
              }}
              id="filter-toggle"
              aria-label={t('filters')}
            >
              <SlidersHorizontal size={18} color="white" />
            </motion.button>
          </motion.div>

          {/* Quick Filters */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {quickFilters.map((filter) => {
              const Icon = filter.icon;
              return (
                <motion.button
                  key={filter.id}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-full whitespace-nowrap text-xs font-semibold transition-all"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  <Icon size={13} style={{ color: filter.color }} />
                  {filter.label}
                </motion.button>
              );
            })}
          </div>

          {/* Empty state */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4"
              style={{
                backgroundColor: 'var(--color-primary-muted)',
              }}
            >
              <Search size={32} style={{ color: 'var(--color-primary)' }} />
            </div>
            <h2
              className="text-lg font-bold mb-2"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-text-primary)',
              }}
            >
              {t('title')}
            </h2>
            <p
              className="text-sm max-w-xs"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              {t('placeholder')}
            </p>
          </motion.div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
