import * as React from 'react';
import PButton from '../Pbutton/Pbutton'
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CommonModal({ question, answer, freelancingProfileUrl, modalPermissions, permissions,modalDescription }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log('button',modalDescription);

    return (
        <div>
            {
                question?.faqQuestion.length > 30 ?
                    <>
                        <PButton ctaHandler={handleOpen} title="see more" />
                        <Dialog
                            open={open}
                            onClose={handleClose}
                        >
                            <DialogTitle>
                                Question
                            </DialogTitle>
                            <DialogContent>
                                {question?.faqQuestion}
                            </DialogContent>
                        </Dialog>
                    </>
                    :
                    answer?.faqAnswer.length > 30 ?
                        <>
                            <PButton ctaHandler={handleOpen} title="see more" />
                            <Dialog
                                open={open}
                                onClose={handleClose}
                            >

                                <DialogTitle id="transition-modal-title" variant="h6" component="h2">
                                    Answer
                                </DialogTitle>
                                <DialogContent>
                                    {answer?.faqAnswer}
                                </DialogContent>
                            </Dialog>
                        </>
                        :
                        question?.faqQuestion.length < 30 ?

                            <p>{question?.faqQuestion}</p>

                            :
                            answer?.faqAnswer.length < 30 ?
                                <p>{answer?.faqAnswer}</p>
                                :
                                freelancingProfileUrl?.freelancingProfileUrl.length > 15 ?
                                    <>
                                        <PButton ctaHandler={handleOpen} title="see more" />
                                        <Dialog
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <DialogTitle >
                                                Freelancing Profile Url
                                            </DialogTitle>
                                            <DialogContent>
                                                {freelancingProfileUrl?.freelancingProfileUrl}
                                            </DialogContent>

                                        </Dialog>
                                    </>
                                    :
                                    freelancingProfileUrl?.freelancingProfileUrl.length < 15 ?
                                        <>
                                            <p> {freelancingProfileUrl?.freelancingProfileUrl}</p>
                                        </>
                                        :
                                        modalPermissions ?
                                            <>
                                                <PButton ctaHandler={handleOpen} title="See tabs" />
                                                <Dialog
                                                    onClose={handleClose} open={open}
                                                >
                                                    <DialogTitle >
                                                        Tabs Permissions
                                                    </DialogTitle>
                                                    {
                                                        modalPermissions?.permissions?.map((permission) => {
                                                            return permission.map((val) => {
                                                                return (
                                                                    <ul>
                                                                        <li style={{ fontSize: 15, width: '100%' }}>{val?.pageName}</li>
                                                                    </ul>
                                                                )
                                                            })

                                                        })
                                                    }


                                                </Dialog>
                                            </>
                                            :
                                            permissions ?
                                                <>
                                                    <PButton ctaHandler={handleOpen} title="See tabs" />
                                                    <Dialog
                                                        onClose={handleClose} open={open}
                                                    >
                                                        <DialogTitle >
                                                            Tabs Permissions
                                                        </DialogTitle>
                                                        {
                                                            permissions.map((permission) => {
                                                                return permission.map((val) => {
                                                                    return (
                                                                        <ul>
                                                                            <li style={{ fontSize: 15, width: '100%' }}>{val?.pageName}</li>
                                                                        </ul>
                                                                    )
                                                                })

                                                            })
                                                        }


                                                    </Dialog>
                                                </>
                                                :modalDescription?.description?.length > 12?
                                    <>
                                        <PButton ctaHandler={handleOpen} title="see more" />
                                        <Dialog
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <DialogTitle >
                                                Description
                                            </DialogTitle>
                                            <DialogContent>
                                                {modalDescription?.description}
                                            </DialogContent>

                                        </Dialog>
                                    </>
                                    :
                                    modalDescription?.description?.length < 12 ?
                                        <>
                                            <p> {modalDescription?.description}</p>
                                        </>
                                        :''

            }
        </div>
    );
}