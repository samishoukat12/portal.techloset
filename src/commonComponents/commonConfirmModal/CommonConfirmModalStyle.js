import styled from "@emotion/styled";
import { Delete } from "@mui/icons-material";

export const CM = {
    DeleteIcon: styled(Delete)(() => ({
        color: '#f44336'
    })),
    DeleteButton: styled('button')(() => ({
        color: '#f44336',
        border: '1px solid #f44336',
        padding: '11px 25px 11px 25px',
        cursor: "pointer",
        borderRadius: '2px',
        letterSpacing: "0.5px",
        backgroundColor: "#ffffff",
        transition: "0.4s",
        marginRight: 15,
        marginBottom:10,
        '&:hover': {
            backgroundColor: "#f44336",
            color: "#ffffff"
        }
    }))

}