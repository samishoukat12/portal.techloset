import { styled } from '@mui/material/styles';

export const CS={
    CardContainer:styled('div')(()=>({
        width:'100%',
        height:200,
        backgroundColor:'white',
        borderRadius:5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        lineHeight:0.3,
    })),
    CenterContainer:styled('div')(()=>({
        textAlign:'center',
    })),
    Heading:styled('p')(({card})=>({
        fontSize:card=='greeting'?25:16,
        color:'#96A0B5',
        fontWeight:'500',
    })),
    Value:styled('p')(()=>({
        fontWeight:'bold',
        fontSize:20,
        color:'#96A0B5'
    })),
}