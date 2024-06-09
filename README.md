# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



## Running the Application

- **Install dependencies:**
  ```bash
  npm install
  ```

- **Start the development server:**
  ```bash
  npm run dev
  ```


## Design Decisions

- **React and TypeScript**: Chosen for building a scalable and type-safe application.
- **Zustand**: Used for state management to manage global states efficiently.
- **Styled-Components**: Utilized for writing CSS-in-JS, allowing for scoped and modular styles.
- **Vite**: Selected as the build tool for faster development and optimized builds.
- **Infinite Scroll**: Implemented to enhance user experience by dynamically loading more data as the user scrolls.

## Performance Optimization

- **Code Splitting**: Implemented using React.lazy and Suspense for loading components asynchronously.
- **useMemo and useCallback**: Used to prevent unnecessary re-renders and improve performance.
- **Infinite Scrolling**: Implemented to load data in chunks rather than all at once, improving performance and user experience.

## Tools and Techniques

- **Zustand**: For efficient and minimalistic state management.
- **Styled-Components**: For dynamic theming and scoped styles.
- **React Router**: For client-side routing and navigation.
- **Axios**: For handling HTTP requests.
