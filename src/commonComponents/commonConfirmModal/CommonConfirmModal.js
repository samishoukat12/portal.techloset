import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { CM } from './CommonConfirmModalStyle'
import UseCommonConfirmModal from './UseCommonConfirmModal';
import { IconButton } from '@mui/material';
export default function CommonConfirmModal({ ctaDeleteHandler, row, title }) {
  const [{ open, setOpen, handleClose, handleOpen }] = UseCommonConfirmModal()
  return (
    <div>
      <IconButton
        aria-label="delete"
        size="small"
        onClick={handleOpen}
      >
        <CM.DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
            <p>Are you sure to delete {title} record permanently?</p>
        </DialogContent>
        <DialogActions>
          <CM.DeleteButton variant='contained' color="error" onClick={() => ctaDeleteHandler(row)}>
            Delete
          </CM.DeleteButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
