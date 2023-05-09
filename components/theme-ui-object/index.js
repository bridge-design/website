export default {
  colors: {
    text: "#000",
    background: "#fff",
    primary: "rgb(49,60,108)",
    muted: "#efeff3",
    secondary: "#D7CFDE",
  },
  borders: {
    thin: "1px solid",
  },
  radii: {
    small: 2,
    medium: 5,
    round: 99999,
  },
  text: {
    heading: {
      textAlign: "left",
    },
  },
  forms: {
    checkbox: {
      color: "primary",
    },
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      "&:disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
      },
      "&:hover:not(:disabled)": {
        cursor: "pointer",
        bg: "text",
      },
    },
    secondary: {
      color: "background",
      bg: "secondary",
    },
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  cards: {
    exercise: {
      p: 2,
      border: "1px solid",
      borderColor: "#efefef",
      boxShadow: "0 4px 16px #efefef",
      transition: "transform 0.25s",
      ":hover": {
        transform: "scale(1.1)",
      },
      "* + *": {
        mt: 2,
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'MonoLisa, sans-serif',
      fontWeight: 400,
      fontKerning: 'normal',
      fontVariantNumeric: 'proportional-nums',
      fontVariantLigatures: 'common-ligatures contextual historical-ligatures',
      fontSize: "16px", // Change the base font size for the website
      lineHeight: 1.5,
    },
    li: {
      mb: 3,
    },
    p: {
      p: 0,
      mb: 4,
    },
  },
};
