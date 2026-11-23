/**
 * Homepage content and link targets, kept in one place so copy edits and the
 * future partner handoff don't require touching components.
 *
 * NOTE: Prices, clinician claims (board certification, 50-state licensure) and
 * pharmacy claims come from the approved designs but must be verified with the
 * clinical partner before launch.
 */

export const links = {
  // Homepage anchors are written as "/#…" so they also work from other pages.
  // TODO: point at the patient sign-up/assessment flow once a partner is chosen.
  getStarted: "/#programs",
  programs: "/#programs",
  forOrganizations: "/#for-organizations",
  advancedWellness: "/#advanced-wellness",
  knowledgeHub: "/knowledge-hub",
  providers: "/providers",
  affiliatesPage: "/affiliates",
  // TODO: confirm the partnerships inbox (or swap for a partner form page).
  partner: "mailto:partners@semperahealth.com",
  // TODO: replace with the affiliate/ambassador sign-up once it exists.
  affiliates: "mailto:partners@semperahealth.com",
} as const;

export const navItems = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Explore Care", href: "/explore-care" },
  { label: "Pricing", href: "/pricing" },
  { label: "Our Clinicians", href: "/clinical-care" },
  { label: "Pharmacy", href: "/pharmacy" },
] as const;

/** Secondary links grouped under "More" in the header. */
export const moreNavItems = [
  { label: "Health Insurance", href: "/health-insurance" },
  { label: "Diagnostics", href: "/diagnostics" },
  { label: "For Providers", href: "/providers" },
  { label: "Affiliates & Ambassadors", href: "/affiliates" },
  { label: "For Organizations", href: "/#for-organizations" },
  { label: "Knowledge Hub", href: "/knowledge-hub" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const hero = {
  title: "Health optimized for the life ahead.",
  description: "Personalized longevity, wellness, and preventive healthcare.",
  image: "/images/hero.webp",
  imageAlt: "Smiling woman resting on a rocky summit above a mountain valley",
  // Drop an optimized ~15s MP4 into /public/media and set the path to enable
  // the hero video on larger screens. The image stays as poster and fallback.
  video: null as string | null,
};

export type Program = {
  tag: string;
  title: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
  /** Photo without the navy fade baked in, so the card adds a stronger one for legible text. */
  plainPhoto?: boolean;
  /** Fallback art direction while photography is pending. */
  tint: string;
};

export const programs: Program[] = [
  {
    tag: "Weight & Metabolic Health",
    title: "Move toward your healthiest weight",
    description: "Personalized support for weight management and metabolic wellness.",
    href: links.getStarted,
    tint: "from-[#5f8fa6] via-[#3d6a87] to-navy",
    image: "/images/explore/metabolic.webp",
    imageAlt: "Woman chopping fresh peppers and greens in a bright kitchen",
    plainPhoto: true,
  },
  {
    tag: "Hormone Health",
    title: "Find your balance",
    description: "Clinically guided care for hormone-related goals.",
    href: links.getStarted,
    tint: "from-[#9aa98f] via-[#5f7d78] to-navy",
    image: "/images/programs/hormone-balance.webp",
    imageAlt: "Group of adults holding a balancing yoga pose in a bright studio",
  },
  {
    tag: "NAD+ & Cellular Wellness",
    title: "Support your body at the cellular level",
    description: "Explore approaches focused on cellular wellness, energy, and healthy aging.",
    href: links.getStarted,
    tint: "from-[#8fd0cf] via-[#4b9aa5] to-navy",
    image: "/images/programs/nad-cellular.webp",
    imageAlt: "Illustration of translucent cells on a soft teal background",
  },
  {
    tag: "Peptide Therapies",
    title: "New possibilities for personalized wellness",
    description:
      "Access a broad range of peptide therapies as part of Sempera’s advanced wellness offerings.",
    href: links.getStarted,
    tint: "from-[#d9d4cc] via-[#8a9aa8] to-navy",
    image: "/images/programs/peptides.webp",
    imageAlt: "Clinician drawing medication from a vial into a small syringe",
  },
  {
    tag: "Skin, Hair & Aesthetic Wellness",
    title: "Feel confident in your skin",
    description: "Personalized options for skin, hair, appearance, and aesthetic goals.",
    href: links.getStarted,
    tint: "from-[#c99a73] via-[#7d6a6a] to-navy",
    image: "/images/programs/skin.webp",
    imageAlt: "Woman relaxing during a facial treatment with a gloved aesthetician",
  },
];

export const steps = [
  {
    number: "01",
    title: "Take an assessment",
    description: "Tell us about yourself, your goals, and what you’re looking to accomplish.",
    image: "/images/step-1-assessment.webp",
    imageAlt:
      "Woman at home on her laptop beside a health assessment card listing goals, current health, lifestyle, and medical history",
  },
  {
    number: "02",
    title: "Speak with our clinicians",
    description: "Connect with a licensed clinician for a personalized consultation from home.",
    image: "/images/step-2-clinicians.webp",
    imageAlt: "Woman on a video consultation with a clinician on her laptop",
  },
  {
    number: "03",
    title: "Get your prescriptions",
    description:
      "Receive your care plan and prescriptions, delivered directly to your door, when clinically appropriate.",
    image: "/images/step-3-prescriptions.webp",
    imageAlt: "Woman unpacking a home delivery beside a card tracking her prescription status",
  },
  {
    number: "04",
    title: "Follow-Up Care",
    description: "Ongoing support and follow-up care to ensure your treatment is working for you.",
    image: "/images/step-4-follow-up.webp",
    imageAlt: "Woman on her sofa using her phone beside a follow-up care card",
  },
] as const;

export const clinicianPoints = [
  "Board-certified physicians & nurse practitioners",
  "Licensed across all 50 states",
  "Specialized in wellness & functional medicine",
  "Available for follow-up and ongoing care",
] as const;

export const pricing = [
  {
    tag: "GLP-1s",
    price: "$65",
    unit: "/month",
    description: "Weight management with semaglutide and tirzepatide",
    href: links.getStarted,
  },
  {
    tag: "Provider Consultation",
    price: "$50",
    description: "One-on-one consultation with a licensed clinician",
    href: links.getStarted,
  },
  {
    tag: "Hormone Health",
    price: "$175",
    description: "Comprehensive hormone panel + personalized plan",
    href: links.getStarted,
  },
  {
    tag: "Diagnostics",
    price: "$99",
    description: "At-home lab testing with clinician review",
    href: links.getStarted,
  },
] as const;

export const commitments = [
  "No required monthly membership / subscription",
  "No insurance required",
  "No contracts",
] as const;

export const audiences = [
  {
    title: "Healthcare providers",
    description: "Extend your practice with ready-to-launch programs and clinical support.",
  },
  {
    title: "Wellness clinics & med spas",
    description: "Offer clinically guided wellness programs alongside your existing services.",
  },
  {
    title: "Employers",
    description: "Give your team convenient access to preventive and wellness care.",
  },
  {
    title: "Health organizations",
    description: "Partner on distribution and access for the communities you serve.",
  },
] as const;

export const faqs = [
  {
    question: "How does Sempera work?",
    answer:
      "Choose a program, complete a short online assessment, and connect with a licensed clinician. If treatment is appropriate, your care plan and any prescriptions are coordinated for you, followed by ongoing check-ins.",
  },
  {
    question: "Will I speak with a real clinician?",
    answer:
      "Yes. Every care plan is reviewed by a licensed clinician. Depending on the program, your consultation may happen by video or through a secure online review.",
  },
  {
    question: "Am I guaranteed a prescription?",
    answer:
      "No. Your clinician decides whether treatment is right for you based on your health history and goals. Not everyone will be eligible for every program.",
  },
  {
    question: "Who is eligible?",
    answer:
      "Eligibility depends on the program, your health history, and where you live. Your assessment helps determine which options may be appropriate.",
  },
  {
    question: "How does payment work?",
    answer:
      "Pricing is shown up front for each program. Payment is completed securely during sign-up. Insurance is not required, and there are no long-term contracts.",
  },
  {
    question: "What happens after I start treatment?",
    answer:
      "You’ll have follow-up check-ins with your care team, can message them with questions, and your plan can be adjusted as your needs change.",
  },
  {
    question: "Can my organization partner with Sempera?",
    answer:
      "Yes. We work with providers, wellness clinics, med spas, employers, and health organizations to bring modern health programs to the people they serve. Reach out through the partner link to start a conversation.",
  },
] as const;

/* ---------- Advanced Wellness & Longevity page ---------- */

export const wellnessCategories = [
  { label: "Peptide Therapies", image: "/images/wellness/dropper-bottle.webp", imageAlt: "Hands holding an amber dropper bottle among green plants" },
  { label: "NAD+ & Cellular Wellness", image: "/images/wellness/molecules.webp", imageAlt: "Close-up illustration of glass-like molecules on a teal background" },
  { label: "Hormone Health", image: "/images/wellness/balanced-stones.webp", imageAlt: "Three smooth grey stones balanced in a stack beside a green sprig" },
  { label: "Metabolic Health", image: "/images/wellness/whole-foods.webp", imageAlt: "Leafy greens, half an avocado, blueberries and a glass of water on a kitchen counter" },
  { label: "Healthy Aging", image: "/images/wellness/woman-morning-coffee.webp", imageAlt: "Woman in a navy sweater relaxing with a mug by a bright window" },
  { label: "Recovery & Performance", image: "/images/wellness/dumbbells-yoga-mat.webp", imageAlt: "Blue dumbbells, a water bottle and a rolled yoga mat on a wooden floor" },
  { label: "Skin & Hair Wellness", image: "/images/wellness/loose-leaf-tea.webp", imageAlt: "Woman adding loose-leaf tea to a strainer beside a glass teapot" },
] as const;

/* ---------- Knowledge Hub ---------- */

// Placeholder teasers until real articles exist; "Read more" points at the hub.
export const articles = [
  {
    category: "Weight Health",
    readTime: "6 min read",
    title: "Understanding GLP-1 Medications: What They Are and How They Work",
    excerpt:
      "A comprehensive look at the science behind semaglutide and tirzepatide, and what to expect on your weight management journey.",
    image: "/images/wellness/whole-foods.webp",
    imageAlt: "Leafy greens, half an avocado, blueberries and a glass of water on a kitchen counter",
    href: links.knowledgeHub,
  },
  {
    category: "Hormone Health",
    readTime: "4 min read",
    title: "Signs Your Hormones May Be Out of Balance",
    image: "/images/wellness/woman-morning-coffee.webp",
    imageAlt: "Woman in a navy sweater relaxing with a mug by a bright window",
    href: links.knowledgeHub,
  },
  {
    category: "Recovery & Performance",
    readTime: "5 min read",
    title: "Why Rest Matters as Much as Training",
    image: "/images/wellness/running-shoes.webp",
    imageAlt: "Running shoes, a folded towel, a water bottle and a rolled yoga mat",
    href: links.knowledgeHub,
  },
  {
    category: "Health Education",
    readTime: "3 min read",
    title: "How to Prepare for Your First Telehealth Visit",
    image: "/images/wellness/journal-reading-nook.webp",
    imageAlt: "Open notebook and pencil on a round wooden table beside an armchair",
    href: links.knowledgeHub,
  },
] as const;

/* ---------- Health Insurance ---------- */

export const insuranceTopics = ["Weight", "Hormones", "NAD+", "Peptides", "Skin & Hair"] as const;

/* ---------- Provider Partners ---------- */

export const providerBenefits = [
  "Referral network for your patients",
  "Co-branded care programs",
  "Clinical collaboration opportunities",
  "Revenue sharing partnerships",
] as const;

/* ---------- Affiliates & Ambassadors ---------- */

export const affiliateBenefits = [
  { title: "Competitive commissions", description: "Earn on every referral" },
  { title: "Ambassador Program", description: "Exclusive brand benefits" },
  { title: "Community Access", description: "Join our wellness network" },
  { title: "Co-Created Content", description: "Collaboration opportunities" },
] as const;

/* ---------- Pricing page (/pricing) ---------- */
// NOTE: Hormone Health is $179 in the pricing-page design but $175 on the
// homepage design — confirm the correct price before launch.

export const pricingPlans = [
  {
    tag: "GLP-1s",
    keepCase: true,
    price: "$65",
    unit: "/month",
    description: "Access to prescription GLP-1 treatment when clinically appropriate.",
    icon: "/images/icons/glp1-pen.webp",
    href: links.getStarted,
  },
  {
    tag: "Provider Consultation",
    price: "$50",
    description: "Connect with one of our clinicians for personalized clinical guidance.",
    icon: "/images/icons/consultation.webp",
    href: links.getStarted,
  },
  {
    tag: "Hormone Health",
    price: "$179",
    description: "Includes your provider consultation.",
    icon: "/images/icons/hormones.webp",
    href: links.getStarted,
  },
  {
    tag: "Diagnostics",
    price: "$99",
    description: "Testing when clinically appropriate to help inform your care.",
    icon: "/images/icons/diagnostics.webp",
    href: links.getStarted,
  },
] as const;

export const pricingDifference = [
  { title: "No insurance required", description: "You can access Sempera without health insurance." },
  { title: "No contracts", description: "You are never locked into a long-term commitment." },
  {
    title: "No required monthly membership",
    description: "You don’t have to pay a recurring membership fee to access care.",
  },
  {
    title: "No required subscription",
    description: "Choose the care you need without committing to an ongoing subscription.",
  },
] as const;

export const pricingSteps = [
  {
    title: "Choose what you’re looking for",
    description: "Start with a care area or tell us what you’re hoping to accomplish.",
    icon: "/images/icons/step-choose.webp",
  },
  {
    title: "Complete your assessment",
    description: "Share information about your goals and needs.",
    icon: "/images/icons/step-assessment.webp",
  },
  {
    title: "Meet with our clinicians",
    description: "Your clinician evaluates your needs and determines what may be appropriate.",
    icon: "/images/icons/step-clinician.webp",
  },
  {
    title: "Pay for the care you choose",
    description:
      "If treatment, prescriptions or testing are appropriate, you’ll know what you are paying for.",
    icon: "/images/icons/step-pay.webp",
  },
] as const;

export const additionalCosts = [
  "Prescription medications",
  "Pharmacy fulfillment or shipping where applicable",
  "Specific treatments or therapies",
  "Follow-up consultation when needed",
  "Diagnostic testing",
  "Other services",
] as const;

/* ---------- Clinical Care page (/clinical-care) ---------- */
// NOTE: clinician types and "nationwide access" must be confirmed with the
// clinical partner before launch.

export const clinicalTeam = [
  "Licensed physicians",
  "Nurse practitioners",
  "Physician assistants",
  "Nationwide access, subject to licensure and availability",
  "Clinical oversight",
  "Telehealth convenience",
] as const;

export const careAreas = [
  "Hormone Health",
  "Peptide Therapies",
  "NAD+ & Cellular Wellness",
  "Skin, Hair & Aesthetic Wellness",
  "Longevity & Preventive Wellness",
  "Energy, Sleep & Recovery",
  "Gut & Immune Wellness",
  "Performance & Lifestyle",
] as const;

export const careJourney = [
  { title: "Tell us what you’re looking for.", description: "Share your goals and a little about yourself." },
  { title: "Meet with a clinician.", description: "Connect through a convenient telehealth consultation." },
  {
    title: "Determine what’s appropriate.",
    description: "Your clinician discusses options and makes clinical decisions.",
  },
  {
    title: "Get your prescriptions.",
    description: "When appropriate, fulfillment is coordinated with pharmacy partners.",
  },
  { title: "Continue your care.", description: "Reconnect when follow-up support is appropriate." },
] as const;

/* ---------- Pharmacy page ---------- */

export const pharmacyNetwork = [
  {
    title: "Quality Matters.",
    description:
      "Pharmacy partners follow the standards and requirements applicable to their facilities and the prescriptions they fulfill.",
    tone: "navy",
  },
  {
    title: "Pricing Matters.",
    description:
      "The network helps Sempera consider fulfillment options and provide clearer cost information when it is available.",
    tone: "white",
  },
  {
    title: "Availability Matters.",
    description: "Access can vary by medication, formulation, state, pharmacy capacity, and applicable requirements.",
    tone: "white",
  },
  {
    title: "Your Experience Matters.",
    description:
      "Clinical care, fulfillment updates, delivery, and follow-up should feel like parts of one considered experience.",
    tone: "teal",
  },
] as const;

export const compoundingTypes = [
  {
    eyebrow: "Traditional Compounding",
    code: "503A",
    title: "Made for an individual patient.",
    description:
      "A 503A compounding pharmacy generally prepares a medication for a specific patient based on a valid prescription from a licensed clinician.",
    points: [
      "Patient-specific prescription",
      "Prepared by a compounding pharmacy",
      "Subject to state and applicable federal requirements",
    ],
  },
  {
    eyebrow: "Outsourcing Facility",
    code: "503B",
    title: "Prepared under a different framework.",
    description:
      "A 503B outsourcing facility may compound certain medications under a separate federal framework and is subject to additional manufacturing and reporting requirements.",
    points: [
      "Registered outsourcing facility",
      "Different operational requirements",
      "Availability depends on medication and applicable requirements",
    ],
  },
] as const;

export const careFlow = [
  { title: "Clinical Care", icon: "/images/pharmacy/icon-clinical-care.webp" },
  { title: "Treatment", icon: "/images/pharmacy/icon-treatment.webp" },
  { title: "Pharmacy Fulfillment", icon: "/images/pharmacy/icon-fulfillment.webp" },
  { title: "Delivery", icon: "/images/pharmacy/icon-delivery.webp" },
  { title: "Ongoing Support", icon: "/images/pharmacy/icon-ongoing-support.webp" },
] as const;

/* ---------- Knowledge Hub page ---------- */

/** Quick searches under the hub's search box. `query` is what gets searched. */
export const hubSearchSuggestions = [
  { label: "GLP-1s", query: "GLP-1" },
  { label: "Hormone Health", query: "Hormone" },
  { label: "Peptides", query: "Peptide" },
  { label: "Sleep", query: "Sleep" },
] as const;

export const hubTopics = [
  { label: "GLP-1s & Metabolic Health", query: "GLP-1", icon: "/images/knowledge/icon-topic-glp1.webp" },
  { label: "Hormone Health", query: "Hormone", icon: "/images/knowledge/icon-topic-hormone.webp" },
  { label: "Peptide Therapies", query: "Peptide", icon: "/images/knowledge/icon-topic-peptides.webp" },
  { label: "NAD+ & Cellular Wellness", query: "NAD", icon: "/images/knowledge/icon-topic-nad.webp" },
  { label: "Longevity & Healthy Aging", query: "Longevity", icon: "/images/knowledge/icon-topic-longevity.webp" },
  // TODO: swap in dedicated icons when they're made (diagnostics reuses the pricing icon; sleep is a drawn stand-in).
  { label: "Diagnostic & Lab Testing", query: "Diagnostics", icon: "/images/icons/diagnostics.webp" },
  { label: "Sleep & Recovery", query: "Sleep", icon: "/images/knowledge/icon-topic-sleep.svg" },
] as const;

/**
 * Placeholder guides until real articles exist (titles from the design). `column` places
 * each card in the design's two staggered columns; `keywords` feed the hub search.
 */
export const featuredGuides = [
  {
    category: "GLP-1s & Metabolic Health",
    readTime: "6 min read",
    title: "Understanding GLP-1 Medications",
    image: "/images/wellness/loose-leaf-tea.webp",
    imageAlt: "Woman adding loose-leaf tea to a strainer beside a glass teapot",
    keywords: "glp-1 glp1 semaglutide tirzepatide weight metabolic",
    column: "left",
    tall: true,
  },
  {
    category: "Peptide Therapies",
    readTime: "8 min read",
    title: "Peptides: What We Know & What We’re Still Learning",
    image: "/images/wellness/dropper-bottle.webp",
    imageAlt: "Hands holding an amber dropper bottle among green plants",
    keywords: "peptide peptides recovery",
    column: "right",
    tall: false,
  },
  {
    category: "Diagnostics",
    readTime: "8 min read",
    title: "Do You Really Need a Comprehensive Lab Panel?",
    image: "/images/diagnostics-kit.webp",
    imageAlt: "At-home diagnostic kit laid out with its box, instructions, sample tube and swab",
    keywords: "diagnostics lab labs testing blood panel biomarkers",
    column: "left",
    tall: false,
  },
  {
    category: "Hormone Health",
    readTime: "8 min read",
    title: "Understanding Hormone Health",
    image: "/images/wellness/balanced-stones.webp",
    imageAlt: "Three smooth grey stones balanced in a stack beside a green sprig",
    keywords: "hormone hormones testosterone estrogen menopause balance",
    column: "right",
    tall: false,
  },
  {
    category: "Longevity",
    readTime: "8 min read",
    title: "What Does Healthy Aging Actually Mean?",
    image: "/images/wellness/woman-morning-coffee.webp",
    imageAlt: "Woman in a navy sweater relaxing with a mug by a bright window",
    keywords: "longevity aging healthy aging nad",
    column: "left",
    tall: false,
  },
] as const;

export const clinicalContext = [
  { label: "Trusted Information", icon: "/images/knowledge/icon-trusted.webp" },
  { label: "Balanced Perspective", icon: "/images/knowledge/icon-balanced.webp" },
  { label: "Clinically Informed", icon: "/images/knowledge/icon-clinically-informed.webp" },
  { label: "Easy to Understand", icon: "/images/knowledge/icon-easy-to-understand.webp" },
] as const;

/* ---------- Health Insurance page ---------- */

// TODO: confirm plan prices and the fine print with Amber before launch (from the design).
export const insurancePlans = [
  {
    label: "Individual Plans",
    price: "$150",
    icon: "/images/insurance/icon-individual.webp",
    image: "/images/insurance/individual-laptop.webp",
    imageAlt: "Smiling man with a mug relaxing on a sofa in front of his laptop",
  },
  {
    label: "Family Plans",
    price: "$300",
    icon: "/images/insurance/icon-family.webp",
    image: "/images/insurance/hero-family.webp",
    imageAlt: "Parents laughing with their young daughter on a living-room sofa",
  },
] as const;

export const coverageAreas = [
  { label: "Primary Care", icon: "/images/icons/step-clinician.webp" },
  { label: "Preventive Care", icon: "/images/insurance/icon-preventive.webp" },
  { label: "Prescription Medications", icon: "/images/pharmacy/icon-treatment.webp" },
  { label: "Diagnostics & Lab Testing", icon: "/images/insurance/icon-diagnostics.webp" },
  { label: "Speciality Care", icon: "/images/insurance/icon-specialty.webp" },
  { label: "Mental & Behavioral Health", icon: "/images/insurance/icon-mental.webp" },
  { label: "Weight & Metabolic Health", icon: "/images/pharmacy/icon-fulfillment.webp" },
  { label: "Hormone Health", icon: "/images/knowledge/icon-topic-glp1.webp" },
] as const;

export const insuranceSteps = [
  { label: "Choose Your Plan", icon: "/images/insurance/icon-step-choose.webp" },
  { label: "Get Enrolled", icon: "/images/insurance/icon-step-enroll.webp" },
  { label: "Access Your Care", icon: "/images/icons/consultation.webp" },
  { label: "Enjoy the Benefits", icon: "/images/insurance/icon-step-benefits.webp" },
] as const;

/* ---------- Providers page ---------- */

export const providerHighlights = [
  "Flexible partnership models",
  "Expand care offerings",
  "Support patients beyond the visit",
  "Grow your practice with clinical support",
] as const;

/** Card heights step up left to right, and the wave at the foot of each card gets deeper teal. */
export const partnershipModels = [
  { title: "Turnkey", description: "A ready-to-launch solution with end-to-end support." },
  { title: "Hybrid", description: "Extend your care with flexible, modular options." },
  {
    title: "Clinical & Fulfillment Support",
    description: "We help manage the patient experience, so you can stay focused on care.",
  },
] as const;

export const providerServices = [
  {
    title: "Medical Directorships",
    description:
      "Clinical oversight, established protocols, and support to help you offer compliant, clinically guided care.",
    icon: "/images/providers/icon-medical-directorships.webp",
  },
  {
    title: "Good Faith Exams",
    description:
      "Licensed, patient-specific evaluations when qualified and legally appropriate to support treatment care.",
    icon: "/images/providers/icon-good-faith-exams.webp",
  },
] as const;

export const partnershipSteps = [
  "Tell us what your patients ask for",
  "Identify what you need",
  "Choose your partnership model",
  "Connect the pieces with our team",
  "Give your patients more",
] as const;

export const providerCareAreas = [
  "Weight & Metabolic Health",
  "Hormone Health",
  "Peptide Therapies",
  "NAD+ & Cellular Wellness",
  "Longevity & Healthy Living",
] as const;

/* ---------- Affiliates & Ambassadors page ---------- */

export const affiliateSteps = [
  { title: "Join a program", description: "Choose to be an Ambassador or an Affiliate." },
  { title: "Share Sempera", description: "Introduce personalized care to your community." },
  { title: "Earn & Grow", description: "Get rewards, exclusive offers, and collaboration opportunities." },
] as const;

export const affiliatePrograms = [
  {
    title: "Become an Ambassador",
    description: "A closer collaboration for community leaders, creators, and wellness advocates.",
    points: [
      "Share Sempera with your community",
      "Get early access and exclusive offers",
      "Collaborate on content, events, and campaigns",
      "Access products and services to try and share",
    ],
    illustration: "/images/affiliates/illustration-ambassador.webp",
    tone: "bg-teal-wash",
  },
  {
    title: "Join the Affiliate Program",
    description: "A simple way to earn by referring others to Sempera.",
    points: [
      "Get your personalized referral link",
      "Share with your audience or network",
      "Earn referral earnings for eligible sign-ups",
      "Access ready-to-use resources (e.g., content, guides, and visuals)",
    ],
    illustration: "/images/affiliates/illustration-affiliate.webp",
    tone: "bg-[#c9e7e5]",
  },
] as const;

export const referralPerks = [
  { title: "Earnings & Rewards", description: "Earn for eligible referrals you bring in.", icon: "/images/affiliates/icon-earnings.webp" },
  {
    title: "Exclusive eligible savings",
    description: "Get special offers and discounts for yourself.",
    icon: "/images/affiliates/icon-savings.webp",
  },
  {
    title: "Collaborations",
    description: "Explore opportunities for co-created content, events, and campaigns.",
    icon: "/images/affiliates/icon-collaborations.webp",
  },
  {
    title: "Mutual value",
    description: "Share care you believe in while building a long-term relationship with Sempera.",
    icon: "/images/affiliates/icon-mutual-value.webp",
  },
] as const;

export const affiliateAudiences = [
  "Creators & Influencers",
  "Wellness Professionals",
  "Healthcare Professionals",
  "Community Leaders",
  "Business & Brand Partners",
] as const;

/* ---------- Explore Care page ---------- */

/** Overview cards; each links down to its detail section on the same page. */
export const careOverview = [
  {
    eyebrow: "Hormone Health",
    title: "Hormone Health & Optimization",
    description: "Explore hormone evaluations and individualized care options for changes affecting daily life.",
    link: "Explore Hormone Health",
    href: "#hormone-health",
  },
  {
    eyebrow: "Men’s Health",
    title: "Men’s Health & Vitality",
    description: "Provider-guided care for testosterone concerns, sexual wellness, and age-related changes.",
    link: "Explore Men’s Health",
    href: "#hormone-health",
  },
  {
    eyebrow: "Peptide Therapies",
    title: "Peptide Therapies",
    description: "Explore the evolving science of peptides and whether a clinically appropriate option fits your needs.",
    link: "Explore Peptide Therapies",
    href: "#peptide-therapies",
  },
  {
    eyebrow: "Metabolic Health",
    title: "Weight & Metabolic Wellness",
    description: "Personalized weight management strategies with medical and lifestyle support.",
    link: "Explore Metabolic Health",
    href: "#metabolic-wellness",
  },
  {
    eyebrow: "Longevity",
    title: "Cellular Wellness & Longevity",
    description: "Explore the science of cellular function and approaches to healthy aging.",
    link: "Explore Longevity",
    href: "#cellular-wellness",
  },
  {
    eyebrow: "Intimate Wellness",
    title: "Sexual Wellness",
    description: "Thoughtful care addressing libido, performance, and intimate health concerns.",
    link: "Explore Sexual Wellness",
    href: "#sexual-wellness",
  },
  {
    eyebrow: "Skin Health",
    title: "Personalized Skincare",
    description: "Care tailored to your skin concerns, routines, and individual goals.",
    link: "Explore Skincare",
    href: "#skin-health",
  },
] as const;

/** Detail sections, alternating photo side and background down the page. */
export const careDetails = [
  {
    id: "hormone-health",
    eyebrow: "Hormone Health",
    title: "Feel more like yourself.",
    body: [
      "Hormones play a role in energy, sleep, mood, metabolism, and sexual health. A personalized evaluation can help you better understand symptoms and explore appropriate treatment options.",
    ],
    tags: ["HRT", "BHRT", "Testosterone evaluation", "TRT"],
    note: "Hormone therapies require clinical evaluation and are not appropriate for everyone.",
    cta: "Explore Hormone Health",
    image: "/images/explore/hormone.webp",
    imageAlt: "Woman in a cardigan talking with a clinician at a sunny kitchen table",
  },
  {
    id: "peptide-therapies",
    eyebrow: "Peptide Therapies",
    title: "Explore the evolving science of wellness.",
    body: [
      "Peptides are short chains of amino acids involved in biological signaling. Interest in peptide-based treatments is growing, but the evidence, safety, and regulatory status vary considerably between products.",
      "Explore the science and discuss whether any clinically appropriate option fits your needs with a licensed provider.",
    ],
    tags: [],
    note: "Not all peptides are approved for clinical use. Emerging research should not be interpreted as proven therapeutic benefit.",
    cta: "Explore Peptide Therapies",
    image: "/images/explore/peptides.webp",
    imageAlt: "Man jogging along a sunlit country path",
  },
  {
    id: "metabolic-wellness",
    eyebrow: "Metabolic Wellness",
    title: "Progress that goes beyond the scale.",
    body: [
      "Weight and metabolic health are influenced by many factors, including sleep, nutrition, hormones, activity, and medical history. Explore individualized care with a focus on sustainable habits and clinical appropriateness.",
    ],
    tags: ["Medical weight management", "GLP-1 options", "Lifestyle support"],
    note: null,
    cta: "Explore Weight Management",
    image: "/images/explore/metabolic.webp",
    imageAlt: "Woman chopping fresh vegetables in a bright kitchen",
  },
  {
    id: "cellular-wellness",
    eyebrow: "Cellular Wellness",
    title: "Wellness for today. Curiosity for tomorrow.",
    body: [
      "Longevity is about maintaining health, function, and quality of life as you age. Explore the biology of aging, NAD+ research, and wellness strategies grounded in individualized care.",
    ],
    tags: ["NAD+ science", "Healthy aging", "Cellular wellness"],
    note: "Evidence for many marketed longevity interventions remains limited; potential benefits should not be assumed.",
    cta: "Explore Longevity",
    image: "/images/explore/longevity.webp",
    imageAlt: "Smiling older woman tending vegetables in a community garden",
  },
  {
    id: "sexual-wellness",
    eyebrow: "Sexual Wellness",
    title: "Feel confident in every part of life.",
    body: [
      "Sexual wellness is an important part of overall health. Explore thoughtful, personalized care for libido, erectile function, performance concerns, and changes related to hormones or aging.",
    ],
    tags: ["Libido", "Sexual function", "Intimate wellness"],
    note: null,
    cta: "Explore Sexual Wellness",
    image: "/images/explore/sexual.webp",
    imageAlt: "Couple laughing together on a sofa in a sunny living room",
  },
  {
    id: "skin-health",
    eyebrow: "Skin Health",
    title: "Care that’s as individual as your skin.",
    body: [
      "Explore personalized approaches to acne, texture, pigmentation, dryness, and visible signs of aging. Recommendations can evolve as your skin and goals change.",
    ],
    tags: ["Personalized routines", "Acne care", "Prescription options"],
    note: null,
    cta: "Explore Skincare",
    image: "/images/explore/skin.webp",
    imageAlt: "Woman applying moisturizer beside skincare bottles in a bright bathroom",
  },
] as const;

export const careJourneySteps = [
  { title: "Discover", description: "Explore wellness programs and identify the areas that align with your goals." },
  { title: "Connect", description: "Complete an intake and connect with a licensed provider for evaluation." },
  { title: "Personalize", description: "Discuss clinically appropriate options and an individualized plan." },
  { title: "Continue", description: "Access follow-up care and ongoing support as your needs evolve." },
] as const;
