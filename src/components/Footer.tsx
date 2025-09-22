import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import Logo from "../assets/Logo1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="w-full mx-auto px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div className="flex flex-col items-center sm:items-start">
            <img
              src={Logo}
              alt="Indication Technology Logo"
              className="h-12 w-auto object-contain"
            />
            <p className="text-gray-400 text-sm text-center sm:text-left mt-2"></p>
          </div>

          {/* Call Our Office */}
          {/* <div className="text-center sm:text-left">
            <h4 className="font-poppins font-semibold text-lg mb-3">
              Call our office
            </h4>
            <p className="text-gray-300 text-lg">+91 70301 94516</p>
          </div> */}
          <div className="text-center sm:text-left">
            <h4 className="font-poppins font-semibold text-lg mb-3">
              Call our office
            </h4>
            <p className="text-gray-300 text-lg">
              <a
                href="tel:+917030194516"
                className="hover:text-brand-purple transition-colors duration-300"
              >
                +91 70301 94516
              </a>
            </p>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="font-poppins font-semibold text-lg mb-3">
              Services
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  to="/web-development"
                  className="hover:text-brand-purple transition-colors duration-300"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/app-development"
                  className="hover:text-brand-purple transition-colors duration-300"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-services"
                  className="hover:text-brand-purple transition-colors duration-300"
                >
                  AI Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Send a Message */}
          {/* <div className="text-center sm:text-left">
            <h4 className="font-poppins font-semibold text-lg mb-3">
              Send a message
            </h4>
            <p className="text-gray-300 break-words">
              indicationtechnology@gmail.com
            </p>
          </div> */}

          {/* Send a Message */}
          <div className="text-center sm:text-left">
            <h4 className="font-poppins font-semibold text-lg mb-3">
              Send a message
            </h4>
            <p className="text-gray-300 break-words">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=indicationtechnology@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-purple transition-colors duration-300"
              >
                indicationtechnology@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        {/* <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
          © 2025 by{" "}
          <span className="font-semibold text-white">
            Indication Technology
          </span>{" "}
          | All Rights Reserved
        </p> */}

        {/* Social Icons */}
        {/* <div className="flex space-x-4">
          {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
            <a
              key={i}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-brand-purple transition-colors duration-300"
            >
              <Icon className="w-4 h-4 text-white" />
            </a>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
