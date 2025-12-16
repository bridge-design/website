# RotatingText Component

An inline text animation component that cycles through an array of strings with gentle motion between them.

## Features

- 🎯 **Inline Usage**: Designed to be placed inline within text content
- ✨ **Multiple Animations**: Choose between fade and slide animations
- ⏸️ **Pause on Hover**: Optional pause animation when user hovers over the text
- 🎛️ **Customizable**: Configurable duration, transition speed, and styling
- 📱 **Accessible**: Respects `prefers-reduced-motion` for accessibility
- 🔧 **TypeScript**: Fully typed with comprehensive prop definitions

## Usage

```tsx
import { RotatingText } from '@/components-new'

// Basic usage
<p>
  We specialize in <RotatingText texts={['design systems', 'frontend development', 'UI engineering']} />.
</p>

// With slide animation and custom options
<RotatingText 
  texts={['React', 'Vue', 'Angular', 'Svelte']}
  duration={2000}
  transitionDuration={300}
  animation="slide"
  pauseOnHover={true}
  className="font-semibold text-blue-600"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `texts` | `string[]` | **required** | Array of strings to cycle through |
| `duration` | `number` | `2000` | Duration in milliseconds to show each text |
| `transitionDuration` | `number` | `300` | Duration in milliseconds for the transition animation |
| `animation` | `'fade' \| 'slide'` | `'fade'` | Animation type: fade or slide |
| `className` | `string` | `''` | Additional CSS classes |
| `pauseOnHover` | `boolean` | `false` | Whether to pause animation on hover |
| `autoStart` | `boolean` | `true` | Whether to start animation immediately |

## Examples

### Basic Inline Usage
```tsx
<p>
  Our workshops are for <RotatingText texts={['designers', 'developers', 'product managers']} /> 
  who want to improve their skills.
</p>
```

### With Slide Animation
```tsx
<p>
  We deliver projects <RotatingText 
    texts={['within your Budget', 'on your Schedule', 'ready for your Big Day']}
    animation="slide"
    className="font-semibold text-purple-600"
  />.
</p>
```

### With Custom Styling
```tsx
<h1>
  Create <RotatingText 
    texts={['beautiful', 'scalable', 'maintainable']} 
    animation="fade"
    className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600"
  /> interfaces.
</h1>
```

### Pause on Hover with Slide
```tsx
<RotatingText 
  texts={['hover me', 'to pause', 'the animation']}
  animation="slide"
  pauseOnHover={true}
  className="cursor-pointer"
/>
```

## Accessibility

The component automatically respects the user's `prefers-reduced-motion` setting through Tailwind CSS classes. When reduced motion is preferred, transitions are disabled while maintaining functionality.

## Storybook

View all examples and interact with the component in Storybook under `Components/RotatingText`.
