# Sistema de Diseño Carbon para Jacuzzi CCTV

## COLORES
- Primary: #0F62FF (Blue 60)
- Secondary: #393939 (Gray 90)
- Background: #F4F4F4 (Gray 10)
- Surface: #FFFFFF
- Text Primary: #161616 (Gray 100)
- Text Secondary: #525252 (Gray 70)
- Accent: #4589FF (Blue 50)
- Success: #24A148 (Green 50)
- Warning: #F1C21B (Yellow 30)
- Error: #DA1E28 (Red 60)
- Border: #E0E0E0 (Gray 30)

## TIPOGRAFÍA
- Font Family: 'IBM Plex Sans', sans-serif
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold)

### Jerarquía Tipográfica
- H1: 48px / 600 weight / 56px line-height
- H2: 36px / 600 weight / 44px line-height
- H3: 28px / 600 weight / 36px line-height
- H4: 22px / 500 weight / 30px line-height
- Body Large: 18px / 400 weight / 26px line-height
- Body: 16px / 400 weight / 24px line-height
- Small: 14px / 400 weight / 20px line-height
- Caption: 12px / 400 weight / 16px line-height

## ESPACIADO
- Base unit: 8px
- Scale: 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
- Component padding: 16px
- Section spacing: 64px
- Container maxWidth: 1320px

## GRID SYSTEM
- Columns: 12
- Gutters: 16px
- Breakpoints:
  - sm: 320px
  - md: 768px
  - lg: 1024px
  - xlg: 1312px
  - max: 1584px

## BORDERS Y RADIUS
- Border radius: 0px (Carbon style)
- Border width: 1px
- Focus outline: 2px solid #0F62FF

## COMPONENTES PRINCIPALES

### Buttons
- Primary: background #0F62FF, text white, 0px radius, 8px padding
- Secondary: background transparent, border 1px #0F62FF, text #0F62FF
- Ghost: background transparent, text #0F62FF, hover #F4F4F4
- Sizes: Small (32px), Medium (40px), Large (48px)

### Cards
- Background: #FFFFFF
- Border: 1px solid #E0E0E0
- Padding: 24px
- Shadow: 0 2px 8px rgba(0,0,0,0.1)
- Border radius: 0px

### Inputs
- Height: 48px
- Border: 1px solid #E0E0E0
- Border focus: 2px solid #0F62FF
- Padding: 0 16px
- Background: #FFFFFF

### Navigation
- Header height: 64px
- Background: #FFFFFF
- Border bottom: 1px solid #E0E0E0
- Nav item padding: 0 16px
- Active state: background #0F62FF, text white

## ANIMACIONES
- Duration: 150ms (fast), 250ms (normal), 350ms (slow)
- Easing: cubic-bezier(0.2, 0, 0.38, 0.9)
- Hover scale: 1.02
- Focus scale: 1.01

## ACCESIBILIDAD
- WCAG 2.1 AA compliance
- Contrast ratios:
  - Normal text: 4.5:1 minimum
  - Large text: 3:1 minimum
  - Interactive elements: 3:1 minimum
- Focus visible: 2px outline #0F62FF
- Keyboard navigation: Tab order logical

## PATRONES DE LAYOUT

### Header
- Height: 64px
- Logo left, navigation center, actions right
- Sticky positioning

### Hero Section
- Height: 70vh minimum
- Background: #F4F4F4
- Content centered
- CTA button primary style

### Content Sections
- Padding: 64px 16px
- Max width: 1320px
- Center aligned

### Footer
- Height: auto
- Background: #393939
- Text color: #FFFFFF
- Padding: 48px 16px

## IMPLEMENTACIÓN TAILWIND
```javascript
// tailwind.config.ts modifications
theme: {
  extend: {
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
    },
    colors: {
      'carbon-blue': '#0F62FF',
      'carbon-blue-50': '#4589FF',
      'carbon-gray-10': '#F4F4F4',
      'carbon-gray-30': '#E0E0E0',
      'carbon-gray-70': '#525252',
      'carbon-gray-90': '#393939',
      'carbon-gray-100': '#161616',
    },
    borderRadius: {
      'none': '0px',
    },
    animation: {
      'carbon': 'carbon 0.25s cubic-bezier(0.2, 0, 0.38, 0.9)',
    },
  },
}
```

## PÁGINAS ESPECÍFICAS

### Landing
- Hero con título H1, subtitulo body large
- CTA button primary large
- Feature cards en grid 3 columnas (desktop)

### Overview
- Título H2, descripción body
- Benefit cards 2x2 grid
- Executive summary card full width

### Technical Solution
- Equipment cards 2x2 grid
- Iconos 32px
- Especificaciones en small text

### Interactive Map
- Map container 600px height
- Layer controls sidebar
- Color coding por tipo de elemento

### Execution Plan
- Timeline vertical
- Phase cards con iconos
- Progress indicators

### Investment
- Total investment card destacado
- Cost breakdown en grid 2x2
- Progress bars horizontales