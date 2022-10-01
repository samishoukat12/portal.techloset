import { styled } from '@mui/material/styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { colors } from '../../../constants/Color';
import LogIn from '../../../assets/LogIn.png'
import { Link } from "react-router-dom";
export const LoginStyle = {
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
    LoginContainer: styled('div')(() => ({
        paddingTop: 48,
        paddingBottom: 48,
        borderRadius: 16,
        backgroundColor: 'white',
        maxWidth: 520,
        maxHeight: 'auto',
        width: '90%',
        margin: '0 auto',
        marginBottom: 40,
        "@media (max-width: 700px)": {
            width: '95%',
        },
    })),
    InlineHeaderContainer: styled('div')(() => ({
        display: 'flex',
        marginBottom: 32,
        flexDirection: 'row',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        "@media (max-width: 700px)": {
            width: '90%',
        },
    })),
    LeftBorder: styled('div')(() => ({
        borderLeft: '4px solid #63Afff',
        height: 110,
        marginTop: 20,
        marginRight: 10,
    })),
    LoginHeading: styled('p')(() => ({
        color: '#000000',
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'center',
        margin: 0,
    })),
    Image: styled('img')(() => ({
        marginTop: 40,
        marginBottom: 40,
        width: 200,
        height: 130
    })),

    ForgotContainer: styled('div')(() => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        "@media (max-width: 700px)": {
            width: '95%',
        },


    })),
    InputFieldHeading: styled('p')(() => ({
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        color: '#121F3E',
        fontWeight: '500',
    })),
    ForgotPasswordLink: styled(Link)(() => ({
        display: 'flex',
        textDecoration: "none",
        // alignItems: 'center',
        fontSize: 13,
        color: '#1E86FF',
        fontWeight: 'bold',
    })),
    IconAndInputField: styled('div')(({typing}) => ({
        width: '80%',
        height: '55px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        border: typing? '1px solid #1E86FF' :'1px solid #E5EBF0' ,
        borderRadius: 8,
        "@media (max-width: 700px)": {
            width: '95%',
        },
    })),
    IconContainer: styled('div')(() => ({
        alignItems: 'center',
        marginLeft: 21,
        marginRight: 16,
        display: 'flex',
        justifyContent: 'center',
        "@media (max-width: 700px)": {
            marginLeft: 10,
            marginRight: 14,
        },
    })),
    PersonOutlineIcon: styled(MailIcon)(({typing}) => ({
        color: typing ? '#1E86FF': 'grey',
        fontSize: 20,
    })),
    LockIcon: styled(LockIcon)(({typing}) => ({
        width: 20,
        color: typing ? '#1E86FF': 'grey',
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
    PasswordVisibleIconContainer: styled('div')(() => ({
        alignItems: 'center',
        height: 55,
        position: 'relative',
        // position: 'absolute',
        // right: 16,
        display: 'flex',
        justifyContent: 'center',
    })),
    VisibilityIcon: styled(VisibilityIcon)(({ showPassword }) => ({
        width: 20,
        position: 'absolute',
        right: 16,
        cursor: 'pointer',
        color: showPassword ? '#1E86FF' : 'grey'
    })),
    LoaderContainer: styled('div')(() => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    })),
    ButtonContainer: styled('div')(() => ({
        height: 52,
        width: '80%',
        // paddingRight: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
        "@media (max-width: 700px)": {
            width: '95%',
        },
    })),
    LoginButton: styled('button')(() => ({
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
    })),
    OrgCheckbox: styled('div')(() => ({
        width: "80%",
        marginTop: '10px',
        marginLeft: "auto",
        marginRight: "auto",
        height: "auto",
        textAlign: "left",
        "@media (max-width: 700px)": {
            width: '95%',
        },

    })),
    
    Estaric: styled('p')(() => ({ 
        margin: 0,
        color: '#FF5963',
        marginLeft: 2,
        marginTop: -2,
    })),

}