import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const OLS = {
    Box: styled(Box)(() => ({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        boxShadow: 24,
        paddingTop: 30,
        paddingRight: 30,
        paddingLeft: 30,
    })),
    LoaderContainer:styled('div')(()=>({
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    })),
}


