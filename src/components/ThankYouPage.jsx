import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';

export default function ThankYouPage() {
  return (
    <MainLayout clsName="ThankYouPage">
      <div className="fill center">
        <div className="card col center mt-10">
          <h1>Thank You for joining the Ground Up Dev community!</h1>
          <p>Check your inbox for a welcome message.</p>
          <p>
            <Link to="/">Back to Home</Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
