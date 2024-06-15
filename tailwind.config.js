import keepPreset from "keep-react/preset";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/keep-react/**/*.js",
  ],
  presets: [keepPreset],

  theme: {
    extend: {
      fontFamily: {
        arabic: ["Madani", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
