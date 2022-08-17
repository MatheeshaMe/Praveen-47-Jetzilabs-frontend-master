import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { CardComponentWithDeleteBtn } from "../../src/components/CardComponents/CardComponent";
import ConfirmationDialog, {
  initOpenConfirmationDialog,
} from "../../src/components/DialogComponents/ConfirmationDialog";
import LoadingComponent, {
  DialogTypes,
  initOpenDialog,
} from "../../src/components/DialogComponents/LoadingComponent";
import { themeColors } from "../../src/theme/theme";

export const DesabledTextFields = ({ lableName, value, currencyType }) => {
  // disabled text field component
  return (
    <>
      <Stack spacing={0.5}>
        <Typography
          color={themeColors.text2}
          fontFamily={"Poppins"}
          fontWeight={"500"}
          fontSize={"15px"}
          sx={{
            padding: "0px 0px 0px 5px",
          }}
        >
          {`${lableName ? lableName : ""}`}
        </Typography>
        <div
          style={{
            padding: "5px 10px",
            background: `${themeColors.background6}`,
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: "500",
            minHeight: "28px",
            fontSize: "14px",
          }}
        >
          <div>{`${value ? value : ""}`}</div>
          <div>{`${currencyType ? currencyType : ""}`}</div>
        </div>
      </Stack>
    </>
  );
};

const Tasks = () => {
  const [openDialog, setOpenDialog] = useState(initOpenDialog);
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(
    initOpenConfirmationDialog
  );

  const [taskList, setTaskList] = useState(
    // task list -- state
    [
      {
        contractAddress: "0xf4ded...6e3c",
        selectFunction: "mint",
        maxMint: "5",
        nftPrice: "3",
        mintType: "auto",
        nftTransferAddress: "0xf4d...6e3c",
        active: true,
      },
      {
        contractAddress: "0xf4d...6e3c",
        selectFunction: "whitelistMint",
        maxMint: "1",
        nftPrice: "2",
        mintType: "auto",
        nftTransferAddress: "0xf4d...6e3c",
        active: true,
      },
    ]
  );

  const onClickDelete = () => {
    //  delete -- button (call-back popup)
    setOpenConfirmationDialog({
      ...openConfirmationDialog,
      open: true,
      title: "Do you Want to Delete This Task",
    });
  };

  const onClickNo = () => {
    // No in comfirmation popup -- func
    setOpenConfirmationDialog(initOpenConfirmationDialog);
  };

  const onClickYes = () => {
    // Yes in comfirmation popup => delete -- func
    setOpenDialog({
      ...openDialog,
      open: true,
      isSuccessResponse: true,
      progressBarName: "Pending.....",
      dialogType: DialogTypes.PROGRESS_BAR,
    });
    setOpenConfirmationDialog(initOpenConfirmationDialog);

    // type here delete func
  };

  return (
    <div style={{ padding: "20px 25px" }}>
      {taskList.map((task, i) => {
        return (
          <div
            key={i}
            style={{
              padding: "0px 0px 20px 0px",
            }}
          >
            <CardComponentWithDeleteBtn key={i} onClickDelete={onClickDelete}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography
                    color={themeColors.text1}
                    fontFamily={"Poppins"}
                    fontWeight={"500"}
                    fontSize={"20px"}
                  >
                    {`Mint`}
                  </Typography>
                </Grid>

                <Grid item xs={8} sm={6} lg={4} xl={3}>
                  <DesabledTextFields
                    lableName={"Contract Address"}
                    value={task.contractAddress}
                  />
                </Grid>
                <Grid item xs={4} sm={3} lg={2} xl={1.5}>
                  <DesabledTextFields
                    lableName={"Max Mint"}
                    value={task.maxMint}
                    currencyType={"ETH"} // add currency type like this
                  />
                </Grid>
                <Grid item xs={4} sm={3} lg={2} xl={1.5}>
                  <DesabledTextFields
                    lableName={"NFT Price"}
                    value={task.nftPrice}
                    currencyType={"ETH"} // add currency type like this
                  />
                </Grid>
                <Grid item xs={8} lg={4} xl={3}>
                  <DesabledTextFields
                    lableName={"Mint amount"}
                    value={task.maxMint}
                    currencyType={"ETH"} // add currency type like this
                  />
                </Grid>
              </Grid>
              <div
                style={{
                  margin: "20px 0px 0px 0px",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  color: `${themeColors.text8}`,
                  background: `${themeColors.background5}`,
                  border: "none",
                  borderRadius: "10px",
                  padding: "0px",

                  height: "20px",
                  width: "80px",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    padding: "0px 5px 0px 0px",
                    fontSize: "20px",
                  }}
                >
                  &bull;
                </span>
                <span>{`Active`}</span>
              </div>
            </CardComponentWithDeleteBtn>
          </div>
        );
      })}
      <LoadingComponent openDialog={openDialog} setOpenDialog={setOpenDialog} />
      <ConfirmationDialog
        openDialog={openConfirmationDialog}
        setOpenDialog={setOpenConfirmationDialog}
        onClickNo={onClickNo}
        onClickYes={onClickYes}
      />
    </div>
  );
};

export default Tasks;
