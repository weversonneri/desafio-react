import React from 'react'

import './styles.css'

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      {year} @ GameStore
    </div>
  )
}
