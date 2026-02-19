import React from 'react';
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import ProjectContextProvider, { ProjectContext } from "./store/project-context";

function AppContent() {
  const { selectedProjectId } = React.useContext(ProjectContext);

  let content = <SelectedProject />;

  if (selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  } else if (selectedProjectId === null) {
    content = <NewProject />;
  }

  return (
    <main className="h-screen flex bg-slate-950 text-slate-200 overflow-hidden">
      <SideBar />
      <div className="flex-grow h-full overflow-y-auto bg-slate-950">
        {content}
      </div>
    </main>
  );
}

export default function App() {
  return (
    <ProjectContextProvider>
      <AppContent />
    </ProjectContextProvider>
  );
}