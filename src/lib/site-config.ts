import config from '../../site.config.json';

/**
 * Returns the slug of the landing currently "featured" on the root route.
 * When set, `/` renders that landing's content instead of the minimalist Home.
 * When null, `/` shows the minimalist Home (photo + Book Call).
 */
export function getFeatured(): string | null {
  return (config as { featured: string | null }).featured ?? null;
}

export function getBookCallUrl(): string {
  return (config as { bookCallUrl?: string }).bookCallUrl || 'mailto:lukasz.szczurek@mozartway.com';
}
