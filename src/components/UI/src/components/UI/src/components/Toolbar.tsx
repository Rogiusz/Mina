import React from 'react'
import { Map, Mountain, Activity, Sun, Thermometer, Circle, Layers, Database } from 'lucide-react'

const Toolbar: React.FC = () => {
  return (
    <div className="toolbar">
      <button className="button">
        <Map size={18} />
        <span>WAC Base Map</span>
      </button>
      <button className="button">
        <Mountain size={18} />
        <span>Elevation (DEM)</span>
      </button>
      <button className="button">
        <Activity size={18} />
        <span>Slope</span>
      </button>
      <button className="button">
        <Sun size={18} />
        <span>Illumination</span>
      </button>
      <button className="button">
        <Circle size={18} />
        <span>Shadows</span>
      </button>
      <button className="button">
        <Thermometer size={18} />
        <span>Temperature</span>
      </button>
      <button className="button">
        <Layers size={18} />
        <span>Permanently Shadowed Regions (PSR)</span>
      </button>
      <button className="button">
        <Database size={18} />
        <span>Additional NASA Products</span>
      </button>
    </div>
  )
}

export default Toolbar