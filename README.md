# Component Showcase - Modern React UI Library

A modern, interactive showcase of premium UI components built with React, Vite, and Tailwind CSS. This project demonstrates various animated components including brands display, carousels, cards, parallax effects, and testimonials with beautiful dark/light theme support.

## 🌟 Features

### Component Library

- **Brands Component**: Interactive brand showcase with hover effects and floating call-to-action
- **Carousel Component**: Smooth image transitions with hover animations
- **Cards Component**: Modern card layouts with gradient effects
- **Parallax Component**: Stunning parallax scrolling effects
- **Testimonials Component**: Dynamic testimonial display with bento grid layout
- **Ripple Component**: Coming soon animation effect

### Technical Features

- 🎨 **Dark/Light Theme Support** - Seamless theme switching with system preference detection
- 📱 **Fully Responsive Design** - Optimized for all device sizes
- ⚡ **Smooth Animations** - Powered by Framer Motion for 60fps performance
- 🎯 **Modern UI/UX** - Clean, minimalist design with glassmorphism effects
- 🚀 **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎭 **Interactive Elements** - Hover effects, transitions, and micro-interactions

## 🛠️ Tech Stack

- **Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.10
- **Animations**: Framer Motion 12.18.1
- **Icons**: Remix Icons
- **3D Graphics**: Three.js 0.177.0
- **Smooth Scrolling**: Lenis 1.3.4
- **Advanced Animations**: GSAP 3.13.0

## 📁 Project Structure

```
hackathon-iit-frontend/
├── public/
│   └── logos/              # Brand logo assets
│       ├── 1.png - 6.png   # Brand images
│       └── font/           # Custom fonts
├── src/
│   ├── components/         # React components
│   │   ├── Brands.jsx      # Brand showcase component
│   │   ├── CaraoselSwitch.jsx # Image carousel component
│   │   ├── Cards.jsx       # Card layout component
│   │   ├── Navbar.jsx      # Navigation component
│   │   ├── Parallax.jsx    # Parallax effects component
│   │   └── testimonial.jsx # Testimonials component
│   ├── context/
│   │   └── ThemeContext.jsx # Theme management
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   ├── index.css           # Tailwind imports
│   └── styles.css          # Custom styles and animations
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js) or **yarn**

### Installation & Local Deployment

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd hackathon-iit-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   or if you prefer yarn:

   ```bash
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   or with yarn:

   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

### Linting

To run ESLint and check for code quality issues:

```bash
npm run lint
```

## 🎮 Usage Guide

### Navigation

- Use the top navigation bar to switch between different components
- Click the theme toggle button (sun/moon icon) to switch between light and dark modes
- On mobile devices, use the hamburger menu for navigation

### Component Interactions

- **Brands**: Hover over the brand grid to see the floating "Meet our customers" button
- **Carousel**: Hover over cards to see smooth image transitions and overlay effects
- **Testimonials**: Scroll to see animated text transitions and bento grid testimonials
- **Parallax**: Experience smooth parallax scrolling effects

## 🎨 Customization

### Theme Colors

The project uses Tailwind CSS with custom gradient combinations:

- Primary: Purple to Pink gradient (`from-purple-500 to-pink-500`)
- Secondary: Cyan accents
- Background: White/Dark gray with smooth transitions

### Adding New Components

1. Create a new component file in `src/components/`
2. Add the component to the navigation array in `src/components/Navbar.jsx`
3. Include the component case in `src/App.jsx`

### Modifying Animations

- Framer Motion animations can be customized in individual component files
- GSAP animations are primarily used in the styles.css file
- Transition durations and easing can be adjusted in Tailwind classes

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `> 1024px`

All components automatically adapt to different screen sizes with optimized layouts and interactions.

## 🌙 Theme System

The application features a sophisticated theme system:

- **Automatic Detection**: Respects system dark/light mode preference
- **Manual Toggle**: Users can manually switch themes
- **Persistent Storage**: Theme preference is saved in localStorage
- **Smooth Transitions**: All theme changes are animated

## 🚀 Performance Optimizations

- **Vite Fast Refresh**: Instant hot module replacement during development
- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: Optimized brand logos and assets
- **Animation Performance**: 60fps animations with hardware acceleration
- **Bundle Optimization**: Tree-shaking and minification in production builds

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of a hackathon submission and is available for educational and demonstration purposes.

## 🙏 Acknowledgments

- **Unsplash**: For providing beautiful stock images
- **Remix Icons**: For the comprehensive icon library
- **Framer Motion**: For smooth animation capabilities
- **Tailwind CSS**: For rapid UI development

---

**Built with ❤️ for IIT Hackathon**
