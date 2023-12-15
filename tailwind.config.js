/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                updock: ["Updock", "cursive"],
                "hi-melody": ['"Hi Melody"', "cursive"],
            },
            colors: {
                red: {
                    light: "#FFCDD2", // Light Red
                    DEFAULT: "#F44336", // Primary Red
                    dark: "#B71C1C", // Dark Red
                },
                green: {
                    light: "#C8E6C9", // Light Green
                    DEFAULT: "#4CAF50", // Primary Green
                    dark: "#1B5E20", // Dark Green
                },
                yellow: {
                    light: "#FFF9C4", // Light Yellow
                    DEFAULT: "#FFEB3B", // Primary Yellow
                    dark: "#F57F17", // Dark Yellow
                },
                blue: {
                    light: "#BBDEFB", // Light Blue
                    DEFAULT: "#2196F3", // Primary Blue
                    dark: "#0D47A1", // Dark Blue
                },
                white: "#FFFFFF", // Standard White
                gray: "#9E9E9E", // Standard Gray
                black: "#000000", // Standard Black
            },
        },
    },
    plugins: [],
};
