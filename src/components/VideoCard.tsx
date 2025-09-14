import React from 'react';

interface VideoCardProps {
  title: string;
  description: string;
  videoId: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, description, videoId }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* YouTube Embed */}
      <div className="aspect-video bg-gray-100">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allowFullScreen
        ></iframe>
      </div>

      {/* Video Details */}
      <div className="p-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default VideoCard;