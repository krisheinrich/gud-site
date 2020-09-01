import React from 'react'

export default function Modal({ show, onClose, children }) {
  return (
    <div className={`Modal ${show ? 'open' : ''}`} onClick={onClose}>
      <div className="Modal-content" onClick={e => e.stopPropagation()}>
      { children }
      </div>
    </div>
  )
}
