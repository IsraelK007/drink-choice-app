import React from 'react'

function Header() {
  return (
      <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                  <div className="flex-shrink-0">
                      <a href="/" className="text-white font-bold">Tom API</a>
                  </div>
                  <div className="hidden md:block">
                      <div className="ml-10 flex items-center space-x-4">
                          <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                          <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                          <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                      </div>
                  </div>
              </div>
          </div>

          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          <div className="md:hidden" x-show="isOpen">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <a href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                  <a href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
                  <a href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
              </div>
          </div>
      </nav>

  )
}

export default Header