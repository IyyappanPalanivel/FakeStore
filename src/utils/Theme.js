import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#6350FF",     // Blue
    primaryColor: '#6350FF',
    primaryBlue: '#6350FF',
    blueText: '#27214D',
    greyBackground: '#F2F2F2',
    tabBarInactive: '#200E32',
    borderLine: '#F4F4F8',
    productDesc: '#868686',

    white: "#fff",
    black: "#000000",
    blue: "#4096FE",
    gray: "#464646",
    gray1: "#363636",
    lightGray: "#dedede",
    linkColor: "#5956E9",
    transparentWhite: 'rgba(255, 255, 255, 0.2)',
    transparentBlack: 'rgba(0, 0, 0, 0.4)',
    placeholderColor: '#868686'
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    radiusCard:20,
    padding: 24,
    marginTop: 24,
    margin: 20,
    paddingHorizontal: 10,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    title: { fontFamily: "Roboto-Black", fontSize: 34, color:COLORS.black },
    productTitle: { fontSize: 22, color:COLORS.black },
    productDescription: { fontSize: 16, color:COLORS.productDesc },
    productPrice: { fontSize: 17, color:COLORS.primary },
    menuText: { fontSize: 18, color:COLORS.black },

    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
    
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;