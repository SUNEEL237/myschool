import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300 text-sm">
              Public School is committed to providing quality education and nurturing young minds for a better tomorrow.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white text-sm">About Us</Link></li>
              <li><Link href="/academics" className="text-gray-300 hover:text-white text-sm">Academics</Link></li>
              <li><Link href="/admissions" className="text-gray-300 hover:text-white text-sm">Admissions</Link></li>
              <li><Link href="/facilities" className="text-gray-300 hover:text-white text-sm">Facilities</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-white text-sm">Gallery</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                <span>Village. Pidari Kheda Post Rohali distrct Kannauj (UP), 209735</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-4 w-4 mr-2" />
                <span>+91 8076619490</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-4 w-4 mr-2" />
                <span>info@publicschool.edu</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-md text-sm font-medium transition duration-150"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Public School. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
