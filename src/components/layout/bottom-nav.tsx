'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { Link } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Search,
  MapPin,
  MessageCircle,
  User,
} from 'lucide-react';

const navItems = [
  { id: 'home', icon: Home, href: '/' },
  { id: 'search', icon: Search, href: '/search' },
  { id: 'map', icon: MapPin, href: '/map' },
  { id: 'messages', icon: MessageCircle, href: '/messages' },
  { id: 'profile', icon: User, href: '/profile' },
];

export function BottomNav() {
  const t = useTranslations('nav');
  const pathname = usePathname();

  const getActiveTab = () => {
    if (pathname === '/') return 'home';
    const segment = pathname.split('/')[1];
    return segment || 'home';
  };

  const activeTab = getActiveTab();

  return (
    <nav
      className="bottom-nav glass"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className="flex items-center justify-around h-full max-w-lg mx-auto px-2"
      >
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              className="relative flex flex-col items-center justify-center gap-0.5 py-2 px-3 rounded-xl transition-colors"
              style={{
                WebkitTapHighlightColor: 'transparent',
              }}
              aria-label={t(item.id as 'home' | 'search' | 'map' | 'messages' | 'profile')}
              aria-current={isActive ? 'page' : undefined}
            >
              {/* Active indicator */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      backgroundColor: 'var(--color-primary-muted)',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </AnimatePresence>

              <Icon
                size={22}
                className="relative z-10 transition-colors"
                style={{
                  color: isActive
                    ? 'var(--color-primary)'
                    : 'var(--color-text-tertiary)',
                }}
                strokeWidth={isActive ? 2.5 : 2}
              />

              <span
                className="relative z-10 text-[10px] font-semibold transition-colors"
                style={{
                  color: isActive
                    ? 'var(--color-primary)'
                    : 'var(--color-text-tertiary)',
                }}
              >
                {t(item.id as 'home' | 'search' | 'map' | 'messages' | 'profile')}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
