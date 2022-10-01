import styled from "@emotion/styled";
import { Dialog, IconButton, TextField } from "@mui/material";
import { colors } from "../../constants/Color";
import PhoneInput from 'react-phone-input-2'
export const FM = {

    DialogBox: styled(Dialog)(()=> ({
        width: 712,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',

    })),
    DialogBox1: styled(Dialog)(()=> ({
        width: 712,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',

    })),
    FormButton: styled('button')(() => ({
        color: `${colors.white}`,
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
    
    })),
    PhoneField:styled(PhoneInput)(()=>({
       marginTop: 20,
    })),
    Image: styled('input')(() => ({
        backgroundColor: colors.appBar,
        color: "#ffffff",
        padding: "5px",
        '&:hover': {
            backgroundColor: "#ffffff",
            color: colors.appBar,
            border: `1px solid ${colors.appBar}`
        }
    })),
    IconButton: styled(IconButton)(({theme}) => ({
        position: 'absolute',
        right: 8,
        top: 8,
        color: (theme) => theme.palette.grey[500],
    })),
    TextInput: styled(TextField)((emailError) => ({
        backgroundColor: colors.white,
        '& label': {
            transformOrigin: "left !important",
            left: "inherit !important",
            fontSize: "16px",
            color: emailError == null ? "red":"#121F3E",
            fontWeight: 500,
            overflow: "unset",
        },
        '& input': {
            marginTop: 4,
            border: '1px solid #E5EBF0',
            borderRadius: 8,
            paddingLeft: 10,
            paddingRight: 10,
            height: 35,

        }
        

    }))
}