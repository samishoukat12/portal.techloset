import { styled, alpha } from '@mui/material/styles';
import Typography from "@mui/material/Typography";



export const FooterStyle = {

    footerContent: styled(Typography)(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            fontSize: 10,
        },
    })),
} 