import type { Config } from "tailwindcss";

const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { ada: { bg: "#0b0a18", panel: "#15132a", purple: "#8755f5", violet: "#bd63ff" } } } }, plugins: [] };
export default config;
