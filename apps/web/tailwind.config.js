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
        mabry: ["Mabry", "sans-serif"],
      },
      colors: {
        base: "#242423",
      },
      screens: {
        "8xl": "1520px",
      },
    },
  },
  plugins: [],
};
