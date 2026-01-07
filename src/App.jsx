import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

import Preloader from './components/Preloader';

import FeaturedProject from './components/FeaturedProject';

function App() {
  return (
    <Layout>
      <Preloader />
      <Hero />
      <About />
      <FeaturedProject />
      <Gallery />
      <Contact />
    </Layout>
  );
}

export default App;
