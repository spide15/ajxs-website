import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, MessageCircle, Twitter } from 'lucide-react';
import { blogPosts } from '../data/posts.js';

const PostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(
    (p) => p.slug === slug || p.id === parseInt(slug, 10)
  );

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out: ${post.title}`;

    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      default:
        navigator.share?.({ title: post.title, text, url });
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Avani Prints - Printing Services Mumbai</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Home</span>
            </button>
          </div>
        </header>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 py-8">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {post.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full"
                >
                  #{keyword}
                </span>
              ))}
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-red-300 prose-blockquote:text-gray-600"
            dangerouslySetInnerHTML={{
              __html: post.content
                .split('\n')
                .map(line => {
                  // Convert markdown-style headers
                  if (line.startsWith('# ')) {
                    return `<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-4">${line.substring(2)}</h1>`;
                  }
                  if (line.startsWith('## ')) {
                    return `<h2 class="text-2xl font-bold text-gray-900 mt-6 mb-3">${line.substring(3)}</h2>`;
                  }
                  if (line.startsWith('### ')) {
                    return `<h3 class="text-xl font-bold text-gray-900 mt-4 mb-2">${line.substring(4)}</h3>`;
                  }

                  // Convert markdown links
                  line = line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-red-600 hover:underline">$1</a>');

                  // Convert bold text
                  line = line.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

                  // Handle lists
                  if (line.startsWith('- ')) {
                    return `<li class="mb-2">${line.substring(2)}</li>`;
                  }

                  // Handle empty lines
                  if (line.trim() === '') {
                    return '<br>';
                  }

                  // Regular paragraphs
                  return line ? `<p class="mb-4 leading-relaxed">${line}</p>` : '';
                })
                .join('')
                .replace(/<li/g, '<ul class="list-disc list-inside mb-4"><li')
                .replace(/<\/li>(?!<li)/g, '</li></ul>')
            }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Share this article</h3>
                <p className="text-gray-600">Help others discover our printing services</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </button>

                <button
                  onClick={() => handleShare('twitter')}
                  className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Twitter size={18} />
                  Twitter
                </button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Need Printing Services in Mumbai?
            </h3>
            <p className="text-gray-600 mb-6">
              Get high-quality printing, customization, and gifting services at competitive prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919320999385"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                📞 Call Now: +91 93209 99385
              </a>
              <a
                href="https://wa.me/917738405495"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default PostPage;