import content from '../data/content.json';

export default function Resources() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {content.resources.title}
          </h1>
          <p className="text-xl text-gray-600">
            {content.resources.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.resources.categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.title}
                </h2>
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="flex-shrink-0 pt-1">
                        <svg
                          className="h-5 w-5 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-gray-900">
                          {item}
                        </h3>
                        <p className="mt-1 text-gray-600">
                          Download our comprehensive guide on {item.toLowerCase()}.
                        </p>
                        <button className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                          Download PDF
                          <svg
                            className="ml-1 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 rounded-lg shadow-lg p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Industry Insights
            </h2>
            <p className="text-white opacity-90 mb-6">
              Subscribe to our newsletter to receive the latest career tips and
              industry news.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md text-gray-900 placeholder-gray-500 bg-white"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 