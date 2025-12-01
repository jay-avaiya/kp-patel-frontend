import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cookies = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setOpen(true);
  }, []);

  const acceptCookie = () => {
    localStorage.setItem("cookieConsent", true);
    setOpen(false);
  };

  const rejectCookie = () => {
    localStorage.setItem("cookieConsent", false);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 py-6 px-11 bg-white flex flex-row gap-24 w-full items-center justify-center rounded-[20px]">
      <div className="w-[200px] h-[250px]">
        <img
          src="/cookie.png"
          alt="cookie"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="font-lato  leading-[160%] w-[40%] flex flex-col gap-6">
        <h3 className="text-3xl font-extrabold">We Use Cookies</h3>
        <p className="text-xl font-normal">
          This website uses cookies to improve your experience. By clicking
          “Accept” you are agreeing to our
          <Link className="text-[#19C2FB] underline"> Cookie Policy</Link>.
        </p>

        <div className="flex flex-row gap-5">
          <button
            onClick={acceptCookie}
            className="rounded-full w-[50%] bg-[#F94223] text-white font-medium cursor-pointer text-2xl"
          >
            Accept
          </button>
          <button
            onClick={rejectCookie}
            className="rounded-full w-[50%]  text-[#F94223] border border-[#F94223] font-medium cursor-pointer text-2xl"
          >
            Reject All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
