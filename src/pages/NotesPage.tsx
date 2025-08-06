import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";
import topicDetails from "../data/topicDetails";

const categories = [
  "All",
  ...Array.from(new Set(Object.values(topicDetails).map((t) => t.category)))
];

export default function NotesPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Mathematics Notes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive study materials organized by topic. Select a category to get started.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(topicDetails)
            .filter(([, t]) => selectedCategory === "All" || t.category === selectedCategory)
            .map(([key, t]) => {
              const Icon = t.icon;
              return (
                <div
                  key={key}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => navigate(`/notes/${key}`)}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-50 rounded-lg">
                      <Icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t.title}</h3>
                      <p className="text-gray-600 mb-4">{t.description}</p>
                      <span className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Start Learning
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
