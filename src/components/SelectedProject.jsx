import { useRef } from 'react';
import Tasks from "./Tasks";
import Modal from "./Modal";

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, onToggleTask, tasks }) {
    const deleteModal = useRef();

    const completedTasks = tasks.filter(t => t.isCompleted).length;
    const progressPercent = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;

    if (!project) return null;

    return (
        <>
            <Modal ref={deleteModal} buttonCaption="No, Keep it">
                <h2 className="text-xl font-bold text-slate-200 mb-4">Confirm Deletion</h2>
                <p className="text-slate-400 mb-4">Are you sure? This action cannot be undone.</p>
                <button
                    onClick={onDelete}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                    Yes, Delete
                </button>
            </Modal>

            <div className="w-full max-w-[45rem] mt-16 mx-auto px-8">
                <header className="pb-4 mb-4 border-b-2 border-slate-800">
                    <div className="flex items-center justify-between">
                        <h1 className="text-4xl font-bold text-indigo-400 mb-2">{project.title}</h1>
                        <button
                            className="text-slate-400 hover:text-red-500 font-medium transition-colors"
                            onClick={() => deleteModal.current.open()}
                        >
                            Delete Project
                        </button>
                    </div>

                    <div className="w-full bg-slate-800 h-2 rounded-full mt-4">
                        <div
                            className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${progressPercent}%` }}
                        ></div>
                    </div>
                    <p className="text-sm text-slate-400 mt-2 font-mono">
                        {completedTasks} of {tasks.length} tasks completed
                    </p>
                    <p className="mt-4 text-slate-300 leading-relaxed">{project.description}</p>
                </header>
                <Tasks onAdd={onAddTask} onDelete={onDeleteTask} onToggle={onToggleTask} tasks={tasks} />
            </div>
        </>
    );
}