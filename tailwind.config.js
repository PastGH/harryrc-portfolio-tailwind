module.exports = {
  darkMode: "class",
  content: ["index.html", "./pages/thanks.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#60A5FA",
        secondary: "#64748B",
        dark: "#2563eb",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("flowbite/plugin")],
};
