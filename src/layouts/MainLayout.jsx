import React from 'react';
import NavBar from '../components/NavBar';

export default function MainLayout({ clsName = '', children }) {
  return (
    <div className={`MainLayout col ${clsName}`}>
      <NavBar />
      { children }
    </div>
  );
}
