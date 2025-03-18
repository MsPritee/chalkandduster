import React from "react";

interface VideoCardProps {
    image: string;
    name: string;
    role: string;
    description: string;
}

const MemberCard: React.FC<VideoCardProps> = ({ image, name, role, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-indigo-600 mb-2">{role}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default MemberCard;