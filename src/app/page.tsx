'use client';

import { useState } from 'react';
import Link from 'next/link';
import content from './data/content.json';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xovedzlv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              {content.home.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-white">
              {content.home.hero.subtitle}
            </p>
            <p className="text-lg mb-8 text-white">
              {content.home.hero.description}
            </p>
            <div className="space-x-4">
              <Link
                href="/jobs"
                className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                {content.ui.buttons.viewJobs}
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors"
              >
                {content.ui.buttons.contactUs}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {content.home.aboutUs.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                {content.home.aboutUs.content}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{content.ui.headings.ourValues}</h3>
              <ul className="space-y-4">
                {content.home.aboutUs.values.map((value, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {content.services.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.services.servicesList.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{content.ui.headings.getInTouch}</h2>
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {content.ui.messages.thankYou}
                </h3>
                <p className="text-gray-600 mb-6">
                  {content.ui.messages.willGetBack}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  {content.ui.buttons.sendAnotherMessage}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.contact.formFields
                    .filter(field => field.type !== 'textarea')
                    .map((field) => (
                      <div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {field.label}
                          {field.required && <span className="text-red-500 ml-1">*</span>}
                        </label>
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          required={field.required}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={(e) =>
                            setFormData({ ...formData, [field.name]: e.target.value })
                          }
                          className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 text-gray-900"
                          placeholder={`Enter your ${field.label.toLowerCase()}`}
                        />
                      </div>
                    ))}
                </div>
                {content.contact.formFields
                  .filter(field => field.type === 'textarea')
                  .map((field) => (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      <textarea
                        id={field.name}
                        name={field.name}
                        required={field.required}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) =>
                          setFormData({ ...formData, [field.name]: e.target.value })
                        }
                        rows={4}
                        className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 text-gray-900"
                        placeholder={content.ui.placeholders.messageHelp}
                      />
                    </div>
                  ))}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    {content.ui.buttons.sendMessage}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
