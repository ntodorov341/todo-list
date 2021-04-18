import React from 'react';

import { ThemeProvider as RNThemeProvider } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = React.createContext<Context | null>(null);

interface Context {
    setTheme: (theme: string) => void;
    themeColor: string | null;
}

type Props = {
    children: JSX.Element;
    theme: {
        [themeName: string]: Object;
        light: Object;
        dark: Object;
    };
};

// Set theme to async storage
const setThemeToStorage = async (themeStyle: string) => {
    try {
        await AsyncStorage.setItem('theme', themeStyle);
    } catch (e) {
        console.log('could not set the theme');
    }
};

// Get theme from async storage
const getTheme = async () => {
    const t = await AsyncStorage.getItem('theme');
    return t || 'light';
};

export const ThemeContextProvider = (props: Props): JSX.Element => {
    const { children, theme } = props;

    const [themeColor, setThemeColor] = React.useState<string | null>(null);

    const ref = React.useRef(null);

    const setTheme = React.useCallback(
        (thm: string) => {
            setThemeColor(thm);
            setThemeToStorage(thm);
            if (ref.current && ref.current.updateTheme) {
                ref.current.updateTheme(theme[thm]);
            }
        },
        [theme, ref],
    );

    getTheme().then(colorScheme => setThemeColor(colorScheme));

    const value = React.useMemo(() => ({ setTheme, themeColor }), [
        setTheme,
        themeColor,
    ]);

    return (
        <ThemeContext.Provider value={value}>
            <RNThemeProvider
                theme={themeColor === 'light' ? theme.light : theme.dark}
                ref={ref}
            >
                {children}
            </RNThemeProvider>
        </ThemeContext.Provider>
    );
};
