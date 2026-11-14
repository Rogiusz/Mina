import React from 'react'
import { Activity } from 'lucide-react'

const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-title">LUNAR ANALYSIS</div>
      <div className="top-bar-status">
        <span className="top-bar-status-dot"></span>
        <span>ONLINE</span>
      </div>
      <div className="top-bar-version">v0.1.0</div>
    </div>
  )
}

export default TopBar