import React from 'react';
import { ProjectContext } from '../store/project-context';
import NewTask from "./NewTask";

export default function Tasks() {
    const { tasks, selectedProjectId, deleteTask, toggleTask } = React.useContext(ProjectContext);
    const projectTasks = tasks.filter(task => task.projectId === selectedProjectId);

    return (
        <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-100 mb-6">Project Tasks</h2>
            <NewTask />

            {projectTasks.length === 0 && (
                <p className="text-slate-500 mt-6 italic">No tasks assigned to this project yet.</p>
            )}

            {projectTasks.length > 0 && (
                <ul className="mt-8 space-y-3">
                    {projectTasks.map((task) => (
                        <li
                            key={task.id}
                            className="flex justify-between items-center p-4 bg-slate-900/40 border border-slate-800 rounded-xl hover:bg-slate-800/40 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    checked={task.isCompleted}
                                    onChange={() => toggleTask(task.id)}
                                    className="w-5 h-5 accent-indigo-500 cursor-pointer rounded"
                                />
                                <span className={`text-lg transition-all ${task.isCompleted ? "line-through text-slate-600" : "text-slate-200"}`}>
                                    {task.text}
                                </span>
                            </div>
                            <button
                                onClick={() => deleteTask(task.id)}
                                className="text-slate-500 hover:text-red-400 transition-colors px-2"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}