import { PropTypes } from '@material-ui/core';
import { createContext, ReactNode, useState } from 'react';

interface IProps {
    children: ReactNode
}
interface themeContextDefault {
    theme: PropTypes.Color,
    toggleTheme: (theme: PropTypes.Color) => void
}

const themeContextDefaultData = {
    theme: 'primary' as PropTypes.Color,
    toggleTheme: () => { }
}

export const ThemeContext = createContext<themeContextDefault>(themeContextDefaultData)

const ThemeContextProvider = ({ children }: IProps) => {
    const [theme, setTheme] = useState<PropTypes.Color>(themeContextDefaultData.theme);
    const toggleTheme = (theme: PropTypes.Color) => setTheme(theme);
    const themeContextDynamicData = { theme, toggleTheme }
    return (
        <ThemeContext.Provider value={themeContextDynamicData}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;