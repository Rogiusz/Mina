import React from 'react'
import { Globe, Calculator, Mountain, BarChart3, Sun, Map, Settings } from 'lucide-react'

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <button className="button">
        <Globe size={18} />
        <span>Overview</span>
      </button>
      <button className="button">
        <Globe size={18} />
        <span>Lunar Globe</span>
      </button>
      <button className="button">
        <Calculator size={18} />
        <span>Distance Calculator</span>
      </button>
      <button className="button">
        <Mountain size={18} />
        <span>Elevation Analysis</span>
      </button>
      <button className="button">
        <BarChart3 size={18} />
        <span>Data Plotter</span>
      </button>
      <button className="button">
        <Sun size={18} />
        <span>Sun Angle Calculator</span>
      </button>
      <button className="button">
        <Map size={18} />
        <span>Site Analysis</span>
      </button>
    </div>
  )
}

export default Sidebar