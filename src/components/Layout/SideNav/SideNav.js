import { Box, Drawer, Typography, Stack, Badge, Divider } from "@mui/material";
import React, { useState } from "react";
import LogoImg from "../../../assets/images/logo.png";
import { styled } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";

// icons
import {
  NftBotIcon,
  SecondaryWalletsIcon,
  StakeIcon,
  TaskIcon,
  SelectedStakeIcon,
} from "../../../assets/icons/svgIcons";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { Router } from "../../../../pages/_app";
import { themeColors } from "../../../theme/theme";

const styles = {
  menuIconWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuListContainer: {
    padding: "60px 15px 20px 15px",
    margin: "0px",
    height: "78vh",
    // display: 'flex',
    // flexDirection: 'column'
  },
  menuItem: {
    padding: "8px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    color: `${themeColors.text7}`,
    transition: "0.3s",
  },
  menuItemSelected: {
    padding: "8px 20px",
    background: `${themeColors.background6}`,
    borderRadius: "8px",
    cursor: "pointer",
    color: `${themeColors.text3}`,
    transition: "0.3s",
  },
};

export const StyledBadgeNotification = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 6,
    top: 7,
  },
  "& .css-vzhiio-MuiBadge-badge": {
    backgroundColor: "#DC3032", // notification badge color
  },
}));

const SideNav = ({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
  route,
  setRoute,
}) => {
  const router = useRouter();

  const drawer = (
    <div className="side-nav-container">
      <Stack
        direction="row"
        spacing={0}
        alignItems="center"
        justifyContent={"center"}
        className="logo-wrapper"
        onClick={() => {}} // navigate to main page
      >
        <div className="logo-img-wrapper">
          <Image
            className="logo-img"
            src={LogoImg}
            alt="logo"
            width={"60px"}
            height={"60px"}
          />
        </div>
        <Typography
          color={`${themeColors.text1}`}
          fontSize="20px"
          fontWeight="800"
        >
          {`JETZILABS`}
        </Typography>
      </Stack>

      <Stack
        direction="column"
        spacing={3}
        style={styles.menuListContainer}
        justifyContent="space-between"
      >
        <Stack direction="column" spacing={3}>
          <div
            style={
              route === Router.NFT_BOT || route === ""
                ? styles.menuItemSelected
                : styles.menuItem
            }
            onClick={() => {
              setRoute(Router.NFT_BOT);
              router.push(Router.NFT_BOT);
            }}
          >
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              justifyContent={"left"}
            >
              <div style={styles.menuIconWrapper}>
                <NftBotIcon />
              </div>
              <Typography
                fontFamily={"Poppins"}
                fontWeight="600"
                fontSize={"18px"}
                sx={{ paddingTop: "5px" }}
              >
                {`Minting Bot`}
              </Typography>
            </Stack>
          </div>

          <div
            style={
              route === Router.Tasks ? styles.menuItemSelected : styles.menuItem
            }
            onClick={() => {
              setRoute(Router.Tasks);
              router.push(Router.Tasks);
            }}
          >
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              justifyContent={"left"}
            >
              <div style={styles.menuIconWrapper}>
                <TaskIcon />
              </div>
              <Typography
                fontFamily={"Poppins"}
                fontWeight="600"
                fontSize={"18px"}
                sx={{ paddingTop: "0px" }}
              >
                {`Tasks`}
              </Typography>
            </Stack>
          </div>

          <div
            style={
              route === Router.SECONDARY_WALLETS
                ? styles.menuItemSelected
                : styles.menuItem
            }
            onClick={() => {
              setRoute(Router.SECONDARY_WALLETS);
              router.push(Router.SECONDARY_WALLETS);
            }}
          >
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              justifyContent={"left"}
            >
              <div style={styles.menuIconWrapper}>
                <SecondaryWalletsIcon />
              </div>
              <Typography
                fontFamily={"Poppins"}
                fontWeight="600"
                fontSize={"18px"}
                sx={{ paddingTop: "5px" }}
              >
                {`Secondary Wallets`}
              </Typography>
            </Stack>
          </div>

          <div
            style={
              route === Router.STAKE ? styles.menuItemSelected : styles.menuItem
            }
          >
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              justifyContent={"left"}
              onClick={() => {
                setRoute(Router.STAKE);
                router.push(Router.STAKE);
              }}
            >
              <div style={styles.menuIconWrapper}>
                {route === Router.STAKE ? <SelectedStakeIcon /> : <StakeIcon />}
              </div>
              <Typography
                fontFamily={"Poppins"}
                fontWeight="600"
                fontSize={"20px"}
                sx={{ paddingTop: "0px" }}
              >
                {`Stake`}
              </Typography>
            </Stack>
          </div>
          {/* 
                    <div style={ route === Router.STAKE ?styles.menuItemSelected: styles.menuItem} >
                        <Stack direction="row" spacing={3} alignItems='center' justifyContent={'left'} onClick={()=>{setRoute(Router.STAKE); router.push(Router.STAKE);}} >
                            <div style={styles.menuIconWrapper} >
                                { route === Router.STAKE ?<SelectedStakeIcon />:<StakeIcon /> }
                            </div>
                            <Typography
                                fontFamily={'Poppins'}
                                fontWeight='600'
                                fontSize={'20px'}
                                sx={{paddingTop:'0px'}}
                            >
                                {`Add`}
                            </Typography>
                        </Stack>
                    </div> */}
        </Stack>
        <div>
          <Divider sx={{ marginBottom: "15px" }} color={themeColors.text3} />
          <div
            style={
              route === Router.CONFIGS
                ? styles.menuItemSelected
                : styles.menuItem
            }
          >
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              justifyContent={"left"}
              onClick={() => {
                setRoute(Router.CONFIGS);
                router.push(Router.CONFIGS);
              }}
            >
              <div style={styles.menuIconWrapper}>
                <SettingsIcon />
              </div>
              <Typography
                fontFamily={"Poppins"}
                fontWeight="600"
                fontSize={"20px"}
                sx={{ paddingTop: "0px" }}
              >
                {`Configs`}
              </Typography>
            </Stack>
          </div>
        </div>
      </Stack>
    </div>
  );

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: `${themeColors.backgroundLayout}`,
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              border: "none",
              width: drawerWidth,
              background: `${themeColors.backgroundLayout}`,
            },
          }}
          elevation={0}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default SideNav;
