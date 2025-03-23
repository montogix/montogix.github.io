'use client';

import { useState } from 'react';
import content from '../data/content.json';

export default function JobListings() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {content.jobListings.title}
          </h1>
          <p className="text-xl text-gray-600">
            {content.jobListings.description}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Categories
            </button>
            {content.jobListings.categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 gap-6">
          {content.jobListings.featuredJobs
            .filter(
              (job) =>
                selectedCategory === 'all' ||
                job.title.includes(selectedCategory)
            )
            .map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </h2>
                      <p className="text-gray-600 mb-2">{job.company}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <svg
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {job.location}
                        <span className="mx-2">•</span>
                        <svg
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {job.type}
                      </div>
                    </div>
                    <a
                      href="/contact"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      {content.ui.buttons.applyNow}
                      <svg
                        className="ml-2 -mr-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {content.ui.headings.keyResponsibilities}
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {content.jobDetails.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {content.ui.headings.requirements}
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {content.jobDetails.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-4">
            {content.ui.messages.cantFind}
          </p>
          <a
            href="/contact"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-900 transition-colors"
          >
            {content.ui.buttons.submitResume}
          </a>
        </div>
      </div>
    </div>
  );
} 