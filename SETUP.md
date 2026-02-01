# Setup Instructions

## Project Structure

This project follows the **shadcn/ui** project structure:

- **Components**: `/components/ui/` - This is the standard location for shadcn/ui components
- **Utilities**: `/lib/utils.ts` - Contains the `cn()` helper function for merging Tailwind classes
- **Styles**: `/app/globals.css` - Global styles with Tailwind directives and CSS variables

## Why `/components/ui` is Important

The `/components/ui` folder is the default location for shadcn/ui components. This structure:

1. **Maintains Consistency**: Follows shadcn/ui conventions, making it easy to add more components later
2. **Easy Integration**: When using `npx shadcn-ui@latest add [component]`, components are automatically added to this folder
3. **Clear Organization**: Separates reusable UI components from page-specific components
4. **Type Safety**: Works seamlessly with TypeScript path aliases (`@/components/ui`)

## Installed Components

- **SplineScene** (`splite.tsx`): Wrapper for Spline 3D scenes with lazy loading
- **Spotlight** (`spotlight.tsx`): Interactive mouse-following spotlight effect
- **Card** (`card.tsx`): Reusable card component from shadcn/ui

## Dependencies Installed

- `@splinetool/react-spline@^4.1.0` - React wrapper for Spline 3D scenes
- `@splinetool/runtime@^1.0.0` - Spline runtime library
- `framer-motion@^11.3.0` - Animation library for Spotlight effect
- `lucide-react@^0.400.0` - Icon library
- `clsx@^2.1.1` - Utility for conditional class names
- `tailwind-merge@^2.4.0` - Utility for merging Tailwind classes

## Running the Project

```bash
npm install  # Already done
npm run dev  # Start development server
```

Visit `http://localhost:3000` to see your portfolio!

## Next Steps

1. **Customize Spline Scene**: Replace the Spline scene URL in `app/page.tsx` with your own from [spline.design](https://spline.design)
2. **Update Content**: Edit `app/page.tsx` to add your own projects, skills, and information
3. **Add More Components**: Use `npx shadcn-ui@latest add [component-name]` to add more shadcn/ui components
4. **Deploy**: Build and deploy to Vercel, Netlify, or your preferred hosting platform
