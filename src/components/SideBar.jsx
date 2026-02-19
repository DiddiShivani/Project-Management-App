import { useState } from 'react';
import Button from "./Button";

export default function SideBar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProjects = projects.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <aside className="w-1/3 px-8 py-16 bg-slate-900 text-slate-50 md:w-72 rounded-r-xl border-r border-slate-800">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-indigo-400">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>

            <input
                type="text"
                placeholder="Search projects..."
                className="w-full mt-6 p-2 rounded-md bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:border-indigo-500"
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <ul className="mt-8">
                {filteredProjects.map((project) => {
                    let cssClass = "w-full text-left px-2 py-2 rounded-md my-1 transition-colors ";
                    if (project.id === selectedProjectId) {
                        cssClass += "bg-slate-800 text-indigo-400 border-l-4 border-indigo-500";
                    } else {
                        cssClass += "text-slate-400 hover:bg-slate-800 hover:text-slate-200";
                    }

                    return (
                        <li key={project.id}>
                            <button className={cssClass} onClick={() => onSelectProject(project.id)}>
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}