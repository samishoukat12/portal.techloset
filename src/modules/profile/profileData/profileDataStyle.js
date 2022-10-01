import { styled } from '@mui/material/styles';

export const Pd={
    ProDiv:styled("div")(()=>({
        
        marginLeft:'40px',
        "@media (max-width: 900px)": {
            marginLeft:'0px',
        },
    }))
}