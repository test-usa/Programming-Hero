
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
  			'text-gradient': 'linear-gradient(90deg, #E855DE 0.01%, #5400EE 100%)',
  			'header-image': 'url("../assets/images/home.png")',
  			'custom-pattern': 'url("./src/assets/images/layer.png")',
  			'bg-grid': 'url("./src/assets/images/grid.png")',
  			'bg-globe': 'url("./src/assets/images/globe.png")',
  			'custom-footer': 'url("./src/assets/images/footer.jpg")',
  			'footer-gradient': 'linear-gradient(228.02deg, #3693FF 16.1%, rgba(82, 253, 195, 0.67) 80.73%)',
  			'globe-gradient': 'linear-gradient(0deg, #6605BA 0%, rgba(24, 0, 79, 0.53) 50.52%, rgba(93, 38, 224, 0.00) 100%)',
  			'login-signin': 'url("./src/assets/images/sign.svg")',
  		},
  		fontFamily: {
  			Grotesk: [
  				'Space Grotesk',
  				'serif'
  			],
  			Hind: [
  				'Hind Siliguri',
  				'serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			primaryColor: '#6644f7',
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
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"),heroui()],
  plugins: [heroui()],
}
