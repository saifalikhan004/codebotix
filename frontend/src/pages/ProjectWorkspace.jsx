import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProjectDetails, tutorChat } from "../../services/api";

// ✅ AI Lab Context
import { useAiLab } from "../context/AiLabContext";

export default function ProjectWorkspace() {
  const navigate = useNavigate();

  // ✅ Session data from Context
  const {
    activeProject,
    selectedComponents,
    workspaceCache,
    setWorkspaceCache,
    resetLab,
  } = useAiLab();

  // Safety check (direct access / refresh)
  if (!activeProject) {
    navigate("/ai");
    return null;
  }

  const project = activeProject;

  const [details, setDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(true);

  // Chat state (not cached for now)
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I’m your Codebotix AI Mentor 🤖. Ask me anything about this project!",
    },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  // 🔥 CACHE-AWARE PROJECT LOADING
  useEffect(() => {
    async function loadDetails() {
      const projectId = project.project_id;

      // ✅ 1. Check cache first (NO TOKEN USAGE)
      if (workspaceCache[projectId]) {
        setDetails(workspaceCache[projectId]);
        setLoadingDetails(false);
        return;
      }

      // ❌ 2. Generate only if not cached
      try {
        const data = await getProjectDetails(project, selectedComponents);

        // ✅ Store in cache
        setWorkspaceCache((prev) => ({
          ...prev,
          [projectId]: data,
        }));

        setDetails(data);
      } catch (err) {
        console.error("Failed to load project details", err);
      } finally {
        setLoadingDetails(false);
      }
    }

    loadDetails();
  }, [
    project,
    selectedComponents,
    workspaceCache,
    setWorkspaceCache,
  ]);

  // AI Tutor
  const handleSendMessage = async () => {
    if (!input.trim() || sending) return;

    const userMessage = input;
    setInput("");
    setSending(true);

    setMessages((prev) => [
      ...prev,
      { role: "user", content: userMessage },
    ]);

    try {
      const res = await tutorChat(
        {
          project_id: project.project_id,
          title: project.title,
          difficulty: project.difficulty,
          components: selectedComponents,
        },
        userMessage
      );

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: res.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I had trouble answering that. Please try again.",
        },
      ]);
    } finally {
      setSending(false);
    }
  };

  const handleResetLab = () => {
    resetLab();
    navigate("/ai");
  };

  if (loadingDetails) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center pt-28">
        Loading project workspace...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-28 px-6 pb-10">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto mb-8 flex items-start justify-between gap-4">
        <div>
          {/* Back button */}
          <button
            onClick={() => navigate("/ai")}
            className="text-sm text-blue-400 hover:underline mb-2"
          >
            ← Back to AI Lab
          </button>

          <h1 className="text-3xl md:text-4xl font-bold">
            {project.title}
          </h1>
          <p className="text-neutral-400 mt-2">
            Difficulty: {project.difficulty}
          </p>
        </div>

        {/* Reset Lab */}
        <button
          onClick={handleResetLab}
          className="h-fit px-4 py-2 text-sm rounded-lg border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition"
        >
          Reset Lab
        </button>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* OVERVIEW */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">
            Project Overview
          </h2>
          <p className="text-neutral-300">
            {details.overview}
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">
            How It Works
          </h2>
          <p className="text-neutral-300">
            {details.how_it_works}
          </p>
        </section>

        {/* COMPONENTS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Main Components
            </h3>
            <ul className="list-disc ml-5 text-neutral-300 space-y-1">
              {details.main_components.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Additional Components Required
            </h3>
            <ul className="list-disc ml-5 text-neutral-300 space-y-1">
              {details.additional_components.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* AI MENTOR */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            AI Mentor
          </h2>

          <div className="h-64 overflow-y-auto bg-neutral-950 border border-neutral-800 rounded-lg p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-4 py-2 rounded-xl text-sm ${
                  msg.role === "user"
                    ? "ml-auto bg-blue-600"
                    : "mr-auto bg-neutral-800"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask the AI mentor..."
              className="flex-1 bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              onClick={handleSendMessage}
              disabled={sending}
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 disabled:opacity-50"
            >
              {sending ? "Thinking..." : "Send"}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
