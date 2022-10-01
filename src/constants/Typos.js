import { styled } from '@mui/material/styles';
import { Typography } from "@mui/material"

export const TypoHead = styled(Typography)({
    fontSize: '60px',
    fontWeight: '300',
    color: '#00668B',
    "@media (max-width: 700px)": {
        fontSize: '40px',
    },
    "@media (max-width: 400px)": {
        fontSize: '40px',
    },
})
export const TypoText = styled(Typography)({
    fontSize: '20px',
    fontWeight: '200',
    color: '#00668B'
})
export const TypoTextProfile = styled(Typography)({
    fontSize: '17px',
    fontWeight: '200',
    color: '#00668B',
    paddingTop: '20px',
    display: "flex",
    flexWrap: "wrap",
    wordBreak: "break-all"
})