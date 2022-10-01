import { Container } from "@mui/material";
import { styled } from '@mui/material/styles';
import { NavLink } from "react-router-dom";
import { colors } from '../../constants/Color'
export const P = {
    Mycontainer: styled(Container)(() => ({
        padding: '20px',
        textAlign: 'left',

    })),
    MycontainerBorder: styled(Container)(() => ({
        paddingTop: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
        textAlign: 'left',
        borderBottom: `1px solid ${colors.lightBlue}`
    })),
    MycontainerName: styled(Container)(() => ({
        padding: '20px',
        backgroundColor: `${colors.gray}`,
        display: "flex",
        flexWrap: "wrap",
        "@media (max-width: 700px)": {
            textAlign: 'center'
        },
    })),
    Myimg: styled('img')(() => ({
        height: '80px',
        width: '80px',
        objectFit: 'cover'
    })),
    MyLink: styled(NavLink)(() => ({
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
        '&:visited': {
            color: `${colors.blue}`
        }

    })),

}