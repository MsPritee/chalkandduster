import React from 'react';
import { Users, Target, History } from 'lucide-react';
import kbb from '../Assets/Images/kbb.jpg';
import pbb from '../Assets/Images/pbb1.jpg';
import Sachin from '../Assets/Images/sachin.png';
import MemberCard from '../components/MemberCard';




export default function About() {

  const teamMembers = [
    {
      name: "Prof. Komal Badgujar",
      role: "Lead Mathematics Instructor",
      image: kbb,
      description: "NET, SET, GATE qualified in Mathematics with 5+ years of teaching experience"
    },
    {
      name: "Prof. Pritee Badgujar",
      role: "Content Director",
      image: pbb,
      description: "Specializes in making complex topics accessible to all"
    },
    {
      name: "Dr. Sachin",
      role: "Educational Coordinator",
      image: Sachin,
      description: "Expert in curriculum development and student engagement"
    }
  ];

  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Chalk and Duster</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about making mathematics accessible, understandable, and enjoyable for students worldwide.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="mb-4">
              <Target className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To break down complex mathematical concepts into digestible, engaging content that empowers students to excel.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="mb-4">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Community</h3>
            <p className="text-gray-600">
              Join thousands of students who have transformed their understanding of mathematics through our platform.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="mb-4">
              <History className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Journey</h3>
            <p className="text-gray-600">
              Started in 2023, we've helped countless students overcome their math challenges and achieve academic success.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
              <MemberCard
                key={index}
                image={member.image}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}