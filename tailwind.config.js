module.exports = {
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
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
