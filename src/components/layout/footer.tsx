export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & About - custom span */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-lg font-semibold text-white">
                RDTech Group
              </span>
            </div>
            <p className="text-gray-400 mb-4 w-[80%] text-sm">
              Uniting three industry leaders — RDTech Security Solutions, AL
              AUSUS AL ARBAA Contracting, and CoreGrid Automation — to deliver
              innovative, reliable, and future-ready solutions across security,
              construction, and smart building technologies.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-3">Utility Pages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Our Companies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Flagship Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <p className="text-sm text-gray-400">8502 Preston Rd.</p>
            <p className="text-sm text-gray-400 mb-2">Abu Dhabi, UAE</p>
            <p className="text-sm text-gray-400">info@rdtechgroup.com</p>
            <p className="text-sm text-gray-400">+971 555-0121</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© RDGroup {new Date().getFullYear()}</p>
          <div className="flex space-x-6 mt-3 sm:mt-0">
            <a href="#" className="hover:text-white">
              Term of service
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
