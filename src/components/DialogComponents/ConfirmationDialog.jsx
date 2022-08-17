import { Dialog, Stack, Typography } from "@mui/material";
import React from "react";
import { themeDialogColors } from "../../theme/theme";

const CustomBtn = ({ color, bgColor, name, onClickBtn }) => {
  return (
    <>
      <button
        style={{
          color: `${color}`,
          background: `${bgColor}`,
          padding: "5px 20px",
          border: `1.5px solid ${color}`,
          borderRadius: "8px",
          cursor: "pointer",

          minWidth: "100px",
          minHeight: "40px",

          fontSize: "20px",
          fontWeight: "600",
          fontFamily: "Poppins",

          margin: "15px",
        }}
        onClick={onClickBtn}
      >
        {`${name ? name : ""}`}
      </button>
    </>
  );
};

export const initOpenConfirmationDialog = {
  open: false,
  title: "",
};

const ConfirmationDialog = ({
  openDialog,
  setOpenDialog,
  onClickNo,
  onClickYes,
}) => {
  const onCloseDialog = () => {
    setOpenDialog({ ...openDialog, open: false });
  };
  return (
    <>
      <Dialog
        open={openDialog.open}
        onClose={onCloseDialog}
        fullWidth
        maxWidth={"lg"}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "transparent",
            color: `${themeDialogColors.text4}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "none",
          },
        }}
      >
        <div
          style={{
            background: `${themeDialogColors.Background1}`,
            width: "400px",
            height: "200px",
            backdropFilter: "blur(100px)",
            borderRadius: "8px",
            border: `2px solid ${themeDialogColors.border1}`,
            display: "flex",
          }}
        >
          <Stack
            direction={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ padding: "20px", width: "100%" }}
          >
            <Typography
              fontFamily={`Poppins`}
              fontSize={`20px`}
              fontWeight={"600"}
              color={themeDialogColors.text1}
            >
              {`${openDialog.title ? openDialog.title : ""}`}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <div>
                <CustomBtn
                  color={themeDialogColors.text2}
                  name={"Yes"}
                  bgColor={themeDialogColors.Background2}
                  onClickBtn={onClickYes}
                />
              </div>
              <div>
                <CustomBtn
                  color={themeDialogColors.text3}
                  name={"No"}
                  bgColor={themeDialogColors.Background3}
                  onClickBtn={onClickNo}
                />
              </div>
            </Stack>
          </Stack>
        </div>
      </Dialog>
    </>
  );
};

export default ConfirmationDialog;
