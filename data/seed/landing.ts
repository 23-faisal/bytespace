export const learnerAvatars = [
  "/images/avatars/learner-1.png",
  "/images/avatars/learner-2.png",
  "/images/avatars/learner-3.png",
  "/images/avatars/learner-4.png",
];

export const studentAvatars = [
  "/images/avatars/student-1.png",
  "/images/avatars/student-2.png",
  "/images/avatars/student-3.png",
  "/images/avatars/student-4.png",
  "/images/avatars/student-5.png",
  "/images/avatars/student-6.png",
  "/images/avatars/student-7.png",
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
] as const;

export const partners = [
  { src: "/images/partners/partner-1.svg", width: 167, height: 41 },
  { src: "/images/partners/partner-2.svg", width: 168, height: 41 },
  { src: "/images/partners/partner-3.svg", width: 170, height: 41 },
  { src: "/images/partners/partner-4.svg", width: 170, height: 41 },
  { src: "/images/partners/partner-5.svg", width: 169, height: 42 },
];

export const learningPaths = [
  {
    label: "Design",
    icon: "/images/categories/cat-design.svg",
    category: "ui-ux-design",
  },
  {
    label: "Development",
    icon: "/images/categories/cat-development.svg",
    category: "web-development",
  },
  {
    label: "IT & Software",
    icon: "/images/categories/cat-it.svg",
    category: "data-science",
  },
  {
    label: "Business",
    icon: "/images/categories/cat-business.svg",
    category: "freelance-entrepreneurship",
  },
  {
    label: "Marketing",
    icon: "/images/categories/cat-marketing.svg",
    category: "marketing",
  },
  {
    label: "Photography",
    icon: "/images/categories/cat-photography.svg",
    category: "photography",
  },
];

export const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorPerks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/avatars/testimonial-1.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/avatars/testimonial-2.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/avatars/testimonial-3.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

const courseLink = (label: string, category?: string) => ({
  label,
  href: category ? `/courses?category=${category}` : "/courses",
});

export const footerLinks = [
  [
    courseLink("Featured Courses"),
    courseLink("Featured Categories"),
    courseLink("Business", "freelance-entrepreneurship"),
    courseLink("IT", "data-science"),
    courseLink("Design", "ui-ux-design"),
  ],
  [
    courseLink("Development", "web-development"),
    courseLink("Marketing", "marketing"),
    courseLink("Photography", "photography"),
    { label: "Finance", href: "/courses?q=money" },
    { label: "Sport", href: "#" },
  ],
  [
    { label: "Become a Creator", href: "/register" },
    { label: "Affiliate Program", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Help", href: "#" },
    { label: "About", href: "#" },
  ],
];

export const legalLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Cookies Settings",
];
