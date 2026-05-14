'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Wrench,
  Zap,
  Sparkles as SparklesIcon,
  Paintbrush,
  Hammer,
  Flower2,
  GraduationCap,
  Heart,
  Dumbbell,
  Monitor,
  Truck,
  ChefHat,
} from 'lucide-react';

const categories = [
  { id: 'plumbing', icon: Wrench, color: '#3B82F6', bg: 'rgba(59,130,246,0.12)' },
  { id: 'electrical', icon: Zap, color: '#F59E0B', bg: 'rgba(245,158,11,0.12)' },
  { id: 'cleaning', icon: SparklesIcon, color: '#22C55E', bg: 'rgba(34,197,94,0.12)' },
  { id: 'painting', icon: Paintbrush, color: '#A855F7', bg: 'rgba(168,85,247,0.12)' },
  { id: 'carpentry', icon: Hammer, color: '#F97316', bg: 'rgba(249,115,22,0.12)' },
  { id: 'gardening', icon: Flower2, color: '#10B981', bg: 'rgba(16,185,129,0.12)' },
  { id: 'tutoring', icon: GraduationCap, color: '#6366F1', bg: 'rgba(99,102,241,0.12)' },
  { id: 'beauty', icon: Heart, color: '#EC4899', bg: 'rgba(236,72,153,0.12)' },
  { id: 'fitness', icon: Dumbbell, color: '#EF4444', bg: 'rgba(239,68,68,0.12)' },
  { id: 'tech', icon: Monitor, color: '#06B6D4', bg: 'rgba(6,182,212,0.12)' },
  { id: 'moving', icon: Truck, color: '#8B5CF6', bg: 'rgba(139,92,246,0.12)' },
  { id: 'cooking', icon: ChefHat, color: '#F43F5E', bg: 'rgba(244,63,94,0.12)' },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 25 },
  },
};

export function CategoryGrid() {
  const t = useTranslations('home.categories');

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-4 gap-3"
    >
      {categories.map((cat) => {
        const Icon = cat.icon;

        return (
          <motion.button
            key={cat.id}
            variants={itemVariants}
            whileTap={{ scale: 0.92 }}
            className="flex flex-col items-center gap-2 py-3 px-1 rounded-2xl transition-all cursor-pointer"
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
            }}
            id={`category-${cat.id}`}
            aria-label={t(cat.id as keyof IntlMessages['home']['categories'])}
          >
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl"
              style={{ backgroundColor: cat.bg }}
            >
              <Icon size={20} color={cat.color} strokeWidth={2} />
            </div>
            <span
              className="text-[11px] font-semibold text-center leading-tight"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {t(cat.id as keyof IntlMessages['home']['categories'])}
            </span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}
