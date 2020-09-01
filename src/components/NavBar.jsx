import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="container row">
        <Link to="/">
          <div className="NavBar-logo">
            <span className="text-green">GROUND UP</span>
            &nbsp;
            <span className="text-yellow">DEV</span>
          </div>
        </Link>
        <div className="NavBar-notice">
          Early Access
        </div>
      </div>
    </div>
  );
}
