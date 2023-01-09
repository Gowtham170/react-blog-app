import React, { useState } from 'react';
// remixicons
import 'remixicon/fonts/remixicon.css';
import { Navbar, FeaturedArticles, QuickRead, OlderPosts } from './components/index';

const App = () => {
  return (
    <div>
      <Navbar/>
      <FeaturedArticles/>
      <QuickRead/>
      <OlderPosts/>
    </div>
  )
}

export default App