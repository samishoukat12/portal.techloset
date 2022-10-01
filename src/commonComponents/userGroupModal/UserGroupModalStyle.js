import styled from "@emotion/styled";
import { TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Edit } from '@mui/icons-material'

export const ModalTabsStyle = {
    MainDiv: styled('div')((theme) => ({
        width: '100%',
        height: 'auto',
        marginTop: "20px",
        padding: "0px 5px 0px 5px",
        "@media (max-width: 900px)": {
            width: '100%',
        },
    })),
    InputLabel: styled('div')(() => ({
        color: "#22496f",
        fontWeight: 500,
        fontSize: 14,
        padding: "10px 20px 10px 10px"
    })),
    MyInput: styled('input')(() => ({
        width: "100%",
        height: "40px",
        outline: "gray",
        border: "1px solid gray",
        fontSize: "15.5px",
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        '&:focus':{
            border: "1px solid #3fbe69",
        }

    })),
    PermissionText: styled('div')(() => ({
        fontSize: 17,
        fontWeight: 400,
        padding: "10px 10px 10px 10px"
    })),
    PermissionsTableHead: styled(TableHead)(() => ({
        backgroundColor: '#f4f5f8',
        width: "100%"
    })),
    PermissionTableTitleHead: styled(TableCell)(() => ({
        color: '#173f68',
        fontWeight: 600
    })),
    PermissionTitletTxt: styled(TableCell)(() => ({
        color: "#22496f",
        fontWeight: 500,
        paddingBottom: 0
    })),
    TableDiv: styled('div')(() => ({
        padding: "10px"
    })),
    EditIcon: styled(Edit)(({ theme }) => ({
        color: '#96A0B5',
        
    
    })),
    IconDiv: styled('div')(() => ({
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    })),


}