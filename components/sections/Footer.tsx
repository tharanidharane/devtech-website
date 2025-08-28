"use client";

import Image from "next/image";  // ✅ Import Image

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Machine Learning", href: "#" },
      { label: "Natural Language Processing", href: "#" },
      { label: "Computer Vision", href: "#" },
      { label: "Data Analytics", href: "#" },
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ]
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-lg" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center text-center">
            {/* ✅ Logo Replacement */}
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 transform hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/devtechai-logo.png" 
                  alt="DevTechAi Logo" 
                  width={40} 
                  height={40} 
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold">DevTechAi.Org</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Transforming businesses through intelligent AI solutions. 
                Your partner in the journey to digital excellence.
              </p>
            </div>

            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-lg">{section.title}</h4>
                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        className="hover:text-purple-400 transition-all duration-300 transform hover:scale-105 inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 DevTechAi.Org. All rights reserved. Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
