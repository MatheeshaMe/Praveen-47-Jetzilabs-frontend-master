import { Box } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../features/userSlice';
import Header from './Header/Header';
import SideNav from './SideNav/SideNav';
// import './Layout.css';


const Layout = (props) => {

    const drawerWidth = 300;

    const dispatch = useDispatch();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    dispatch(getUser(props.user));

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <Header drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
            <SideNav
                drawerWidth={drawerWidth} 
                mobileOpen={mobileOpen} 
                handleDrawerToggle={handleDrawerToggle}
                route={props.route}
                setRoute={props.setRoute}
            />
            <div 
                style={{ width: { md: `calc(100% - ${drawerWidth}px)`}, display:'flex', flexDirection:'column', justifyContent:'space-between', flexGrow: 1, overflow: 'hidden', padding:'0px', marin:'0px' }}
            >
                <div style={{padding:'80px 10px 30px 10px'}} >
                    {props.children}
                </div>
            </div>
        </Box>
    );
};

export default Layout;