import content from '../data/content.json';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {content.services.title}
          </h1>
          <p className="text-xl text-gray-600">
            {content.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.services.servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
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
                    Tailored solutions for your needs
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
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
                    Industry expertise
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
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
                    Dedicated support
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h3>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
} 