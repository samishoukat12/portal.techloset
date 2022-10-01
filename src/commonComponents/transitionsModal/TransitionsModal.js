import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {TMS} from './TransitionsModalStyle';

export default function TransitionsModal({open,setOpen,sumbitHandler}) {
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <TMS.Box>
            <Typography  component="h5">
              Are you sure you want to delete?
            </Typography>
              <TMS.ButtonsContainer>
                <TMS.CancelButton onClick={handleClose} >Cancel</TMS.CancelButton>
                <TMS.YesButton onClick={sumbitHandler}>Yes</TMS.YesButton>
              </TMS.ButtonsContainer>
          </TMS.Box>
        </Fade>
      </Modal>
    </div>
  );
}
