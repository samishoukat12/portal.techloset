import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const TMS = {
    Box: styled(Box)(({type}) => ({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        boxShadow: 24,
        paddingTop: 30,
        paddingRight: 30,
        paddingLeft: 30,
        backgroundColor:type=='loader'?null:'white',
    })),
    ButtonsContainer: styled('div')(() => ({
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 10,
    })),
    CancelButton: styled('p')(() => ({
        marginRight: 50,
        '&:hover': {
            cursor: 'pointer',
        }
    })),
    YesButton:styled('p')(()=>({
        '&:hover': {
            cursor: 'pointer',
        }
    })),
}


