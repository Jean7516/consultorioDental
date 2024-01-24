import Link from "next/link";
import React from "react";
import { contactDetails, navLinks, socialLinks } from "@/constans";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-peach max-width font-primary bg-slate-700/50">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="text-white text-xl font-semibold">
          Consultorio Dental
        </Link>
        <nav className="flex gap-12 max-tablet:hidden">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLinks href={link.url} label={link.label} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              className="w-10 h-10 bg-gradient-to-r from-slate-600 to-slate-400 text-peach flex items-center justify-center rounded"
            >
              <link.icon strokeWidth={0} fill="white" />
            </a>
          ))}
        </div>
      </div>
      <div className="w-max border border-peach p-5 mx-auto flex gap-5 tablet:gap-10 flex-col tablet:flex-row items-center rounded-lg mt-5">
        {contactDetails.map((details, index) => (
          <div key={index} className="flex grap-3 text-white">
            <details.icon size={20} />
            <p></p>
            <p className="text-gray-100"> &nbsp;{details.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-gray-100 text-center text-sm">
        Copyright @{new Date().getFullYear()} XXXX. All right reseved
      </p>
    </footer>
  );
};

export default Footer;
