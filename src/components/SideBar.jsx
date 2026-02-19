import React from 'react';
import { ProjectContext } from '../store/project-context';
import Button from "./Button";

export default function SideBar() {
    const { projects, selectProject, selectedProjectId, startAddProject } = React.useContext(ProjectContext);
    const [searchTerm, setSearchTerm] = React.useState('');

    const filteredProjects = projects.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <aside className="w-1/3 px-8 py-16 bg-slate-900 text-slate-50 md:w-72 rounded-r-xl border-r border-slate-800">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-indigo-400">Your Projects</h2>
            <Button onClick={startAddProject}>+ Add Project</Button>

            <input
                type="text"
                placeholder="Search projects..."
                className="w-full mt-6 p-2 rounded-md bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:border-indigo-500"
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <ul className="mt-8">
                {filteredProjects.map((project) => (
                    <li key={project.id}>
                        <button
                            className={`w-full text-left px-2 py-2 rounded-md my-1 transition-all ${project.id === selectedProjectId
                                    ? "bg-slate-800 text-indigo-400 border-l-4 border-indigo-500"
                                    : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                                }`}
                            onClick={() => selectProject(project.id)}
                        >
                            {project.title}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}