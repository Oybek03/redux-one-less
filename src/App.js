import React from "react";
import Button from "@mui/material/Button";

const App = () => {
  return (
    <>
      <Button variant="contained" color="primary">
        Contained
      </Button>

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
