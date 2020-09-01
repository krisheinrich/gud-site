import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import MailChimpModal from './MailChimpModal';

export default function LandingPage({ children }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <MainLayout>
      <header className="LandingPage-header">
        <div className="darken-cover"></div>
        <div className="container">
          <div className="hero-section col">
            <p className="hero-text">The fastest path to a career in web development</p>
            <button className="cta" onClick={() => setShowModal(true)}>
              Sign Up for Early Access &gt;
            </button>
          </div>
        </div>
      </header>
      <MailChimpModal show={showModal} onClose={() => setShowModal(false)}/>
    </MainLayout>
  );
}
