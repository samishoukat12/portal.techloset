import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

export const CM = {
    MainCard: styled(Card)(() => ({
        width: 290,
        height: 315,
        margin: 16,
        '&:hover':{
           transform: 'scale(1.03)'
        }
    })),
    MainCardContent: styled(CardContent)(() => ({
        position: 'relative',
        marginBottom:'8px',
    })),
    TitleTypography: styled(Typography)(() => ({
        fontWeight: 'bold'
    })),
    CourseTypography: styled(Typography)(() => ({
        fontWeight: 'bold'
    })),
    CourseDiv: styled('div')(() => ({
        paddingBottom: '2px'
    })),
    LectureDiv: styled('div')(() => ({
        paddingBottom: '2px'
    })),
    CreatedAtTypography: styled(Typography)(() => ({
        fontWeight: 'bold',
        fontSize: 11
    })),
    DateTypography: styled(Typography)(() => ({
        fontSize: 10,
        fontWeight: 'bold'
    })),
    DateDiv: styled('div')(() => ({   
        display:'flex',
        justifyContent:'right',
    }))

}