import { useColorScheme } from 'react-native';
import darkTheme from './dark';
import lightTheme from './light';

export const useTheme = () => {
    const isDarkTheme = useColorScheme() === 'dark';

    return isDarkTheme ? darkTheme : lightTheme;
};