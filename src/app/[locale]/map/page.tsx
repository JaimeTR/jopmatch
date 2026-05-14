'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { BottomNav } from '@/components/layout';
import { MapPin, Navigation, Layers, Plus, Minus } from 'lucide-react';
import { useLocationStore } from '@/store';

export default function MapPage() {
  const t = useTranslations('nav');
  const { hasPermission, requestLocation, latitude, longitude } = useLocationStore();

  return (
    <div
      className="relative h-screen overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      {/* Map Placeholder */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Center pin */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="flex flex-col items-center"
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center animate-pulse-glow"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <MapPin size={22} color="white" />
          </div>
          <div
            className="w-3 h-3 rounded-full mt-1"
            style={{
              background: 'var(--gradient-primary)',
              filter: 'blur(4px)',
            }}
          />
        </motion.div>

        {/* Simulated markers */}
        {[
          { top: '25%', left: '30%', delay: 0.3 },
          { top: '35%', left: '65%', delay: 0.5 },
          { top: '60%', left: '25%', delay: 0.7 },
          { top: '55%', left: '72%', delay: 0.9 },
          { top: '40%', left: '45%', delay: 1.1 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: pos.delay, type: 'spring', stiffness: 400, damping: 25 }}
            className="absolute w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              top: pos.top,
              left: pos.left,
              backgroundColor: 'var(--color-accent-muted)',
              border: '2px solid var(--color-accent)',
            }}
          >
            <div className="text-xs font-bold" style={{ color: 'var(--color-accent)' }}>
              {i + 1}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Top controls */}
      <div
        className="absolute top-0 left-0 right-0 z-10 p-4"
        style={{ paddingTop: 'calc(env(safe-area-inset-top) + 1rem)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl px-4 py-3 flex items-center gap-3"
        >
          <MapPin size={18} style={{ color: 'var(--color-primary)' }} />
          <span
            className="text-sm font-medium flex-1"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Lima, Perú
          </span>
          <span
            className="badge badge-primary text-[10px]"
          >
            5 cerca
          </span>
        </motion.div>
      </div>

      {/* Side controls */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2">
        {[
          { icon: Plus, label: 'Zoom in' },
          { icon: Minus, label: 'Zoom out' },
          { icon: Navigation, label: 'My location' },
          { icon: Layers, label: 'Layers' },
        ].map(({ icon: Icon, label }) => (
          <motion.button
            key={label}
            whileTap={{ scale: 0.9 }}
            className="glass w-10 h-10 rounded-xl flex items-center justify-center"
            aria-label={label}
          >
            <Icon size={18} style={{ color: 'var(--color-text-secondary)' }} />
          </motion.button>
        ))}
      </div>

      {/* Bottom card */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ paddingBottom: 'var(--bottom-nav-height)' }}
      >
        <div className="glass rounded-t-3xl p-5">
          <div className="w-10 h-1 rounded-full mx-auto mb-4" style={{ backgroundColor: 'var(--color-border)' }} />
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                Carlos Méndez
              </p>
              <p className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                Gasfitería · ⭐ 4.9 · 0.8 km
              </p>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary btn-sm"
            >
              Contactar
            </motion.button>
          </div>
        </div>
      </motion.div>

      <BottomNav />
    </div>
  );
}
