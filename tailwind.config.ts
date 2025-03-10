import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "media", // or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter Tight Variable", "sans-serif"],
                display: ["Montserrat Variable", "sans-serif"],
                mono: ["Space Mono", "monospace"]
            }
        }
    },
    plugins: []
};
export default config;
