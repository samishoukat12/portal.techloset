import { IconButton, Menu } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import MenuItem from '@mui/material/MenuItem';

export const CPD = {
    ProfileLinkImage: styled('img')(() => ({
        height: '45px',
        width: "45px",
        borderRadius: '50%',
        objectFit: 'cover'
    })),
    IconButton: styled(IconButton)(() => ({
        float: 'right',
        // "@media (max-width: 900px)": {
        //     display: 'none',
        // },
    })),
    ProfileLink: styled(Link)(() => ({
        textDecoration: 'none',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingTop: '10px',
        paddingBottom: '10px',
        color:'black'
    })),
    DropDown: styled(MenuItem)(() => ({
        padding: '0px',
        paddingLeft:'14px',
        paddingRight:'14px',
    })),
    Menu: styled(Menu)(() => ({
        padding: '0'
    }))
}