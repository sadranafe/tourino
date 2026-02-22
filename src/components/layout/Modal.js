'use client';
import { Modal } from "@mui/material";
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import XIconComponent from "../icons/xIcon";

const ModalComponent = ({ children , modalIsOpen , handleClose }) => {
    return (
        <Modal open = {modalIsOpen} onClose = {handleClose} closeAfterTransition slots = {{ backdrop: Backdrop }} slotProps = {{ backdrop: { timeout: 500, } }} aria-labelledby = 'modal-modal-title' aria-describedby = 'modal-modal-description'>
            <Fade in = {modalIsOpen}>
                <div className = "bg-neutral-50 w-[550px] max-md:w-9/12 max-sm:w-10/12 h-[350px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded-3xl p-2 outline-none">
                    <button onClick = {handleClose} className = "absolute left-2.5 p-1 text-neutral-400 hover:text-neutral-600 transition-all">
                        <XIconComponent customClasses = 'text-lg'/>
                    </button>
                    { children }
                </div>
            </Fade>
        </Modal>
    );
};

export default ModalComponent;