'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useLocationStore } from '@/store';
import { MapPin, Navigation, Loader2 } from 'lucide-react';

export function LocationPrompt() {
  const t = useTranslations('home');
  const { isLoading, requestLocation, hasPermission } = useLocationStore();

  if (hasPermission) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className="relative overflow-hidden rounded-2xl p-5"
      style={{
        background: 'var(--gradient-primary)',
      }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.2), transparent 60%)',
        }}
      />

      <div className="relative flex items-start gap-4">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0"
          style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <Navigation size={24} color="white" />
        </div>

        <div className="flex-1">
          <h3
            className="text-base font-bold text-white mb-1"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t('locationAccess')}
          </h3>
          <p className="text-sm text-white/80 leading-relaxed mb-4">
            {t('locationDescription')}
          </p>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={requestLocation}
            disabled={isLoading}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all"
            style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
            id="enable-location-btn"
          >
            {isLoading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <MapPin size={16} />
            )}
            {t('enableLocation')}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
