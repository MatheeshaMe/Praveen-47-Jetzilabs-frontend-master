import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { BasicCardComponent } from "./CardComponent";
import { themeColors } from "../../theme/theme";

const ClaimCard = ({ claimValue, onClcikClaim, claimState }) => {
  const [claimbtnHoverStatus, setClaimbtnHoverStatus] = useState(false); // hover effect

  return (
    <div style={{ padding: "20px 10px" }}>
      <BasicCardComponent>
        <Stack direction={"column"} spacing={2} sx={{ padding: "10px 20px" }}>
          <Stack direction={"row"} spacing={0} justifyContent={"center"}>
            <span>
              <Typography
                fontSize={"27px"}
                fontFamily={"Poppins"}
                fontWeight="600"
                sx={{
                  color: `${themeColors.text3}`,
                }}
              >
                {`Congratulations`}
              </Typography>
            </span>
            <span>
              <Typography
                fontSize={"27px"}
                fontFamily={"Poppins"}
                fontWeight="600"
                color={themeColors.text1}
              >
                {`,You are Earnd`}
              </Typography>
            </span>
          </Stack>
          <Stack
            direction={"row"}
            spacing={0}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack
              direction={"column"}
              spacing={2}
              sx={{ padding: "10px 20px" }}
            >
              <span>
                <Typography
                  fontSize={"16px"}
                  fontFamily={"Poppins"}
                  fontWeight="400"
                  color={themeColors.text1}
                >
                  {`${claimValue} Rewards`}
                </Typography>
              </span>
              <span>
                <Typography
                  fontSize={"16px"}
                  fontFamily={"Poppins"}
                  fontWeight="400"
                  color={themeColors.text1}
                >
                  {`${claimState.jlbz} JLBZ`}
                </Typography>
              </span>
            </Stack>
            <button
              style={{
                padding: "10px 30px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                background: `${
                  claimbtnHoverStatus ? themeColors.text6 : themeColors.text3
                }`,
                textAlign: "center",
              }}
              onClick={onClcikClaim}
              onMouseEnter={() => setClaimbtnHoverStatus(true)}
              onMouseLeave={() => setClaimbtnHoverStatus(false)}
            >
              <Typography
                fontFamily={"Poppins"}
                fontSize="16px"
                fontWeight={"600"}
                color={themeColors.text1}
                align="center"
              >
                {"Claim"}
              </Typography>
            </button>
          </Stack>
        </Stack>
      </BasicCardComponent>
    </div>
  );
};

export default ClaimCard;
