import React from 'react';

export function About() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Code Tutorials
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Code Resources is a curated collection of the best resources for designers and developers.
              Our mission is to help you find high-quality tutorials, tools, and learning materials
              to enhance your skills and stay up-to-date with the latest technologies.
            </p>
            <div className="mt-12 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900">For Developers</h3>
                <p className="mt-2 text-base text-gray-500">
                  Find tutorials and guides for popular frameworks, programming languages, and development tools.
                  Stay updated with best practices and improve your coding skills.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">For Designers</h3>
                <p className="mt-2 text-base text-gray-500">
                  Discover resources for UI/UX design, design systems, and creative tools.
                  Learn about design principles and stay inspired with the latest design trends.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Curated Content</h3>
                <p className="mt-2 text-base text-gray-500">
                  Every resource is carefully selected and reviewed to ensure it provides value
                  to our community. We focus on quality over quantity.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Regular Updates</h3>
                <p className="mt-2 text-base text-gray-500">
                  We continuously add new resources and update existing ones to keep the content
                  fresh and relevant to current industry standards.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Community Driven</h3>
                <p className="mt-2 text-base text-gray-500">
                  Our platform grows with input from the community. We welcome suggestions
                  and feedback to make the resource collection more valuable for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}