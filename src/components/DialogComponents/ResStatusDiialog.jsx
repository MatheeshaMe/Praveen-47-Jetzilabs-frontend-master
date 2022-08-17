import { Typography } from "@mui/material";
import React from "react";
import { themeDialogColors } from "../../theme/theme";

const ResStatusDiialog = ({ isSuccess }) => {
  const bgColor = isSuccess
    ? `${themeDialogColors.Background2}`
    : `${themeDialogColors.Background3}`;

  let color = isSuccess
    ? `${themeDialogColors.text2}`
    : `${themeDialogColors.text3}`;

  return (
    <div
      style={{
        width: "300px",
        height: "100px",
        background: `${bgColor}`,
        backdropFilter: "blur(100px)",
        border: `3px solid ${color}`,
        color: `${color}`,
        borderRadius: "8px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        fontSize={"25px"}
        fontWeight={"600"}
        fontFamily={"Poppins"}
        color={`${color}`}
      >
        {isSuccess ? "Successful" : "Error"}
      </Typography>
    </div>
  );
};

export default ResStatusDiialog;
