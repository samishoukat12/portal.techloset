import styled from "@emotion/styled";
import { Dialog, IconButton, TextField } from "@mui/material";
import { colors } from "../../../constants/Color";
export const FM = {
    TextInput: styled(TextField)(() => ({
        backgroundColor: colors.white,
        '& label': {
            transformOrigin: "left !important",
            left: "inherit !important",
            fontSize: "16px",
            color: "#121F3E",
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

        },
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
}