export const brand = {
  name: "Global Comfort",
  location: "Ilorin, Kwara State, Nigeria",
  tagline: "Comfort away from home.",
  address:
    "Before University of Ilorin Gate, University Rd, off Tanke Road, Ilorin, Kwara, Nigeria",
  whatsapp: "08104108708",
  whatsappHref: "https://wa.me/2348104108708",
};

export const navItems = [
  ["Stays", "/apartments"],
  ["Facilities", "/facilities"],
  ["Gallery", "/gallery"],
  ["Location", "/location"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export const images = {
  hero: "/global-comfort-images/IMG_1274.jpg",
  courtyard: "/global-comfort-images/IMG_1270.jpg",
  aerial: "/global-comfort-images/IMG_1271.jpg",
  drive: "/global-comfort-images/IMG_1273.jpg",
  loungeWide: "/global-comfort-images/IMG_1272.jpg",
  lounge: "/global-comfort-images/IMG_1275.jpg",
  mediaWall: "/global-comfort-images/IMG_1276.jpg",
  bedroom: "/global-comfort-images/IMG_1277.jpg",
};

export const apartmentNames = [
  { code: "G1A", label: "Ground 1.A", tier: "Standard 1 bed" },
  { code: "G1B", label: "Ground 1.B", tier: "Premium tier-one 1 bed" },
  { code: "G1C", label: "Ground 1.C", tier: "Premium tier-two 1 bed" },
  { code: "F1A", label: "Floor 1 A", tier: "Standard 1 bed" },
  { code: "F1B", label: "Floor 1 B", tier: "Premium tier-one 1 bed" },
  { code: "F1C", label: "Floor 1 C", tier: "Premium tier-two 1 bed" },
  { code: "G2A", label: "Ground 2 bed A", tier: "Premium 2 bed" },
  { code: "F2B", label: "Floor 2 bed B", tier: "Premium 2 bed" },
  { code: "G3A", label: "Ground 3 bed A", tier: "Premium 3 bed" },
  { code: "F3B", label: "Floor 3 bed B", tier: "Premium 3 bed" },
];

export const rooms = [
  {
    slug: "standard-one-bed",
    name: "Standard 1 Bed Apartment",
    displayName: "Standard One-Bedroom",
    label: "One-bedroom stay",
    collection: "Essential comfort",
    image: images.bedroom,
    description:
      "A refined one-bedroom stay for guests who want privacy, calm interiors and easy access to the University Road area.",
    longDescription:
      "Designed for short visits, focused work trips and comfortable nights near the University of Ilorin axis. This one-bedroom apartment gives guests a private place to rest, refresh and settle in with ease.",
    guests: "Up to 2 guests",
    bed: "1 bedroom",
    size: "Confirm exact size",
    price: "₦100,000 / night",
    naira: "₦100,000",
    usd: "$70",
    amenities: ["Bedroom", "Living area", "Air conditioning", "Smart TV"],
    units: ["G1A", "F1A"],
    remaining: 2,
  },
  {
    slug: "premium-tier-one-one-bed",
    name: "Premium Tier-One 1 Bed",
    displayName: "Premium One-Bedroom",
    label: "Premium collection · Tier I",
    collection: "Tier I",
    image: images.mediaWall,
    description:
      "A warmer premium one-bedroom option with a composed living area and elevated interior finish.",
    longDescription:
      "A polished one-bedroom apartment for guests who want a warmer interior feel, private living space and a calm place to return to after a day in Ilorin.",
    guests: "Up to 2 guests",
    bed: "1 bedroom",
    size: "Confirm exact size",
    price: "₦110,000 / night",
    naira: "₦110,000",
    usd: "$80",
    amenities: ["Bedroom", "Living area", "Air conditioning", "TV wall"],
    units: ["G1B", "F1B"],
    remaining: 2,
  },
  {
    slug: "premium-tier-two-one-bed",
    name: "Premium Tier-Two 1 Bed",
    displayName: "Premium One-Bedroom",
    label: "Premium collection · Tier II",
    collection: "Tier II",
    image: images.lounge,
    description:
      "A higher one-bedroom tier for guests who want extra polish, privacy and a more residential stay.",
    longDescription:
      "A higher one-bedroom category with a more elevated apartment feel, ideal for guests who value privacy, comfort and a more residential sense of space.",
    guests: "Up to 2 guests",
    bed: "1 bedroom",
    size: "Confirm exact size",
    price: "₦120,000 / night",
    naira: "₦120,000",
    usd: "$85",
    amenities: ["Bedroom", "Living area", "Air conditioning", "Premium interior"],
    units: ["G1C", "F1C"],
    remaining: 2,
  },
  {
    slug: "premium-two-bed",
    name: "Premium 2 Bed Apartment",
    displayName: "Premium Two-Bedroom",
    label: "Two-bedroom stay",
    collection: "Family comfort",
    image: images.loungeWide,
    description:
      "A spacious two-bedroom option for families, colleagues or guests who prefer more room to settle in.",
    longDescription:
      "A comfortable two-bedroom apartment for families, colleagues and small groups who want separate bedrooms, shared living space and an easy base near University Road.",
    guests: "Up to 4 guests",
    bed: "2 bedrooms",
    size: "Confirm exact size",
    price: "₦140,000 / night",
    naira: "₦140,000",
    usd: "$100",
    amenities: ["Two bedrooms", "Living area", "Air conditioning", "Smart TV"],
    units: ["G2A", "F2B"],
    remaining: 2,
  },
  {
    slug: "premium-three-bed",
    name: "Premium 3 Bed Apartment",
    displayName: "Premium Three-Bedroom",
    label: "Three-bedroom stay",
    collection: "Extended space",
    image: images.courtyard,
    description:
      "A larger apartment for families, longer stays and guests who want the most generous layout.",
    longDescription:
      "The Premium 3 Bed Apartment is the largest listed category, suited to families, longer visits and guests who want the most generous amount of space.",
    guests: "Up to 6 guests",
    bed: "3 bedrooms",
    size: "Confirm exact size",
    price: "₦170,000 / night",
    naira: "₦170,000",
    usd: "$120",
    amenities: ["Three bedrooms", "Living area", "Air conditioning", "Smart TV"],
    units: ["G3A", "F3B"],
    remaining: 2,
  },
];

export const facilities = [
  { title: "Private Apartment Layouts", status: "One, two and three-bedroom categories", image: images.bedroom },
  { title: "Furnished Lounge Areas", status: "Comfortable seating and TV wall shown in supplied photos", image: images.loungeWide },
  { title: "On-Site Parking Court", status: "Visible paved compound and internal drive", image: images.courtyard },
  { title: "University Road Access", status: "Before University of Ilorin Gate, off Tanke Road", image: images.aerial },
];

export const offers = [
  {
    title: "University Road Stay",
    description:
      "A location-led package for visitors who want a comfortable apartment close to the University of Ilorin axis.",
    code: "UNILORIN",
  },
  {
    title: "Extended Comfort",
    description:
      "A future long-stay offer for guests who need more nights, more privacy and easy payment tracking.",
    code: "LONGSTAY",
  },
  {
    title: "Family Apartment Plan",
    description:
      "A future package built around the Premium 2 Bed and Premium 3 Bed apartment categories.",
    code: "FAMILY",
  },
];

export const gallery = [
  ["Exterior", images.hero],
  ["Exterior", images.courtyard],
  ["Exterior", images.aerial],
  ["Property", images.drive],
  ["Interiors", images.loungeWide],
  ["Interiors", images.lounge],
  ["Details", images.mediaWall],
  ["Apartments", images.bedroom],
];

export const informativePages = [
  {
    title: "Apartment Categories",
    href: "/apartments",
    text: "Compare one, two and three-bedroom serviced apartments.",
  },
  {
    title: "Location Guide",
    href: "/location",
    text: "Clear address and guidance for guests visiting the University of Ilorin area.",
  },
  {
    title: "Rates & Payment",
    href: "/rates",
    text: "Simple nightly pricing with Naira rates first and USD equivalents shown clearly.",
  },
  {
    title: "Guest Support",
    href: "/contact",
    text: "WhatsApp the team, request directions or start a booking conversation.",
  },
];

export const architecture = [
  "Online booking, front desk reservations and guest communication work from one coordinated process.",
  "Apartment availability can be managed clearly by date, category and room status.",
  "Every booking can capture guest details, payment preference and stay information in one place.",
  "Rates can display in Naira and Dollars while management controls available payment options.",
  "Online payment confirmations can update reservations automatically.",
  "Website content, photography, FAQs, offers and location guidance can be kept fresh by the team.",
];

export const stayReasons = [
  ["UNIVERSITY VISITS", "A convenient base for parents, guests and visitors around the University of Ilorin axis."],
  ["BUSINESS TRIPS", "Private furnished apartments for focused work trips and calm evenings."],
  ["FAMILY STAYS", "More room for families who prefer shared living space and separate bedrooms."],
  ["EVENT WEEKENDS", "Comfortable accommodation for wedding guests, reunions and weekend visits."],
  ["EXTENDED STAYS", "A spacious setting for guests who need to settle in for longer."],
];
