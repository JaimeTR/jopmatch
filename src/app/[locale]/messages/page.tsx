'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Header, BottomNav } from '@/components/layout';
import { MessageCircle, Send } from 'lucide-react';

export default function MessagesPage() {
  const t = useTranslations('nav');

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <Header />

      <main className="safe-bottom">
        <div className="container-app py-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4"
              style={{
                backgroundColor: 'var(--color-accent-muted)',
              }}
            >
              <MessageCircle size={32} style={{ color: 'var(--color-accent)' }} />
            </div>
            <h2
              className="text-lg font-bold mb-2"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-text-primary)',
              }}
            >
              {t('messages')}
            </h2>
            <p
              className="text-sm max-w-xs"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              Tu bandeja de mensajes aparecerá aquí. Contacta a un profesional para iniciar una conversación.
            </p>
          </motion.div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
