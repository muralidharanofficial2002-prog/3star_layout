export const PHONE = "+91 98430 43213";
export const PHONE_TEL = "tel:+919843043213";
export const WA_NUMBER = "919843043213";
export const EMAIL = "3starflex.cbe@gmail.com";

export const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -84 });
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Products", id: "products", dropdown: "products" },
  { label: "Services", id: "services", dropdown: "services" },
  { label: "Contact Us", id: "contact" },
];

export const HERO_IMG =
  "https://static.prod-images.emergentagent.com/jobs/4b0ffde8-46a7-4270-a453-ad85189fcdb9/images/bdba69515578202b6a8c2dae8ed72167d2dce99af96ce3ab1a4aacb29a84f0ea.jpeg";

const u = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const SERVICES = [
  {
    id: "digital",
    title: "Digital Printing",
    icon: "Printer",
    img: u("photo-1598299803204-b73796f43289"),
    desc: "Quick-turn, short-run digital printing with sharp colour reproduction — ideal when you need quality prints fast, without minimum quantity pressure.",
    points: ["Short runs & single copies", "Fast turnaround", "Paper, board & sticker stocks"],
  },
  {
    id: "offset",
    title: "Offset Printing",
    icon: "Layers",
    img: u("photo-1503694978374-8a2fa686963a"),
    desc: "High-volume offset printing for consistent, economical colour across large quantities — the workhorse for brochures, forms and stationery.",
    points: ["Bulk quantities", "Consistent CMYK colour", "Art board 90–350 GSM"],
  },
  {
    id: "flex",
    title: "Flex Printing",
    icon: "Flag",
    img: u("photo-1693031630369-bd429a57f115"),
    desc: "Large-format flex printing for banners, hoardings and event branding — printed on Flex, Star Flex, Backlit, Vinyl and more.",
    points: ["Banners & hoardings", "Standees & backdrops", "Multiple flex materials"],
  },
  {
    id: "sticker",
    title: "Sticker Printing",
    icon: "Sticker",
    img: u("photo-1558478551-cdaa9fa326e3"),
    desc: "Clear, white PVC and paper stickers in custom shapes and sizes — from product labels to branding decals.",
    points: ["Clear / White PVC / Paper", "Custom shapes", "Labels & decals"],
  },
  {
    id: "visiting",
    title: "Visiting Card Printing",
    icon: "IdCard",
    img: u("photo-1718670013988-c6e3edb92345"),
    desc: "Visiting and business cards that carry your brand — paper and plastic cards with premium board options.",
    points: ["Paper & plastic cards", "Premium boards", "Single & bulk orders"],
  },
  {
    id: "brochure",
    title: "Brochure & Leaflet Printing",
    icon: "BookOpen",
    img: u("photo-1769893715447-8f12c382e49c"),
    desc: "Brochures, pamphlets and leaflets printed and finished neatly — bi-fold, tri-fold or flat, in any quantity.",
    points: ["Bi-fold / tri-fold", "Leaflets & pamphlets", "Short-run bookworks"],
  },
  {
    id: "poster",
    title: "Poster Printing",
    icon: "Image",
    img: u("photo-1563050860-87d45eaaeabb"),
    desc: "Posters for events, retail and college projects — printed vividly on paper or board in standard and custom sizes.",
    points: ["Event & retail posters", "College posters & projects", "Custom sizes"],
  },
  {
    id: "banner",
    title: "Banner & Standee Printing",
    icon: "Presentation",
    img: u("photo-1676474506722-4bf98059b74a"),
    desc: "Banners, standees and event displays printed on premium flex materials — ready to install, built to be seen.",
    points: ["Roll-up standees", "Event backdrops", "All flex materials"],
  },
  {
    id: "invitation",
    title: "Invitation & Event Cards",
    icon: "Mail",
    img: u("photo-1785336872624-723ff9405035"),
    desc: "Wedding and event invitations with premium boards and finishes — cards that feel as special as the occasion.",
    points: ["Wedding invitations", "Event & festive cards", "Special boards & textures"],
  },
  {
    id: "packaging",
    title: "Packaging Printing",
    icon: "Package",
    img: u("photo-1700165644892-3dd6b67b25bc"),
    desc: "Printed packaging for products, retail and gifting — boxes, wrappers and printed packaging boards.",
    points: ["Printed boxes", "Product packaging", "Custom sizes & boards"],
  },
];

