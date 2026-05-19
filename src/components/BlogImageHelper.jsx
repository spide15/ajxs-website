/**
 * Blog Image Helper Component
 * 
 * Provides responsive image utilities for blog posts
 * All blog images are stored in: src/img/blog/
 * Image naming convention: YYYY-MM-DD.jpg (matching the blog post date)
 * 
 * Usage Examples:
 * 
 * 1. For responsive featured images in blog posts:
 *    <ResponsiveBlogImage date="2024-05-15" alt="Post title" />
 * 
 * 2. For blog card images in lists:
 *    <BlogCardImage date="2024-05-15" alt="Post title" />
 * 
 * 3. For responsive image with custom sizes:
 *    <ResponsiveBlogImage date="2024-05-15" alt="Post title" 
 *      mobileHeight="h-40" tabletHeight="h-64" desktopHeight="h-96" />
 */

import React from 'react';

/**
 * Responsive Featured Blog Image Component
 * Used for full-width blog post header images
 * 
 * @param {string} date - Blog post date (YYYY-MM-DD format)
 * @param {string} alt - Alt text for accessibility
 * @param {string} mobileHeight - Tailwind height class for mobile (default: h-40)
 * @param {string} tabletHeight - Tailwind height class for tablet (default: h-64)
 * @param {string} desktopHeight - Tailwind height class for desktop (default: h-96)
 */
export const ResponsiveBlogImage = ({ 
  date, 
  alt, 
  mobileHeight = 'h-40',
  tabletHeight = 'md:h-64',
  desktopHeight = 'lg:h-96'
}) => {
  const imagePath = `/img/blog/${date}.jpg`;

  return (
    <div className={`w-full ${mobileHeight} ${tabletHeight} ${desktopHeight} overflow-hidden rounded-lg shadow-lg`}>
      <img
        src={imagePath}
        alt={alt}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>
  );
};

/**
 * Blog Card Image Component
 * Used for blog post cards in listings (grid view)
 * 
 * @param {string} date - Blog post date (YYYY-MM-DD format)
 * @param {string} alt - Alt text for accessibility
 * @param {string} height - Tailwind height class (default: h-48)
 */
export const BlogCardImage = ({ 
  date, 
  alt,
  height = 'h-48'
}) => {
  const imagePath = `/img/blog/${date}.jpg`;

  return (
    <div className={`relative w-full ${height} bg-gray-200 overflow-hidden`}>
      <img
        src={imagePath}
        alt={alt}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>
  );
};

/**
 * Thumbnail Blog Image Component
 * Used for small preview images
 * 
 * @param {string} date - Blog post date (YYYY-MM-DD format)
 * @param {string} alt - Alt text for accessibility
 * @param {string} size - Tailwind size class (default: w-32 h-32)
 */
export const BlogImageThumbnail = ({ 
  date, 
  alt,
  size = 'w-32 h-32'
}) => {
  const imagePath = `/img/blog/${date}.jpg`;

  return (
    <div className={`${size} rounded-lg overflow-hidden shadow-md bg-gray-200 flex-shrink-0`}>
      <img
        src={imagePath}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

/**
 * Blog Image with Caption Component
 * Used for images with accompanying text
 * 
 * @param {string} date - Blog post date (YYYY-MM-DD format)
 * @param {string} alt - Alt text for accessibility
 * @param {string} caption - Caption text to display below image
 * @param {string} height - Tailwind height class (default: h-64)
 */
export const BlogImageWithCaption = ({ 
  date, 
  alt,
  caption,
  height = 'h-64'
}) => {
  const imagePath = `/img/blog/${date}.jpg`;

  return (
    <figure className="my-8">
      <div className={`w-full ${height} overflow-hidden rounded-lg shadow-lg mb-3`}>
        <img
          src={imagePath}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="text-center text-gray-600 text-sm italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

/**
 * Responsive Images Object
 * Map of blog post dates to image data
 * 
 * Usage: Import this object and use imagePath property
 * Example: BLOG_IMAGES['2024-05-15'].path
 */
export const BLOG_IMAGES = {
  '2024-05-15': {
    path: '/img/blog/2024-05-15.jpg',
    alt: 'Custom Mug Printing Services',
    title: 'Custom Mug Printing'
  },
  '2024-05-13': {
    path: '/img/blog/2024-05-13.jpg',
    alt: 'Professional Business Card Design',
    title: 'Business Card Design'
  },
  '2024-05-11': {
    path: '/img/blog/2024-05-11.jpg',
    alt: 'Thesis Printing & Binding Services',
    title: 'Thesis Printing'
  },
  '2024-05-09': {
    path: '/img/blog/2024-05-09.jpg',
    alt: 'Corporate Gifting Ideas',
    title: 'Corporate Gifting'
  },
  '2024-05-07': {
    path: '/img/blog/2024-05-07.jpg',
    alt: 'Flex Printing & Outdoor Advertising',
    title: 'Flex Printing'
  }
};

/**
 * Responsive Image Container for Hero Sections
 * Used for large hero/banner images
 * 
 * @param {string} date - Blog post date (YYYY-MM-DD format)
 * @param {string} alt - Alt text for accessibility
 * @param {React.ReactNode} children - Content to overlay on image
 * @param {boolean} overlay - Whether to add dark overlay (default: false)
 */
export const BlogImageHero = ({ 
  date, 
  alt,
  children,
  overlay = false
}) => {
  const imagePath = `/img/blog/${date}.jpg`;

  return (
    <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-2xl">
      <img
        src={imagePath}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {overlay && (
        <div className="absolute inset-0 bg-black/40"></div>
      )}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default {
  ResponsiveBlogImage,
  BlogCardImage,
  BlogImageThumbnail,
  BlogImageWithCaption,
  BlogImageHero,
  BLOG_IMAGES
};
