import { Link, useLocation, useNavigate } from "react-router-dom";
import Search from "../../components/ui/Search";
import MainButton from "../../components/ui/MainButton";
import { useState } from "react";
import { Menu, X, Search as SearchIcon } from "lucide-react";
const Navbar = () => {
  const navBar = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Trust Body",
      path: "/trust-body",
    },
    {
      name: "Academics",
      path: "/academics",
    },
    {
      name: "Events",
      path: "/events",
    },
    {
      name: "Career",
      path: "/career",
    },
    {
      name: "Alumni",
      path: "/alumni",
    },
    {
      name: "Admission",
      path: "/admission",
    },
  ];

  const mobileNav = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Trust Body",
      path: "/trust-body",
    },
    {
      name: "Academics",
      path: "/academics",
    },
    {
      name: "Gallery",
      path: "/events",
    },
    {
      name: "Events",
      path: "/events",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
    {
      name: "Admission",
      path: "/admission",
    },
    {
      name: "Admission From",
      path: "/process",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="w-full h-fit">
      {/* Desktop */}
      <div className="bg-white text-black">
        {/* Top header responsive */}
        <div className="bg-[#011844] px-8 py-1 md:px-8 md:py-2 lg:px-14 lg:py-6 xl:px-[69px] xl:py-[30px]">
          <div className="flex justify-center md:justify-between items-center text-center ">
            <p className=" text-[10px]  md:text-[12px] lg:text-[20px] font-montserrat font-medium text-white">
              Admission open for Std. 1 to 12 on Ash Education Trust Vijapur
            </p>

            <div className="hidden md:block">
              <Search />
            </div>
          </div>
        </div>

        <hr className="hidden md:block border border-black mt-1" />

        {/* NAVBAR */}
        <div className="hidden lg:flex lg:px-14 lg:py-2 xl:px-17 xl:py-2 items-center justify-between ">
          <img
            src="/logo.png"
            alt="logo"
            className="lg:h-[90px] lg:w-[200px] xl:h-[133px] xl:w-[244px] cursor-pointer object-cover scale-110 translate-y-1"
          />

          <ul className="text-black flex items-center justify-between lg:gap-4 xl:gap-6 2xl:gap-6 list-none lg:text-[12.5px] xl:text-[16px] 2xl:text-xl font-medium">
            {navBar.map((item, index) => {
              let isActive;

              if (item.path === "/") {
                isActive = location.pathname === "/";
              } else {
                isActive = location.pathname.startsWith(item.path);
              }

              return (
                <li key={index} className="relative group cursor-pointer">
                  <Link
                    to={item.path}
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-[#FF5500]"
                        : "text-black group-hover:text-[#FF5500]"
                    }`}
                  >
                    {item.name}
                  </Link>

                  <span
                    className={`absolute left-0 -bottom-3 h-[3px] rounded-lg bg-[#FF5500] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </li>
              );
            })}

            <button
              className="cursor-pointer text-white bg-[#FF5500] lg:text-[16px] xl:text-[20px] font-medium py-2 px-6 border border-transparent rounded-full hover:bg-transparent hover:border hover:border-[#FF5500] hover:text-[#FF5500] transition-all duration-300 text-center"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </ul>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden md:px-8 md:py-2 w-full flex items-center justify-between px-3 py-1">
        <button onClick={() => setIsOpen(true)} className="text-[#011844]">
          <Menu size={20} />
        </button>

        <img
          src="/logo.png"
          alt="logo"
          className="w-[78px] h-[45px] md:w-[140px] md:h-[60px] object-cover"
        />

        <button className="w-[25px] h-[25px] rounded-full shrink-0 flex items-center justify-center text-white bg-[#F94223] md:hidden">
          <SearchIcon size={12} />
        </button>

        <div
          className={` fixed inset-0 bg-[#011844] text-white z-50 transform transition-all duration-300 flex flex-col gap-3.5 px-5 py-8 ${
            isOpen ? "-translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="text-[20px] cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>

          <div className="w-full flex flex-col gap-3">
            {mobileNav.map((item, index) => {
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);

              return (
                <div
                  key={index}
                  className={`w-full px-4 py-4 border-b border-white/50 hover:bg-[#3947AE] hover:rounded-[13px] hover:border-transparent`}
                >
                  <Link
                    onClick={() => setIsOpen(false)}
                    to={item.path}
                    className="font-montserrat font-medium text-[16px]"
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}

            <button
              onClick={() => {
                navigate("/alumni");
                setIsOpen(false);
              }}
              className="w-full bg-[#F94223] py-2 sm:py-3 md:py-4 rounded-full text-[14px] sm:text-[16px] md:text-[18px] font-medium"
            >
              Alumni
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
