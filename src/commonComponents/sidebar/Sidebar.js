import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import { UseDrawer } from './UseSidebar';
import { SidebarStyle } from './SidebarStyle';
import Logo from '../../assets/logo.png'
import { Divider } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import CommonProfileDropDown from '../commonProfileDropdown/CommonProfileDropDown';
import UseWindowDimensions from '../../customHooks/UseWindowDimensions';
import { Hidden } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom"
import { MENU_ITEMS } from '../../constants/Roles'
import Footer from '../footer/Footer';
import { tabsPersmission } from '../../lib/reactivities/reactiveVarables';
import { useReactiveVar } from '@apollo/client';
const drawerWidth = 240;
function Sidebar(props) {
  const [{
    open,
    ctaLogoutHandler,
    handleDrawer,
  }] = UseDrawer()
  const useTabsPermission = useReactiveVar(tabsPersmission)
  const { width } = UseWindowDimensions();
  const { window } = props;
  const location = useLocation();
  const anchorRef = React.useRef(null);
  const [dropDownOpen, setDropDownOpen] = useState(0);
  const container = window !== undefined ? () => window().document.body : undefined;
  //List Item 


  const renderSidebarItems = (items, index) => {

    return (
      <>
        <SidebarStyle.DomLink to={items.collapse === "true" ? location?.pathname : items.moduleUrl} key={index}>
          <ListItem
            key={index}
            ref={anchorRef}
            button
            onClick={
              dropDownOpen === 0 ?
                items.collapse === "true" ?
                  () => setDropDownOpen(items.module_id)
                  : ''
                : dropDownOpen == items.module_id ?
                  () => setDropDownOpen(0)
                  : ""
                    || items.collapse === "true" ? () => setDropDownOpen(items.module_id) : ''}
          // Active={location?.pathname === items?.moduleUrl}
          // sx={location?.pathname === items?.moduleName ? { backgroundColor: '#E8F3FF', borderRadius: 2, color: "blue" } : null}

          >
            {
              MENU_ITEMS.map((val) => {
                if (val.text === items.moduleName) {
                  return (
                    <SidebarStyle.ListItemIconTag Active={location?.pathname === items?.moduleUrl || dropDownOpen === items.module_id} >
                      {val.icon}
                    </SidebarStyle.ListItemIconTag>
                  )
                }
              })
            }
            <SidebarStyle.ListItemTextTag primary={items?.moduleName} Active={location?.pathname === items?.moduleUrl || dropDownOpen === items.module_id} />
            {
              items?.collapse === 'true' ?
                dropDownOpen === items.module_id ?
                  <SidebarStyle.ListItemIconTag><KeyboardArrowDownIcon /></SidebarStyle.ListItemIconTag>
                  :
                  <SidebarStyle.ListItemIconTag ><KeyboardArrowRightIcon /></SidebarStyle.ListItemIconTag>
                : null
            }
          </ListItem>
        </SidebarStyle.DomLink>
        {
          items.pages.map((item) => {
            return (
              <>
                {
                  items.module_id === dropDownOpen && items.collapse === "true" ?
                    <SidebarStyle.ListItemsContainerForSettings>
                      {
                        // dropDownItems.map((item) => {
                        //   return (
                        <SidebarStyle.DomLink to={item?.pageURL} key={index}>
                          <ListItem
                            ref={anchorRef}
                            onClick={width < 600 ? null : null}
                            button
                            Active={location?.pathname === item?.pageURL}
                            sx={location?.pathname === item?.pageURL ? { borderRight: 3, borderColor: '#5003b7', borderRightWidth: 2 } : null}
                          >
                            {
                              MENU_ITEMS.map((val) => {
                                if (val.text === item.pageName) {
                                  return (
                                    <SidebarStyle.ListItemIconTag Active={location?.pathname === item?.pageURL} >
                                      {val.icon}
                                    </SidebarStyle.ListItemIconTag>
                                  )
                                }
                              })
                            }
                            <>
                              <SidebarStyle.ListItemTextTagForDropDown primary={item?.pageName} />
                            </>
                          </ListItem>
                        </SidebarStyle.DomLink>
                        //   )
                        // })
                      }
                    </SidebarStyle.ListItemsContainerForSettings >
                    : null
                }

              </>
            )
          })
        }


      </>
    );
  };
  //Sidebar Items
  const drawer = (
    <div>
      <List>
        <>
          {
            // state?.tabsPersmission.map((items, index) => {
            useTabsPermission.map((items, index) => {
              return renderSidebarItems(items, index)

            })
          }
        </>


      </List>
    </div>
  );
  return (
    <SidebarStyle.Box >
      <CssBaseline />
      <SidebarStyle.AppBar elevation={0} position="fixed" open={open}>
        <Toolbar >

          <SidebarStyle.IconButton
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
          >
            <MenuIcon />
          </SidebarStyle.IconButton>

          {/* Site Logo */}
          <SidebarStyle.Image src={Logo} />

          <CommonProfileDropDown />

        </Toolbar>

      </SidebarStyle.AppBar>

      <SidebarStyle.WebDrawer
        sx={{ '& .MuiDrawer-paper': { border: 'none' } }}
        variant="permanent"
        container={container}
        open={open}
      >
        {/* <SidebarStyle.DrawerHeader>
          <SidebarStyle.Image src={logo} />
        </SidebarStyle.DrawerHeader> */}
        <Divider />
        <Toolbar />
        {drawer}
        <SidebarStyle.ButtonContainer>
          <Link to='/login' className='link'><SidebarStyle.LogoutLink onClick={ctaLogoutHandler}>Logout</SidebarStyle.LogoutLink></Link>
        </SidebarStyle.ButtonContainer>
      </SidebarStyle.WebDrawer>

      <Hidden mdUp>
        <SidebarStyle.MobileDrawer
          drawerWidth={drawerWidth}
          variant="temoprary"
          container={container}
          open={open}
          onClose={handleDrawer}
          ModalProps={{
            keepMounted: true,
            hideBackdrop: true
          }}
        >
          <Toolbar />
          {drawer}
          <SidebarStyle.ButtonContainer>
            <Link to='/login' className='link'> <SidebarStyle.LogoutLink onClick={ctaLogoutHandler}>Logout</SidebarStyle.LogoutLink></Link>
          </SidebarStyle.ButtonContainer>
        </SidebarStyle.MobileDrawer>
      </Hidden>

      <SidebarStyle.Main component="main" open={open} >
        <SidebarStyle.DrawerHeader />
        {/* {props.children} */}
        <SidebarStyle.childDiv>
          <ToastContainer />
          <SidebarStyle.innerChild>
            <SidebarStyle.outletMargin>
              <Outlet />
            </SidebarStyle.outletMargin>
            <Footer />
          </SidebarStyle.innerChild>
        </SidebarStyle.childDiv>
      </SidebarStyle.Main>

    </SidebarStyle.Box>
  );
}
Sidebar.propTypes = {
  window: PropTypes.func,
};
export default Sidebar;





