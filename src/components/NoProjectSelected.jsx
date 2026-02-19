import React from 'react';
import { ProjectContext } from '../store/project-context';
import logo from '../assets/logo.png';
import Button from './Button';

export default function NoProjectSelected() {
    const { startAddProject } = React.useContext(ProjectContext);

    return (
        <div className="mt-24 text-center w-2/3 mx-auto">
            <img
                src={logo}
                alt="Project Management App Logo"
                className='w-20 h-20 object-contain mx-auto drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]'
            />
            <h2 className='text-2xl font-bold text-slate-200 my-6'>No Project Selected</h2>
            <p className='text-slate-400 mb-8 text-lg'>Select a project from the sidebar or get started with a fresh one.</p>
            <div className='mt-8'>
                <Button onClick={startAddProject}>Create New Project</Button>
            </div>
        </div>
    );
}