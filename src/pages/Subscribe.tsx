import React from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for getting started",
    features: [
      "Access to all free video content",
      "Basic math notes",
      "Community forum access",
      "Email support"
    ]
  },
  {
    name: "Premium",
    price: "$9.99/month",
    description: "Most popular choice",
    features: [
      "All Basic features",
      "Premium video content",
      "Downloadable study materials",
      "Practice problems with solutions",
      "Priority email support",
      "Monthly live Q&A sessions"
    ],
    highlighted: true
  },
  {
    name: "Pro",
    price: "$19.99/month",
    description: "For serious learners",
    features: [
      "All Premium features",
      "1-on-1 tutoring sessions",
      "Personalized study plan",
      "Advanced practice problems",
      "Progress tracking",
      "Direct instructor access"
    ]
  }
];

export default function Subscribe() {
  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect subscription plan to accelerate your mathematics learning journey.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.highlighted ? 'ring-2 ring-indigo-600 scale-105' : ''
              }`}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="flex items-center gap-1 text-indigo-600">
                      <Star className="h-5 w-5 fill-current" />
                      Popular
                    </span>
                  )}
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Free" && (
                    <span className="text-gray-600 ml-2">per month</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium ${
                    plan.highlighted
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
              <div className="p-8 bg-gray-50">
                <h4 className="font-semibold mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-indigo-600 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period."
              },
              {
                question: "Is there a student discount?",
                answer: "Yes! Students with a valid .edu email address can get 20% off any paid subscription plan."
              },
              {
                question: "Can I switch between plans?",
                answer: "Absolutely! You can upgrade or downgrade your plan at any time. The change will take effect on your next billing cycle."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}