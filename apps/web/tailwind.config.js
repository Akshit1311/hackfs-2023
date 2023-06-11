module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mabry: ["Mabry", "sans-serif"],
      },
      colors: {
        base: "#F4F4F0",
      },
      screens: {
        "8xl": "1520px",
      },
    },
  },
  plugins: [],
};
