import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';

const HomePage = lazy(() => import('./pages/HomePage'));
const UserListPage = lazy(() => import('./pages/UserListPage'));
const UserDetailsPage = lazy(() => import('./pages/UserDetailsPage'));

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/users' element={<UserListPage />} />
            <Route path='/user/:id' element={<UserDetailsPage />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
