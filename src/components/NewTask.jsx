import { useState } from 'react';

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState("");

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if (enteredTask.trim() === "") return;
        onAdd(enteredTask);
        setEnteredTask("");
    }

    return (
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
    );
}