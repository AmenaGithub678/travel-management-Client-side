import React from 'react';

const TourPlan = ({ tourPlan }) => {
  if (!tourPlan || tourPlan.length === 0) return null;
    return (
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Your Journey, Our Responsibility
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="a0b40128-6963-4319-aeeb-471e92fa2d74"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#a0b40128-6963-4319-aeeb-471e92fa2d74)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Discover</span>
          </span>{' '}
          Your Day-by-Day Tour Plan
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Start your journey through lush green hills, winding trails, and serene landscapes that will leave you breathless. A perfect start for nature lovers.
        </p>
      </div>

      <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
        {tourPlan.map(({ day, title, details }, idx) => (
          <div
            key={idx}
            className="flex items-center p-4 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110"
          >
            <div className="mr-2">
              <svg
                className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold">
                Day {day}: {title}
              </h3>
              <p className="text-gray-800">{details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
};

export default TourPlan;