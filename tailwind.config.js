
const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./node_modules/@heroui/theme/dist/components/(button|navbar|ripple|spinner).js"
  ],
  theme: {
  	extend: {

      backgroundImage: {
        'custom-gradient': 'linear-gradient(136.85deg,#ff37f2 -15.82%,#405aff 99.57%)',
		'text-gradient':'linear-gradient(90deg, rgba(242, 54, 255, 0.00) 0%, rgba(241, 32, 255, 0.08) 23.73%, rgba(239, 11, 255, 0.56) 49.67%, rgba(241, 34, 255, 0.04) 74.41%, rgba(242, 54, 255, 0.00) 100%)',
		'header-image':'url("../assets/images/home.png")',
		'custom-pattern': "url('./src/assets/images/layer.png')",
      },
      fontFamily:{
        "Grotesk":["Space Grotesk","serif"],

      },
  
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        primaryColor:"#6644f7",
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"),heroui()],
  plugins: [heroui()],
}
