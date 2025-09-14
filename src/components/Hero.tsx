import React from 'react';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white" />
      </div>
      
      <div className="container-custom py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Learn Mathematics<br />
              <span className="text-indigo-600">Chalk and Duster</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join our community of learners and master mathematics through engaging video lessons, comprehensive notes, and interactive practice sessions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#latest-videos" className="btn btn-primary flex items-center gap-2">
                <Play className="h-5 w-5" />
                Watch Latest Videos
              </a>
              <a href="/notes" className="btn btn-secondary">
                Browse Notes
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/FJTueT9uYmw"
                title="Latest Videos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}