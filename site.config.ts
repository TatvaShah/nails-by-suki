import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Nails by Suki",
  tagline: "BIAB, Gel X and hard gel nails with Japanese and Korean inspired designs in the North York area.",
  category: "Nail tech",
  schemaType: "BeautySalon",
  area: "Toronto (North York area), ON",
  siteUrl: "https://nails-by-suki.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#9A7FB5" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "North York area nail tech",
    headline: "Every set is unique",
    subhead: "BIAB, Gel X and hard gel with Japanese and Korean inspired designs. Fancy to simple, booked by Instagram DM.",
    images: [
      { src: "/images/post-1.jpg", alt: "Detailed nail art set by Nails by Suki" },
      { src: "/images/post-2.jpg", alt: "Deep blue fall nail design" },
      { src: "/images/post-4.jpg", alt: "Marble nail design" },
    ],
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "BIAB, Gel X and hard gel",
    "Japanese and Korean inspired designs",
    "Loyalty stamp rewards",
    "Book by Instagram DM",
  ],

  about: {
    title: "Nails made for you",
    body: [
      "Nails by Suki creates BIAB, Gel X and hard gel sets with Japanese and Korean inspired designs, from simple everyday looks to detailed art.",
      "Appointments are booked by Instagram DM. Please book in advance, and share any reschedule or cancel at least 3 days ahead. Tuesdays are off.",
    ],
    image: { src: "/images/post-3.jpg", alt: "Fall nail design by Nails by Suki" },
  },

  menu: {
    label: "Services",
    title: "What I offer",
    intro: "Service details and pricing are confirmed when you book. Loyalty rewards and seasonal promos are shared on Instagram.",
    variant: "list",
    showPrices: false,
    priceNote: "Message for availability and pricing. Fall promo designs are cash only; extensions not included in promo sets.",
    groups: [
      {
        title: "Nail services",
        items: [
          { name: "BIAB", description: "Builder in a bottle overlays and sets" },
          { name: "Gel X", description: "Soft gel extension sets" },
          { name: "Hard gel", description: "Structured hard gel enhancements" },
          { name: "Japanese and Korean inspired designs", description: "From simple to detailed art" },
          { name: "Fall promotion designs", description: "Seasonal looks; colours can be changed. Cash only. Extensions not included." },
        ],
      },
      {
        title: "Loyalty program",
        items: [
          { name: "1 visit = 1 stamp" },
          { name: "5 stamps = $10 off" },
          { name: "10 stamps = $20 off" },
          { name: "Birthday month = 10% off" },
        ],
      },
    ],
    footnote: "Please book in advance. Reschedule or cancel at least 3 days ahead. Every Tuesday off.",
  },

  gallery: {
    title: "Recent sets",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1350, alt: "Fancy to simple unique nail set", caption: "Fancy to simple", href: "https://www.instagram.com/p/DeX8SLjmoDy/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1350, alt: "Deep blue fall nails", caption: "Deep blue for fall", href: "https://www.instagram.com/p/DeIdQfcBweh/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1350, alt: "Fall nail design", caption: "Say hi to fall", href: "https://www.instagram.com/p/Dd7loU8NnNE/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1350, alt: "Marble nails", caption: "Marble nails", href: "https://www.instagram.com/p/Ddy04bQO_qm/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1350, alt: "Autumn ombre nails", caption: "Autumn ombre", href: "https://www.instagram.com/p/DdkUrwiBBJ2/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1350, alt: "Fall promotion nail designs", caption: "Fall promotion designs", href: "https://www.instagram.com/p/Dcd8JlGjnRY/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1080, alt: "Nail studio workspace", caption: "Inside the salon", href: "https://www.instagram.com/p/CifgyXuu93q/" },
      { src: "/images/post-6.jpg", width: 1051, height: 1314, alt: "Booking availability calendar", caption: "Book in advance", href: "https://www.instagram.com/p/Ddc8_VJO6p3/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "nailsby__suki",
    embeds: [
      "https://www.instagram.com/p/DeX8SLjmoDy/",
      "https://www.instagram.com/p/DeIdQfcBweh/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    headerCtaLabel: "DM to book",
    title: "Book in a quick DM",
    intro: "Appointments are booked through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Nails by Suki! I would like to book an appointment.\nPreferred date and time:\nService (BIAB / Gel X / hard gel):\nDesign idea (I can send inspo):\nNail length / shape:",
    links: [],
    note: "Please book in advance. Reschedule or cancel at least 3 days ahead. Every Tuesday off.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a DM on Instagram with your preferred date, service and design idea. Availability is posted regularly." },
    { q: "Where are you located?", a: "I work inside a hair salon in a plaza in the North York area of Toronto. There is plenty of parking. Exact details are shared when you book." },
    { q: "What is the cancellation policy?", a: "Please let me know at least 3 days ahead if you need to reschedule or cancel." },
    { q: "Do you have a loyalty program?", a: "Yes. One visit equals one stamp. Five stamps are $10 off, ten stamps are $20 off, and your birthday month is 10% off." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Toronto (North York area), Ontario",
  },

  seo: {
    title: "Nails by Suki | BIAB, Gel X and hard gel in North York",
    description: "BIAB, Gel X and hard gel nails with Japanese and Korean inspired designs in the North York area of Toronto. Book by Instagram DM.",
    keywords: ["Toronto nails", "North York nail tech", "BIAB Toronto", "Gel X Markham"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
