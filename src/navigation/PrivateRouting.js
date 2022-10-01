import { Navigate } from "react-router-dom"

export const PrivateRouting = ({children, isAllowed, redirectPath = '/login' }) => {
   
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />
    }
    else {
        return children
    }
}