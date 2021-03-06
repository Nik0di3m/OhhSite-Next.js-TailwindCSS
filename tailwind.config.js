module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        boxShadow: {
            ul: "0px 2px 0px 0px #24CEE5;",
            strong: "0px 0px 9px 5px rgba(0,0,0,0.35)",
            button: "0px 0px 8px 2px rgba(0,0,0,0.35)",
        },
        text: {
            main: "#24cee5",
        },
        extend: {
            transitionDuration: {
                2000: "2000ms",
            },
            backgroundImage: {
                sidebarLogo: "url(/themes/sidebarlogo.svg)",
                faqImage: "url(/themes/faq/faq.webp)",
                ohh:
                    "linear-gradient(45deg, rgba(0,75,117,1) 0%, rgba(36,206,229,1) 100%);",
            },
            animation: {
                wiggle: "wiggle 1s ease-in",
                pingOne: "pingOne 500ms ease-in",
                showDrop: "showDrop 200ms ease-in",
                offDrop: "offDrop 200ms forwards",
                textFade: "textFade 500ms ease-in",
                textFade2: "textFade2 1000ms ease-in",
            },
            keyframes: {
                wiggle: {
                    "0%": {
                        transform: "rotate(-3deg)",
                    },
                    "50%": { transform: "rotate(3deg)" },
                    "100%": { transform: "rotate(0deg)" },
                },
                pingOne: {
                    "75%, 100%": {
                        transform: "scale(1.2)",
                        opacity: "0",
                    },
                },
                showDrop: {
                    "0%": { transform: "scaleY(0)" },
                    "100%": { transform: "scaleY(1)" },
                },
                offDrop: {
                    "0%": { transform: "scaleY(0)" },
                    "100%": {
                        transform: "scaleY(0)",
                        visable: "hidden",
                    },
                },
                textFade: {
                    "0%": {
                        transform: "translateX(-2000px)",
                    },
                    "100%": {
                        transform: "translateX(0px)",
                    },
                },
                textFade2: {
                    "0%": {
                        transform: "translateX(2000px)",
                    },
                    "100%": { transform: "translateX(0)" },
                },
            },
        },
    },
    variants: {
        extend: {
            justifyContent: ["disabled"],
        },
    },
    plugins: [
        require("tailwind-scrollbar-hide"),
        require("tailwind-scrollbar"),
    ],
};
