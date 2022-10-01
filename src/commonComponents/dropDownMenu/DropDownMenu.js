import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function DropDownMenu({ anchorEl, handleAnchorClose, openAnchor, title,filterTag }) {
  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openAnchor}
        onClose={handleAnchorClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <>
          {
            filterTag?.map((item)=>{
              return (
                <MenuItem onClick={() => handleAnchorClose(item)}>{item}</MenuItem>

              )
            })

          }
        </>

      </Menu>
    </div>
  );
}
