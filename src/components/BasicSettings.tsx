import React from "react";
import Typography from "@material-ui/core/Typography";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ContinuousSlider from "./Slider";
import styled from "styled-components";

export default function BasicSettings() {
  const BasicSettingsDiv = styled.div`
    width: 320px;
    padding: 20px;
  `;

  return (
    <BasicSettingsDiv>
      <Typography>
        <h2>Basic Settings</h2>
      </Typography>
      <ContinuousSlider
        title="Brightness"
        leftIcon={<BrightnessLowIcon />}
        rightIcon={<BrightnessHighIcon />}
      />
      <ContinuousSlider
        title="Cut"
        leftIcon={<RemoveIcon />}
        rightIcon={<AddIcon />}
      />
    </BasicSettingsDiv>
  );
}
