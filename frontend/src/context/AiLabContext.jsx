import { createContext, useContext, useState } from "react";

const AiLabContext = createContext();

export function AiLabProvider({ children }) {
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);

  // ✅ NEW: cache for generated workspaces
  const [workspaceCache, setWorkspaceCache] = useState({});

  const resetLab = () => {
    setSelectedComponents([]);
    setProjects([]);
    setActiveProject(null);
    setWorkspaceCache({}); // clear cache
  };

  return (
    <AiLabContext.Provider
      value={{
        selectedComponents,
        setSelectedComponents,
        projects,
        setProjects,
        activeProject,
        setActiveProject,
        workspaceCache,
        setWorkspaceCache,
        resetLab,
      }}
    >
      {children}
    </AiLabContext.Provider>
  );
}

export function useAiLab() {
  return useContext(AiLabContext);
}
