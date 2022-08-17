import { Grid } from "@mui/material";
import React from "react";
import StakeCard from "../CardComponents/StakeCard";

const StakingDapp = ({
  cardsList,
  selectedId,
  setSelectedId,
  onClickCardBtn,
  cardType,
}) => {
  return (
    <div style={{ padding: "0px 0px" }}>
      <Grid container spacing={3} justifyContent="center">
        {cardsList.map((card, i) => {
          return (
            <Grid item xs={"auto"} className="grid-item" key={i}>
              <StakeCard
                card={card}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                onClickCardBtn={onClickCardBtn}
                cardType={cardType}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default StakingDapp;
