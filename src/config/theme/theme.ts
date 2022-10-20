import Colors from './Colors';

export type ThemeType = {
    themeName: ThemesNames;
    footerBackground: string;
    mainBackground: string;
    heroBackground: string;
    heroButton: string;
    button: string;
    textGeneral: string;
    cardBackground: string;
    cardShadow: string;
    switchThemeToggle: string;
    h1: string;
    h2: string;
    h3: string;
    cardButtonHover: string;
    paginationButton: string;
    pageButton: string;
};

export type ThemesNames = 'peach' | 'purple';

export type ThemesType = {
    [ThemeName in ThemesNames]: ThemeType;
};

export const THEME_NAMES = {
    PEACH: 'peach',
    PURPLE: 'purple',
} as const;

export const THEMES: ThemesType = {
    [THEME_NAMES.PEACH]: {
        h1: Colors.peachTheme.third,
        h2: Colors.peachTheme.third,
        h3: Colors.white,
        switchThemeToggle: Colors.purpleTheme.first,
        footerBackground: Colors.black,
        mainBackground: Colors.peachTheme.first,
        heroBackground: Colors.peachTheme.fourth,
        heroButton: Colors.peachTheme.first,
        button: Colors.peachTheme.secondery,
        textGeneral: Colors.white,
        cardBackground: Colors.peachTheme.fourth,
        cardShadow: Colors.peachTheme.fourth,
        cardButtonHover: Colors.peachTheme.first,
        pageButton: Colors.peachTheme.secondery,
        paginationButton: Colors.peachTheme.fourth,
        themeName: THEME_NAMES.PEACH,
    },
    [THEME_NAMES.PURPLE]: {
        h1: Colors.purpleTheme.third,
        h2: Colors.purpleTheme.third,
        h3: Colors.white,
        switchThemeToggle: Colors.peachTheme.first,
        footerBackground: Colors.black,
        mainBackground: Colors.purpleTheme.first,
        heroBackground: Colors.purpleTheme.fourth,
        heroButton: Colors.purpleTheme.first,
        button: Colors.purpleTheme.secondery,
        textGeneral: Colors.white,
        cardBackground: Colors.purpleTheme.fourth,
        cardShadow: Colors.purpleTheme.fourth,
        cardButtonHover: Colors.purpleTheme.first,
        pageButton: Colors.purpleTheme.secondery,
        paginationButton: Colors.purpleTheme.fourth,

        themeName: THEME_NAMES.PURPLE,
    },
} as const;
