import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Toast(message,type,theme) {
    return (
        toast(message, {
            position: "top-right",
            type: type,
            theme: theme,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnFocusLoss:false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        })
    )
}