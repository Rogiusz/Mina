import React from 'react'
import './index.css'
import TopBar from './components/TopBar'
import Sidebar from './components/Sidebar'
import Toolbar from './components/Toolbar'
import Workspace from './components/Workspace'
import RightPanel from './components/RightPanel'

function App() {
  return (
    <div className="app-container">
      <TopBar />
      <Sidebar />
      <Toolbar />
      <Workspace />
      <RightPanel />
    </div>
  )
}

export default App