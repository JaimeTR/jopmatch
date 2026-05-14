'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Star,
  MapPin,
  BadgeCheck,
  Clock,
} from 'lucide-react';

interface ProfessionalCardProps {
  name: string;
  service: string;
  rating: number;
  reviewCount: number;
  distance: string;
  avatar: string;
  isAvailable: boolean;
  isVerified: boolean;
  priceRange?: string;
  index?: number;
}

export function ProfessionalCard({
  name,
  service,
  rating,
  reviewCount,
  distance,
  avatar,
  isAvailable,
  isVerified,
  priceRange,
  index = 0,
}: ProfessionalCardProps) {
  const t = useTranslations('profile');

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.08,
        type: 'spring',
        stiffness: 300,
        damping: 28,
      }}
      whileTap={{ scale: 0.98 }}
      className="card card-interactive p-4 flex gap-3.5"
      style={{ cursor: 'pointer' }}
    >
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <div
          className="w-14 h-14 rounded-xl overflow-hidden"
          style={{
            background: 'var(--gradient-primary)',
          }}
        >
          <div
            className="w-full h-full flex items-center justify-center text-white font-bold text-lg"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {name.charAt(0)}
          </div>
        </div>

        {/* Online indicator */}
        {isAvailable && (
          <div
            className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center"
            style={{
              backgroundColor: 'var(--color-success)',
              borderColor: 'var(--color-surface)',
            }}
          />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h3
                className="text-sm font-semibold truncate"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {name}
              </h3>
              {isVerified && (
                <BadgeCheck
                  size={14}
                  style={{ color: 'var(--color-primary)', flexShrink: 0 }}
                />
              )}
            </div>
            <p
              className="text-xs mt-0.5 truncate"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              {service}
            </p>
          </div>

          {priceRange && (
            <span
              className="text-xs font-semibold whitespace-nowrap"
              style={{ color: 'var(--color-primary)' }}
            >
              {priceRange}
            </span>
          )}
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 mt-2.5">
          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star
              size={13}
              fill="var(--color-warning)"
              color="var(--color-warning)"
            />
            <span
              className="text-xs font-semibold"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {rating.toFixed(1)}
            </span>
            <span
              className="text-xs"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              ({reviewCount})
            </span>
          </div>

          {/* Distance */}
          <div className="flex items-center gap-1">
            <MapPin size={12} style={{ color: 'var(--color-text-tertiary)' }} />
            <span
              className="text-xs"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              {distance}
            </span>
          </div>

          {/* Availability */}
          {isAvailable && (
            <div className="flex items-center gap-1">
              <Clock size={12} style={{ color: 'var(--color-success)' }} />
              <span
                className="text-xs font-medium"
                style={{ color: 'var(--color-success)' }}
              >
                {t('available')}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
