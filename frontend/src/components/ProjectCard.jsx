// src/components/ProjectCard.jsx
// ------------------------------
// Displays a single project preview card.
// Emits click event to parent (ProjectGrid).

export default function ProjectCard({ project, onClick }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
      {/* Placeholder image */}
      <div className="h-32 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-500 mb-4">
        Project Image
      </div>

      {/* Project title */}
      <h3 className="font-semibold text-lg">
        {project.title}
      </h3>

      {/* Short description */}
      <p className="text-sm text-neutral-400 mt-1">
        {project.short_desc}
      </p>

      {/* Difficulty */}
      <p className="mt-2 text-sm text-blue-400">
        Difficulty: {project.difficulty}
      </p>

      {/* Action */}
      <button
        onClick={onClick}
        className="mt-4 w-full py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
      >
        WORK ON THIS PROJECT
      </button>
    </div>
  );
}
