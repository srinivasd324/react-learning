import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import ButtonCSS from "./ButtonCSS.jsx";

const Modal = forwardRef(function Modal({ children, buttonLabel }, ref) {
    const modalRef = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                modalRef.current.showModal();
            }
        }

    })
        ;
    return createPortal(
        <dialog ref={modalRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <ButtonCSS>
                    {buttonLabel}
                </ButtonCSS>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
});
export default Modal;