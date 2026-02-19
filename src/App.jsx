import { useState } from 'react';
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectdState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectdState(prevState => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: Math.random(),
        isCompleted: false
      };
      return { ...prevState, tasks: [newTask, ...prevState.tasks] };
    });
  }

  function handleToggleTask(taskId) {
    setProjectdState(prevState => ({
      ...prevState,
      tasks: prevState.tasks.map(task =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    }));
  }

  function handleDeleteTask(taskId) {
    setProjectdState(prevState => ({
      ...prevState,
      tasks: prevState.tasks.filter(task => task.id !== taskId)
    }));
  }

  function handleSelectProject(id) {
    setProjectdState(prevState => ({ ...prevState, selectedProjectId: id }));
  }

  function handleStartProject() {
    setProjectdState(prevState => ({ ...prevState, selectedProjectId: null }));
  }

  function handleCancelAddProject() {
    setProjectdState(prevState => ({ ...prevState, selectedProjectId: undefined }));
  }

  function handleAddProject(projectData) {
    setProjectdState((prevState) => {
      const newProject = { ...projectData, id: Math.random().toString() };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  function handleDeleteProject() {
    setProjectdState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(p => p.id !== prevState.selectedProjectId),
      tasks: prevState.tasks.filter(t => t.projectId !== prevState.selectedProjectId)
    }));
  }

  const selectedProject = projectsState.projects.find(p => p.id === projectsState.selectedProjectId);
  const projectTasks = projectsState.tasks.filter(t => t.projectId === projectsState.selectedProjectId);

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      onToggleTask={handleToggleTask}
      tasks={projectTasks}
    />
  );

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  }

  return (
    <main className="h-screen flex bg-slate-950 text-slate-200 overflow-hidden">
      <SideBar
        onStartAddProject={handleStartProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      <div className="flex-grow h-full overflow-y-auto bg-slate-950">
        {content}
      </div>
    </main>
  );
}

export default App;