import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import './styles.css'; // Import the CSS file

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Page;
