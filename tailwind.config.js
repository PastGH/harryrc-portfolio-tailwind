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
        primary: "#60A5FA",
        secondary: "#64748B",
        dark: "#2563eb",
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