export const ART_BOARDS = [
  {
    gsm: 90,
    tone: "#1239CD",
    iconImg: "./gsm-icons/row2.png",
    details: "Sketch Pads, Notebooks, Stationery",
    img: u("photo-1503694978374-8a2fa686963a", 800),
    desc: "The lightest of the range — commonly used for sketch pads, notebooks, stationery, leaflets, inserts and high-volume offset jobs.",
  },
  {
    gsm: 100,
    tone: "#5B3BC4",
    iconImg: "./gsm-icons/row3.png",
    details: "Standard Printing Paper, Basic Documents",
    img: u("photo-1598299803204-b73796f43289", 800),
    desc: "Everyday lightweight board for standard printing paper, basic documents, flyers, letterheads and commercial forms.",
  },
  {
    gsm: 130,
    tone: "#C42A8B",
    iconImg: "./gsm-icons/row4.png",
    details: "Posters, Brochures, Flyers",
    img: u("photo-1769893715447-8f12c382e49c", 800),
    desc: "Popular mid-light weight for posters, brochures, flyers, mailers and promotional handouts.",
  },
  {
    gsm: 170,
    tone: "#E85D04",
    iconImg: "./gsm-icons/row4.png",
    details: "Posters, Brochures, Flyers",
    img: u("photo-1591351659190-6258bbec984d", 800),
    desc: "Sturdy mid-weight board for posters, brochures, flyers, menus and display cards.",
  },
  {
    gsm: 250,
    tone: "#1F7A3D",
    iconImg: "./gsm-icons/row5.png",
    details: "Magazine Covers, Promotional Flyers, Art Paper",
    img: u("photo-1562155695-fb6e1f95fcfd", 800),
    desc: "Thick art board stock for magazine covers, promotional flyers, art paper, folders and premium stationery.",
  },
  {
    gsm: 300,
    tone: "#0E63B8",
    iconImg: "./gsm-icons/row5.png",
    details: "Magazine Covers, Promotional Flyers, Art Paper",
    img: u("photo-1718670013988-c6e3edb92345", 800),
    desc: "Heavy board for magazine covers, promotional flyers, art paper, visiting cards and display items.",
  },
  {
    gsm: 350,
    tone: "#D02B2B",
    iconImg: "./gsm-icons/row6.png",
    details: "Cardstock, Business Cards, Invitations, Packaging",
    img: u("photo-1785336872624-723ff9405035", 800),
    desc: "Rigid, premium board for cardstock, business cards, invitations, packaging and luxury covers.",
  },
];

export const MATERIALS = [
  { name: "Flex", cat: "Flex & Banner", tone: "#1239CD", roll: "#e8ecf5", desc: "Everyday PVC banner material for general outdoor and indoor signage." },
  { name: "Star Flex", cat: "Flex & Banner", tone: "#EF0712", roll: "#f3f5f9", desc: "Premium-grade flex with a smoother surface for sharper banner prints." },
  { name: "Black Out", cat: "Flex & Banner", tone: "#1A1C22", roll: "#26282e", desc: "Blockout material with a black middle layer that stops light pass-through." },
  { name: "Backlit", cat: "Flex & Banner", tone: "#E8930C", roll: "#f5e9d2", desc: "Translucent material for light-box and glow-sign applications." },
  { name: "Eco", cat: "Flex & Banner", tone: "#1F7A3D", roll: "#eef3ec", desc: "Economical flex option for short-term campaigns and events." },
  { name: "Backlight", cat: "Flex & Banner", tone: "#EF0712", roll: "#f6e3e3", desc: "Front-printing translucent media for backlit displays." },
  { name: "Vinyl", cat: "Vinyl & Film", tone: "#1239CD", roll: "#dfe7f7", desc: "Self-adhesive vinyl for stickers, vehicle branding and cut-outs." },
  { name: "Gray Vinyl", cat: "Vinyl & Film", tone: "#5B616E", roll: "#c9cdd6", desc: "Gray-backed adhesive vinyl that helps block show-through on dark surfaces." },
  { name: "UV Clear", cat: "Vinyl & Film", tone: "#8B2FC9", roll: "#e6dcf5", desc: "Clear film printed with UV inks for transparent branding." },
  { name: "Fabric Material", cat: "Fabric", tone: "#0E7C8C", roll: "#f1f4f4", desc: "Printable fabric media for soft signage, backdrops and displays." },
];

export const MATERIAL_TABS = ["All", "Flex & Banner", "Vinyl & Film", "Fabric"];

