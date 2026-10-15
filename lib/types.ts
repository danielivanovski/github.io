export interface MassageService {
  id: string;
  title: string;
  titleEn: string;
  category: 'therapeutic' | 'relax' | 'aesthetic' | 'beauty';
  duration: number; // in minutes
  priceMkd: number; // in Macedonian Denars
  description: string;
  benefits: string[];
  image: string;
  popular?: boolean;
}

export interface Therapist {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  experienceYears: number;
}

export interface BookingAppointment {
  id: string;
  serviceId: string;
  serviceName: string;
  therapistId: string;
  therapistName: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  clientName: string;
  clientPhone: string;
  clientEmail?: string;
  focusArea?: string;
  notes?: string;
  totalPrice: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

export interface HealthBenefit {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  iconName: string;
}
