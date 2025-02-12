import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="text-lg font-bold text-gray-900">
              Code Resources
            </Link>
            <p className="text-gray-500 text-sm">
              A curated collection of the best resources for designers and developers.
              Updated regularly with new content.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/?category=design" className="text-sm text-gray-500 hover:text-gray-900">
                      Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/?category=development" className="text-sm text-gray-500 hover:text-gray-900">
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/?category=ui-ux" className="text-sm text-gray-500 hover:text-gray-900">
                      UI/UX
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/about" className="text-sm text-gray-500 hover:text-gray-900">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Code Resources. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}