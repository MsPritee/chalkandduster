import React from 'react';
import { Youtube, Instagram, Twitter } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
          {/* Contact Information */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-xl shadow-lg p-8 flex-grow">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              

              <div className="space-y-6">
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@chalkandduster_kbb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 gap-4 text-gray-600 hover:text-red-600 transition-all"
                >
                  <div className="p-3 bg-red-100 rounded-lg">
                    <Youtube className="h-6 w-6 text-red-600" />
                  </div>
                  <span className="font-semibold">YouTube</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/chalkandduster_kbb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 gap-4 text-gray-600 hover:text-pink-500 transition-all"
                >
                  <div className="p-3 bg-pink-100 rounded-lg">
                    <Instagram className="h-6 w-6 text-pink-500" />
                  </div>
                  <span className="font-semibold">Instagram</span>
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com/your-twitter-handle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 gap-4 text-gray-600 hover:text-blue-500 transition-all"
                >
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Twitter className="h-6 w-6 text-blue-500" />
                  </div>
                  <span className="font-semibold">Twitter</span>
                </a>
              </div>
            </div>
          </div>

              

           

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}