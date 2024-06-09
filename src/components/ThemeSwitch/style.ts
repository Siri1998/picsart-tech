import { styled } from 'styled-components';
import moonIcon from '../../assets/png/moon.png';
import sunIcon from '../../assets/png/sun.png';

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const Slider = styled.span<{ isDarkMode: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.isDarkMode ? '#34495e' : '#ccc')};
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${(props) => (props.isDarkMode ? '#f39c12' : '#fff')};
    background-image: url(${(props) => (props.isDarkMode ? moonIcon : sunIcon)});
    background-size: cover;
    transition: 0.4s;
    border-radius: 50%;
    transform: ${(props) => (props.isDarkMode ? 'translateX(26px)' : 'none')};
  }
`;
