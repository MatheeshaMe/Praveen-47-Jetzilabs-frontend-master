import {
  AppBar,
  createTheme,
  Stack,
  ThemeProvider,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { initUser } from "../../../features/userSlice";
import AvatarImg from "../../../assets/images/avatar.png";
import { Box } from "@mui/system";
import { themeColors } from "../../../theme/theme";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

// icons
import MenuIcon from "@mui/icons-material/Menu";

const headerTheme = createTheme({
  palette: {
    primary: {
      main: `${themeColors.backgroundLayout}`,
    },
  },
});

const Header = ({ drawerWidth, handleDrawerToggle }) => {
  const theme = useTheme();
  const userSelector = useSelector((state) => state.user.user);

  return (
    <>
      <ThemeProvider theme={headerTheme}>
        <AppBar
          color="primary"
          position="fixed"
          elevation={0}
          sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
            flexGrow: 1,
            // zIndex: theme.zIndex.drawer + 1
          }}
        >
          <Toolbar>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent={"center"}
              sx={{ color: themeColors.text1 }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 1, display: { md: "none" } }}
              >
                <MenuIcon fontSize="medium" />
              </IconButton>
              {/* <Stack direction="row" spacing={1} alignItems='center' justifyContent={'center'} className='logo-wrapper' 
                                onClick={()=>{}} // navigate to main page
                            >
                                <div className='logo-img-wrapper' >
                                    <Image 
                                        className='logo-img'
                                        src={LogoImg}
                                        alt='logo'
                                        width={'60px'}
                                    />
                                </div>
                                <Typography
                                    color='#fff'
                                    fontSize='20px'
                                    fontWeight='700'
                                >
                                    {`JETZILABS`}
                                </Typography>
                            </Stack> */}
            </Stack>
            <Box sx={{ flexGrow: 1 }} />
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent={"center"}
            >
              <div className="avatar-wrapper">
                <Avatar
                  // alt={user.name}
                  // src={user.avatarUrl}
                  variant="circular"
                  className="avatar"
                  sx={{ width: "40px", height: "40px" }}
                >
                  <Image
                    src={
                      userSelector.avatarUrl
                        ? userSelector.avatarUrl.src
                        : AvatarImg
                    }
                    alt={userSelector.name}
                    layout="fill"
                  />
                </Avatar>
              </div>
              <div className="avatar-name-wrapper">
                <Typography
                  color={`${themeColors.text4}`}
                  fontSize="16px"
                  fontWeight="600"
                  sx={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    width: "160px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {`${userSelector.name}`}
                </Typography>
              </div>
            </Stack>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Header;
