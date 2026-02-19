import { useRef } from 'react';
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === "") {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className="text-xl font-bold text-slate-200 mb-2">Invalid Input</h2>
                <p className="text-slate-400">Please provide a value for every field.</p>
            </Modal>
            <div className="w-full max-w-[45rem] mt-16 mx-auto px-8">
                <menu className="flex items-center justify-end gap-6 my-6">
                    <li>
                        <button className="text-slate-400 hover:text-slate-200 font-medium" onClick={onCancel}>
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button
                            className="px-8 py-2.5 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 transition-all"
                            onClick={handleSave}
                        >
                            Save Project
                        </button>
                    </li>
                </menu>
                <div className="space-y-6">
                    <Input type="text" ref={title} label="Project Title" placeholder="Enter title..." />
                    <Input isTextarea ref={description} label="Project Description" placeholder="Describe the project..." />
                    <Input type="date" ref={dueDate} label="Target Due Date" />
                </div>
            </div>
        </>
    );
}