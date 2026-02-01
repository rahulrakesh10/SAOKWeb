# Sean Kenyon - Game Developer Portfolio

A modern, interactive portfolio website built with Next.js, React, TypeScript, and Spline 3D.

## Features

- 🎮 Interactive 3D scenes using Spline
- 🎨 Modern UI with Tailwind CSS and shadcn/ui components
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and TypeScript
- ✨ Smooth animations with Framer Motion

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **3D Graphics**: Spline (@splinetool/react-spline)
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   └── ui/
│       ├── splite.tsx      # Spline 3D scene component
│       ├── spotlight.tsx  # Spotlight effect component
│       ├── card.tsx        # Card component (shadcn/ui)
│       └── demo.tsx        # Demo component
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
└── public/                 # Static assets
```

## Components

### SplineScene
A wrapper component for Spline 3D scenes with lazy loading and loading states.

### Spotlight
An interactive spotlight effect that follows mouse movement, built with Framer Motion.

### Card
A reusable card component from shadcn/ui for consistent UI elements.

## Customization

### Update Spline Scene
Replace the Spline scene URL in `app/page.tsx`:
```tsx
<SplineScene 
  scene="YOUR_SPLINE_SCENE_URL"
  className="w-full h-full"
/>
```

### Modify Colors
Update the color scheme in `app/globals.css` and `tailwind.config.ts`.

### Add Projects
Edit the projects section in `app/page.tsx` to add your own game development projects.


