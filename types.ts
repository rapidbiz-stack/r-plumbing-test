
// Types for the R Plumbing application.

/**
 * Interface representing a plumbing service.
 */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

/**
 * Interface for AI-generated diagnostic results.
 */
export interface DiagnosticResult {
  diagnosis: string;
  severity: string;
  recommendation: string;
}

/**
 * Interface for customer testimonials.
 */
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}
