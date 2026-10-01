export const levels = ["Beginner", "Intermediate", "Advanced"] as const;

export type Level = (typeof levels)[number];

export const sortOptions = {
  relevant: "Most relevant",
  newest: "Newest",
  rating: "Highest rated",
  popular: "Most popular",
  "price-asc": "Price: low to high",
  "price-desc": "Price: high to low",
} as const;

export type SortOption = keyof typeof sortOptions;

export const priceRanges = {
  "under-25": { label: "Under $25", min: 0, max: 24 },
  "25-40": { label: "$25 to $40", min: 25, max: 40 },
  "over-40": { label: "Over $40", min: 41, max: undefined },
} as const;

export type PriceRange = keyof typeof priceRanges;

export type CourseFilters = {
  q?: string;
  category?: string;
  level?: Level;
  price?: PriceRange;
  sort?: SortOption;
  page?: number;
};

export type Paginated<T> = {
  items: T[];
  total: number;
  page: number;
  pageCount: number;
};

export type CourseSummary = {
  slug: string;
  title: string;
  image: string;
  level: Level;
  price: number;
  students: number;
  featured: boolean;
  categorySlug: string;
  creatorName: string;
  creatorSlug: string;
  lessons: number;
  minutes: number;
  reviewCount: number;
  rating: number;
};

export type Category = { slug: string; name: string };

export type Lesson = {
  id: number;
  title: string;
  durationMinutes: number;
  isPreview: boolean;
};

export type Section = {
  id: number;
  title: string;
  summary: string;
  minutes: number;
  lessons: Lesson[];
};

export type CourseCreator = {
  slug: string;
  name: string;
  role: string;
  avatar: string;
};

export type RatingSummary = {
  average: number;
  total: number;
  counts: [number, number, number, number, number];
};

export type CourseDetail = {
  id: number;
  slug: string;
  title: string;
  headline: string;
  tagline: string;
  description: string[];
  image: string;
  previewImage: string;
  gallery: string[];
  keyPoints: string[];
  level: Level;
  price: number;
  students: number;
  category: Category;
  creator: CourseCreator;
  sections: Section[];
  lessonCount: number;
  minutes: number;
  rating: RatingSummary;
};

export type Review = {
  id: number;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  rating: number;
  body: string;
  createdAt: Date;
};

export type CreatorProfile = {
  id: number;
  slug: string;
  name: string;
  headline: string;
  bio: string[];
  avatar: string;
  followers: number;
  courseCount: number;
};

export type Creator = {
  slug: string;
  name: string;
  role: string;
  avatar: string;
};

export type CourseSection = {
  id: number;
  title: string;
  summary: string | null;
  lessons: Lesson[];
  minutes: number;
};
