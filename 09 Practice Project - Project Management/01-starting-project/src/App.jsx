import { useState } from "react";
import NewProject from "./assets/components/NewProject.jsx";
import NoProjectSelected from "./assets/components/NoProjectSelected.jsx";
import SideBar from "./assets/components/SideBar.jsx";
import SelectedProject from "./assets/components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectState(prevStateObj => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevStateObj.selectedProjectId,
        id: taskId
      }
      return {
        ...prevStateObj,
        tasks: [...prevStateObj.tasks, newTask]
      }
    });

  }

  function handleDeleteTask(id) {
    setProjectState(prevStateObj => {
      return {
        ...prevStateObj,
        tasks: prevStateObj.tasks.filter(task => task.id !== id)
      }
    })

  }

  function addProject() {
    setProjectState(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProjectId: null
      }
    })
  }
  function handleCancel() {
    setProjectState(prevStaeObj => {
      return {
        ...prevStaeObj,
        selectedProjectId: undefined
      }
    });
  }

  function handleAddProject(projectData) {
    setProjectState(prevStateObj => {
      const newProjectData = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevStateObj,
        selectedProjectId: undefined,
        projects: [...prevStateObj.projects, newProjectData]
      }
    });
  }

  function handleSelectProjectId(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }

    })
  }

  function handleDeleteProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        )
      }
    })
  }
  const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectId);
  const selectedTask = projectState.tasks.filter((task) => task.projectId === projectState.selectedProjectId)

  let content = (
    <SelectedProject
      projectProps={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={selectedTask} />
  );

  if (projectState.selectedProjectId === null) {
    content = <NewProject onCancel={handleCancel} onAddProject={handleAddProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAdd={addProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAdd={addProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProjectId}
        selectedProjectId={projectState.selectedProjectId} />
      {content}
    </main>
  );
}

export default App;
