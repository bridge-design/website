"use client";
import PartsExercise from "@/components/ds-parts";
import { ThemeUIProvider } from "theme-ui";

import theme from "../../../components/theme-ui-object/index";

const PartsOfDesignSystem = () => {
  return (
    <ThemeUIProvider theme={theme}>
      <PartsExercise />
    </ThemeUIProvider>
  );
};

export default PartsOfDesignSystem;
