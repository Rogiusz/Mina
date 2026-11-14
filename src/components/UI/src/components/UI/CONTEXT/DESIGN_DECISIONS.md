# DESIGN DECISIONS

## Color Palette
- **Background Navy**: #0a0f1c (main background)
- **Navy Light**: #0d1525 (panel backgrounds)
- **Charcoal**: #1a1f2e (top bar, elevated surfaces)
- **Charcoal Light**: #2a3145 (hover states)
- **Border Charcoal**: #2d3748 (dividers, borders)
- **Accent Cyan**: #00bcd4 (primary accent, highlights)
- **Cyan Dim**: rgba(0, 188, 212, 0.15) (hover backgrounds)
- **Text White**: #ffffff (primary text)
- **Text Gray**: #a0aec0 (secondary text)
- **Text Dim**: #64748b (tertiary text, labels)

## Typography
- **Monospace Font**: 'Courier New', Courier, monospace (used for all UI text, data, labels)
- **Sans-serif**: System font stack for body text
- **Title Size**: 0.85rem, weight 700, letter-spacing 0.05em
- **Body Size**: 0.75rem, weight 500
- **Label Size**: 0.65rem, weight 700, letter-spacing 0.05em, uppercase

## Layout
- **Grid System**: CSS Grid with 3-column layout
  - Left sidebar: 240px
  - Center workspace: 1fr (flexible)
  - Right panel: 280px
- **Top Bar**: Full-width, 50px height
- **Gap**: 1px borders between sections
- **Height**: Full viewport (100vh)

## Button Styling
- **Shape**: Rectangular with 2px border-radius
- **Background**: Transparent by default
- **Border**: 1px solid transparent
- **Color**: Text gray (#a0aec0)
- **Hover**: Cyan dim background, cyan border, cyan text
- **Active**: Stronger cyan background
- **Padding**: 0.6rem 0.75rem
- **Icon + Text**: 0.75rem gap, 18px icon size
- **Cursor**: Default (static, no interaction)

## Visual Design Conventions
- **Aerospace Aesthetic**: Technical, clean, data-oriented
- **Borders**: Thin 1px borders in charcoal
- **Grid Background**: Subtle cyan grid pattern (40px spacing, 3% opacity)
- **Status Indicator**: 6px glowing cyan dot
- **Scrollbars**: 6px wide, charcoal to cyan on hover
- **Transitions**: 0.15s ease for all hover states
- **No Shadows**: Flat design approach
- **Uppercase Labels**: Technical labels in uppercase with letter-spacing

## Interaction Rules
- **Static Buttons**: No click handlers, no active states beyond hover
- **Hover Effects**: Only CSS transitions allowed
- **No Animations**: Except subtle hover transitions
- **No Real Data**: All content is placeholder text