// src/components/ProjectGrid.jsx
// ------------------------------
// Displays AI-suggested projects in a grid.
// Emits selected project to parent (AI.jsx).

export default function ProjectGrid({ projects, onSelect }) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">
        🛠 Suggested Projects
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.project_id}
            className="rounded-xl bg-neutral-900 border border-neutral-800 p-5 hover:scale-[1.02] transition"
          >
            <h3 className="text-xl font-bold">
              {project.title}
            </h3>

            <p className="text-neutral-400 mt-2">
              {project.short_desc}
            </p>

            <p className="mt-3 text-sm text-blue-400">
              Difficulty: {project.difficulty}
            </p>

            <button
              className="mt-4 w-full rounded-lg bg-blue-600 py-2 hover:bg-blue-500"
              onClick={() => onSelect(project)}
            >
              WORK ON THIS PROJECT
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
