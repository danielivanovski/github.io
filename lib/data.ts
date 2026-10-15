import { MassageService, Therapist, HealthBenefit } from './types';

export const SALON_INFO = {
  name: 'СОНИТА МАСАЖА',
  nameEn: 'Sonita Massage Therapy',
  tagline: 'Професионална масажа, спа релаксација и терапевтска нега',
  phone: '078 377 387',
  phoneIntl: '+38978377387',
  phoneFormatted: '078 377 387',
  viberNumber: '+38978377387',
  whatsappNumber: '38978377387',
  instagramHandle: 'sonitamassage',
  instagramUrl: 'https://instagram.com/sonitamassage',
  workingHours: {
    weekdays: '09:00 - 20:00',
    saturday: '10:00 - 18:00',
    sunday: 'По договор',
  },
};

// Services from the authentic salon materials (no prices, only authentic treatments)
export const SERVICES: MassageService[] = [
  {
    id: 'deep-tissue',
    title: 'Длабоко-ткивна масажа',
    titleEn: 'Deep Tissue Massage',
    category: 'therapeutic',
    duration: 60,
    priceMkd: 0,
    description: 'Интензивен и прецизен терапевтски притисок кој навлегува во подлабоките слоеви на мускулите и фасцијата за отстранување на хронична вкочанетост и мускулни блокади.',
    benefits: ['Ослободување од болки во грбот и вратот', 'Подобрена подвижност на телото', 'Намалување на хроничен замор'],
    image: '/images/viber_image_2026-10-15_15-50-51-320.jpg',
  },
  {
    id: 'cavitation-slimming',
    title: 'Ултразвучна кавитација & Апаративно оформување',
    titleEn: 'Body Contouring & Ultrasonic Cavitation',
    category: 'aesthetic',
    duration: 45,
    priceMkd: 0,
    description: 'Неинвазивен апаративен третман со високофреквентен ултразвук за разградување на локализирани масни наслаги, затегнување на кожата и намалување на целулит.',
    benefits: ['Намалување на масни перничиња', 'Затегнување на опуштена кожа', 'Стимулација на колаген'],
    image: '/images/viber_image_2026-10-15_15-50-50-773.jpg',
  },
  {
    id: 'relax-aroma',
    title: 'Релакс масажа & Ароматерапија',
    titleEn: 'Relaxing Massage & Aromatherapy',
    category: 'relax',
    duration: 60,
    priceMkd: 0,
    description: 'Смирувачка масажа со природни етерични масла во топол свеќи-амбиент за целосна мускулна релаксација и ментален одмор.',
    benefits: ['Длабок ментален мир', 'Смирување на нервниот систем', 'Хранење и хидратација на кожата'],
    image: '/images/viber_image_2026-10-15_12-41-46-303.jpg',
  },
  {
    id: 'facials-head',
    title: 'Третмани на лице & Масажа на глава',
    titleEn: 'Facials & Head Massage',
    category: 'beauty',
    duration: 45,
    priceMkd: 0,
    description: 'Нежен лимфен и акупресурен третман на лицето, слепоочниците и скалпот за намалување на замор и природен свеж сјај.',
    benefits: ['Природен лифтинг ефект', 'Намалување на стрес и главоболка', 'Сјаен и освежен тен'],
    image: '/images/viber_image_2026-10-15_15-50-51-352.jpg',
  },
  {
    id: 'trigger-point',
    title: 'Тригер точка терапија & Рефлексологија',
    titleEn: 'Trigger Point & Reflexology',
    category: 'therapeutic',
    duration: 50,
    priceMkd: 0,
    description: 'Специјализирана метода со фокус на болните мускулни јазли и рефлексни зони на стапалата и грбот за брзо ослободување од тензија.',
    benefits: ['Целно третирање на мускулни јазли', 'Инстантно олеснување на тензија', 'Спречува повторна болка'],
    image: '/images/viber_image_2026-10-15_12-41-45-586.jpg',
  },
  {
    id: 'spa-ambience',
    title: 'Спа релаксација & Амбиентален третман',
    titleEn: 'Spa Ambience & Relaxation',
    category: 'relax',
    duration: 60,
    priceMkd: 0,
    description: 'Топол салонски амбиент со природни мириси, свеќи и релаксирачки масажи за комплетно ослободување од секојдневен стрес.',
    benefits: ['Топол салонски амбиент', 'Свеќи и етерични масла', 'Длабок спокој'],
    image: '/images/viber_image_2026-10-15_15-47-53-651.jpg',
  },
];

// Certified team is DANIEL & SOFIJA as instructed!
export const THERAPISTS: Therapist[] = [
  {
    id: 'sofija',
    name: 'Софија',
    role: 'Сертифициран терапевт за масажа & естетика',
    specialty: 'Терапевтска масажа, релакс ароматерапија, третмани на лице и апаративна кавитација',
    bio: 'Посветена на холистичка релаксација, прецизен притисок и пријатна спа атмосфера прилагодена на секој клиент.',
    experienceYears: 7,
  },
  {
    id: 'daniel',
    name: 'Даниел',
    role: 'Сертифициран физиотерапевт & Масер',
    specialty: 'Длабоко ткиво, спортска масажа, рехабилитација и тригер точки',
    bio: 'Специјализиран за отстранување на хронични болки во грбот, вратот и нозете со стручен медицински и физиотерапевтски пристап.',
    experienceYears: 8,
  },
];

// Health benefits from the uploaded medical poster
export const HEALTH_BENEFITS: HealthBenefit[] = [
  {
    id: 'b-stress',
    title: 'Намалување на стресот',
    titleEn: 'Reduces Stress',
    description: 'Го намалува нивото на кортизол, го стимулира лачењето на ендорфин и овозможува длабок ментален и емоционален одмор.',
    iconName: 'Heart',
  },
  {
    id: 'b-circulation',
    title: 'Подобрување на циркулацијата',
    titleEn: 'Helps Improve Circulation',
    description: 'Го забрзува протокот на кислород и хранливи материи до мускулите и ткивата преку засилена капиларна дренажа.',
    iconName: 'Droplets',
  },
  {
    id: 'b-bp',
    title: 'Намалување на крвниот притисок',
    titleEn: 'Helps Lower Blood Pressure',
    description: 'Го релаксира вазомоторниот тонус на крвните садови и го нормализира пулсот преку смирување на нервниот систем.',
    iconName: 'Activity',
  },
  {
    id: 'b-posture',
    title: 'Подобрување на држењето на телото',
    titleEn: 'Helps Improve Posture',
    description: 'Ги опушта скратените мускули на градите, вратот и грбот предизвикани од долго седење и неправилна положба.',
    iconName: 'MoveUpRight',
  },
  {
    id: 'b-muscle',
    title: 'Мускулна релаксација',
    titleEn: 'Promotes Muscle Relaxation',
    description: 'Ги разградува болните тригер точки, ја отстранува млечната киселина и ја враќа природната еластичност на мускулите.',
    iconName: 'Sparkles',
  },
  {
    id: 'b-immune',
    title: 'Зајакнување на имунолошкиот систем',
    titleEn: 'Helps Strengthen the Body’s Immune System',
    description: 'Ја активира лимфната течност која ги исфрла токсините од телото и помага во природната одбрана на организмот.',
    iconName: 'ShieldCheck',
  },
];
