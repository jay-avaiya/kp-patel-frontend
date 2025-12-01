import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About us",
      link: "/about-us",
    },
    {
      name: "Trust Body",
      link: "/trust-body",
    },
    {
      name: "Academics",
      link: "/academics",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "Gallery",
      link: "/events",
    },
    {
      name: "Career",
      link: "/Career",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];

  const aboutUs = [
    {
      name: "About Trust",
      link: "/about-us",
    },
    {
      name: "History",
      link: "/maintenance",
    },
  ];

  const studentCorner = [
    {
      name: "Admission Form",
      link: "/admission/admission-form",
    },
    {
      name: "Syllabus",
      link: "/maintenance",
    },
    {
      name: "NSS",
      link: "/maintenance",
    },
    {
      name: "Scope",
      link: "/maintenance",
    },
    {
      name: "Sports",
      link: "/maintenance",
    },
    {
      name: "CWDC",
      link: "/maintenance",
    },
    {
      name: "Computer Training",
      link: "/maintenance",
    },
    {
      name: "Medical Facilities",
      link: "/maintenance",
    },
    {
      name: "Library",
      link: "/maintenance",
    },
    {
      name: "Schlorship",
      link: "/maintenance",
    },
  ];

  const year = new Date().getFullYear();

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <div className="w-full h-fit">
        <div className="bg-[#0E1A42]">
          <div className="maxw h-fit grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-[134.41px] py-10">
            {/* Quick links */}
            <div>
              <p
                className={`md:text-[26px] text-[20px] text-[#FAFAFA] font-semibold font-manrope`}
              >
                Quick Links
              </p>

              <div className="flex flex-col gap-y-2 mt-8">
                {quickLinks.map((link, index) => (
                  <Link onClick={handleScroll} to={link.link} key={index}>
                    <li className={`font-manrope text-[16px] text-[#DADADA99]`}>
                      {link.name}
                    </li>
                  </Link>
                ))}
              </div>
            </div>

            {/* ABOUT US */}
            <div>
              <p
                className={`md:text-[26px] text-[20px] text-[#FAFAFA] font-semibold font-manrope`}
              >
                About Us
              </p>

              <div className="flex flex-col gap-y-2 mt-8">
                {aboutUs.map((link, index) => (
                  <Link onClick={handleScroll} to={link.link} key={index}>
                    <li className={`font-manrope text-[16px] text-[#DADADA99]`}>
                      {link.name}
                    </li>
                  </Link>
                ))}
              </div>
            </div>

            {/* STUDENT CORNER */}
            <div>
              <p
                className={`md:text-[26px] text-[20px] text-[#FAFAFA] font-semibold font-manrope`}
              >
                Student Corner
              </p>

              <div className="flex flex-col gap-y-2 mt-8">
                {studentCorner.map((link, index) => (
                  <Link onClick={handleScroll} to={link.link} key={index}>
                    <li className={`font-manrope text-[16px] text-[#DADADA99]`}>
                      {link.name}
                    </li>
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <p
                className={` md:text-[26px] text-[20px] text-[#FAFAFA] font-semibold font-manrope `}
              >
                Contact Us
              </p>

              <div className="mt-8">
                <p
                  className={` font-semibold md:text-[18px] text-[16px] text-[#FF9700] font-manrope `}
                >
                  Address
                </p>
                <address
                  className={`  font-medium md:text-[16px] text-[14px] not-italic mt-3 text-[#DADADA99] font-manrope `}
                >
                  Ash Education Trust, Vijapur, Amrut Vidyadham, Visnagar
                  Road,Vijapur-382870.
                </address>
              </div>

              <div className="mt-8 flex gap-x-2 items-center">
                <p
                  className={` font-semibold md:text-[18px] text-[16px] text-[#FF9700] font-manrope `}
                >
                  Email:{" "}
                </p>

                <a
                  href="mailto:sspatel71@yahoo.in"
                  className={`  font-medium md:text-[16px] text-[14px] text-[#DADADA99] font-manrope `}
                >
                  sspatel71@yahoo.in
                </a>
              </div>

              <div className="mt-1 flex gap-x-2 items-center">
                <p
                  className={` font-semibold md:text-[18px] text-[16px] text-[#FF9700] font-manrope `}
                >
                  Phone:{" "}
                </p>

                <a
                  href="tel:+919427073676"
                  className={`  font-medium md:text-[16px] text-[14px] text-[#DADADA99] font-manrope `}
                >
                  9427073676
                </a>
                <a
                  href="tel:+919427019977"
                  className={`  font-medium md:text-[16px] text-[14px] text-[#DADADA99] font-manrope `}
                >
                  9427019977
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FF9700]">
        <div className="maxw md:h-[58px] h-fit py-3 lg:py-0 flex lg:flex-row flex-col items-center lg:justify-between px-[134.41px]">
          <p
            className={` font-medium md:text-[16px] text-[14px] text-white font-manrope text-center `}
          >
            Copyright © {year} revered by Ash Education Trust Vijapur{" "}
          </p>
          <Link
            to="https://www.pruthatek.com"
            target="_blank"
            className="font-medium md:text-[16px] text-[14px] text-white font-manrope "
          >
            Design & Developed by PRUTHATEK
          </Link>
          <p
            className={` font-medium md:text-[16px] text-[14px] text-white font-manrope  `}
          >
            Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
