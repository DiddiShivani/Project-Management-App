
import logo from '../assets/logo.png';
import Button from './Button';

export default function NoProjectSelected({onStartAddProject}) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={logo} alt="Project Management App Logo" className='w-16 h-16 object-conatin mx-auto'/>
            <h2 className='text-xl font-bold text-stone-500 my-4'>No project selected</h2>
            <p className='text-stone-400 mb-4'>Select a project or get started with a new one</p>
            <p className='my-8'>
                <Button onClick={onStartAddProject}>Create new project</Button>
            </p>
        </div>
    )
}