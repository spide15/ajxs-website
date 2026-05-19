# Blog Image Structure Guide

## Overview
Blog images are now organized in a dedicated folder with a date-based naming convention for easy management and maintenance.

## Folder Structure
```
ajxs-website/
├── img/
│   └── blog/                    # New dedicated blog images folder
│       ├── 2024-05-15.jpg      # Custom Mug Printing post
│       ├── 2024-05-13.jpg      # Business Card Design post
│       ├── 2024-05-11.jpg      # Thesis Printing post
│       ├── 2024-05-09.jpg      # Corporate Gifting post
│       └── 2024-05-07.jpg      # Flex Printing post
```

## Naming Convention
- **Format**: `YYYY-MM-DD.jpg`
- **Pattern**: Image name matches the blog post date
- **Example**: A blog post dated "2024-05-15" uses the image "2024-05-15.jpg"

## Image Specifications

### Recommended Image Sizes
- **Minimum Width**: 800px
- **Recommended Width**: 1200px
- **Aspect Ratio**: 16:9 (recommended) or 4:3
- **File Format**: JPG or PNG
- **File Size**: < 500KB (optimized)

### Responsive Breakpoints
The blog image components use Tailwind CSS responsive breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Using Blog Images

### Method 1: Import from posts.js (Current Implementation)
Images are imported in `src/data/posts.js`:
```javascript
import blogImage20240515 from '../../img/blog/2024-05-15.jpg';

export const blogPosts = [
  {
    id: 1,
    date: "2024-05-15",
    image: blogImage20240515,
    // ... other properties
  }
];
```

### Method 2: Using Helper Components (Recommended for Display)
Import responsive image components from `BlogImageHelper.jsx`:

```javascript
import { ResponsiveBlogImage, BlogCardImage } from '../components/BlogImageHelper';

// For featured images in blog posts
<ResponsiveBlogImage 
  date="2024-05-15" 
  alt="Custom Mug Printing Services" 
/>

// For blog card images
<BlogCardImage 
  date="2024-05-15" 
  alt="Custom Mug Printing Services"
/>
```

### Method 3: Direct Path Reference
You can reference images directly by their path:
```javascript
<img 
  src="/img/blog/2024-05-15.jpg" 
  alt="Custom Mug Printing Services"
  className="w-full h-auto rounded-lg"
/>
```

## Available Helper Components

### 1. ResponsiveBlogImage (Featured Images)
```javascript
<ResponsiveBlogImage 
  date="2024-05-15"
  alt="Post title"
  mobileHeight="h-40"      // Mobile height
  tabletHeight="md:h-64"   // Tablet height
  desktopHeight="lg:h-96"  // Desktop height
/>
```

### 2. BlogCardImage (Grid/List View)
```javascript
<BlogCardImage 
  date="2024-05-15"
  alt="Post title"
  height="h-48"  // Card image height
/>
```

### 3. BlogImageThumbnail (Small Previews)
```javascript
<BlogImageThumbnail 
  date="2024-05-15"
  alt="Post title"
  size="w-32 h-32"  // Thumbnail size
/>
```

### 4. BlogImageWithCaption (Images with Text)
```javascript
<BlogImageWithCaption 
  date="2024-05-15"
  alt="Post title"
  caption="Your caption text here"
  height="h-64"
/>
```

### 5. BlogImageHero (Large Banner Images)
```javascript
<BlogImageHero 
  date="2024-05-15"
  alt="Post title"
  overlay={true}  // Add dark overlay
>
  {/* Optional content to overlay on image */}
</BlogImageHero>
```

## Adding New Blog Posts with Images

### Step 1: Create/Prepare the Image
- Create an image for your new blog post
- Name it with the post date: `YYYY-MM-DD.jpg`
- Optimize it for web (< 500KB, ideally 1200px wide)

### Step 2: Add to img/blog Folder
```
Copy 2024-05-16.jpg → img/blog/2024-05-16.jpg
```

### Step 3: Update posts.js
```javascript
import blogImage20240516 from '../../img/blog/2024-05-16.jpg';

// In blogPosts array:
{
  id: 6,
  title: "Your New Blog Post",
  date: "2024-05-16",
  image: blogImage20240516,
  // ... other properties
}
```

### Step 4: Use in Components
In `BlogList.jsx` or `PostPage.jsx`, the image will be automatically available via `post.image`.

## Best Practices

1. **Image Optimization**
   - Compress images before uploading
   - Use JPG for photos, PNG for graphics
   - Keep file size under 500KB
   - Use recommended minimum width of 800px

2. **Responsive Design**
   - Use the provided helper components
   - Always include alt text for accessibility
   - Test on multiple screen sizes

3. **SEO & Performance**
   - Use lazy loading (included in helpers)
   - Include descriptive alt text
   - Use proper image format
   - Optimize for Core Web Vitals

4. **Naming Consistency**
   - Always follow the YYYY-MM-DD.jpg format
   - Match image name exactly to the blog post date
   - Keep images organized in the img/blog folder

## Current Blog Posts and Images

| Date | Title | Image File |
|------|-------|-----------|
| 2024-05-15 | Custom Mug Printing Services | 2024-05-15.jpg |
| 2024-05-13 | Professional Business Card Design | 2024-05-13.jpg |
| 2024-05-11 | Thesis Printing & Binding Services | 2024-05-11.jpg |
| 2024-05-09 | Corporate Gifting Ideas | 2024-05-09.jpg |
| 2024-05-07 | Flex Printing & Outdoor Advertising | 2024-05-07.jpg |

## Responsive Display Example

To display blog images responsively in the future, you can:

```javascript
// In BlogList.jsx (for future re-enabling of images)
{post.image && (
  <ResponsiveBlogImage 
    date={post.date}
    alt={post.title}
  />
)}

// Or in PostPage.jsx (for featured image)
{post.image && (
  <ResponsiveBlogImage 
    date={post.date}
    alt={post.title}
  />
)}
```

## Notes

- Currently, images are hidden from display (as per user preference for "simple reading")
- All infrastructure is in place for responsive image display
- Images are imported and managed via `posts.js`
- Helper components are ready to use whenever needed
- All components include lazy loading for performance
- CSS uses Tailwind for responsive breakpoints

## Future Enhancement

To re-enable image display with responsive design, simply:
1. Uncomment or add the image container in `BlogList.jsx` or `PostPage.jsx`
2. Use the `ResponsiveBlogImage` helper component
3. Images will automatically display responsively across all devices
