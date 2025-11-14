import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import Logo from "../assets/Logo1.png";
import MsmeLogo from "../assets/MsmeLogo1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="w-full mx-auto px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Logo */}
          <div className="flex flex-col items-center sm:items-start">
            <img
              src={Logo}
              alt="Indication Technology Logo"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-poppins font-semibold text-lg mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-brand-purple">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-purple">
                  Services
                </Link>
              </li>
              {/* <li>
                <Link to="/careers" className="hover:text-brand-purple">
                  Careers
                </Link>
              </li> */}
              <li>
                <Link to="/about" className="hover:text-brand-purple">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-purple">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link to="/privacy-policy" className="hover:text-brand-purple">
                  Privacy Policy
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="text-center sm:text-left">
            <h4 className="font-poppins font-semibold text-lg mb-3">
              Contact Us
            </h4>

            <p className="text-gray-300 ">
              {" "}
              <a
                href="tel:+917030194516"
                className="hover:text-brand-purple transition-colors duration-300"
              >
                {" "}
                +91 70301 94516{" "}
              </a>{" "}
            </p>

            <p className="text-gray-300 mt-1">
              <a
                href="mailto:indicationTechnology@gmail.com"
                className="hover:text-brand-purple"
              >
                indicationTechnology@gmail.com
              </a>
            </p>

            <p className="text-gray-300">Mumbai, India - 400602</p>
          </div>

          {/* Approved By */}
          <div className="text-center sm:text-left">
            <h4 className="font-poppins font-semibold text-lg mb-3">
              Approved By
            </h4>

            <img
              src={MsmeLogo}
              alt="MSME Logo"
              className="h-32 w-auto object-contain mx-auto sm:mx-0"
            />
          </div>
        </div>
        {/* Bottom Bar */}{" "}
        <div className="px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
