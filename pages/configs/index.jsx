import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ConfigCard, {
  MainWalletCard,
} from "../../src/components/CardComponents/ConfigCard";
import { themeColors } from "../../src/theme/theme";

const Config = () => {
  const [transferbtnHoverStatus, setTransferbtnHoverStatus] = useState(false); // hover effect

  const onClickTransferMoney = () => {
    console.log("onClickTransferMoney");
  };

  const onClickSave = () => {
    console.log("onClickSave");
  };

  const onClickTransfer = () => {
    console.log("onClickTransfer");
  };

  return (
    <Stack
      spacing={5}
      justifyContent="space-between"
      style={{ padding: "20px 25px", minHeight: "100%" }}
    >
      <Stack spacing={2} justifyContent="space-between">
        <div>
          <ConfigCard urls={["email", "discord"]} onClickSave={onClickSave} />
        </div>

        <div>
          <MainWalletCard
            mainWallet={{
              address: "0x19314F5...659B6487671d",
              privateKey: "private key",
            }}
            walletValue={500}
            onClickTransfer={onClickTransfer}
          />
        </div>
      </Stack>

      <div>
        <button
          style={{
            background: `${
              transferbtnHoverStatus ? themeColors.text6 : themeColors.text3
            }`,
            borderRadius: "8px",
            width: "250px",
            border: "none",
            padding: "10px 0px",
            cursor: "pointer",
          }}
          onClick={onClickTransferMoney}
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
            Transfer Money
          </Typography>
        </button>
      </div>
    </Stack>
  );
};

export default Config;
