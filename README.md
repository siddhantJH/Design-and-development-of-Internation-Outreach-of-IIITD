# Design-and-development-of-Internation-Outreach-of-IIITD

# This is the Mind Map that we are following [link to mind map](https://lucid.app/lucidspark/9908cbeb-df65-4c4d-bb96-210b2f938f90/edit?invitationId=inv_cf521b97-ba4e-4651-adc1-db0eeabdcfdd&page=0_0#)

This guide will help you set up the "International Affair Website" on your local machine.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v14 or higher) installed on your machine. You can download it from [Node.js](https://nodejs.org/).
- npm (v6 or higher) or yarn installed. npm is installed with Node.js, and you can install yarn using `npm install -g yarn`.

## Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd internation-affair-website
   ```

2. **Install dependencies:**
   If you are using npm:
   ```sh
   npm install
   ```
   If you are using yarn:
   ```sh
   yarn install
   ```

## Development

To start the development server, run:

If you are using npm:
```sh
npm run dev
```
If you are using yarn:
```sh
yarn dev
```

This will start the Vite development server. Open your browser and visit `http://localhost:3000` to see the application in action.

## Building for Production

To build the application for production, run:

If you are using npm:
```sh
npm run build
```
If you are using yarn:
```sh
yarn build
```

The optimized and minified files will be generated in the `dist` directory.

## Previewing the Production Build

To preview the production build locally, run:

If you are using npm:
```sh
npm run preview
```
If you are using yarn:
```sh
yarn preview
```

This will serve the contents of the `dist` directory, allowing you to test the production build.

## Linting

To lint your code and ensure it adheres to the coding standards, run:

If you are using npm:
```sh
npm run lint
```
If you are using yarn:
```sh
yarn lint
```

This will use ESLint to check your code for potential issues and ensure it follows the project's style guidelines.

## Folder Structure

```
internation-affair-website/
├── node_modules/         # Node.js modules
├── public/               # Publicly accessible files
├── src/                  # Source files
│   ├── assets/           # Asset files (images, fonts, etc.)
│   ├── components/       # React components
│   ├── pages/            # React pages
│   ├── styles/           # Styling files (CSS, Tailwind, etc.)
│   ├── App.jsx           # Main App component
│   └── main.jsx          # Main entry point
├── .eslintrc.js          # ESLint configuration
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # Project README file
```

## Dependencies

- **heroicons**: A set of free, MIT-licensed high-quality SVG icons for you to use in your web projects.
- **lucide-react**: Beautiful & consistent icon toolkit made by the community, powered by React.
- **react**: A JavaScript library for building user interfaces.
- **react-dom**: Serves as the entry point of the DOM-related rendering paths.
- **react-icons**: Include popular icons in your React projects easily with react-icons.
- **react-router-dom**: Declarative routing for React apps at any scale.
- **@types/react**: TypeScript definitions for React.
- **@types/react-dom**: TypeScript definitions for React DOM.
- **@vitejs/plugin-react**: Provides React support for Vite.
- **autoprefixer**: A PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.
- **eslint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **eslint-plugin-react**: React-specific linting rules for ESLint.
- **eslint-plugin-react-hooks**: Enforces the Rules of Hooks.
- **eslint-plugin-react-refresh**: ESLint rules for React Refresh.
- **postcss**: A tool for transforming CSS with JavaScript plugins.
- **tailwindcss**: A utility-first CSS framework.
- **vite**: A next-generation frontend tooling.

## Contributing

To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## License

This project is private. If you have any questions about the licensing, please contact the project owner.

---

This README provides a comprehensive guide to setting up and running the "International Affair Website". If you encounter any issues, please check the configuration files or contact the project maintainers for assistance.
