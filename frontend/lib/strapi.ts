const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export async function fetchStrapi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<StrapiResponse<T>> {
  const url = `${STRAPI_URL}/api${endpoint}`;
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.statusText}`);
  }

  return response.json();
}

// Helper function to get image URL from Strapi
export function getStrapiImageUrl(image: any): string {
  if (!image) return '';
  if (typeof image === 'string') return image;
  if (image.url) {
    return image.url.startsWith('http') 
      ? image.url 
      : `${STRAPI_URL}${image.url}`;
  }
  return '';
}

