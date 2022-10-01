import React from "react";

export default function UseCommonTooltip(){
    
    const [open, setOpen] = React.useState(false);
    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };
    return [handleTooltipOpen,handleTooltipClose,open]
}