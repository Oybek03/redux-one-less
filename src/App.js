import React from "react";
import { Accordion, Button, Switch } from "@mui/material";
import TransferList from "./Transfer";
const App = () => {
  return (
    <>
      <Button variant="contained" color="primary">
        Contained
      </Button>
      {/* <TransferList /> */}
      <Switch defaultChecked />
      <Switch />
      <Switch disabled defaultChecked />
      <Switch disabled />
      {/* <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" /> */}
    </>
  );
};
export default App;
