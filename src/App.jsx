import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

import { useState } from 'react';
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectsState, setProjectdState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectdState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text:text,
        projectId:prevState.selectedProjectId,
        id:taskId,
      }
      return {
        ...prevState,
        tasks: [newTask,...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(taskId) {
    setProjectdState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== taskId)
      }
    })
  }


  function handleSelectProject(id) {
    setProjectdState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }

  function handleStartProject() {
    setProjectdState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  function handleCancelAddProject() {
    setProjectdState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }


  function handleAddProject(projectData) {
    setProjectdState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random().toString()
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleDeleteProject() {
    setProjectdState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
      }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = <SelectedProject
    project={selectedProject}
    onDelete={handleDeleteProject}
    onAddTask={handleAddTask}
    onDeleteTask = {handleDeleteTask}
    tasks = {projectsState.tasks} />

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartProject} projects={projectsState.projects} onSelectProject={handleSelectProject}
      selectedProjectId={projectsState.selectedProjectId} />
      {content}
    </main>
  );
}

export default App;