# Meccacon Construction Website

A modern, responsive website for Meccacon Construction Company built with React, Vite, and Tailwind CSS.

![Meccacon Preview](public/logo.png)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/devShaik010/web-meccacon.git

# Navigate to project directory
cd meccacon

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎨 Customization

### Theme Colors
Edit the color variables in `src/index.css`:

```css
:root {
  --color-primary: #000000;      /* Black */
  --color-secondary: #14213D;    /* Dark Blue */
  --color-accent: #FCA311;       /* Orange/Gold */
  --color-light: #E5E5E5;        /* Light Gray */
  --color-white: #FFFFFF;        /* White */
}
```

### Typography
Update font settings in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourChosenFont:wght@300;400;500;600;700&display=swap');

html {
  font-family: 'YourChosenFont', system-ui, sans-serif;
}
```

## 🛠️ Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- GSAP (for animations)

## 📁 Project Structure

```
meccacon/
├── src/
│   ├── assets/       # Images, fonts, and other static files
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page components
│   ├── routes/       # Route configurations
│   └── index.css     # Global styles and theme
├── public/           # Public assets
└── index.html        # Entry HTML file
```

## 🤝 Contributing

1. Create a feature branch from development:
```bash
git checkout development
git checkout -b feature/your-feature-name
```

2. Make your changes and commit:
```bash
git add .
git commit -m "feat: add your feature description"
```

3. Push to your branch:
```bash
git push origin feature/your-feature-name
```

4. Open a Pull Request against the `development` branch

### ⚠️ Important Notes

- Use `npm` for package management (not pnpm)
- Make all contributions to the `development` branch
- Tailwind is configured via Vite - no separate config file needed
- Use global CSS variables for theming (defined in index.css)



## 🤝 Contact

For questions or feedback, please reach out to [skabrar.engineer@gmail.com]
