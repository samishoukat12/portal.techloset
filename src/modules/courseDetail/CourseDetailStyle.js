import { Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';


export const CD = {
    MainPageContainer: styled('div')(() => ({
        padding: '20px',
        borderRadius: '20px',
    })),
    CourseTypo: styled(Typography)(() => ({
        color: '#3a0ca3',
        fontWeight: 'bold'
    })),
    CourseDesc: styled(Typography)(() => ({
        padding: '8px'
    })),
    LectureDiv: styled('div')(() => ({
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center'
    })),
    PriceDiv: styled('div')(() => ({
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 8px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '24px',
    })),
    HeaderDiv: styled(Box)(() => ({
        maxWidth: '100%',
        padding: '12px 30px',
        borderRadius: '20px',
        marginTop: 1,
    })),
    FlexDiv: styled(Box)(() => ({
        display: 'flex',
        margin: 2,
        maxWidth: '100%',
        justifyContent: 'center',
        flexWrap: 'wrap'
    })),
    TitleTypography: styled(Typography)(() => ({
        fontWeight: 'bold',
        fontSize: 30,
        color: '#3a0ca3',
        margin: 0,
        padding: 0
    })),
    AddButton: styled(Button)(({ theme }) => ({
        textTransform: 'none',
        border:'none',
        borderRadius: '8px',
        backgroundColor:'#1E86FF;',
        color: '#ffffff',
        width: 115,
        height: 37,
        "&:hover": {
            backgroundColor:'#1E86FF;',
            border: 'none',
        }
    })),
    AddIcon: styled(AddIcon)(() => ({
        fontSize: 27,
        cursor: 'pointer',
        color: '#1E86FF'
    })),
    noData: styled('p')(() => ({
        fontWeight:'bold',
        fontSize:18,
        paddingTop:'16px'
    })),

}
