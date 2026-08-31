export const resortData = {
  branding: {
    name: "HarTakoyaki",
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
      url: "/takoyakibg1.jpg",
      alt: "Multiple black takeout boxes filled with takoyaki, topped with pork floss and seaweed",
      label: "FRESH BATCH",
      title: "Ready to Go",
    },
    {
      url: "/takoyakibg2.jpg",
      alt: "Close-up of takoyaki boxes featuring melted cheese and pork floss toppings",
      label: "ASSORTED",
      title: "Cheese & Floss Combos",
    },
    {
      url: "/takoyakibg3.jpg",
      alt: "Hand holding a signature foil boat of takoyaki in front of the HarTakoyaki menu board",
      label: "SIGNATURE",
      title: "The Classic Boat",
    },
    {
      url: "/takoyakibg4.jpg",
      alt: "Takoyaki cooking in a cast iron pan showing large, premium octopus pieces",
      label: "PREMIUM",
      title: "Real Octobits",
    },
    {
      url: "/takoyakibg5.jpg",
      alt: "Takoyaki batter cooking in a pan loaded with fresh crab stick and cheese filling",
      label: "CRAFTED",
      title: "Crab & Cheese Cooking",
    },
    {
      url: "/takoyakibg6.jpg",
      alt: "A row of takoyaki takeout boxes smothered in thick, creamy cheese sauce",
      label: "BEST SELLER",
      title: "Cheese Overload",
    },
    {
      url: "/takoyakibg7.jpg",
      alt: "Top-down view of assorted takoyaki orders placed next to the topping station",
      label: "PREPARATION",
      title: "Topping Station",
    },
    {
      url: "/takoyakibg8.jpg",
      alt: "Silver boat of takoyaki topped generously with mayo, pork floss, and chili powder",
      label: "SPICY",
      title: "Spicy Floss Boat",
    },
    {
      url: "/takoyakibg9.jpg",
      alt: "Two clear plastic containers of cheese-covered takoyaki with large sauce packets",
      label: "PACKAGING",
      title: "Secure Delivery Packs",
    },
    {
      url: "/takoyakibg10.jpg",
      alt: "Hand holding a takoyaki boat entirely blanketed in rich, torched melted cheese",
      label: "GRILLED",
      title: "Torched Cheesebomb",
    }
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
