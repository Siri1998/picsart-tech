import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SwitchContainer, Switch, Slider } from './style';

const ThemeSwitcher: React.FC = () => {
  const themeContext = useTheme();

  if (!themeContext) {
    return null;
  }

  const { isDarkMode, toggleTheme } = themeContext;

  return (
    <SwitchContainer>
      <Switch>
        <input type='checkbox' onChange={toggleTheme} />
        <Slider isDarkMode={isDarkMode} />
      </Switch>
    </SwitchContainer>
  );
};

export default ThemeSwitcher;
