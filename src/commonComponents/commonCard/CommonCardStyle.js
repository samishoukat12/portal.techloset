import { Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';


export const CD = {
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

}
