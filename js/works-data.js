/**
 * ============================================================
 *  SmallPaws Motion â€” Works Data File
 *  à¹à¸à¹‰à¹„à¸‚à¹„à¸Ÿà¸¥à¹Œà¸™à¸µà¹‰à¹€à¸žà¸·à¹ˆà¸­à¹€à¸žà¸´à¹ˆà¸¡ / à¸¥à¸š / à¹à¸à¹‰à¸‡à¸²à¸™à¸—à¸µà¹ˆà¹à¸ªà¸”à¸‡à¹ƒà¸™à¹€à¸§à¹‡à¸š
 * ============================================================
 *
 *  CATEGORIES à¸—à¸µà¹ˆà¸¡à¸µ:
 *    "explainer"   â†’ Explainer Video
 *    "typography"  â†’ Typography
 *    "uxui"        â†’ UX/UI Presentation
 *    "character"   â†’ Character Animation
 *
 *  à¹à¸•à¹ˆà¸¥à¸°à¸‡à¸²à¸™à¸¡à¸µ fields:
 *    id          â€” à¸•à¸±à¸§à¹€à¸¥à¸‚ unique (à¸«à¹‰à¸²à¸¡à¸‹à¹‰à¸³)
 *    title       â€” à¸Šà¸·à¹ˆà¸­à¸‡à¸²à¸™
 *    category    â€” à¹ƒà¸ªà¹ˆà¹„à¸”à¹‰à¸«à¸¥à¸²à¸¢ category à¹€à¸Šà¹ˆà¸™ ["explainer", "typography"]
 *    thumbnail   â€” path à¹„à¸›à¸¢à¸±à¸‡à¸£à¸¹à¸› thumbnail (à¹ƒà¸ªà¹ˆà¹ƒà¸™ assets/thumbnails/)
 *                  à¸«à¸£à¸·à¸­à¹ƒà¸ªà¹ˆ URL à¸§à¸´à¸”à¸µà¹‚à¸­ YouTube/Vimeo à¹€à¸žà¸·à¹ˆà¸­à¹ƒà¸Šà¹‰ auto-thumbnail
 *    videoUrl    â€” URL à¸§à¸´à¸”à¸µà¹‚à¸­ (YouTube embed, Vimeo embed, à¸«à¸£à¸·à¸­à¹„à¸Ÿà¸¥à¹Œ .mp4)
 *    description â€” à¸„à¸³à¸­à¸˜à¸´à¸šà¸²à¸¢à¸ªà¸±à¹‰à¸™ à¹† (optional)
 *    year        â€” à¸›à¸µà¸—à¸µà¹ˆà¸—à¸³ (optional)
 *    featured    â€” true = à¹ƒà¸Šà¹‰à¹ƒà¸™ header slideshow
 * ============================================================
 */

const WORKS = [
  {
    id: 1,
    title: "Thailand Shopper",
    category: ["explainer"],
    thumbnail: "https://img.youtube.com/vi/plyQNjPd4YU/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/plyQNjPd4YU",
    description: "Explainer Video",
    year: 2024,
    featured: true,
  },
  {
    id: 2,
    title: "JobGlance",
    category: ["uxui"],
    thumbnail: "https://img.youtube.com/vi/5G7O3uuTeMA/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/5G7O3uuTeMA",
    description: "App Presentation",
    year: 2024,
    featured: true,
  },
  {
    id: 3,
    title: "FloraRose",
    category: ["uxui"],
    thumbnail: "https://img.youtube.com/vi/dLH2WMt0C48/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dLH2WMt0C48",
    description: "App Demo Presentation",
    year: 2024,
    featured: true,
  },
  {
    id: 4,
    title: "Mamori Cybersecurity",
    category: ["explainer"],
    thumbnail: "https://img.youtube.com/vi/-BEcmSmywe4/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/-BEcmSmywe4",
    description: "Explainer Video for Cybersecurity Company",
    year: 2024,
    featured: true,
  },
  {
    id: 5,
    title: "Easy Elders",
    category: ["uxui"],
    thumbnail: "https://img.youtube.com/vi/5T-BQNxXnOU/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/5T-BQNxXnOU",
    description: "App Demo Presentation",
    year: 2024,
    featured: true,
  },
  {
    id: 6,
    title: "ZenMarket",
    category: ["explainer"],
    thumbnail: "https://img.youtube.com/vi/L_G1qJAFicA/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/L_G1qJAFicA",
    description: "Explainer Video for ZenMarket",
    year: 2024,
    featured: true,
  },
  {
    id: 7,
    title: "Half Tennis",
    category: ["explainer", "character"],
    thumbnail: "https://img.youtube.com/vi/vdql8y0Vu8k/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/vdql8y0Vu8k",
    description: "Promo video for Half Tennis",
    year: 2024,
    featured: true,
  },
  {
    id: 8,
    title: "TouchMe",
    category: ["uxui"],
    thumbnail: "https://img.youtube.com/vi/nlH4YIrgmOw/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/nlH4YIrgmOw",
    description: "Promo video for TouchMe",
    year: 2024,
    featured: true,
  },
  {
    id: 9,
    title: "HEINE",
    category: ["typography"],
    thumbnail: "https://img.youtube.com/vi/UwdBFw_CY5w/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/UwdBFw_CY5w",
    description: "Promo video for HEINE",
    year: 2024,
    featured: true,
  },
];

