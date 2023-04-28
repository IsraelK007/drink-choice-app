import React from 'react'

function Footer() {
  return (
      <footer className="bg-gray-900 text-gray-400">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-wrap">
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  <h3 className="text-white font-bold mb-2">About Us</h3>
                  <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel ante a mauris faucibus aliquam.</p>
              </div>
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  <h3 className="text-white font-bold mb-2">Links</h3>
                  <ul className="list-none">
                      <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                      <li><a href="/" className="text-gray-400 hover:text-white">About</a></li>
                      <li><a href="/" className="text-gray-400 hover:text-white">Services</a></li>
                      <li><a href="/" className="text-gray-400 hover:text-white">Contact</a></li>
                  </ul>
              </div>
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  <h3 className="text-white font-bold mb-2">Contact Us</h3>
                  <ul className="list-none">
                      <li><a href="/" className="text-gray-400 hover:text-white">123 Main St</a></li>
                      <li><a href="/" className="text-gray-400 hover:text-white">Johannesburg, South Africa</a></li>
                      <li><a href="/" className="text-gray-400 hover:text-white">+27 (0) 71 886 0293</a></li>
                      <li><a href="/" className="text-gray-400 hover:text-white">claire@merlynn.co.za</a></li>
                  </ul>
              </div>
              <div className="w-full md:w-1/4">
                  <h3 className="text-white font-bold mb-2">Follow Us</h3>
                  <ul className="list-none">
                      <li><a href="https://www.linkedin.com/in/claire-de-agrela-a1525065/?originalSubdomain=za" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i> LinkedIn</a></li>
                      <li><a href="/" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i> Twitter</a></li>
                      <li><a href="/" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i> Instagram</a></li>
                  </ul>
              </div>
          </div>
          <div className="bg-gray-800 py-4">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <p className="text-gray-400 text-sm">&copy; 2023 My Company. All rights reserved.</p>
              </div>
          </div>
      </footer>

  )
}

export default Footer