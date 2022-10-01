import { styled } from "@mui/material/styles";
const mypadding = {
    paddingLeft: '40px'
}
export const CP={
    ChangePasswordButton:styled('div')(()=>({
        paddingLeft: `${mypadding.paddingLeft}`,
        paddingTop:'20px',
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    }))
}