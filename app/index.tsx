import React from "react";
import Routes from "./routes";
import { Box, NativeBaseProvider, StatusBar } from "native-base";
import { THEMES } from "@/app/src/utils/themes";

export default function App() {
  return (
    <NativeBaseProvider theme={THEMES}>
      <Box safeArea flex={1} bg="white">
        <StatusBar backgroundColor={THEMES.colors.blue[800]} />
        <Routes />
      </Box>
    </NativeBaseProvider>
  );
}
