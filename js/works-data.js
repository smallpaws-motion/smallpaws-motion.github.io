/**
 * ============================================================
 *  SmallPaws Motion — Works Data File
 *  แก้ไขไฟล์นี้เพื่อเพิ่ม / ลบ / แก้งานที่แสดงในเว็บ
 * ============================================================
 *
 *  CATEGORIES ที่มี:
 *    "explainer"   → Explainer Video
 *    "typography"  → Typography
 *    "uxui"        → UX/UI Presentation
 *    "character"   → Character Animation
 *
 *  แต่ละงานมี fields:
 *    id          — ตัวเลข unique (ห้ามซ้ำ)
 *    title       — ชื่องาน
 *    category    — ใส่ได้หลาย category เช่น ["explainer", "typography"]
 *    thumbnail   — path ไปยังรูป thumbnail (ใส่ใน assets/thumbnails/)
 *                  หรือใส่ URL วิดีโอ YouTube/Vimeo เพื่อใช้ auto-thumbnail
 *    videoUrl    — URL วิดีโอ (YouTube embed, Vimeo embed, หรือไฟล์ .mp4)
 *    description — คำอธิบายสั้น ๆ (optional)
 *    year        — ปีที่ทำ (optional)
 *    featured    — true = ใช้ใน header slideshow
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
 *  Testimonials — คำชมจากลูกค้า
 * ============================================================
 *  name    — ชื่อลูกค้า
 *  role    — ตำแหน่ง / บริษัท
 *  text    — ข้อความรีวิว
 *  avatar  — emoji หรือ URL รูป
 * ============================================================
 */
const TESTIMONIALS = [
  {
    name: "คุณมินท์",
    role: "Marketing Manager, BrandX",
    text: "งานออกมาสวยมาก ตรงกับ brief เลย ทีมชอบมาก ส่งงานตรงเวลาด้วย ประทับใจมากค่ะ",
    avatar: "🌸",
  },
  {
    name: "คุณโฟม",
    role: "Founder, CosmeticTH",
    text: "ดูแลงานดี ใส่ใจในรายละเอียด คุยง่าย revise ได้ตามต้องการ แนะนำให้ทุกคนเลยค่ะ",
    avatar: "✨",
  },
  {
    name: "คุณบีม",
    role: "Content Creator",
    text: "ผลงาน motion ดูโปรมาก แต่ราคาสมเหตุสมผล ทำงานร่วมกันได้สนุกมาก",
    avatar: "🎬",
  },
  {
    name: "คุณเฟิร์น",
    role: "Product Owner, AppStartup",
    text: "ทำ UX presentation ออกมาดูดีมาก ลูกค้าประทับใจ ได้ funding รอบนี้ ขอบคุณมากนะคะ",
    avatar: "💜",
  },
  {
    name: "คุณแนน",
    role: "Art Director, Agency",
    text: "Animation smooth มาก timing ดีเยี่ยม professional มากค่ะ จะกลับมาจ้างอีกแน่นอน",
    avatar: "🎨",
  },
  {
    name: "คุณต้น",
    role: "CEO, E-commerce Brand",
    text: "คุณภาพงานเกินราคามาก revise ให้ตลอด ไม่เบื่อ ขยันและรับผิดชอบมาก",
    avatar: "⭐",
  },
];

/**
 * ============================================================
 *  Header Frames — รูปที่แสดงใน hero slideshow
 * ============================================================
 *  ใส่ path รูป APNG/WEBP หรือ URL ภายนอก
 *  แนะนำขนาด: 1920×1080 หรือ 16:9 ratio
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
