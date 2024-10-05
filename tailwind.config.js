/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F8F9FA",
      },
    },
    container: {
      center: true,
      padding: "50px", // Tùy chỉnh padding
      screens: {
        // Thiết lập max-width cho từng breakpoint
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
