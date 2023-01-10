import React from 'react';
import 'remixicon/fonts/remixicon.css';
import { 
  Navbar, 
  FeaturedArticles, 
  QuickRead, 
  OlderPosts,
  PopularTags,
  NewsLetter,
  Footer
} from './components/index';

const App = () => {
  return (
    <div>
      <Navbar/>
      <FeaturedArticles/>
      <QuickRead/>
      <OlderPosts/>
      <PopularTags/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default App