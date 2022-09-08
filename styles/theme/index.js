import { createTheme } from '@mui/material/styles';

export const getFontSetting = (sizePx, fontWeight) => {
    return {
        fontWeight,
        color: "#212a34",
        fontSize: `${(sizePx / 14).toFixed(2)}rem`,
    };
};

export const customPalette = {
    primary: {
        900: "#00c4a6",
        800: "#009d85",
        700: "#008974",
        600: "#007664",
        500: "#006253",
        400: "#004e42",
        300: "#003b32",
        200: "#002721",
        100: "#001411",
    },
    grey: {
        900: "#212a34",
        800: "#404b5a",
        700: "#6e7a8a",
        600: "#929fb0",
        500: "#aebecd",
        400: "#ccd4db",
        300: "#d5dde5",
        200: "#e1e8ec",
        100: "#f8f9fa",
    },
    red: {
        900: "#4d0100",
        800: "#870e0d",
        700: "#af2928",
        600: "#df2c2a",
        500: "#ef504e",
        400: "#f56361",
        300: "#f98786",
        200: "#fee1e1",
        100: "#fff0f0",
    },
    yellow: {
        900: "#664000",
        800: "#8d5901",
        700: "#c27b05",
        600: "#e48f01",
        500: "#f5a623",
        400: "#f9ba53",
        300: "#fcce82",
        200: "#fee0b3",
        100: "#fff5e6",
    },
    green: {
        900: "#155239",
        800: "#1e7142",
        700: "#268c52",
        600: "#2ea862",
        500: "#37c172",
        400: "#69dd9b",
        300: "#92edb9",
        200: "#b6f7cc",
        100: "#e3fdec",
    },
    blue: {
        900: "#000d33",
        800: "#011241",
        700: "#041649",
        600: "#071a50",
        500: "#0a1e55",
        400: "#0f3cb8",
        300: "#6a8ff6",
        200: "#c9d7fd",
        100: "#f5f8ff",
    },
};

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            light: "#6e7a8a",
            main: "#404b5a",
            dark: "#212a34",
            contrastText: "#fff",
        },
        secondary: {
            light: "#11b2a8",
            main: "#00c4a6",
            dark: "#024a46",
            contrastText: "#fff",
        },
        error: {
            light: "#F98786",
            main: "#df2c2a",
            dark: "#af2928",
            contrastText: "#fff",
        },
        grey: {
            50: "#fafafa",
            100: "#F8F9FA",
            200: "#E1E8EC",
            300: "#D5DDE5",
            400: "#CCD4DB",
            500: "#AEBECD",
            600: "#929FB0",
            700: "#6E7A8A",
            800: "#404B5A",
            900: "#212A34",
            A100: "#C6D1DC",
            A200: "#BDC8D1",
            A400: "#353E4B",
            A700: "#646E7D",
        },
        background: {
            default: "#f7f7fb",
        },
        text: {
            primary: "#212a34",
            secondary: "#6e7a8a",
            disabled: "#8e8e93",
            hint: "#8e8e93",
        },
        action: {
            active: "#6e7a8a",
            disabled: "#aebecd",
            disabledBackground: "#e1e8ec",
            hover: "#f8f9fa",
            selected: "#e1e8ec",
        },
    },
    overrides: {
        MuiTab: {
            root: {
                textTransform: "none",
                color: "#FFF",
                // backgroundColor: "#212a34",
            },
            textColorPrimary: "#FFF",
            textColorSecondary: "#FFF",
        },
        MuiInputLabel: {
            root: {
                fontSize: "14px",
                color: "#212a34",
                "&$focused": {
                    fontSize: "14px",
                    color: "#212a34",
                },
            },
            shrink: {
                transform: "translate(0, -5px)",
            },
        },
        MuiInputBase: {
            root: {
                border: "1px solid #aebecd",
                backgroundColor: "#FFFFFF",
                borderRadius: "2px",
                "&$focused": {
                    border: "1px solid #035759",
                },
                "&.MuiInputBase-adornedStart": {
                    padding: "8px 8px",
                },
                "&.MuiInputBase-adornedStart input": {
                    padding: "0",
                },
                "&.Mui-error": {
                    borderColor: customPalette.red[700],
                },
            },
            input: {
                display: "flex",
                padding: "8px 8px",
                height: "auto"
            },
            inputMultiline: {
                padding: 8,
            },
        },
        MuiFab: {
            root: {
                boxShadow: "none",
                border: "1px solid #aebecd",
                backgroundColor: "#FFFFFF",
                minHeight: "26px",
                "&:active": {
                    boxShadow: "none",
                },
                "& span svg": {
                    marginTop: "6px",
                },
            },
            extended: {
                height: "36px",
                textTransform: "none",
                fontWeight: 500,
                padding: "0 8px",
                "& span svg": {
                    fontSize: "18px",
                },
            },
            sizeSmall: {
                width: "30px",
                height: "30px",
                "& span svg": {
                    marginTop: "0px !important",
                },
            },
        },
        MuiMenuItem: {
            root: {
                paddingTop: "12px",
                paddingBottom: "12px",
            },
        },
        MuiSkeleton: {
            root: {},
        },
    },
    props: {
        MuiInputLabel: {
            shrink: true,
            disableAnimation: true,
        },
        MuiInput: {
            disableUnderline: true,
        },
    },
    typography: {
        useNextVariants: true,
        h1: getFontSetting(72, 700),
        h2: getFontSetting(60, 700),
        h3: getFontSetting(48, 700),
        h4: getFontSetting(36, 700),
        h5: getFontSetting(24, 700),
        h6: {
            ...getFontSetting(20, 500),
            textTransform: "none",
        },
        subtitle1: {
            ...getFontSetting(16, 700),
            textTransform: "none",
        },
        subtitle2: {
            ...getFontSetting(16, 400),
            textTransform: "none",
        },
        body1Next: getFontSetting(14, 400),
        body2Next: getFontSetting(14, 700),
        buttonNext: getFontSetting(14, 500),
        captionNext: {
            ...getFontSetting(12, 400),
            lineHeight: 1,
        },
        caption: {
            ...getFontSetting(12, 400),
            lineHeight: 1,
        },
        overline: getFontSetting(10, 700),
    },
    customPalette,
});

export default theme;
