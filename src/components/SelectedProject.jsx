import React from 'react';
import { ProjectContext } from '../store/project-context';
import Tasks from "./Tasks";
import Modal from "./Modal";

export default function SelectedProject() {
    const { projects, selectedProjectId, deleteProject } = React.useContext(ProjectContext);
    const deleteModal = React.useRef();

    const project = projects.find(p => p.id === selectedProjectId);
    if (!project) return null;

    return (
        <>
            <Modal ref={deleteModal} buttonCaption="No, Keep it">
                <h2 className="text-xl font-bold text-slate-200 mb-4">Confirm Deletion</h2>
                <p className="text-slate-400 mb-4">Are you sure you want to delete this project?</p>
                <button onClick={deleteProject} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Yes, Delete</button>
            </Modal>

            <div className="w-full max-w-[45rem] mt-16 mx-auto px-8">
                <header className="pb-4 mb-4 border-b-2 border-slate-800">
                    <div className="flex items-center justify-between">
                        <h1 className="text-4xl font-bold text-indigo-400 mb-2">{project.title}</h1>
                        <button className="text-slate-400 hover:text-red-500" onClick={() => deleteModal.current.open()}>Delete</button>
                    </div>
                    <p className="mt-4 text-slate-300">{project.description}</p>
                </header>
                <Tasks />
            </div>
        </>
    );
}