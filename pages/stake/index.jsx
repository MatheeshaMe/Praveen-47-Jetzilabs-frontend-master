import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import StakingDapp from "../../src/components/StakingDapp/StakingDapp";
import img_01 from "../../src/assets/images/test/img_01.gif";
import img_02 from "../../src/assets/images/test/img_01.gif";
import ClaimCard from "../../src/components/CardComponents/ClaimCard";
import ConfirmationDialog, {
  initOpenConfirmationDialog,
} from "../../src/components/DialogComponents/ConfirmationDialog";
import LoadingComponent, {
  DialogTypes,
  initOpenDialog,
} from "../../src/components/DialogComponents/LoadingComponent";
import { themeColors } from "../../src/theme/theme";
export const stakingCardTypes = {
  STAKE: "STAKE",
  UNSTAKE: "UNSTAKE",
};

const stake = () => {
  const [openDialog, setOpenDialog] = useState(initOpenDialog);
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(
    initOpenConfirmationDialog
  );

  const [selectedTab, setSelectedTab] = useState(0); // selected tab
  const tabOptions = ["Stake", "Unstake", "Claim"]; // tabs

  const [claimValue, setClaimValue] = useState(10000); // set claim value

  const [stakeId, setStakeId] = useState(null); // selected stake id
  const [unstakeId, setUnstakeId] = useState(null); // selected unstake id

  const [stakeCardList, setStakeCardList] = useState([
    // set stake array -- state
    { image: img_01, id: "1", name: "#Rocket 216", price: "5" },
    { image: img_01, id: "2", name: "#Rocket 217", price: "5" },
    { image: img_01, id: "3", name: "#Rocket 218", price: "5" },
    { image: img_01, id: "4", name: "#Rocket 219", price: "5" },
    { image: img_01, id: "5", name: "#Rocket 220", price: "5" },
    { image: img_01, id: "6", name: "#Rocket 211", price: "5" },
    { image: img_01, id: "7", name: "#Rocket 212", price: "5" },
  ]);

  const [unstakeCardList, setUnstakeCardList] = useState([
    // set stake unarray -- state
    { image: img_02, id: "12" },
    { image: img_01, id: "13" },
    { image: img_01, id: "14" },
    { image: img_01, id: "15" },
    { image: img_01, id: "16" },
    { image: img_01, id: "17" },
    { image: img_01, id: "18" },
  ]);

  const onClickStakeBtn = () => {
    // on Clcik stake -- btn
    console.log(stakeId, "stake");
  };

  const onClickUnstakeBtn = () => {
    // on Clcik unstake -- btn
    console.log(unstakeId, "unstake");
  };

  const onClcikClaim = () => {
    // click Claim
    console.log("on click claim");
    setOpenConfirmationDialog({
      ...openConfirmationDialog,
      open: true,
      title: "Do you Want to Claim",
    });
  };

  const onClickNo = () => {
    // No in comfirmation popup => claim -- func
    setOpenConfirmationDialog(initOpenConfirmationDialog);
  };

  const onClickYes = () => {
    // Yes in comfirmation popup => claim -- func
    setOpenDialog({
      ...openDialog,
      open: true,
      isSuccessResponse: true,
      progressBarName: "Pending.....",
      dialogType: DialogTypes.PROGRESS_BAR,
    });
    setOpenConfirmationDialog(initOpenConfirmationDialog);

    // type claim this here
  };

  const claimState = {
    rewards: "10000",
    jlbz: "5165165616",
  };

  const stakeSwitch = () => {
    switch (selectedTab) {
      case 0:
        return (
          <>
            <StakingDapp
              cardsList={stakeCardList}
              selectedId={stakeId}
              setSelectedId={setStakeId}
              onClickCardBtn={onClickStakeBtn}
              cardType={stakingCardTypes.STAKE}
            />
          </>
        );

      case 1:
        return (
          <>
            <StakingDapp
              cardsList={unstakeCardList}
              selectedId={unstakeId}
              setSelectedId={setUnstakeId}
              onClickCardBtn={onClickUnstakeBtn}
              cardType={stakingCardTypes.UNSTAKE}
            />
          </>
        );

      case 2:
        return (
          <>
            <ClaimCard
              onClcikClaim={onClcikClaim}
              claimValue={claimValue}
              claimState={claimState}
            />
          </>
        );
    }
  };

  return (
    <div style={{ padding: "20px 25px" }}>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <div
          style={{
            background: `${themeColors.backgroundLayout}`,
            borderRadius: "8px",
            minWidth: "400px",
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems="center"
          >
            {tabOptions.map((name, i) => {
              return (
                <button
                  key={i}
                  style={{
                    padding: "7px 20px",
                    margin: 0,
                    color: `${
                      selectedTab !== i
                        ? `${themeColors.text2}`
                        : themeColors.text10
                    }`,
                    borderRadius: "8px",
                    cursor: "pointer",
                    border: "none",

                    backgroundColor: `${
                      selectedTab !== i
                        ? themeColors.background9
                        : themeColors.background10
                    }`,
                    transition: "0.3s",
                  }}
                  onClick={() => setSelectedTab(i)}
                >
                  <Typography
                    fontSize={"16px"}
                    fontFamily={"Poppins"}
                    fontWeight="400"
                    sx={{
                      borderBottom: `${
                        selectedTab !== i
                          ? "none"
                          : `3px solid ${themeColors.text10}`
                      }`,
                      padding: "8px 30px",
                    }}
                  >
                    {name}
                  </Typography>
                </button>
              );
            })}
          </Stack>
        </div>
        <div
          style={{
            padding: "40px 0px 0px 0px",
            width: "100%",
          }}
        >
          {stakeSwitch()}
        </div>
      </Stack>
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

export default stake;
