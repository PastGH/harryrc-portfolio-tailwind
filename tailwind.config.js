module.exports = {
  darkMode: ["class", "media"],
  content: ["index.html", "./pages/thanks.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      backgroundImage: (theme) => ({
        "light-profile": "url(/dist/img/pfp.png)",
        "dark-profile": "url(/dist/img/pfp_dark.png)",
      }),
      colors: {
        primary: "#086AE2",
        secondary: "#64748B",
        dark: "#8BAEF8",
        dark_secondary: "#374151",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("flowbite/plugin")],
};
