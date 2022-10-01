import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../../constants/Color";
const mypadding = {
    paddingLeft: '40px'
}
export const CF = {
    ProfileFieldLabel: styled(Typography)(() => ({
        fontSize: '16px',
        fontWeight: 500,
        // color : "#121F3E"
        marginTop: 20,
        paddingLeft: `${mypadding.paddingLeft}`,
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    })),
    ProfileField: styled(TextField)(() => ({
        paddingLeft: `${mypadding.paddingLeft}`,
            border: '1px solid #E5EBF0',
            borderRadius: 8,
            // paddingLeft: 10,
            // paddingRight: 10,
            height: 35,
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    })),
    TextInput: styled(TextField)(() => ({
        // backgroundColor: colors.white,
        paddingLeft: `${mypadding.paddingLeft}`,

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
            // '&:invalid' : {
            //     border: "red solid 2px"
            // }
        }
        
        

    }))

}