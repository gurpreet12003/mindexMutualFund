import React from "react";

export default function Footer() {
    function Col({ title, items }) {
    return (
      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-red-600">
          {title}
        </h4>

        <ul className="mt-4 space-y-3">
          {items.map((i) => (
            <li key={i}>
              <a
                href="#"
                className="text-sm text-white transition hover:text-red-600"
              >
                {i}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
     {/* Footer */}
      <footer className="border-t border-white/10 bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">

          {/* TOP GRID */}
          <div className="grid gap-10 md:grid-cols-4">

            {/* LOGO + ABOUT */}
            <div className="md:col-span-1">

              <div className="h-14 w-36 bg-white rounded-md p-2 flex items-center justify-center">
                <img
                  src="/mindex2.png"
                  alt="Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="mt-5 text-sm leading-relaxed text-white font-medium">
                Corporate NPS solutions designed to help organizations improve employee financial wellness with tax-efficient retirement benefits.
              </p>

              <div className="mt-5 text-xs text-white font-medium">
                Trusted retirement solutions for modern organizations.
              </div>
            </div>

            {/* COLUMN 1 */}
            <Col
              title="Solutions"
              items={[
                "Corporate NPS",
                "Employee Onboarding",
                "Payroll Integration",
                "Retirement Planning",
              ]}
            />

            {/* COLUMN 2 */}
            <Col
              title="Resources"
              items={[
                "How It Works",
                "Tax Benefits",
                "FAQs",
                "PFRDA Guidelines",
              ]}
            />

            {/* COLUMN 3 */}
            <Col
              title="Support"
              items={[
                "Contact Us",
                "Help Centre",
                "Consultation",
                "Downloads",
              ]}
            />
          </div>

          {/* DIVIDER */}
          <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

            <p className="text-xs text-white">
              © {new Date().getFullYear()} Mindex Corporate NPS. All rights reserved.
            </p>

            <div className="flex gap-6 text-xs">

              <a href="#" className="text-white hover:text-[#FF2E2E] transition">
                Privacy Policy
              </a>

              <a href="#" className="text-white hover:text-[#FF2E2E] transition">
                Terms & Conditions
              </a>

              <a href="#" className="text-white hover:text-[#FF2E2E] transition">
                Disclosures
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
     
  )}