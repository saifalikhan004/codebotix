import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import ComponentSelector from "../components/ComponentSelector";
import ProjectGrid from "../components/ProjectGrid";
import { searchProjects } from "../../services/api";
import { useAiLab } from "../context/AiLabContext";
import Aurora from '../components/Aurora';

export default function AI() {
  const navigate = useNavigate();

  //session state
  const {
    selectedComponents,
    setSelectedComponents,
    projects,
    setProjects,
    setActiveProject,
  } = useAiLab();

  // ui state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await searchProjects(selectedComponents, "Beginner");
      setProjects(data); // ✅ persists in session
    } catch (err) {
      console.error(err);
      setError("AI search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Store project in session instead of navigation state
  const handleSelectProject = (project) => {
    setActiveProject(project);
    navigate("/workspace");
  };

  return (
    <div className="relative min-h-screen bg-neutral-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#00ff87", "#60efff", "#0061ff"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="relative z-10 pt-24">
  {/* Transparent Navbar */}
  <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
    <div className="max-w-7xl mx-auto py-3 px-6">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-white tracking-wide"
        >
          CodeBotix
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {[
            { title: "Home", to: "/" },
            { title: "About", to: "/about" },
            { title: "Blogs", to: "/blogs" },
          ].map((link) => (
            <NavLink
              key={link.title}
              to={link.to}
              className="relative text-white/90 hover:text-white transition-all duration-300 group"
            >
              {link.title}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </div>

        {/* AI Lab Button */}
        <div className="hidden lg:flex">
          <NavLink
            to="/ai"
            className="bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-white/20 transition"
          >
            AI Lab
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white"
            aria-label="Open menu"
          >
            <span className="block w-7 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-7 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-7 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>
    </div>
  </nav>


      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-neutral-900/80 backdrop-blur-sm flex flex-col items-center justify-center lg:hidden">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-7 right-6 text-white text-2xl"
            aria-label="Close menu"
          >
            ×
          </button>
          <nav className="flex flex-col items-center gap-8 text-center">
            {[
              { title: "Home", to: "/" },
              { title: "About", to: "/about" },
              { title: "Blogs", to: "/blogs" },
            ].map((link) => (
              <NavLink
                key={link.title}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-medium text-white"
              >
                {link.title}
              </NavLink>
            ))}
            <NavLink
              to="/ai"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 px-6 py-3 rounded-lg font-semibold text-white bg-brand-green"
            >
              AI Lab
            </NavLink>
          </nav>
        </div>
      )}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          🤖 CodeBotix AI Lab
        </h1>
        <p className="text-neutral-300 mb-8">
          Select components below to get AI-generated project ideas.
        </p>

        {/* Component selector */}
        <div className="mt-6">
          <ComponentSelector
            selectedComponents={selectedComponents}
            setSelectedComponents={setSelectedComponents}
          />
        </div>

        {/* Selected components chips */}
        {selectedComponents.length > 0 && (
          <div className="mt-2">
            <h3 className="text-sm font-semibold text-neutral-300 mb-2">
              Selected Components
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {selectedComponents.map((component) => (
                <span
                  key={component}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-sm md:text-base shadow-sm"
                >
                  {component}
                  <button
                    onClick={() =>
                      setSelectedComponents((prev) =>
                        prev.filter((c) => c !== component)
                      )
                    }
                    className="text-white hover:text-neutral-200 leading-none"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Search button */}
        <div className="mt-5">
          <button
            onClick={handleSearch}
            disabled={selectedComponents.length === 0 || loading}
            className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 mx-auto block"
          >
            {loading ? "Searching..." : "Search Projects"}
          </button>
        </div>

        {error && <p className="mt-4 text-red-400">{error}</p>}

        {/* Project results */}
        <div className="mt-10">
          <ProjectGrid
            projects={projects}
            onSelect={handleSelectProject}
          />
        </div>
      </div>
      </div>
    </div>
  );
}
