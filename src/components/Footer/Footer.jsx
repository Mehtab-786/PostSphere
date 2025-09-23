import { Link } from "react-router-dom";
import { Logo } from "../index";

function Footer() {
  return (
    <footer className="mt-auto w-full bg-gradient-to-br from-slate-50 to-slate-100 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Logo and Description Section */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <Logo />
            </div>

            <p className="text-slate-600 text-sm max-w-md leading-relaxed">
              Building exceptional digital experiences with modern technology
              and innovative design solutions.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://x.com/soul_alone_0"
                target="_blank"
                className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-lg border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 shadow-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/mehtabhussain786/"
                target="_blank"
                className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-lg border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 shadow-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="https://github.com/Mehtab-786"
                target="_blank"
                className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-lg border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 shadow-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                   <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
  3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
  0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.745.084-.729.084-.729 
  1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 
  1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.931 
  0-1.31.469-2.381 1.236-3.221-.123-.303-.535-1.523.117-3.176 
  0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404 
  11.52 11.52 0 0 1 3.003.404c2.291-1.552 
  3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 
  3.176.77.84 1.235 1.911 1.235 3.221 
  0 4.609-2.803 5.628-5.475 5.921.43.372.823 
  1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 
  0 .319.216.694.825.576C20.565 22.092 24 17.592 
  24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-3 text-sm font-semibold text-slate-900 tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  to="/"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  to="/"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  to="/"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  to="/"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-slate-900 tracking-wider">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  to="/"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  to="/"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  to="/"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  to="/"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-semibold text-slate-900 tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  to="/"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  to="/"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  to="/"
                >
                  Licensing
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  to="/"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} PostSphere. Made by Mehtab</p>
            
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-slate-700 transition-colors duration-200"
              >
                Status
              </a>
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-slate-700 transition-colors duration-200"
              >
                Changelog
              </a>
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-slate-700 transition-colors duration-200"
              >
                Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
