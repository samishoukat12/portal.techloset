// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import { colors } from '../../constants/Color';
// export const Ibutton = styled(Button)({
//     border: '1px solid #00668B',
//     paddingTop: '10px',
//     paddingBottom: '10px',
//     paddingLeft: '40px',
//     paddingRight: '40px',
//     color: colors.lightBlue,
//     background: "white",
//     transition: '0.5s',
//     '&:hover': {
//         transition: '0.7s',
//         backgroundColor: colors.lightBlue,
//         color: 'white',
//         cursor: 'pointer',
//     },
//     "@media (max-width: 900px)": {
//         paddingTop: '5px',
//         paddingBottom: '5px',
//         paddingLeft: '20px',
//         paddingRight: '20px',
//         fontSize:'13px !important'
//     }
   
// })

import { styled } from '@mui/material/styles';
import { colors } from '../../constants/Color';
export const FM={
    FormButton: styled('button')(() => ({
        // color: `${colors.white}`,
        border: 'none',
        borderRadius: 8,
        padding: '11px 25px 11px 25px',
        cursor: "pointer",
        fontWeight: "normal",
        letterSpacing: "0.5px",
        transition: "0.4s",
        backgroundColor: 'rgba(30, 134, 255, 0.1)',
        marginTop: 10,
        marginBottom: 10

    }))
}