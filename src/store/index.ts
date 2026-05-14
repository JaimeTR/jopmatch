import { create } from 'zustand';

// ===== Location Store =====
interface LocationState {
  latitude: number | null;
  longitude: number | null;
  isLoading: boolean;
  error: string | null;
  hasPermission: boolean;
  setLocation: (lat: number, lng: number) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setPermission: (permission: boolean) => void;
  requestLocation: () => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  latitude: null,
  longitude: null,
  isLoading: false,
  error: null,
  hasPermission: false,

  setLocation: (latitude, longitude) =>
    set({ latitude, longitude, isLoading: false, error: null }),

  setLoading: (isLoading) => set({ isLoading }),

  setError: (error) => set({ error, isLoading: false }),

  setPermission: (hasPermission) => set({ hasPermission }),

  requestLocation: () => {
    set({ isLoading: true, error: null });

    if (!navigator.geolocation) {
      set({ error: 'Geolocation not supported', isLoading: false });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        set({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          isLoading: false,
          hasPermission: true,
          error: null,
        });
      },
      (error) => {
        set({
          error: error.message,
          isLoading: false,
          hasPermission: false,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000, // 5 minutes cache
      }
    );
  },
}));

// ===== UI Store =====
interface UIState {
  theme: 'dark' | 'light';
  isMobileNavOpen: boolean;
  isFilterPanelOpen: boolean;
  activeTab: string;
  toggleTheme: () => void;
  setTheme: (theme: 'dark' | 'light') => void;
  setMobileNavOpen: (open: boolean) => void;
  setFilterPanelOpen: (open: boolean) => void;
  setActiveTab: (tab: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  theme: 'dark',
  isMobileNavOpen: false,
  isFilterPanelOpen: false,
  activeTab: 'home',

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'dark' ? 'light' : 'dark',
    })),

  setTheme: (theme) => set({ theme }),

  setMobileNavOpen: (isMobileNavOpen) => set({ isMobileNavOpen }),

  setFilterPanelOpen: (isFilterPanelOpen) => set({ isFilterPanelOpen }),

  setActiveTab: (activeTab) => set({ activeTab }),
}));

// ===== Search Store =====
interface SearchState {
  query: string;
  category: string | null;
  maxDistance: number;
  minRating: number;
  availableOnly: boolean;
  setQuery: (query: string) => void;
  setCategory: (category: string | null) => void;
  setMaxDistance: (distance: number) => void;
  setMinRating: (rating: number) => void;
  setAvailableOnly: (available: boolean) => void;
  resetFilters: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  query: '',
  category: null,
  maxDistance: 10, // km
  minRating: 0,
  availableOnly: false,

  setQuery: (query) => set({ query }),
  setCategory: (category) => set({ category }),
  setMaxDistance: (maxDistance) => set({ maxDistance }),
  setMinRating: (minRating) => set({ minRating }),
  setAvailableOnly: (availableOnly) => set({ availableOnly }),

  resetFilters: () =>
    set({
      query: '',
      category: null,
      maxDistance: 10,
      minRating: 0,
      availableOnly: false,
    }),
}));
