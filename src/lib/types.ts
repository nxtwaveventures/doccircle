export interface Doctor {
  id: string;
  name: string;
  phone: string;
  email?: string;
  qualification: 'MBBS' | 'MD' | 'MS' | 'DNB';
  specialty: string;
  location: string;
  city: string;
  state: string;
  registrationNumber: string;
  yearsExperience: number;
  consultationFee: number;
  isSpecialist: boolean;
  avatar?: string;
  circle?: string[];
  status: 'active' | 'inactive';
  subscription?: 'starter' | 'pro' | 'enterprise';
  createdAt: Date;
}

export interface Case {
  id: string;
  doctorId: string;
  patientName: string;
  patientAge: number;
  patientGender: 'male' | 'female' | 'other';
  symptoms: string[];
  symptomDescription: string;
  duration: string;
  isEmergency: boolean;
  emergencyType?: EmergencyType;
  previousMedications?: string;
  reports?: string[];
  images?: string[];
  preferredConsultation: 'chat' | 'audio' | 'video';
  status: 'pending' | 'in_progress' | 'completed' | 'closed' | 'urgent';
  specialistId?: string;
  consultationNotes?: string;
  prescription?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Circle {
  id: string;
  name: string;
  ownerId: string;
  members: string[];
  createdAt: Date;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  casesPerMonth: number;
  aiFeatures: boolean;
  circleSize: number;
  features: string[];
}

export type EmergencyType = 
  | 'snake_bite'
  | 'diarrhea_severe'
  | 'dengue'
  | 'malaria'
  | 'drowning'
  | 'burns'
  | 'poisoning'
  | 'seizure'
  | 'asthma_attack'
  | 'heart_emergency'
  | 'other';

export interface EmergencyProtocol {
  type: EmergencyType;
  name: string;
  emoji: string;
  severity: 'critical' | 'urgent' | 'moderate';
  immediateActions: string[];
  warnings: string[];
  whenToRefer: string[];
  commonSymptoms: string[];
}

export const emergencyProtocols: EmergencyProtocol[] = [
  {
    type: 'snake_bite',
    name: 'Snake Bite',
    emoji: '🐍',
    severity: 'critical',
    immediateActions: [
      'Keep patient calm and still',
      'Immobilize the affected limb',
      'Remove tight jewelry/clothing',
      'Do NOT apply tourniquet or cut wound',
      'Do NOT try to suck poison',
      'Position affected limb below heart level',
      'Monitor breathing continuously',
      'Prepare for ASV (Anti-Snake Venom) transfer'
    ],
    warnings: [
      'Do not apply ice',
      'Do not give alcohol',
      'Do not apply electric shock',
      'Time is critical - act fast'
    ],
    whenToRefer: [
      'All snake bites require hospital assessment',
      'If swelling progresses beyond bite site',
      'If breathing becomes difficult',
      'If ptosis or drooping occurs'
    ],
    commonSymptoms: ['fang marks', 'severe pain', 'swelling', 'blurred vision', 'drooping eyelids', 'difficulty breathing']
  },
  {
    type: 'diarrhea_severe',
    name: 'Severe Diarrhea (Dehydration)',
    emoji: '💧',
    severity: 'urgent',
    immediateActions: [
      'Start ORS immediately',
      'If no ORS, make home solution (salt+sugar+water)',
      'Continue breastfeeding if infant',
      'Give zinc supplements if available',
      'Monitor urine output',
      'Check for sunken eyes, dry mouth'
    ],
    warnings: [
      'Do not stop feeding',
      'Do not give plain water only',
      'Do not give antibiotics without advice'
    ],
    whenToRefer: [
      'If unable to drink/keep fluids down',
      'If blood in stool',
      'If fever persists >48 hours',
      'If signs of severe dehydration',
      'If child is <6 months old'
    ],
    commonSymptoms: ['watery stools', 'vomiting', 'dehydration signs', 'fever', 'abdominal cramps']
  },
  {
    type: 'dengue',
    name: 'Dengue Fever',
    emoji: '🦟',
    severity: 'urgent',
    immediateActions: [
      'Give paracetamol for fever (NOT ibuprofen/aspirin)',
      'Ensure adequate fluid intake',
      'Monitor platelet count if possible',
      'Watch for warning signs',
      'Keep patient in mosquito net'
    ],
    warnings: [
      'Avoid ibuprofen, naproxen, aspirin',
      'Avoid intramuscular injections',
      'Watch for sudden drop in platelets'
    ],
    whenToRefer: [
      'If platelet count <20,000',
      'If bleeding from nose/gums',
      'If severe abdominal pain',
      'If persistent vomiting',
      'If confusion/lethargy',
      'If skin rash appears after fever'
    ],
    commonSymptoms: ['high fever', 'severe headache', 'joint pain', 'muscle pain', 'rash', 'behind eyes pain']
  },
  {
    type: 'malaria',
    name: 'Malaria',
    emoji: '🦠',
    severity: 'urgent',
    immediateActions: [
      'Test with RDT (Rapid Diagnostic Test)',
      'Start ACT (Artemisinin-based Combination Therapy) if positive',
      'Give paracetamol for fever',
      'Ensure complete bed rest',
      'Monitor temperature'
    ],
    warnings: [
      'Do not delay treatment',
      'Complete full course of medicine',
      'Do not use monotherapy'
    ],
    whenToRefer: [
      'If Pf (P.falciparum) positive',
      'If severe symptoms',
      'If unable to swallow medication',
      'If pregnant woman affected'
    ],
    commonSymptoms: ['high fever with chills', 'sweating', 'severe headache', 'nausea', 'muscle pain', 'fatigue']
  },
  {
    type: 'drowning',
    name: 'Drowning',
    emoji: '🌊',
    severity: 'critical',
    immediateActions: [
      'Remove from water immediately',
      'Check breathing - if not breathing, start CPR',
      'If breathing, place in recovery position',
      'Keep warm with blankets',
      'Give oxygen if available',
      'Monitor until ambulance arrives'
    ],
    warnings: [
      'Do not try to drain water from lungs',
      'Do not assume victim is dead',
      'CPR is crucial - keep trying'
    ],
    whenToRefer: [
      'All cases require hospital observation',
      'If victim was submerged >1 minute',
      'If CPR was required',
      'If unconscious'
    ],
    commonSymptoms: ['no breathing', 'coughing', 'confusion', 'blue lips']
  },
  {
    type: 'burns',
    name: 'Burns',
    emoji: '🔥',
    severity: 'urgent',
    immediateActions: [
      'Cool burn under running water for 10-20 mins',
      'Remove jewelry/clothing near burn',
      'Cover with clean, non-stick cloth',
      'Give pain relief',
      'Do NOT apply ice, butter, or toothpaste'
    ],
    warnings: [
      'Do not break blisters',
      'Do not apply adhesive bandages directly',
      'Do not remove stuck clothing'
    ],
    whenToRefer: [
      'If burns >10% body surface',
      'If face, hands, feet, genitals affected',
      'If electrical or chemical burn',
      'If child <5 years with burns',
      'If breathing affected (airway burn)'
    ],
    commonSymptoms: ['red skin', 'blisters', 'swelling', 'severe pain', 'charred skin']
  },
  {
    type: 'poisoning',
    name: 'Poisoning',
    emoji: '☠️',
    severity: 'critical',
    immediateActions: [
      'Call poison control immediately',
      'Identify poison if possible',
      'Do NOT induce vomiting unless told',
      'If on skin, wash with water',
      'If in eyes, flush with water',
      'Keep sample of poison/packaging'
    ],
    warnings: [
      'Do not give milk as antidote',
      'Do not neutralize poison',
      'Do not induce vomiting for petroleum products'
    ],
    whenToRefer: [
      'All poisoning cases need hospital',
      'If unconscious',
      'If seizures occur',
      'If difficulty breathing'
    ],
    commonSymptoms: ['nausea', 'vomiting', 'confusion', 'difficulty breathing', 'burns around mouth']
  },
  {
    type: 'seizure',
    name: 'Seizure/Convulsions',
    emoji: '⚡',
    severity: 'critical',
    immediateActions: [
      'Protect from injury - move away dangerous objects',
      'Place on side (recovery position)',
      'Do NOT put anything in mouth',
      'Do NOT restrain movements',
      'Time the seizure',
      'After seizure, keep calm and reassure'
    ],
    warnings: [
      'Do not put fingers in mouth',
      'Do not hold down the person',
      'Do not give food/water until fully awake'
    ],
    whenToRefer: [
      'If first seizure',
      'If seizure >5 minutes',
      'If multiple seizures',
      'If does not wake up between seizures',
      'If pregnant or diabetic'
    ],
    commonSymptoms: ['uncontrolled shaking', 'stiffening', 'loss of consciousness', 'rolling eyes', 'drooling']
  },
  {
    type: 'asthma_attack',
    name: 'Asthma Attack',
    emoji: '😮‍💨',
    severity: 'urgent',
    immediateActions: [
      'Sit upright and reassure',
      'Give rescue inhaler (2 puffs, repeat every 2 mins)',
      'Use spacer if available',
      'Loosen tight clothing',
      'If no improvement, repeat inhaler',
      'Keep patient in fresh air'
    ],
    warnings: [
      'Do not give lying position',
      'Do not use unfamiliar medicines',
      'Act fast - can be fatal'
    ],
    whenToRefer: [
      'If no inhaler available',
      'If no improvement after 10 puffs',
      'If difficulty speaking',
      'If lips turn blue',
      'If collapse'
    ],
    commonSymptoms: ['wheezing', 'difficulty breathing', 'chest tightness', 'coughing', 'fast breathing']
  },
  {
    type: 'heart_emergency',
    name: 'Heart Emergency',
    emoji: '❤️',
    severity: 'critical',
    immediateActions: [
      'Make patient comfortable (semi-sitting)',
      'Give aspirin (300mg) if conscious',
      'Call ambulance immediately',
      'Monitor vitals',
      'Be ready for CPR if needed',
      'Keep calm and reassure'
    ],
    warnings: [
      'Do not give if allergic to aspirin',
      'Do not give to unconscious person',
      'Time is critical'
    ],
    whenToRefer: [
      'All chest pain cases',
      'If pain radiates to arm/jaw',
      'If associated with sweating/nausea',
      'If shortness of breath'
    ],
    commonSymptoms: ['chest pain', 'pain in left arm', 'shortness of breath', 'sweating', 'nausea', 'pain in jaw']
  }
];

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 1500,
    casesPerMonth: 20,
    aiFeatures: true,
    circleSize: 3,
    features: [
      '20 cases per month',
      'Basic AI tools (MedGemma)',
      '3 specialists in circle',
      'Chat consultations',
      'Case history'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 3500,
    casesPerMonth: 75,
    aiFeatures: true,
    circleSize: 10,
    features: [
      '75 cases per month',
      'Full MedGemma AI suite',
      '10 specialists in circle',
      'Audio & Video calls',
      'Priority support',
      'E-prescriptions'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 7500,
    casesPerMonth: -1,
    aiFeatures: true,
    circleSize: -1,
    features: [
      'Unlimited cases',
      'Full MedGemma AI + API',
      'Unlimited circle',
      'Audio & Video calls',
      '24/7 priority support',
      'White-label',
      'Custom training'
    ]
  }
];

export const specialties = [
  'Pediatrics',
  'Cardiology',
  'Neurology',
  'Dermatology',
  'Orthopedics',
  'ENT',
  'Ophthalmology',
  'Psychiatry',
  'General Medicine',
  'Gynecology',
  'Ayurveda',
  'Homeopathy',
  'Emergency Medicine',
  ' Tropical Medicine'
];

export const indianStates = [
  'Telangana',
  'Andhra Pradesh',
  'Maharashtra',
  'Karnataka',
  'Tamil Nadu',
  'Uttar Pradesh',
  'Madhya Pradesh',
  'Rajasthan',
  'West Bengal',
  'Bihar',
  'Odisha',
  'Jharkhand',
  'Chhattisgarh',
  'Uttarakhand',
  'Haryana',
  'Punjab',
  'Kerala',
  'Gujarat'
];

// Rural-specific common conditions
export const ruralCommonConditions = [
  'Fever (General)',
  'Cough and Cold',
  'Diarrhea/Gastroenteritis',
  'Wound Care',
  'Skin Infections',
  'Malaria',
  'Dengue',
  'Typhoid',
  'Snake Bite',
  'Animal Bites',
  'Burns',
  'Joint Pain',
  'Anemia',
  'Undernutrition',
  'Respiratory Infections',
  'Ear/Nose/Throat Problems',
  'Eye Infections',
  'Urinary Infections',
  'Seizures',
  'Asthma'
];

// MedGemma AI Integration
export interface MedGemmaAnalysis {
  symptomAnalysis: {
    possibleConditions: { name: string; probability: number; severity: string }[];
    recommendedTests: string[];
  };
  emergencyAssessment: {
    isEmergency: boolean;
    urgencyLevel: 'critical' | 'urgent' | 'moderate' | 'low';
    immediateActions: string[];
    referralRecommendation: string;
  };
  treatmentSuggestions: {
    immediate: string[];
    shortTerm: string[];
    whenToEscalate: string[];
  };
  specialistRecommendation: string[];
}

export const getEmergencyProtocol = (type: EmergencyType): EmergencyProtocol | undefined => {
  return emergencyProtocols.find(p => p.type === type);
};

export const getEmergencyBySymptom = (symptoms: string[]): EmergencyProtocol[] => {
  const symptomSet = symptoms.map(s => s.toLowerCase());
  return emergencyProtocols.filter(protocol => 
    protocol.commonSymptoms.some(s => symptomSet.some(symptom => symptom.includes(s) || s.includes(symptom)))
  );
};
