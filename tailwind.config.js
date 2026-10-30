/**
 * IbexFlow landing page — Tailwind CSS v4 configuration.
 *
 * Tailwind v4 is CSS-first; this file is loaded through the `@config` directive
 * in src/index.css. It only carries the source globs and the sans-serif stack.
 * The IbexFlow palette (paper / basalt / mauve / terracotta) is declared as
 * design tokens in the `@theme` block of src/index.css; every other colour,
 * radius and shadow comes from Tailwind's default palette through standard
 * utility classes.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
