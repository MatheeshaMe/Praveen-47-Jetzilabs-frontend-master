import { Grid, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { ETHIcon } from "../../assets/icons/svgIcons";
import { BasicCardComponent } from "./CardComponent";

// Icons
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { themeColors } from "../../theme/theme";

const PasswordField = ({ password, onChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div
        style={{
          padding: "5px 10px",
          background: `${themeColors.background6}`,
          borderRadius: "8px",

          display: "flex",
          justifyContent: "left",
          alignItems: "center",

          fontWeight: "500",
          minHeight: "25px",
          fontSize: "14px",
        }}
      >
        <div style={{ color: themeColors.text1 }}>
          <IconButton color="inherit" onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        </div>
        <div
          style={{
            padding: "0px 10px 0px 0px",
          }}
        >
          <input
            type={`${isVisible ? "text" : "password"}`}
            style={{
              color: `${themeColors.text2}`,
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "16px",

              padding: "0px 0px 0px 10px",
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              width: "100%",
            }}
            value={`${password ? password : ""}`}
            onChange={onChange}
            disabled
          />
          {/* {`${password? password : ''}`} */}
        </div>
      </div>
    </>
  );
};

const SecondaryWalletCard = ({
  onClickTransfer,
  password,
  onChange,
  walletId,
  walletValue,
}) => {
  const [transferbtnHoverStatus, setTransferbtnHoverStatus] = useState(false); // hover effect

  return (
    <>
      <BasicCardComponent>
        <div
          style={{
            padding: "15px 15px",
            display: "flex",
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              width: "100%",
              // minHeight: '70px'
            }}
          >
            <Grid container spacing={2} sx={{ width: "100%" }}>
              <Grid item xs={12}>
                <Typography
                  color={`${themeColors.text2}`}
                  fontFamily={"Poppins"}
                  fontWeight={"500"}
                  fontSize={"16px"}
                >
                  {`${walletId ? walletId : ""}`}
                </Typography>
              </Grid>
              <Grid item xs={10} sm={7} md={8} lg={5} xl={4}>
                <PasswordField
                  password={password ? password : ""}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <div
                  style={{
                    background: `${themeColors.background3}`,
                    border: `2px solid ${themeColors.border2}`,
                    borderRadius: "8px",
                    padding: "5px 10px",
                    minWidth: "110px",
                    // cursor: 'pointer',
                    width: "fit-content",

                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "left",
                    alignItems: "center",
                  }}
                >
                  <ETHIcon sx={{ fontSize: "20px" }} />
                  <Typography
                    color={`${themeColors.text2}`}
                    fontFamily={"Poppins"}
                    fontWeight={"500"}
                    fontSize={"16px"}
                    sx={{
                      padding: "0px 0px 0px 10px",
                    }}
                  >
                    {`ETH : ${walletValue ? walletValue : ""}`}
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <div>
              <button
                style={{
                  background: `${
                    transferbtnHoverStatus
                      ? themeColors.text6
                      : themeColors.text3
                  }`,
                  borderRadius: "8px",
                  width: "130px",
                  border: "none",
                  padding: "10px 0px",
                  cursor: "pointer",
                }}
                onClick={onClickTransfer}
                onMouseEnter={() => setTransferbtnHoverStatus(true)}
                onMouseLeave={() => setTransferbtnHoverStatus(false)}
              >
                <Typography
                  fontFamily={"Poppins"}
                  fontSize="16px"
                  fontWeight={500}
                  letterSpacing="0.03px"
                  color={`${themeColors.text1}`}
                  sx={{ margin: "0px 0px 0px 5px" }}
                >
                  Transfer
                </Typography>
              </button>
            </div>
          </Stack>
        </div>
      </BasicCardComponent>
    </>
  );
};

export default SecondaryWalletCard;
