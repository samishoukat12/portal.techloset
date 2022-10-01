import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {OLS} from './OverlayLoaderStyle';
import {ThreeDots} from "react-loader-spinner";
import MetroSpinner  from 'react-spinners-kit'
export default function OverlayLoader({ open ,loading}) {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <OLS.Box >
                        <OLS.LoaderContainer>
                            {/* <ThreeDots color="#0D4cb5" height={100} width={100} /> */}
                            <MetroSpinner size={30} color="#686769" loading={loading} />
                        </OLS.LoaderContainer>
                    </OLS.Box>
                </Fade>
            </Modal>
        </div>
    );
}
