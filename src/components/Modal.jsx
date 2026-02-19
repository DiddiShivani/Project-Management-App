import { createPortal } from "react-dom";
import { useRef, forwardRef, useImperativeHandle } from "react";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => ({
        open() { dialog.current.showModal(); },
        close() { dialog.current.close(); }
    }));

    return createPortal(
        <dialog
            ref={dialog}
            className="backdrop:bg-slate-950/90 p-8 rounded-2xl shadow-2xl bg-slate-900 border border-slate-800 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-0 w-[90%] max-w-md"
        >
            <div className="text-left">
                {children}
            </div>
            <form method="dialog" className="mt-8 text-right">
                <Button>{buttonCaption}</Button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
});

export default Modal;