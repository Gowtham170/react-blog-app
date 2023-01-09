import React, { useState } from 'react';
// remixicons
import 'remixicon/fonts/remixicon.css';
import { Navbar, FeaturedArticles, QuickRead } from './components/index';

const App = () => {
  return (
    <div>
      <Navbar/>
      <FeaturedArticles/>
      <QuickRead/>
    </div>
  )
}

export default App