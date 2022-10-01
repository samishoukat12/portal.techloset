import { Navigate } from "react-router-dom"

export const PublicRouting = ({ children, isAllowed, redirectPath = '/' }) => {
    if (isAllowed) {
        return <Navigate to={redirectPath} replace />
    }
    else {
        return children
    }
}