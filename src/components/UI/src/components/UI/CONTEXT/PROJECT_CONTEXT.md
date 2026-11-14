# PROJECT CONTEXT

## Project Purpose
Lunar Analysis UI is a minimal, professional aerospace-inspired visual prototype for lunar landing site analysis tools. It provides a static interface shell for future 3D visualization, data plotting, and scientific analysis capabilities.

## Current Development Stage
- **Phase**: Static visual prototype
- **Version**: v0.1.0
- **Status**: Early-stage UI shell with placeholder components

## Technology Stack
- **Frontend**: React 18, TypeScript 5
- **Build Tool**: Vite 6
- **Icons**: Lucide React
- **Styling**: CSS custom properties (aerospace theme)
- **Language**: English (all UI text)

## Existing Project Structure
```
UI/
├── CONTEXT/
│   ├── PROJECT_CONTEXT.md
│   ├── DESIGN_DECISIONS.md
│   └── CHANGELOG.md
├── public/
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── components/
│       ├── TopBar.tsx
│       ├── Sidebar.tsx
│       ├── Toolbar.tsx
│       ├── Workspace.tsx
│       └── RightPanel.tsx
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Implemented Components
1. **TopBar** - Title "LUNAR ANALYSIS", status indicator "ONLINE", version "v0.1.0"
2. **Sidebar** - Navigation buttons: Overview, Lunar Globe, Distance Calculator, Elevation Analysis, Data Plotter, Sun Angle Calculator, Site Analysis
3. **Toolbar** - Layer buttons: WAC Base Map, Elevation (DEM), Slope, Illumination, Shadows, Temperature, Permanently Shadowed Regions (PSR), Additional NASA Products
4. **Workspace** - Empty central area with "LUNAR VISUALIZATION" and "3D ENVIRONMENT UNDER DEVELOPMENT" text, subtle grid background
5. **RightPanel** - Empty panel with "LOCATION DATA" and "AWAITING DATA SOURCE"

## Features That Must NOT Be Implemented Yet
- 3D visualization or Moon model
- Map rendering or geographic data
- Scientific calculations or algorithms
- API integrations or backend
- Database connections
- Charts or data plotting
- Navigation logic or routing
- Interactive click handlers (only CSS hover effects)
- Fake scientific measurements or results

## Future Development Plans
- Implement 3D lunar model integration
- Add real data sources and API connections
- Build interactive analysis tools
- Implement data plotting and visualization
- Add site comparison and reporting features