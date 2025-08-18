import React from "react";
import { NavLink } from "react-router";
import { MdAttachEmail } from "react-icons/md";
import { FcSmartphoneTablet } from "react-icons/fc";
import { FaFacebook, FaGithub} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaCcStripe,FaCcPaypal } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-info text-base-content px-6 md:px-12 py-10">
      {/* ===== ROW 1 ===== */}
      <div className="grid md:grid-cols-3 gap-8 border-b border-gray-300 pb-8">
        
        {/* Contact Us */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-secondary lg:text-left">Contact Us</h2>
          <div className="flex items-center gap-2 text-base text-primary hover:text-secondary transition">
            <FcSmartphoneTablet className="text-2xl" />
            <span>+880 1234-567890</span>
          </div>
          <div className="flex items-center gap-2 text-base text-primary hover:text-secondary transition">
            <MdAttachEmail className="text-2xl" />
            <span>support@tourmate.com</span>
          </div>
        </div>

        {/* Useful Links */}
        <div className="space-y-3 ">
          <h2 className="text-xl font-semibold text-secondary">Useful Links</h2>
          <ul className="space-y-2">
            {[
              { name: "Home", link: "/" },
              { name: "Community", link: "/community" },
              { name: "About Us", link: "/about-us" },
            
            ].map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-secondary font-bold"
                      : "text-primary hover:text-secondary transition"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Payment Info */}
        <div className="space-y-3 lg:text-left">
          <h2 className="text-xl font-semibold text-secondary">Pay Safely With Us</h2>
          <p className="text-sm text-primary">
            Payments are securely encrypted and transmitted with SSL protocol.  
            Currently, we support payments through <span className="font-semibold">Stripe</span>.
          </p>
          <div className="flex gap-4 mt-2">
            <FaCcStripe className="text-4xl text-primary hover:text-secondary transition cursor-pointer" />
            <RiVisaFill className="text-4xl text-primary hover:text-secondary transition cursor-pointer"/>
            <FaCcPaypal className="text-4xl text-primary hover:text-secondary transition cursor-pointer"/>
              
          </div>
        </div>
      </div>

      {/* ===== ROW 2 ===== */}
      <div className="flex flex-col md:flex-row items-center justify-between pt-6 gap-4">
        <p className="text-primary text-sm">
          Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
          <span className="font-semibold text-secondary">@Meem@</span>
        </p>
        <div className="flex gap-4 text-2xl">
  <a
    href="https://www.facebook.com/share/16LfmCotgf/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebook className="cursor-pointer text-primary hover:text-secondary transition" />
  </a>

  <a
    href="https://github.com/AmenaGithub678"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub className="cursor-pointer text-primary hover:text-secondary transition" />
  </a>

  <a
    href="https://www.linkedin.com/in/amena-akter-0736b52b5/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin className="cursor-pointer text-primary hover:text-secondary transition" />
  </a>
</div>
      </div>
    </footer>
  );
};

export default Footer;
