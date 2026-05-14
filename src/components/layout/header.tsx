'use client';

import { useTranslations } from 'next-intl';
import { useUIStore } from '@/store';
import { Link } from '@/i18n/navigation';
import { MapPin, Bell, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
  const t = useTranslations('app');
  const { theme, toggleTheme } = useUIStore();

  return (
    <header
      className="sticky top-0 z-20 glass"
      style={{
        height: 'var(--header-height)',
        paddingTop: 'env(safe-area-inset-top)',
      }}
    >
      <div className="flex items-center justify-between h-full px-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div
            className="flex items-center justify-center w-8 h-8 rounded-lg"
            style={{
              background: 'var(--gradient-primary)',
            }}
          >
            <MapPin size={18} color="white" strokeWidth={2.5} />
          </div>
          <span
            className="text-lg font-bold"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text-primary)',
            }}
          >
            Jop
            <span className="text-gradient">Match</span>
          </span>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="btn-icon btn-ghost"
            aria-label="Toggle theme"
            id="theme-toggle"
          >
            {theme === 'dark' ? (
              <Sun size={20} style={{ color: 'var(--color-text-secondary)' }} />
            ) : (
              <Moon size={20} style={{ color: 'var(--color-text-secondary)' }} />
            )}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="btn-icon btn-ghost relative"
            aria-label="Notifications"
            id="notifications-btn"
          >
            <Bell size={20} style={{ color: 'var(--color-text-secondary)' }} />
            {/* Notification badge */}
            <span
              className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
              style={{
                backgroundColor: 'var(--color-error)',
              }}
            />
          </motion.button>
        </div>
      </div>
    </header>
  );
}
