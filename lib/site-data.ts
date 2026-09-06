export const NAV_LINKS = [
  { label: "Personal Training", href: "/personal-training" },
  { label: "Online Coaching", href: "/online-coaching" },
  { label: "Events", href: "/events" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const TRUST_INDICATORS = [
  { label: "Certified Personal Trainer", value: "Level 2 & 3" },
  { label: "Clients Coached", value: "250+" },
  { label: "Years of Experience", value: "5+" },
  { label: "Client Rating", value: "4.9 / 5" },
];

export type Package = {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const PERSONAL_TRAINING_PACKAGES: Package[] = [
  {
    name: "Single Session",
    price: "£50.00",
    cadence: "per session",
    description:
      "A one-off, fully bespoke training session — perfect for a trial or a top-up between programs.",
    features: [
      "45-minute 1-to-1 session",
      "Movement & posture assessment",
      "Personalised exercise selection",
      "GYM training",
      "Post-session feedback",
    ],
    cta: "Book a Session",
  },
  {
    name: "8-Session Transformation",
    price: "£360",
    cadence: "/ 8 sessions",
    description:
      "A focused block designed to build momentum, correct form, and deliver visible results fast.",
    features: [
      "8 x 45-minute 1-to-1 sessions",
      "Movement & posture assessment",
      "Personalised exercise selection",
      "GYM training",
      "Post-session feedback",
    ],
    highlighted: true,
    cta: "Start Your Transformation",
  },
  {
    name: "12-Week Premium Coaching",
    price: "£480",
    cadence: "/ 12 weeks",
    description:
      "Our signature end-to-end coaching experience — full accountability, nutrition, and lifestyle support.",
    features: [
      "12 x 45-minute 1-to-1 sessions",
      "Movement & posture assessment",
      "Personalised exercise selection",
      "GYM training",
      "Post-session feedback",
    ],
    cta: "Enquire Now",
  },
];

export const ONLINE_COACHING_PACKAGES: Package[] = [
  {
    name: "Bronze",
    price: "£25",
    cadence: "/ month",
    description: "Everything you need to start training with structure and purpose.",
    features: [
      "Access to App (Log Progress)",
      "Generic training Program",
      "Whatsapp Group Chat",
    ],
    cta: "Get Started",
  },
  {
    name: "Silver",
    price: "£95",
    cadence: "/ month",
    description: "Our most popular plan — training, nutrition, and weekly accountability.",
    features: [
      "Everything in Bronze",
      "Personalised nutrition plan",
      "Weekly check-ins & adjustments",
      "Direct messaging with Debs",
      "Habit & recovery tracking",
    ],
    highlighted: true,
    cta: "Get Started",
  },
  {
    name: "Gold",
    price: "£175",
    cadence: "/ month",
    description: "Fully white-glove coaching for those who want the very best support.",
    features: [
      "Everything in Silver",
      "Bi-weekly video calls",
      "Priority same-day messaging",
      "Event & travel training plans",
    ],
    cta: "Get Started",
  },
  {
    name: "Platinum",
    price: "£295",
    cadence: "/ month",
    description: "Our most exclusive tier — unlimited access to Debs for total accountability.",
    features: [
      "Everything in Gold",
      "Weekly video calls",
      "Monthly in-person session",
      "Personal WhatsApp accountability line",
    ],
    cta: "Get Started",
  },
];

export type EventItem = {
  title: string;
  date: string;
  location: string;
  description: string;
  image?: string;
  spots: string;
};

// Static ISO date strings; countdown component computes remaining time client-side.
export const UPCOMING_EVENTS: EventItem[] = [
  {
    title: "Strength & Sculpt Retreat Weekend",
    date: "2026-04-18T09:00:00",
    location: "Isle of Man",
    description:
      "A two-day immersive retreat combining strength training, mobility, nutrition workshops, and recovery.",
    spots: "6 spots remaining",
  },
  {
    title: "Summer Shred 8-Week Challenge",
    date: "2026-05-04T06:00:00",
    location: "Online & In-Studio",
    description:
      "An 8-week group challenge with weekly live sessions, accountability, and a leaderboard for prizes.",
    spots: "Enrolment open",
  },
  {
    title: "Confidence & Core Masterclass",
    date: "2026-03-02T18:30:00",
    location: "The Studio, Douglas",
    description:
      "A live evening masterclass focused on core strength, posture, and building unshakeable confidence.",
    spots: "12 spots remaining",
  },
];

export type Testimonial = {
  name: string;
  result: string;
  quote: string;
  program: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    result: "Lost 14kg in 12 weeks",
    quote:
      "Debs completely changed how I think about training and food. I feel stronger and more confident than I have in a decade.",
    program: "12-Week Premium Coaching",
  },
  {
    name: "Charlotte R.",
    result: "Gold Online Coaching, 6 months",
    quote:
      "The weekly check-ins kept me accountable even when life got busy. This is the first plan I've ever actually stuck to.",
    program: "Online Coaching — Gold",
  },
  {
    name: "Emma T.",
    result: "8-Session Transformation",
    quote:
      "I walked in nervous and walked out with a plan that actually fit my life. Debs makes you feel seen, not judged.",
    program: "8-Session Transformation",
  },
  {
    name: "Laura K.",
    result: "Silver Online Coaching, 1 year",
    quote:
      "Sustainable, realistic, and genuinely life-changing. I've never felt more in control of my health.",
    program: "Online Coaching — Silver",
  },
];

export const FAQS = [
  {
    question: "Do I need any prior training experience?",
    answer:
      "Not at all. Every programme is built around your current fitness level, whether you're a complete beginner or an experienced athlete looking to break a plateau.",
  },
  {
    question: "What's the difference between 1-to-1 and online coaching?",
    answer:
      "1-to-1 personal training is in-person, hands-on coaching in the studio or outdoors. Online coaching is fully remote — you receive a bespoke app-based programme, nutrition guidance, and regular check-ins wherever you are.",
  },
  {
    question: "Can I pause or cancel my online coaching plan?",
    answer:
      "Yes. Online coaching plans are billed monthly with no long-term contract. You can pause, upgrade, or cancel at any time with 7 days' notice.",
  },
  {
    question: "Do you offer nutrition support?",
    answer:
      "Yes — nutrition guidance is included from the 8-Session Transformation package upward, and in every online coaching tier from Silver up.",
  },
  {
    question: "Where do 1-to-1 sessions take place?",
    answer:
      "Sessions are held at our private studio or outdoors, depending on your preference and the programme you choose. Home visits can be arranged on request.",
  },
  {
    question: "How do I book my first session?",
    answer:
      "Simply fill in the booking form below or click any \"Book Your Coaching\" button to get started. We'll be in touch within 24 hours to schedule a free consultation.",
  },
];

export const TRANSFORMATION_PHOTOS: string[] = [
  "/transformations/607600682_884869287399435_2854783806699176782_n.jpg",
  "/transformations/608267911_885544910665206_2893747090722140291_n.jpg",
  "/transformations/609649813_18068157812425258_8116410678914786625_n.jpg",
  "/transformations/609951148_18068025314425258_5116661400935179146_n.jpg",
  "/transformations/613234027_18069047249425258_8724001211631545138_n.jpg",
  "/transformations/621840574_18070250123425258_4766233536233126343_n.jpg",
  "/transformations/670829587_18079005653425258_1136249274796601649_n.jpg",
  "/transformations/701538098_18081695948425258_764176631741646451_n.jpg",
  "/transformations/717357988_18083980562425258_1323448897378391238_n.jpg",
  "/transformations/721387648_18084404795425258_3380312873990473601_n.jpg",
  "/transformations/752151719_18088723262425258_7935273117776219368_n.jpg",
  "/transformations/753205142_18088763606425258_763943415120628557_n.jpg",
  "/transformations/772714702_18091229618425258_92868718880327136_n.jpg",
  "/transformations/778587359_18091634654425258_4153217407167116524_n.jpg",
  "/transformations/783571112_18092393636425258_2271444821275687856_n.jpg",
  "/transformations/788187241_18093047033425258_6778459981177078725_n.jpg",
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/coachedbydebs", handle: "@coachedbydebs" },
  { label: "TikTok", href: "https://tiktok.com/@coachedbydebs", handle: "@coachedbydebs" },
  { label: "Facebook", href: "https://facebook.com/coachedbydebs", handle: "Coached by Debs" },
];
