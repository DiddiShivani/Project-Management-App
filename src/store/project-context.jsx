import React from 'react';

export const ProjectContext = React.createContext({
    projects: [],
    tasks: [],
    selectedProjectId: undefined,
    addProject: () => { },
    deleteProject: () => { },
    selectProject: () => { },
    startAddProject: () => { },
    cancelAddProject: () => { },
    addTask: () => { },
    deleteTask: () => { },
    toggleTask: () => { },
});

export default function ProjectContextProvider({ children }) {
    const [projectsState, setProjectsState] = React.useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
    });

    function handleAddTask(text) {
        setProjectsState(prevState => ({
            ...prevState,
            tasks: [{ text, projectId: prevState.selectedProjectId, id: Math.random(), isCompleted: false }, ...prevState.tasks]
        }));
    }

    function handleToggleTask(taskId) {
        setProjectsState(prevState => ({
            ...prevState,
            tasks: prevState.tasks.map(task => task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task)
        }));
    }

    function handleDeleteTask(taskId) {
        setProjectsState(prevState => ({
            ...prevState,
            tasks: prevState.tasks.filter(task => task.id !== taskId)
        }));
    }

    function handleSelectProject(id) {
        setProjectsState(prevState => ({ ...prevState, selectedProjectId: id }));
    }

    function handleStartProject() {
        setProjectsState(prevState => ({ ...prevState, selectedProjectId: null }));
    }

    function handleCancelAddProject() {
        setProjectsState(prevState => ({ ...prevState, selectedProjectId: undefined }));
    }

    function handleAddProject(projectData) {
        setProjectsState(prevState => ({
            ...prevState,
            selectedProjectId: undefined,
            projects: [...prevState.projects, { ...projectData, id: Math.random().toString() }]
        }));
    }

    function handleDeleteProject() {
        setProjectsState(prevState => ({
            ...prevState,
            selectedProjectId: undefined,
            projects: prevState.projects.filter(p => p.id !== prevState.selectedProjectId),
            tasks: prevState.tasks.filter(t => t.projectId !== prevState.selectedProjectId)
        }));
    }

    const ctxValue = {
        projects: projectsState.projects,
        tasks: projectsState.tasks,
        selectedProjectId: projectsState.selectedProjectId,
        addProject: handleAddProject,
        deleteProject: handleDeleteProject,
        selectProject: handleSelectProject,
        startAddProject: handleStartProject,
        cancelAddProject: handleCancelAddProject,
        addTask: handleAddTask,
        deleteTask: handleDeleteTask,
        toggleTask: handleToggleTask,
    };

    return (
        <ProjectContext.Provider value={ctxValue}>
            {children}
        </ProjectContext.Provider>
    );
}