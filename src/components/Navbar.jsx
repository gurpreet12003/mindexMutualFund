import { Menu, X } from "lucide-react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import React from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);



  return (
    <>
   <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
        {/* Top Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 w-full">

            {/* Logo */}
            <div className="h-14 w-36 flex items-center">
              <img
                src="/mindex2.png"
                alt="Logo"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Contact Info */}
            <div className=" lg:flex items-center gap-6">

              {/* Email */}
              <span className="flex items-center gap-2 text-sm text-neutral-700">
                <Icon icon="mdi:email-outline" width="20" />

                <a
                  href="mailto:joinus@mindex.co.in"
                  className="text-red-600 hover:text-red-700 transition-colors"
                >
                  joinus@mindex.co.in
                </a>
              </span>

              {/* Phone */}
              <span className="flex items-center gap-2 text-sm text-neutral-700">
                <Icon icon="mdi:phone-outline" width="20" />

                <a
                  href="tel:+919876543210"
                  className="text-red-600 hover:text-red-700 transition-colors"
                >
                  +91 98765 43210
                </a>
              </span>

            </div>


          </div>
        </div>
      </header>

    </>
  );
}