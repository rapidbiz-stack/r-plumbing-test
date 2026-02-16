
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface DiagnosticResult {
  diagnosis: string;
  severity: 'low' | 'medium' | 'high' | 'emergency';
  recommendation: string;
}
