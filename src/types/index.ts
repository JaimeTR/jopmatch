// ===== Professional Types =====
export interface Professional {
  id: string;
  full_name: string;
  avatar_url: string | null;
  bio: string | null;
  phone: string | null;
  whatsapp: string | null;
  email: string;
  latitude: number;
  longitude: number;
  address: string | null;
  district: string | null;
  is_available: boolean;
  is_verified: boolean;
  rating: number;
  review_count: number;
  created_at: string;
  services: Service[];
  categories: Category[];
}

export interface Service {
  id: string;
  name: string;
  description: string | null;
  price_min: number | null;
  price_max: number | null;
  currency: string;
  duration_minutes: number | null;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color: string;
}

export interface Review {
  id: string;
  rating: number;
  comment: string | null;
  author_name: string;
  author_avatar: string | null;
  created_at: string;
  professional_id: string;
}

// ===== Location Types =====
export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface GeoSearchParams {
  latitude: number;
  longitude: number;
  radiusKm: number;
  category?: string;
  minRating?: number;
  availableOnly?: boolean;
  query?: string;
  limit?: number;
  offset?: number;
}

// ===== Map Types =====
export interface MapMarker {
  id: string;
  latitude: number;
  longitude: number;
  type: 'professional' | 'user';
  data?: Professional;
}

// ===== Auth Types =====
export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  avatar_url: string | null;
  role: 'user' | 'professional' | 'admin';
  created_at: string;
}

// ===== UI Types =====
export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
}

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}
