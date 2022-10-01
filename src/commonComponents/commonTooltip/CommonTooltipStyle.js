import { styled } from '@mui/material/styles';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export const CTS={
    TooltipIconContainer: styled('div')(({route}) => ({
        width: 10,
        marginLeft: 5,
        height: 10,
        backgroundColor: '#00c9de',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        cursor: 'pointer',
        padding:route==='login'?5:10,
    })),
    QuestionMarkIcon:styled(QuestionMarkIcon)(()=>({
        color:'white',
        width:15,
    })),
}