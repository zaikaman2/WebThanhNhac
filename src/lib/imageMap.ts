export const KNOWN_IMAGE_MAP: Record<string, string> = {
  'https://i.ibb.co/K5JMvcZ/Add-a-heading.png': '/images/courses/course-basic.jpg',
  'https://i.ibb.co/kJN2st3/intermediate.png': '/images/courses/course-intermediate.jpg',
  'https://i.ibb.co/qRPzYjt/Add-a-heading.png': '/images/courses/course-1-on-1.jpg',
  'https://i.ibb.co/3c9RJm2/1732274222865.jpg': '/images/instructor/dinh-trung-kien.jpg',
  'https://i.ibb.co/8sB3D1B/img-t6-Bs-Gd3nm0i0-LYXai-D9z1.jpg': '/images/hero/hero-banner.jpg',
  'https://i.ibb.co/n3H5Nq5/3282224-removebg-preview.png': '/images/testimonials/default-avatar.png',
  'https://i.ibb.co/YhSY2QK/logo.png': '/images/logo.png',
}

export function getOptimizedImageUrl(src?: string | null): string {
  if (!src) return '/images/courses/course-basic.jpg'
  return KNOWN_IMAGE_MAP[src] || src
}
