import React  from "react";
import {CTS} from './CommonTooltipStyle';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Tooltip from '@mui/material/Tooltip';
import UseCommonTooltip from "./UseCommonTooltip";
export default function CommonTooltip({title,route}){
    const[handleTooltipOpen,handleTooltipClose,open]=UseCommonTooltip();
    return(
        <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            title={title}>
            <CTS.TooltipIconContainer route={route} onMouseOver={handleTooltipOpen} onClick={handleTooltipOpen}>
                <CTS.QuestionMarkIcon />
            </CTS.TooltipIconContainer>
        </Tooltip>
    </ClickAwayListener>
    )
}