export const MORE_PRODUCTS = [
  { title: "Papers & Boards", icon: "Copy" },
  { title: "Clear, White PVC & Paper Stickers", icon: "Sticker" },
  { title: "Identity Cards – Paper & Plastic", icon: "IdCard" },
  { title: "Special Boards – Needle Point, Criss-Cross, Texture & Ivory", icon: "Grid3x3" },
  { title: "Metallic & Synthetic Sheets", icon: "Sparkles" },
  { title: "Visiting & Business Cards", icon: "Contact" },
  { title: "Brochures & Pamphlets", icon: "BookOpen" },
  { title: "CD Stickers", icon: "Disc" },
  { title: "Event & Wedding Invitations", icon: "Mail" },
  { title: "College Posters & Projects", icon: "GraduationCap" },
  { title: "Short-Run Bookworks", icon: "NotebookText" },
  { title: "Black & White A4 / A3 Xerox", icon: "ScanLine" },
  { title: "Elevation Work", icon: "Building2" },
  { title: "Fabrication Work", icon: "Wrench" },
  { title: "Acrylic", icon: "Square" },
  { title: "One-Way Printing", icon: "Eye" },
];

export const WHY_POINTS = [
  { icon: "BadgeCheck", title: "Premium Quality Printing", desc: "Sharp colour, clean finishing and careful checks on every job." },
  { icon: "Layers", title: "Wide Range of Paper & Flex Materials", desc: "Art boards, special boards, stickers, vinyl and every flex variant." },
  { icon: "Handshake", title: "Bulk Order Support", desc: "Offset capacity and material stock to handle large volumes." },
  { icon: "Truck", title: "On-Time Delivery", desc: "Clear timelines and dependable dispatch, job after job." },
  { icon: "Headset", title: "Dedicated Customer Support", desc: "A team that answers, advises and follows up till delivery." },
];

export const PROCESS_STEPS = [
  { icon: "MessageSquareText", title: "Share Your Requirement", desc: "Tell us what you need — quantity, size, material and deadline." },
  { icon: "SwatchBook", title: "Choose Material & Finish", desc: "Pick from art boards, flex materials, stickers and specialty stocks." },
  { icon: "Printer", title: "Printing & Production", desc: "Digital, flex or offset — printed, finished and quality-checked." },
  { icon: "Truck", title: "Delivery", desc: "Packed safely and delivered on the agreed timeline." },
];

export const GALLERY_CATS = [
  "All",
  "Flex & Banners",
  "Digital Printing",
  "Offset Printing",
  "Business Cards",
  "Invitations",
  "Brochures",
  "Signage",
];

export const GALLERY = [
  { cat: "Flex & Banners", img: u("photo-1693031630369-bd429a57f115", 800), h: "aspect-[4/5]" },
  { cat: "Digital Printing", img: u("photo-1598299803204-b73796f43289", 800), h: "aspect-[4/3]" },
  { cat: "Offset Printing", img: u("photo-1562155695-fb6e1f95fcfd", 800), h: "aspect-square" },
  { cat: "Business Cards", img: u("photo-1718670013988-c6e3edb92345", 800), h: "aspect-[4/5]" },
  { cat: "Invitations", img: u("photo-1785336872624-723ff9405035", 800), h: "aspect-[4/3]" },
  { cat: "Brochures", img: u("photo-1769893715447-8f12c382e49c", 800), h: "aspect-[4/5]" },
  { cat: "Signage", img: u("photo-1791295267299-9de0295d2ba4", 800), h: "aspect-[4/3]" },
  { cat: "Flex & Banners", img: u("photo-1676474506722-4bf98059b74a", 800), h: "aspect-[4/3]" },
  { cat: "Offset Printing", img: u("photo-1503694978374-8a2fa686963a", 800), h: "aspect-[4/5]" },
  { cat: "Business Cards", img: u("photo-1718670013921-2f144aba173a", 800), h: "aspect-square" },
  { cat: "Invitations", img: u("photo-1764731080480-58b18e519bd9", 800), h: "aspect-square" },
  { cat: "Brochures", img: u("photo-1591351659190-6258bbec984d", 800), h: "aspect-[4/3]" },
  { cat: "Signage", img: u("photo-1604066867775-43f48e3957d8", 800), h: "aspect-[4/5]" },
  { cat: "Digital Printing", img: u("photo-1693031630177-b897fb9d7154", 800), h: "aspect-[4/3]" },
];
