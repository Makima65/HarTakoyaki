export const resortData = {
  branding: {
    name: "Siligna Resort and Events Place",
    tagline: "A Private Sanctuary in the Heart of the Tropics",
    heroHeading: "Where Silence Meets Elegance",
    heroLabel: "— EXCLUSIVE PRIVATE VILLA",
  },
  contact: {
    messenger: "https://m.me/yourpage",
    viber: "+63 949 594 4396",
    address: "Antipolo, Rizal",
  },
  packages: [
    {
      id: "day",
      title: "Day Pass",
      timecode: "08:00 — 17:00",
      price: "₱12,000",
      description: "A relaxing day out for small groups.",
      features: [
        "Up to 15 Guests",
        "Exclusive Pool Access",
        "Open-Air Pavilion",
        "Fully Equipped Outdoor Kitchen",
      ],
    },
    {
      id: "night",
      title: "Evening Soirée",
      timecode: "19:00 — 06:00",
      price: "₱15,000",
      description: "A relaxing evening under the stars.",
      features: [
        "Up to 15 Guests",
        "Heated Infinity Pool",
        "Cinematic Mood Lighting",
        "Air-conditioned Lounge",
      ],
    },
    {
      id: "full",
      title: "The 22-Hour Estate",
      timecode: "14:00 — 12:00",
      price: "₱25,000",
      description: "A complete getaway for the ultimate relaxation.",
      features: [
        "Up to 20 Guests",
        "Master Suite & 2 Guest Rooms",
        "Round-the-clock Caretaker",
        "Complimentary Breakfast Basket",
      ],
    },
  ],
  process: [
    {
      step: "00:01",
      title: "Inquire",
      description: "Send us a direct message via Messenger or Viber to check availability for your preferred dates.",
    },
    {
      step: "00:02",
      title: "Secure",
      description: "Confirm your reservation with a 50% deposit. A bespoke itinerary will be curated for your stay.",
    },
    {
      step: "00:03",
      title: "Experience",
      description: "Arrive at the estate. Disconnect from the noise and immerse yourself in absolute tranquility.",
    },
  ],
  amenities: [
    "Infinity Pool",
    "Outdoor Event Space",
    "Premium Sound System",
    "Gourmet Grill Station",
    "High-Speed WiFi",
    "Secured Private Parking",
    "En-suite Bathrooms",
    "Air-Conditioned Rooms",
  ],
  gallery: [
    {
      url: "/Silignapic1.jpg",
      alt: "Cozy Eight Cafe at night",
      label: "ARRIVAL",
      title: "Cozy Eight Cafe",
    },
    {
      url: "/Silignapic2.jpg",
      alt: "Illuminated swimming pool at night",
      label: "NIGHTSCAPE",
      title: "Illuminated Pool",
    },
    {
      url: "/Silignapic3.jpg",
      alt: "Bunk bedroom interior",
      label: "ACCOMMODATIONS",
      title: "The Bunk Room",
    },
    {
      url: "/Silignapic4.jpg",
      alt: "Bathroom interior",
      label: "FACILITIES",
      title: "En-Suite Bath",
    },
    {
      url: "/Silignapic5.jpg",
      alt: "Family suite with bunk beds",
      label: "ACCOMMODATIONS",
      title: "Family Suite",
    },
    {
      url: "/Silignapic6.jpg",
      alt: "Outdoor kitchen and dining area",
      label: "GATHERINGS",
      title: "Kitchen & Grill",
    },
    {
      url: "/Silignapic7.jpg",
      alt: "Villa exterior and pathways",
      label: "THE ESTATE",
      title: "Villa Pathways",
    },
    {
      url: "/Silignapic8.jpg",
      alt: "Villa exterior surrounded by trees",
      label: "NATURE",
      title: "Tropical Surroundings",
    },
    {
      url: "/Silignapic9.jpg",
      alt: "Main swimming pool during the day",
      label: "LEISURE",
      title: "The Main Pool",
    },
  ],
  faqs: [
    {
      question: "How much is the down payment?",
      answer: "We require a 50% down payment to secure your preferred date. The remaining balance is to be settled upon arrival at the estate.",
    },
    {
      question: "What are the available modes of payment?",
      answer: "For your convenience, we accept direct Bank Transfers (BDO/BPI), GCash, and cash payments on-site.",
    },
    {
      question: "Are there any corkage fees for food and drinks?",
      answer: "No, we do not charge any corkage fees. Guests are welcome to bring their own food and beverages. Our outdoor kitchen and grill station are fully equipped for your use.",
    },
    {
      question: "Can we extend our stay on the day of the booking?",
      answer: "Extensions are subject to availability and incur a standard hourly rate. To ensure an uninterrupted experience, we highly recommend booking 'The 22-Hour Estate' package in advance.",
    },
  ],
  bookingConfig: {
    extraPaxFee: 1000,
    addons: [
      { id: "kitchen", name: "Full Kitchen & Gas Access", price: 500 },
      { id: "karaoke", name: "Premium Karaoke Setup", price: 0 },
      { id: "mattress", name: "Extra Mattress Set", price: 300 },
      { id: "projector", name: "Outdoor Cinema Projector", price: 800 },
    ],
    paymentMethods: ["BDO Bank Transfer", "BPI Bank Transfer", "GCash"],
  },
};
