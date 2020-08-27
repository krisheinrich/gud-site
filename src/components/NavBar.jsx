import React from 'react'

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="container row">
        <div className="NavBar-logo">
          <span className="text-green">GROUND UP</span>
          &nbsp;
          <span className="text-yellow">DEV</span>
        </div>
        <div className="NavBar-notice">
          Early Access
        </div>
      </div>
    </div>
  )
}
