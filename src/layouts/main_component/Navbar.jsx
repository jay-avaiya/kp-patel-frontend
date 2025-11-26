import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Search from "../../components/ui/Search";
import MainButton from "../../components/ui/MainButton";

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

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="w-full h-[242px]">
      <div className="bg-white text-black">
        {/* TOP HEADER */}
        <div className="w-full h-[84px]">
          <div className="bg-[#011844] flex justify-between items-center py-[25px] px-[86px]">
            <p className="text-[20px] font-montserrat font-medium text-white">
              Admission open for Std. 1 to 12 on Ash Education Trust Vijapur
            </p>

            <Search />
          </div>
        </div>

        <hr className="border border-black mt-4" />

        {/* NAVBAR */}
        <div className="w-full mx-auto flex items-center justify-between px-[50px]">
          <div className="">
            <img
              src="/logo.png"
              alt="logo"
              className="h-[144px] w-[244px] cursor-pointer object-cover"
            />
          </div>

          <div className="text-black flex items-center justify-between gap-x-8 list-none text-2xl font-medium ">
            {navBar.map((item, index) => {
              let isActive;

              if (item.path === "/") {
                isActive = location.pathname === "/";
              } else {
                isActive = location.pathname.startsWith(item.path);
              }

              return (
                <li key={index} className="relative group">
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
                    className={`absolute left-0 -bottom-3 h-[4px] rounded-lg bg-[#FF5500] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </li>
              );
            })}

            <MainButton
              title={"Contact Us"}
              navigate={() => navigate("/contact")}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
