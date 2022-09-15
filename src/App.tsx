///<reference types="chrome"/>
import logo from "./logo.svg";
import React from "react";

import { Box, Button, MantineProvider, Text } from "@mantine/core";

function getLogo() {
  if (window.chrome) {
    return window?.chrome?.runtime?.getURL(logo);
  }

  return logo;
}

function App() {
  return (
    <MantineProvider>
      <Box
        sx={() => ({
          background: "red",  
          position: "fixed",
          borderRadius: "100%",
          width: 100,
          height: 100,
          display: "grid",
          placeItems: "center",
          bottom: 20,
        })}
      >
        <Button>Hey</Button>
      </Box>
    </MantineProvider>
  );
}

export default App;
