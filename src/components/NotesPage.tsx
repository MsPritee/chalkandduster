import React from "react";
import { useParams } from "react-router-dom";
import { BookOpen, Calculator, FunctionSquare as Functions, PieChart } from "lucide-react";

const topicDetails = {
  "linear-equations": {
    title: "Linear Equations",
    description: "Learn how to solve linear equations and apply them to real-world problems.",
    icon: Functions,
    content: "Linear equations are equations of the form Ax + B = 0..."
  },
  "quadratic-functions": {
    title: "Quadratic Functions",
    description: "Understand quadratic equations, their graphs, and solutions.",
    icon: Functions,
    content: "A quadratic function is a function that can be described by an equation of the form ax^2 + bx + c = 0..."
  },
  "polynomials": {
    title: "Polynomials",
    description: "Explore polynomial functions, their properties, and factorization techniques.",
    icon: Calculator,
    content: "A polynomial is a mathematical expression consisting of variables and coefficients..."
  },
  "limits": {
    title: "Limits",
    description: "Grasp the concept of limits in calculus and their applications.",
    icon: Functions,
    content: "Limits describe the behavior of a function as it approaches a certain value..."
  },
  "derivatives": {
    title: "Derivatives",
    description: "Master differentiation and its applications in calculus.",
    icon: Calculator,
    content: "The derivative measures how a function changes as its input changes..."
  },
  "integrals": {
    title: "Integrals",
    description: "Learn about integrals and their significance in calculus.",
    icon: Functions,
    content: "An integral represents the area under a curve and is a key concept in calculus..."
  },
  "probability": {
    title: "Probability",
    description: "Study probability theories and their real-world applications.",
    icon: PieChart,
    content: "Probability is the measure of the likelihood of an event occurring..."
  },
  "data-analysis": {
    title: "Data Analysis",
    description: "Understand data analysis techniques and statistical methods.",
    icon: PieChart,
    content: "Data analysis involves inspecting, cleaning, transforming, and modeling data..."
  },
  "regression": {
    title: "Regression",
    description: "Learn about regression models and their role in statistics.",
    icon: Calculator,
    content: "Regression analysis helps predict the relationship between variables..."
  }
};

export default function NotesPage() {
  const { topic } = useParams();
  const topicData = topicDetails[topic];

  if (!topicData) {
    return <div className="text-center text-xl text-red-500">Topic Not Found</div>;
  }

  const Icon = topicData.icon;

  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-indigo-50 rounded-lg">
              <Icon className="h-8 w-8 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold">{topicData.title}</h1>
          </div>
          <p className="text-gray-600 text-lg">{topicData.description}</p>
          <hr className="my-6" />
          <p className="text-gray-700 text-base">{topicData.content}</p>
        </div>
      </div>
    </div>
  );
}