/**
 * ============================================================
 *  Testimonials â€” à¸„à¸³à¸Šà¸¡à¸ˆà¸²à¸à¸¥à¸¹à¸à¸„à¹‰à¸²
 * ============================================================
 *  name    â€” à¸Šà¸·à¹ˆà¸­à¸¥à¸¹à¸à¸„à¹‰à¸²
 *  role    â€” à¸•à¸³à¹à¸«à¸™à¹ˆà¸‡ / à¸šà¸£à¸´à¸©à¸±à¸—
 *  text    â€” à¸‚à¹‰à¸­à¸„à¸§à¸²à¸¡à¸£à¸µà¸§à¸´à¸§
 *  avatar  â€” emoji à¸«à¸£à¸·à¸­ URL à¸£à¸¹à¸›
 * ============================================================
 */
const TESTIMONIALS = [
  {
    name: "à¸„à¸¸à¸“à¸¡à¸´à¸™à¸—à¹Œ",
    role: "Marketing Manager, BrandX",
    text: "à¸‡à¸²à¸™à¸­à¸­à¸à¸¡à¸²à¸ªà¸§à¸¢à¸¡à¸²à¸ à¸•à¸£à¸‡à¸à¸±à¸š brief à¹€à¸¥à¸¢ à¸—à¸µà¸¡à¸Šà¸­à¸šà¸¡à¸²à¸ à¸ªà¹ˆà¸‡à¸‡à¸²à¸™à¸•à¸£à¸‡à¹€à¸§à¸¥à¸²à¸”à¹‰à¸§à¸¢ à¸›à¸£à¸°à¸—à¸±à¸šà¹ƒà¸ˆà¸¡à¸²à¸à¸„à¹ˆà¸°",
    avatar: "ðŸŒ¸",
  },
  {
    name: "à¸„à¸¸à¸“à¹‚à¸Ÿà¸¡",
    role: "Founder, CosmeticTH",
    text: "à¸”à¸¹à¹à¸¥à¸‡à¸²à¸™à¸”à¸µ à¹ƒà¸ªà¹ˆà¹ƒà¸ˆà¹ƒà¸™à¸£à¸²à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸” à¸„à¸¸à¸¢à¸‡à¹ˆà¸²à¸¢ revise à¹„à¸”à¹‰à¸•à¸²à¸¡à¸•à¹‰à¸­à¸‡à¸à¸²à¸£ à¹à¸™à¸°à¸™à¸³à¹ƒà¸«à¹‰à¸—à¸¸à¸à¸„à¸™à¹€à¸¥à¸¢à¸„à¹ˆà¸°",
    avatar: "âœ¨",
  },
  {
    name: "à¸„à¸¸à¸“à¸šà¸µà¸¡",
    role: "Content Creator",
    text: "à¸œà¸¥à¸‡à¸²à¸™ motion à¸”à¸¹à¹‚à¸›à¸£à¸¡à¸²à¸ à¹à¸•à¹ˆà¸£à¸²à¸„à¸²à¸ªà¸¡à¹€à¸«à¸•à¸¸à¸ªà¸¡à¸œà¸¥ à¸—à¸³à¸‡à¸²à¸™à¸£à¹ˆà¸§à¸¡à¸à¸±à¸™à¹„à¸”à¹‰à¸ªà¸™à¸¸à¸à¸¡à¸²à¸",
    avatar: "ðŸŽ¬",
  },
  {
    name: "à¸„à¸¸à¸“à¹€à¸Ÿà¸´à¸£à¹Œà¸™",
    role: "Product Owner, AppStartup",
    text: "à¸—à¸³ UX presentation à¸­à¸­à¸à¸¡à¸²à¸”à¸¹à¸”à¸µà¸¡à¸²à¸ à¸¥à¸¹à¸à¸„à¹‰à¸²à¸›à¸£à¸°à¸—à¸±à¸šà¹ƒà¸ˆ à¹„à¸”à¹‰ funding à¸£à¸­à¸šà¸™à¸µà¹‰ à¸‚à¸­à¸šà¸„à¸¸à¸“à¸¡à¸²à¸à¸™à¸°à¸„à¸°",
    avatar: "ðŸ’œ",
  },
  {
    name: "à¸„à¸¸à¸“à¹à¸™à¸™",
    role: "Art Director, Agency",
    text: "Animation smooth à¸¡à¸²à¸ timing à¸”à¸µà¹€à¸¢à¸µà¹ˆà¸¢à¸¡ professional à¸¡à¸²à¸à¸„à¹ˆà¸° à¸ˆà¸°à¸à¸¥à¸±à¸šà¸¡à¸²à¸ˆà¹‰à¸²à¸‡à¸­à¸µà¸à¹à¸™à¹ˆà¸™à¸­à¸™",
    avatar: "ðŸŽ¨",
  },
  {
    name: "à¸„à¸¸à¸“à¸•à¹‰à¸™",
    role: "CEO, E-commerce Brand",
    text: "à¸„à¸¸à¸“à¸ à¸²à¸žà¸‡à¸²à¸™à¹€à¸à¸´à¸™à¸£à¸²à¸„à¸²à¸¡à¸²à¸ revise à¹ƒà¸«à¹‰à¸•à¸¥à¸­à¸” à¹„à¸¡à¹ˆà¹€à¸šà¸·à¹ˆà¸­ à¸‚à¸¢à¸±à¸™à¹à¸¥à¸°à¸£à¸±à¸šà¸œà¸´à¸”à¸Šà¸­à¸šà¸¡à¸²à¸",
    avatar: "â­",
  },
];

