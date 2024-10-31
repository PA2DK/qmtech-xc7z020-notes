import defaultTheme from "tailwindcss/defaultTheme.js";
import typography from "@tailwindcss/typography";

const customization = (theme) => ({
  DEFAULT: {
    css: {
      maxWidth: "100ch",
      h1: {
        fontWeight: "inherit",
      },
      h2: {
        fontWeight: "inherit",
      },
      pre: {
        fontSize: "inherit",
      },
      "code::before": false,
      "code::after": false,
      code: {
        fontSize: "inherit",
      },
      a: {
        color: theme("colors.rose.700"),
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  },
  neutral: {
    css: {
      "--tw-prose-pre-code": "inherit",
      "--tw-prose-pre-bg": theme("colors.neutral.100"),
    },
  },
});

/** @type {import("tailwindcss").Config} */
export default {
  content: ["_layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Calibri", "Liberation Sans", ...defaultTheme.fontFamily.sans],
      },
      typography: customization,
    },
  },
  plugins: [typography],
};
