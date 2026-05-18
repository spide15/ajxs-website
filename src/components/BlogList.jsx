import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/posts.js';

const BlogList = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Blog | Avani Prints - Printing Services Mumbai</title>
        <meta
          name="description"
          content="Browse printing and gifting insights from Avani Prints. Read all articles and choose the best service for your needs."
        />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Home</span>
            </button>
            <span className="text-sm text-gray-500">{blogPosts.length} articles available</span>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-10">
          <section className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-bold mb-3">Blog</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Printing & gifting insights
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Helpful tips, smart ideas, and expert guidance for your next print or gift project.
            </p>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span>{post.readTime} min read</span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-5 line-clamp-3">{post.excerpt}</p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {post.keywords.slice(0, 3).map((keyword, index) => (
                      <span
                        key={index}
                        className="text-xs bg-red-100 text-red-800 px-3 py-1 rounded-full"
                      >
                        #{keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default BlogList;
