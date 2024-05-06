import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
};
const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "996px",
    xl: "1200px",
    "2xl": "1480px",
};

const theme = extendTheme({
    config,
    breakpoints,
    components: {
        Button: {
            variants: {
                // prime: {
                //     padding: "8px 28px",
                //     color: "white",
                //     bg: "#287AE0",
                //     _hover: {
                //         bg: "blue.600",
                //     },
                //     _active: {
                //         bg: "blue.700",
                //     },
                //     _disabled: {
                //         bg: "blue.400 !important",
                //     },
                // },
            },
        },
    },
    // fonts: {
    //     body: "Inter, sans-serif",
    //     heading: "Inter, sans-serif",
    // },
});

export default theme;