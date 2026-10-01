export type ConsultationType =
  | 'bengaluru_flagship_suite'
  | 'private_residence_fitting'
  | 'virtual_atelier_consultation'
  | 'corporate_uniform_briefing';

export type ConsultationStatus =
  | 'requested'
  | 'confirmed'
  | 'in_progress'
  | 'completed'
  | 'cancelled';

export interface ConsultationRequest {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  consultationType: ConsultationType;
  preferredDate?: string;
  preferredTimeSlot?: 'morning' | 'afternoon' | 'evening';
  interestedDivisions: ('bespoke_western' | 'ceremonial_heritage' | 'corporate_uniform_studio')[];
  specificGarmentInterests?: string[];
  estimatedTimeline?: 'immediate' | '1_to_2_months' | 'ceremony_wedding_season' | 'corporate_fiscal_cycle';
  specialRequirements?: string;
  createdAt?: string;
}

export interface ClientMeasurementProfile {
  id: string;
  clientRef: string;
  unit: 'inches' | 'centimeters';
  measurements: {
    chest: number;
    waist: number;
    hips: number;
    shoulderWidth: number;
    sleeveLength: number;
    neck: number;
    jacketLength: number;
    trouserWaist: number;
    inseam: number;
    outseam: number;
    thigh: number;
    trouserCuff: number;
  };
  postureProfile: {
    shoulderSlope: 'regular' | 'square' | 'sloping';
    postureType: 'erect' | 'normal' | 'stooped';
    chestProfile: 'flat' | 'regular' | 'prominent';
  };
  masterTailorNotes: string;
  lastUpdated: string;
}

export interface CorporateUniformBrief {
  id?: string;
  companyName: string;
  industry: 'Hospitality & Luxury Hotels' | 'Aviation & Transit' | 'Corporate Financial & Tech' | 'Healthcare' | 'Elite Educational Institutions' | 'Other';
  contactPerson: string;
  workEmail: string;
  contactNumber: string;
  headquartersCity: string;
  projectScope: {
    estimatedHeadcount: number;
    departments: string[];
    requiredGarments: string[]; // e.g. Executive Suits, Reception Blazers, Shirts, Hospitality Aprons, Ties
    targetDeliveryDate?: string;
    customEmbroideryNeeded: boolean;
  };
  existingBrandGuidelinesProvided: boolean;
  additionalNotes?: string;
}
