import React from 'react';

const Advertise: React.FC = () => {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Advertise with Us
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Reach a wide audience of designers and developers by advertising on our platform.
          We offer various advertising options to suit your needs.
        </p>
      </div>
      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900">Why Advertise with Us?</h2>
        <ul className="mt-4 space-y-4 text-lg text-gray-600">
          <li>Targeted audience of designers and developers</li>
          <li>High visibility and engagement</li>
          <li>Flexible advertising options</li>
          <li>Competitive pricing</li>
        </ul>
        <h2 className="mt-12 text-2xl font-semibold text-gray-900">Get in Touch</h2>
        <p className="mt-4 text-lg text-gray-600">
          If you are interested in advertising with us, please contact us at{' '}
          <a href="mailto:advertise@coderesources.com" className="text-indigo-600 hover:text-indigo-500">
            advertise@coderesources.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default Advertise;