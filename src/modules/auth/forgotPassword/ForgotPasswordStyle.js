import { styled } from '@mui/material/styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { colors } from '../../../constants/Color';
import LogIn from '../../../assets/LogIn.png'
import { Link } from "react-router-dom";
export const ForgotStyle = {
    MainPage: styled('div')(() => ({
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY: 'auto',
        backgroundImage: "url("+LogIn+")", 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        
    })),
    Image: styled('img')(() => ({
        marginTop: 40,
        marginBottom: 40,
        width: 200,
        height: 130
    })),
    ForgotContainer: styled('div')(() => ({
        paddingTop: 48,
        paddingBottom: 48,
        borderRadius: 16,
        backgroundColor: 'white',
        maxWidth: 520,
        maxHeight: 'auto',
        width: '90%',
        // margin: '0 auto',
        marginBottom: 40,
        "@media (max-width: 700px)": {
            width: '95%',
        },
    })),
    InlineHeaderContainer: styled('div')(() => ({
        display: 'flex',
        // marginBottom: 32,
        // flexDirection: 'row',
        // width: '80%',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        justifyContent: 'center',
        "@media (max-width: 700px)": {
            width: '90%',
        },
    })),
    LoginHeading: styled('p')(() => ({
        color: '#000000',
        fontSize: 25,
        fontWeight: '500',
        // textAlign: 'center',
        // margin: 0,
    })),
    InnerContainer: styled('div')(() => ({
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // marginTop: 5,
        width: '80%',
        // paddingLeft: 45,
        marginLeft: 'auto',
        marginRight: 'auto',
        "@media (max-width: 700px)": {
            width: '95%',
        },


    })),
    Instruction: styled('p')(() => ({
        fontSize: 15,
    })),
    InputFieldHeading: styled('p')(() => ({
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        color: '#121F3E',
        fontWeight: '500',
    })),
    Estaric: styled('span')(() => ({ 
        
        color: '#FF5963',
        marginLeft: 2,
        
    })),
    IconAndInputField: styled('div')(({typing}) => ({
        width: '100%',
        height: '55px',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
        // borderWidth: 1,
        border: typing? '1px solid #1E86FF' :'1px solid #E5EBF0' ,
        
        // border: '1px solid #E5EBF0' ,
        borderRadius: 8,
        "@media (max-width: 700px)": {
            width: '95%',
        },
    })),
    IconContainer: styled('div')(() => ({
        alignItems: 'center',
        marginLeft: 21,
        marginRight: 16,
        // backgroundColor: "red",
        display: 'flex',
        // justifyContent: 'center',
        "@media (max-width: 700px)": {
            marginLeft: 10,
            marginRight: 14,
        },
    })),
    MailIcon: styled(MailIcon)(({typing}) => ({
        color: typing ? '#1E86FF': 'grey',
        fontSize: 20,
    })),
    Input: styled('input')(() => ({
        width: '100%',
        borderRadius: 8,
        height: 55,
        fontSize: 14,
        fontWeight: 500,
        boxSizing: "border-box",
        border: 'none',
        outline: 'none',
        "@media (max-width: 700px)": {
            width: '100%',
        },
    })),
    RecoverButton: styled('button')(() => ({
        borderRadius: 8,
        height: 52,
        backgroundColor: '#1E86FF',
        width: '100%',
        color: colors.white,
        padding: '10px 22px',
        border: 'none',
        textAlign: 'center',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: 20,
        "@media (max-width: 700px)": {
            width: '95%',
        },
    })),
    ReturnToLoginLink: styled(Link)(() => ({
        display: 'flex',
        textDecoration: "none",
        // alignItems: 'center',
        fontSize: 13,
        color: '#1E86FF',
        fontWeight: 'bold',
        marginTop: 25
    })),


}
