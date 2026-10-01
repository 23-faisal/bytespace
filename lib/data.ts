import type { Category, CourseSummary } from "./queries/types";

export const categories: Category[] = [
  {
    slug: "music",
    name: "Music",
  },
  {
    slug: "drawing-painting",
    name: "Drawing & Painting",
  },
  {
    slug: "marketing",
    name: "Marketing",
  },
  {
    slug: "animation",
    name: "Animation",
  },
  {
    slug: "social-media",
    name: "Social Media",
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
  },
  {
    slug: "creative-marketing",
    name: "Creative Marketing",
  },
  {
    slug: "digital-illustration",
    name: "Digital Illustration",
  },
  {
    slug: "film-video",
    name: "Film & Video",
  },
  {
    slug: "finance-entrepreneurship",
    name: "Finance & Entrepreneurship",
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
  },
  {
    slug: "photography",
    name: "Photography",
  },
  {
    slug: "productivity",
    name: "Productivity",
  },
  {
    slug: "web-development",
    name: "Web Development",
  },
  {
    slug: "data-science",
    name: "Data Science",
  },
  {
    slug: "coaching",
    name: "Coaching",
  },
];

export const courses: CourseSummary[] = [
  {
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    image: "/images/courses/course-1.jpg",
    level: "Beginner",
    price: 25,
    students: 30,
    featured: true,
    categorySlug: "ui-ux-design",
    creatorName: "purepeal studio",
    creatorSlug: "purepeal-studio",
    lessons: 17,
    minutes: 137,
    reviewCount: 59,
    rating: 4.5,
  },

  {
    slug: "build-digital-asset",
    title: "Build Digital Assets",
    image: "/images/courses/course-2.jpg",
    level: "Beginner",
    price: 25,
    students: 30,
    featured: true,

    categorySlug: "digital-illustration",

    creatorName: "purepeal studio",
    creatorSlug: "purepeal-studio",

    lessons: 17,
    minutes: 136,

    reviewCount: 59,
    rating: 4.5,
  },

  {
    slug: "power-of-big-data",
    title: "The Power of Big Data",
    image: "/images/courses/course-3.jpg",
    level: "Beginner",
    price: 25,
    students: 30,
    featured: true,

    categorySlug: "data-science",

    creatorName: "purepeal studio",
    creatorSlug: "purepeal-studio",

    lessons: 17,
    minutes: 136,

    reviewCount: 59,
    rating: 4.5,
  },

  {
    slug: "productivity-mastery",
    title: "Balancing Productivity and Be Successful",
    image: "/images/courses/course-4.jpg",
    level: "Beginner",
    price: 25,
    students: 30,
    featured: true,

    categorySlug: "productivity",

    creatorName: "purepeal studio",
    creatorSlug: "purepeal-studio",

    lessons: 17,
    minutes: 136,

    reviewCount: 136,
    rating: 4.5,
  },

  {
    slug: "money-management",
    title: "Mastering Money Management",
    image: "/images/courses/course-5.jpg",
    level: "Beginner",
    price: 25,
    students: 30,
    featured: true,

    categorySlug: "finance-entrepreneurship",

    creatorName: "Michael Anderson",
    creatorSlug: "michael-anderson",

    lessons: 17,
    minutes: 136,

    reviewCount: 261,
    rating: 4.5,
  },

  {
    slug: "from-idea-startup-success",
    title: "From Idea to Startup Success",
    image: "/images/courses/course-6.jpg",
    level: "Beginner",
    price: 25,
    students: 30,
    featured: true,

    categorySlug: "finance-entrepreneurship",

    creatorName: "purepeal studio",
    creatorSlug: "purepeal-studio",

    lessons: 17,
    minutes: 136,

    reviewCount: 133,
    rating: 4.5,
  },
];
