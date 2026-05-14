'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Sparkles } from 'lucide-react';

export function SearchBar() {
  const t = useTranslations('home');
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="relative"
    >
      <div
        className="relative flex items-center gap-3 rounded-2xl transition-all"
        style={{
          backgroundColor: 'var(--color-bg-tertiary)',
          border: `1.5px solid ${isFocused ? 'var(--color-border-focus)' : 'var(--color-border)'}`,
          boxShadow: isFocused
            ? '0 0 0 3px var(--color-primary-muted), var(--shadow-md)'
            : 'var(--shadow-sm)',
          padding: '0.875rem 1rem',
        }}
      >
        <Search
          size={20}
          style={{
            color: isFocused
              ? 'var(--color-primary)'
              : 'var(--color-text-tertiary)',
            flexShrink: 0,
            transition: 'color 150ms',
          }}
        />

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={t('searchPlaceholder')}
          className="flex-1 bg-transparent border-none outline-none text-[15px]"
          style={{
            color: 'var(--color-text-primary)',
            fontFamily: 'var(--font-sans)',
          }}
          id="main-search"
          aria-label={t('searchPlaceholder')}
        />

        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="btn-icon"
              style={{
                padding: '0.25rem',
                color: 'var(--color-text-tertiary)',
              }}
              aria-label="Clear search"
            >
              <X size={16} />
            </motion.button>
          )}
        </AnimatePresence>

        {!query && (
          <div
            className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold"
            style={{
              backgroundColor: 'var(--color-primary-muted)',
              color: 'var(--color-primary)',
            }}
          >
            <Sparkles size={12} />
            AI
          </div>
        )}
      </div>
    </motion.div>
  );
}
