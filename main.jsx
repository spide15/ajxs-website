import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AJXSWebsite from './ajxs-website.jsx'
import BlogList from './src/components/BlogList.jsx'
import PostPage from './src/components/PostPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<AJXSWebsite />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<PostPage />} />
        </Routes>
      </HashRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
