import React from 'react';
import { ProjectContext } from '../store/project-context';
import Modal from "./Modal";

export default function NewTask() {
    const { addTask } = React.useContext(ProjectContext);
    const [enteredTask, setEnteredTask] = React.useState("");
    const modal = React.useRef(); 

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if (enteredTask.trim() === "") {
            modal.current.open(); 
            return;
        }

        addTask(enteredTask);
        setEnteredTask("");
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className="text-xl font-bold text-slate-200 mb-2">Invalid Task</h2>
                <p className="text-slate-400">Please enter some text before adding a task.</p>
            </Modal>

            <div className="flex items-center gap-4">
                <input
                    type="text"
                    className="w-80 px-3 py-2 rounded-md bg-slate-800 border border-slate-700 text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors"
                    onChange={handleChange}
                    value={enteredTask}
                    placeholder="Enter task description..."
                />
                <button
                    className="text-indigo-400 hover:text-indigo-300 font-semibold px-4 py-2 transition-colors"
                    onClick={handleClick}
                >
                    Add Task
                </button>
            </div>
        </>
    );
}