import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { stakingCardTypes } from "../../../pages/stake";
import { themeColors } from "../../theme/theme";

const styles = {
  cardContainer: {
    position: "relative",

    height: "fit-content",
    width: "180px",
    background: `${themeColors.Background1}`,
    borderRadius: "10px",
    cursor: "pointer",
    border: "none",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedCardContainer: {
    position: "relative",

    height: "fit-content",
    width: "180px",
    background: `${themeColors.Background1}`,
    borderRadius: "10px",
    border: `1px solid ${themeColors.border1}`,
  },
  cardStyle: {
    height: "fit-content",
    width: "180px",
    borderRadius: "10px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.3s",
  },
  selectedCardStyle: {
    height: "fit-content",
    width: "180px",
    borderRadius: "10px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    filter: "blur(4px)",
    transition: "0.3s",
  },
  selectedPopupBtn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "2",

    padding: "10px 30px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    background: `${themeColors.text3}`,
    textAlign: "center",
    transition: "0.3s",
  },
  selectedPopupBtnHover: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "2",

    padding: "10px 30px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    background: `${themeColors.text6}`,
    textAlign: "center",
    transition: "0.3s",
  },
};

const StakeCard = ({
  card,
  selectedId,
  setSelectedId,
  onClickCardBtn,
  cardType,
}) => {
  const [stakebtnHoverStatus, setStakebtnHoverStatus] = useState(false); // hover effect

  const onSelectCard = () => {
    console.log("card", card.id);
    if (card.id !== selectedId) {
      setSelectedId(card.id);
    } else {
      setSelectedId(null);
    }
  };

  return (
    <div
      style={
        card.id === selectedId
          ? styles.selectedCardContainer
          : styles.cardContainer
      }
    >
      <div
        style={
          card.id !== selectedId ? styles.cardStyle : styles.selectedCardStyle
        }
        onClick={onSelectCard}
      >
        <Image src={card.image} alt="card" />
        <div
          style={{
            width: "calc(100% - 2px)",
            height: "60px",
            border: `1px solid ${themeColors.border1}`,
            borderRadius: "0px 0px 10px 10px",
            borderTop: "none",
          }}
        >
          <Stack
            direction={"column"}
            justifyContent={"flex-start"}
            alignItems={"left"}
            sx={{ padding: "8px 20px" }}
          >
            <Typography
              fontFamily={"Poppins"}
              fontSize="16px"
              fontWeight={"600"}
              color={themeColors.text1}
            >
              {card.name}
            </Typography>

            <Typography
              fontFamily={"Poppins"}
              fontSize="12px"
              fontWeight={"400"}
              color={themeColors.text2}
            >
              {`Last : ${card.price}`}
            </Typography>
          </Stack>
        </div>
      </div>
      <button
        style={
          card.id === selectedId
            ? stakebtnHoverStatus
              ? styles.selectedPopupBtnHover
              : styles.selectedPopupBtn
            : { display: "none" }
        }
        onClick={onClickCardBtn}
        onMouseEnter={() => setStakebtnHoverStatus(true)}
        onMouseLeave={() => setStakebtnHoverStatus(false)}
      >
        <Typography
          fontFamily={"Poppins"}
          fontSize="18px"
          fontWeight={"600"}
          color={themeColors.text1}
          align="center"
        >
          {cardType === stakingCardTypes.STAKE ? "Stake" : "Unstake"}
        </Typography>
      </button>
    </div>
  );
};

export default StakeCard;
