'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Header, BottomNav } from '@/components/layout';
import {
  User,
  Settings,
  Star,
  Briefcase,
  Shield,
  ChevronRight,
  LogOut,
  Bell,
  HelpCircle,
  FileText,
} from 'lucide-react';

const menuItems = [
  {
    id: 'services',
    icon: Briefcase,
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.12)',
  },
  {
    id: 'reviews',
    icon: Star,
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.12)',
  },
  {
    id: 'notifications',
    icon: Bell,
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.12)',
  },
  {
    id: 'security',
    icon: Shield,
    color: '#22C55E',
    bg: 'rgba(34,197,94,0.12)',
  },
  {
    id: 'help',
    icon: HelpCircle,
    color: '#06B6D4',
    bg: 'rgba(6,182,212,0.12)',
  },
  {
    id: 'terms',
    icon: FileText,
    color: '#A1A1AA',
    bg: 'rgba(161,161,170,0.12)',
  },
];

const menuLabels: Record<string, string> = {
  services: 'Mis Servicios',
  reviews: 'Reseñas',
  notifications: 'Notificaciones',
  security: 'Seguridad',
  help: 'Ayuda',
  terms: 'Términos',
};

export default function ProfilePage() {
  const t = useTranslations('profile');

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <Header />

      <main className="safe-bottom">
        <div className="container-app py-4 space-y-5">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-5"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: 'var(--gradient-accent)' }}
              >
                <User size={28} color="white" />
              </div>
              <div className="flex-1">
                <h2
                  className="text-lg font-bold"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Usuario
                </h2>
                <p
                  className="text-sm mt-0.5"
                  style={{ color: 'var(--color-text-tertiary)' }}
                >
                  usuario@ejemplo.com
                </p>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="btn-icon btn-ghost"
              >
                <Settings size={20} style={{ color: 'var(--color-text-secondary)' }} />
              </motion.button>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary w-full mt-4"
            >
              {t('editProfile')}
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-3 gap-3"
          >
            {[
              { label: 'Servicios', value: '0' },
              { label: 'Reseñas', value: '0' },
              { label: 'Contactos', value: '0' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="card flex flex-col items-center py-4 px-2"
              >
                <span
                  className="text-xl font-bold"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[11px] mt-1 font-medium"
                  style={{ color: 'var(--color-text-tertiary)' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card overflow-hidden"
          >
            {menuItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center gap-3 px-4 py-3.5 transition-colors"
                  style={{
                    borderBottom:
                      i < menuItems.length - 1
                        ? '1px solid var(--color-border)'
                        : 'none',
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: item.bg }}
                  >
                    <Icon size={18} color={item.color} />
                  </div>
                  <span
                    className="flex-1 text-sm font-medium text-left"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {menuLabels[item.id]}
                  </span>
                  <ChevronRight
                    size={16}
                    style={{ color: 'var(--color-text-tertiary)' }}
                  />
                </motion.button>
              );
            })}
          </motion.div>

          {/* Logout */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-colors"
            style={{
              color: 'var(--color-error)',
              backgroundColor: 'var(--color-error-muted)',
            }}
          >
            <LogOut size={16} />
            Cerrar Sesión
          </motion.button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
