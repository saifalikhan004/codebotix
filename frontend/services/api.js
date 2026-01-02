const BASE_URL = "http://localhost:8000/api/projects";

export async function searchProjects(components, studentLevel = "beginner") {
  const res = await fetch(`${BASE_URL}/search`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      components,
      student_level: studentLevel,
    }),
  });

  if (!res.ok) throw new Error("Search failed");
  return res.json();
}

export async function getProjectDetails(project, selectedComponents) {
  const res = await fetch(`${BASE_URL}/details`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      project_id: project.project_id,
      title: project.title,
      difficulty: project.difficulty,
      selected_components: selectedComponents,
    }),
  });

  if (!res.ok) throw new Error("Details failed");
  return res.json();
}

export async function tutorChat(projectContext, message) {
  const res = await fetch(`${BASE_URL}/tutor`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      project_context: projectContext,
      student_message: message,
    }),
  });

  if (!res.ok) throw new Error("Tutor failed");
  return res.json();
}
