import { Menu, X } from "lucide-react";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Calculator", href: "#calculator" },
  ];

  return (
    <>
      <nav className="w-full bg-gradient-to-r from-white via-red-500 to-red-800 text-white px-8 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="h-14 w-36">
          <img
            src="/mindex2.png"
            alt="Logo"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
          <span className="flex self-end items-center gap-2 text-[11px] sm:text-xs md:self-auto md:text-sm">
            <Icon icon="mdi:email-outline" width="18" />

            <a
              href="mailto:joinus@mindex.co.in"
              className="hover:underline"
            >
              joinus@mindex.co.in
            </a>
          </span>
          {/* <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=joinus@mindex.co.in"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:underline"
>
  joinus@mindex.co.in
</a> */}

          <span className="flex items-center gap-2 text-[11px] sm:text-xs md:self-auto md:text-sm">
            <Icon icon="mdi:phone-outline" width="18" />

            <a
              href="tel:+919876543210"
              className="hover:underline"
            >
              +91 98765 43210
            </a>
          </span>
        </div>

      </nav>

    </>
  );
}