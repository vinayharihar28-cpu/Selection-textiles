import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm-mobile': '375px',
      'mobile-lg': '430px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        surface: {
          DEFAULT: 'hsl(var(--surface) / <alpha-value>)',
          foreground: 'hsl(var(--surface-foreground) / <alpha-value>)',
          muted: 'hsl(var(--surface-muted) / <alpha-value>)',
          'muted-foreground': 'hsl(var(--surface-muted-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
        },
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        ring: 'hsl(var(--ring) / <alpha-value>)',

        // Editorial Green-Led Color Tokens
        forest: {
          DEFAULT: '#173F35', // Deep Forest Green (Primary)
          dark: '#0F2D26', // Dark Green
          surface: '#132F29', // Dark Mode Surface
          muted: '#1A3B34',
        },
        ivory: {
          DEFAULT: '#F5F1E8', // Warm Ivory
          warm: '#FCFAF6', // Warm White
        },
        sage: {
          DEFAULT: '#DCE3D8', // Soft Sage
          dark: '#9EACA0',
        },
        sand: {
          DEFAULT: '#D8CDBB', // Muted Sand
        },
        charcoal: {
          DEFAULT: '#242522', // Deep Charcoal
          muted: '#5C5E58',
        },
        brass: {
          DEFAULT: '#A58B5F', // Muted Brass
          light: '#BFA87E',
        },

        // Brand palette backwards compatibility
        brand: {
          primary: '#173F35', // Deep Forest Green
          secondary: '#DCE3D8', // Soft Sage
          accent: '#A58B5F', // Muted Brass
          luxury: '#A58B5F', // Muted Brass
          warmAccent: '#A58B5F',
          background: '#F5F1E8', // Warm Ivory
          surface: '#FCFAF6', // Warm White
          text: '#242522', // Deep Charcoal
        },
        // Specific warm neutral scale
        warm: {
          50: '#FCFAF6',
          100: '#F5F1E8', // Primary Light Background
          200: '#DCE3D8', // Soft Sage surface
          300: '#D8CDBB', // Muted Sand Border
          400: '#A58B5F', // Muted Brass accent
          500: '#173F35', // Primary Forest Green
          600: '#5C5E58', // Secondary Text
          700: '#1F473E', // Dark mode border
          800: '#1A3B34', // Dark mode soft surface
          900: '#132F29', // Dark mode surface
          950: '#0F2D26', // Dark mode background
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
        '3xl': '1.5rem',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tight-editorial': '-0.02em',
        'wide-editorial': '0.08em',
        'widest-editorial': '0.18em',
        'widest-luxury': '0.26em',
      },
      lineHeight: {
        editorial: '1.18',
        relaxed: '1.7',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
