import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from "react";
import Typography from '@mui/material/Typography';

function valuetext(value) {
    return `${value}`;
  }

const YearPicker = () => {

    const [value, setValue] = useState([1960, 2020]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    console.log(value)
    return (
        <div>

        <Box sx={{ width: 600 }}>
          <Slider
            getAriaLabel={() => 'Temperature range'}
            min={1960}
            step={1}
            max={2020}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            color="secondary"
            // aria-label=
          />
        </Box>
        </div>
      );
}

export default YearPicker