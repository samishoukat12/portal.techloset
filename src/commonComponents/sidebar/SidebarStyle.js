import { Box, Button, IconButton, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { colors } from '../../constants/Color';
import { Link } from "react-router-dom";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
const drawerWidth = 276;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(0)} + 1px)`,
  },
})
export const SidebarStyle = {
  //Main Body
  Box: styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
  })),
  //Appbar 
  AppBar: styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    border: 'none',
    backgroundColor: colors.white,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.up('md')]: {
      ...(open && {
        // marginLeft: drawerWidth,
        // width: `calc(100% - ${drawerWidth}px)`,
        width: "100%",
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    },
  })),
  //Web Drawer
  WebDrawer: styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      border: 'none',
      borderWidth: 0,
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),

  ),
  //Mobile Drawer
  MobileDrawer: styled(MuiDrawer)(({ theme, drawerWidth }) => ({
    // height: '100%',
    minHeight: '100vh',
    [theme.breakpoints.up('xs')]: {
      display: 'block',

    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    "@media(max-width: 415px)": {
      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "100%" },
    }
  })),
  //IconButton 
  IconButton: styled(IconButton)(({ theme }) => ({
    marginRight: 30,
    color: '#000',
  })),
  //Drawer + Image Wrapper
  DrawerHeader: styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  })),
  //Image
  Image: styled('img')(({ theme }) => ({
    height: 40,
    width: 170,
    marginTop: 4
  })),
  //Childrens Render
  Main: styled('main')(({ theme }) => ({
    flexGrow: 1,
    overflowWrap: 'break-word',
    backgroundColor: colors.black + 10,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    height: '100%',
    // padding: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
    //   paddingLeft: theme.spacing(1),
    // paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(1),
      // padding: theme.spacing(1),
    },
  })),
  childDiv: styled("div")(({ theme }) => ({
    flex: 1,
    display: "flex",
    minHeight: "85vh",
    flexDirection: "column",
  })),
  innerChild: styled("div")(({ theme }) => ({
    flex: 1,
    display: "flex",
    minHeight: "85vh",
    flexDirection: "column",
    justifyContent: "space-between",
  })),

  // ===================== Sidebar Links =====================

  DomLink: styled(Link)(() => ({
    display: 'flex',
    textDecoration: 'none',
    marginLeft: 16,
    marginRight: 16,
    width: 244
  })),
  ListItem: styled(ListItem)(({ Active }) => ({
    // color: Active ? '#1E86FF' : '#96A0B5',
    backgroundColor: Active ? '#E8F3FF' : 'transparent',
    borderRadius: 8,
    '&:hover': {
      backgroundColor: 'rgba(232, 243, 255, 0.5)',
      borderRadius: 8,
    },
  })),
  ListItemIconTag: styled(ListItemIcon)(({ Active }) => ({
    color: Active ? '#1E86FF' : '#96A0B5',
    // '#1E86FF'
  })),
  ListItemTextTag: styled(ListItemText)(({ Active }) => ({
    color: Active ? '#1E86FF' : '#96A0B5',
    marginLeft: -2,
    marginRight: 15
  })),
  ListItemTextTagForDropDown: styled(ListItemText)(({ Active }) => ({
    color: Active ? '#1E86FF' : colors.black + 90,
    marginLeft: -22
  })),
  ListItemsContainerForSettings: styled('div')(({ theme }) => ({
    marginLeft: 20,
  })),
  TypoTraining: styled(Typography)(() => ({
    marginTop: '12px ',
    color: '#000',
    "@media (max-width:900px)": {
      marginTop: '0px',
      float: 'left'
    }
  })),
  ButtonContainer: styled('div')(() => ({
    height: 52,
    // width: '100%',
    // paddingRight: 25,
    marginTop: 20,
    marginBottom: 20,

    marginLeft: 'auto',
    marginRight: 'auto',
    // "@media (max-width: 700px)": {
    //     width: '95%',
    // },
  })),
  LogoutLink: styled(Button)(() => ({
    textDecoration: 'none',
    // position: 'relative',
    // bottom: 0,
    color: "white",
    padding: '10px',
    borderRadius: 2,
    backgroundColor: colors.lightBlue,
    textAlign: 'center',
    transition: '0.5s',
    // marginTop: 60,
    // marginBottom: 10,
    // marginX: "auto",
    // marginLeft: "auto",
    // marginRight: "auto",
    height: 44,
    width: 150,
    '&:hover': {
      backgroundColor: colors.lightBlue,
      color: "white"
    },
  }))
};
