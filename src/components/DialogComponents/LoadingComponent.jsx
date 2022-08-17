import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import { themeDialogColors } from "../../theme/theme";
import { PrograssBar } from "./ProgressBar";
import ResStatusDiialog from "./ResStatusDiialog";

export const DialogTypes = {
  PROGRESS_BAR: "PROGRESS_BAR",
  RES_STATUS: "RES_STATUS",
};

export const initOpenDialog = {
  open: false, // open popup dialog
  isSuccessResponse: false, // is responce a success or not
  progressBarName: "", // name of the progress bar ex: 'Pending....'
  dialogType: DialogTypes.PROGRESS_BAR, // above types
};

const LoadingComponent = ({ openDialog, setOpenDialog }) => {
  const [isProgressEnd, setIsProgressEnd] = useState(false);
  const [type, setType] = useState(openDialog.dialogType);

  const onCloseDialog = () => {
    setOpenDialog({ ...openDialog, open: false });
    setType(openDialog.dialogType);
    setIsProgressEnd(false);
  };

  useEffect(() => {
    if (isProgressEnd) {
      setType(DialogTypes.RES_STATUS);
    } else {
      setType(openDialog.dialogType);
    }
  }, [isProgressEnd]);

  const dialogSwitch = () => {
    switch (type) {
      case DialogTypes.PROGRESS_BAR:
        return (
          <PrograssBar
            progressName={openDialog.progressBarName}
            setIsProgressEnd={setIsProgressEnd}
          />
        );

      case DialogTypes.RES_STATUS:
        return (
          <ResStatusDiialog
            isSuccess={
              openDialog.isSuccessResponse
                ? openDialog.isSuccessResponse
                : false
            }
          />
        );
    }
  };

  return (
    <div>
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
        {openDialog.open ? dialogSwitch() : ""}
      </Dialog>
    </div>
  );
};

export default LoadingComponent;
