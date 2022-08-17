import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { ETHIcon } from "../../assets/icons/svgIcons";
import { themeColors } from "../../theme/theme";
import { BasicCardComponent } from "./CardComponent";

const CustomTextField = ({ value, placeholder, onChange }) => {
  return (
    <>
      <div
        style={{
          padding: "5px 3px",
          background: `${themeColors.background6}`,
          borderRadius: "8px",
          border: "none",

          display: "flex",
          justifyContent: "left",
          alignItems: "center",

          fontWeight: "500",
          minHeight: "25px",
          fontSize: "14px",
        }}
      >
        <div
          style={{
            padding: "0px 10px 0px 0px",
          }}
        >
          <input
            placeholder={placeholder ? placeholder : ""}
            style={{
              color: `${themeColors.text2}`,
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "14px",

              padding: "0px 0px 0px 10px",
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              width: "100%",
            }}
            value={`${value ? value : ""}`}
            onChange={onChange}
            // disabled
          />
        </div>
      </div>
    </>
  );
};

const ConfigCard = ({ onClickSave, urls }) => {
  const [savebtnHoverStatus, setSavebtnHoverStatus] = useState(false); // hover effect

  return (
    <div>
      <BasicCardComponent>
        <div
          style={{
            padding: "40px 15px",
            display: "flex",
          }}
        >
          <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              width: "100%",
              // minHeight: '70px'
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
                <Grid item xs={10} xl={8}>
                  <CustomTextField value={urls[0]} onChange={() => {}} />
                </Grid>
                <Grid item xs={10} xl={8}>
                  <CustomTextField value={urls[1]} onChange={() => {}} />
                </Grid>
              </Grid>
              <div>
                <button
                  style={{
                    background: `${
                      savebtnHoverStatus ? themeColors.text6 : themeColors.text3
                    }`,
                    borderRadius: "8px",
                    width: "130px",
                    border: "none",
                    padding: "10px 0px",
                    cursor: "pointer",
                  }}
                  onClick={onClickSave}
                  onMouseEnter={() => setSavebtnHoverStatus(true)}
                  onMouseLeave={() => setSavebtnHoverStatus(false)}
                >
                  <Typography
                    fontFamily={"Poppins"}
                    fontSize="16px"
                    fontWeight={500}
                    letterSpacing="0.03px"
                    color={themeColors.text1}
                    sx={{ margin: "0px 0px 0px 5px" }}
                  >
                    Save
                  </Typography>
                </button>
              </div>
            </Stack>
          </Stack>
        </div>
      </BasicCardComponent>
    </div>
  );
};

export default ConfigCard;

export const MainWalletCard = ({
  mainWallet,
  onClickTransfer,
  walletValue,
}) => {
  const [transferbtnHoverStatus, setTransferbtnHoverStatus] = useState(false); // hover effect

  return (
    <div>
      <BasicCardComponent>
        <div
          style={{
            padding: "20px 15px",
            display: "flex",
          }}
        >
          <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={5}
            sx={{
              width: "100%",
              // minHeight: '70px'
            }}
          >
            <Typography
              color={themeColors.text1}
              fontFamily={"Poppins"}
              fontWeight={"500"}
              fontSize={"18px"}
            >
              {`Main Wallet`}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              spacing={3}
              sx={{
                width: "100%",
                // minHeight: '70px'
              }}
            >
              <Grid container spacing={3} sx={{ width: "100%" }}>
                <Grid item xs={10} xl={8}>
                  <CustomTextField
                    value={mainWallet.address}
                    onChange={() => {}}
                  />
                </Grid>
                <Grid item xs={10} xl={8}>
                  <CustomTextField
                    value={mainWallet.privateKey}
                    onChange={() => {}}
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
              <div
                style={{
                  padding: "0px 0px 65px 0px",
                }}
              >
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
                    color={themeColors.text1}
                    sx={{ margin: "0px 0px 0px 5px" }}
                  >
                    Transfer
                  </Typography>
                </button>
              </div>
            </Stack>
          </Stack>
        </div>
      </BasicCardComponent>
    </div>
  );
};
