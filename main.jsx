import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AJXSWebsite from './ajxs-website.jsx'
import BlogList from './src/components/BlogList.jsx'
import PostPage from './src/components/PostPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AJXSWebsite />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<PostPage />} />
          <Route path="*" element={<AJXSWebsite />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
