import ThemeSwitcher from '../ThemeSwitch/ThemeSwitch';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/users' style={{ marginLeft: '20px' }}>
          Users
        </Link>
      </nav>

      <ThemeSwitcher />
    </HeaderContainer>
  );
};

export default Header;
