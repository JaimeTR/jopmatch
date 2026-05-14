'use client';

import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { routing } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const nextLocale = locale === 'es' ? 'en' : 'es';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={switchLocale}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        color: 'var(--color-text-secondary)',
      }}
      id="language-switcher"
      aria-label={`Switch to ${locale === 'es' ? 'English' : 'Español'}`}
    >
      <Globe size={14} />
      {locale === 'es' ? 'EN' : 'ES'}
    </motion.button>
  );
}