/**
 * ============================================================
 *  Header Frames â€” à¸£à¸¹à¸›à¸—à¸µà¹ˆà¹à¸ªà¸”à¸‡à¹ƒà¸™ hero slideshow
 * ============================================================
 *  à¹ƒà¸ªà¹ˆ path à¸£à¸¹à¸› APNG/WEBP à¸«à¸£à¸·à¸­ URL à¸ à¸²à¸¢à¸™à¸­à¸
 *  à¹à¸™à¸°à¸™à¸³à¸‚à¸™à¸²à¸”: 1920Ã—1080 à¸«à¸£à¸·à¸­ 16:9 ratio
 * ============================================================
 */
const HEADER_FRAMES = [
  { src: null, label: "Explainer Video", color: "#FFD6E7" },
  { src: null, label: "Typography Animation", color: "#E8D5F5" },
  { src: null, label: "Character Animation", color: "#D5E8F5" },
  { src: null, label: "UX/UI Presentation", color: "#F5F0D5" },
];

/**
 * ============================================================
 *  Contact Info
 * ============================================================
 */
const CONTACT = {
  email: "smallpaws.motion@gmail.com",
  instagram: "@smallpaws.motion",
  facebook: "smallpaws.motion",
  tiktok: "@smallpaws.motion",
};


/**
 * ============================================================
 *  Graphic Design Works
 * ============================================================
 */
const GRAPHIC_WORKS = [
  {
    id: "g1",
    title: "Tom Yum Kung Noodles",
    category: ["illustration", "animation"],
    thumbnail: "assets/graphic/noodle-ezgif.com-optimize.gif",
    images: ["assets/graphic/noodle-ezgif.com-optimize.gif"],
    what: "Illustration & Short Animation",
    concept: "Tom Yum Kung Noodles served in a retro microwave — blending Thai flavor with Japanese street-food aesthetics. Bold graphic style mixing flat illustration, Y2K/risograph textures, and anime-inspired typography.",
    client: "Personal Project",
    year: 2023,
  },
];
