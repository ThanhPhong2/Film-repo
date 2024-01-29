import { useContext } from 'react';
import { ThemeProvider } from './context/ThemeProvider';


export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
