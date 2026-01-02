import { useState } from "react";
import { COMPONENT_CATALOG } from "../../data/componentCatalog";

export default function ComponentSelector({
  selectedComponents,
  setSelectedComponents,
}) {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleComponent = (component) => {
    setSelectedComponents((prev) =>
      prev.includes(component)
        ? prev.filter((c) => c !== component)
        : [...prev, component]
    );
  };

  const toggleCategory = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="w-full">
      {/* CATEGORY GRID (fixed height, scrolls internally) */}
      <div className="w-full h-[440px] md:h-[360px] lg:h-[300px] overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {Object.entries(COMPONENT_CATALOG).map(([category, data]) => (
          <div
            key={category}
              className="w-full max-w-md mx-auto rounded-2xl border border-neutral-800 bg-neutral-900 shadow-lg"
          >
            {/* DROPDOWN HEADER */}
            <button
              onClick={() => toggleCategory(category)}
                className="w-full flex items-center px-5 py-4 text-lg font-semibold text-neutral-200 hover:bg-neutral-800 rounded-2xl"
            >
              <span className="flex-1 text-center">{category}</span>
              <span className="text-sm text-neutral-400">
                {openCategory === category ? "▲" : "▼"}
              </span>
            </button>

              {/* DROPDOWN CONTENT (show 3 items, scroll if more) */}
              {openCategory === category && (
                <div
                  className={
                    "px-5 pb-5 flex flex-col items-stretch gap-3 " +
                    (data.items.length > 3 ? "max-h-40 overflow-y-auto pr-1" : "")
                  }
                >
                {data.items.map((component) => (
                  <button
                    key={component}
                    onClick={() => toggleComponent(component)}
                    className={`px-4 py-2 rounded-lg border text-sm transition ${
                      selectedComponents.includes(component)
                        ? "bg-green-600 border-green-500 text-white"
                        : "bg-neutral-800 border-neutral-700 text-neutral-200 hover:bg-neutral-700"
                    }`}
                  >
                    {component}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
