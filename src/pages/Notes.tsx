import React, { useState } from "react";
import {
  BookOpen,
  Calculator,
  FunctionSquare as Functions,
  PieChart,
} from "lucide-react";
import { Link } from "react-router-dom";

const topics = [
  {
    category: "Algebra",
    topics: [
      { title: "Linear Equations", icon: Functions },
      { title: "Quadratic Functions", icon: Functions },
      { title: "Polynomials", icon: Calculator },
    ],
  },
  {
    category: "Calculus",
    topics: [
      { title: "Limits", icon: Functions },
      { title: "Derivatives", icon: Calculator },
      { title: "Integrals", icon: Functions },
    ],
  },
  {
    category: "Statistics",
    topics: [
      { title: "Probability", icon: PieChart },
      { title: "Data Analysis", icon: PieChart },
      { title: "Regression", icon: Calculator },
    ],
  },
];

export default function Notes() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Mathematics Notes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive study materials organized by topic. Select a category
            to get started.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-6 py-2 rounded-full ${
              selectedCategory === "all"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            All Topics
          </button>
          {topics.map((category) => (
            <button
              key={category.category}
              onClick={() => setSelectedCategory(category.category)}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category.category
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((category) =>
            selectedCategory === "all" ||
            selectedCategory === category.category ? (
              <React.Fragment key={category.category}>
                {category.topics.map((topic, index) => {
                  const Icon = topic.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-indigo-50 rounded-lg">
                          <Icon className="h-6 w-6 text-indigo-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            {topic.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            Comprehensive notes and practice problems for{" "}
                            {topic.title.toLowerCase()}.
                          </p>
                          <Link
                            to={`/notes/${topic.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-2"
                          >
                            <BookOpen className="h-4 w-4" />
                            Start Learning
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
