export interface IActivity {
  accessible?: boolean;
  availableSpots?: number;
  capacity?: number;
  date?: string;
  description: string;
  duration: number;
  gallery?: string[];
  id: string;
  imageUrl?: string;
  isFree?: boolean;
  language?: TLanguage;
  location?: {
    address?: string;
    district?: string;
    latitude?: number;
    longitude?: number;
  };
  maxAge?: number;
  minAge?: number;
  price: number;
  rating?: number;
  reviewsCount?: number;
  schedule?: string[];
  tags?: string[];
  time?: string;
  title: string;
  type: TActivityType;
}

export type TActivityType = 'children' | 'food' | 'music' | 'nature' | 'teatre' | 'tour';
export type TLanguage = 'es' | 'en' | 'fr' | 'de';

export interface IActivityFilters {
  text?: string;
  price: number | null;
  duration: number | null;
  type?: string;
}

export enum ACTIVITIES {
  CHILDREN = 'niños',
  FOOD = 'comida',
  MUSIC = 'música',
  NATURE = 'naturaleza',
  TEATRE = 'teatro',
  TOUR = 'tour',
}

/**
 * Map para convertir el type (lowercase) de la actividad al label en español.
 * Útil para templates: activityTypeLabel[activity.type]
 */
export const activityTypeLabel: Record<TActivityType, string> = {
  children: ACTIVITIES.CHILDREN,
  food: ACTIVITIES.FOOD,
  music: ACTIVITIES.MUSIC,
  nature: ACTIVITIES.NATURE,
  teatre: ACTIVITIES.TEATRE,
  tour: ACTIVITIES.TOUR,
};
