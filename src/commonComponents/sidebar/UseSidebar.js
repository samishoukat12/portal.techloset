import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuth, orgCheck, userData, tabsPersmission } from '../../lib/reactivities/reactiveVarables';
export const UseDrawer = () => {
    const [open, setOpen] = React.useState(true);
    const navigate = useNavigate()
    const handleDrawer = () => {
        setOpen(!open);
    };
    const ctaLogoutHandler = async () => {
        await localStorage.clear()
        userData(null)
        checkAuth(false)
        orgCheck(false)
        tabsPersmission([])
        navigate('/login')
    }



    return [{

        open,
        handleDrawer,
        ctaLogoutHandler,
    }]
}
