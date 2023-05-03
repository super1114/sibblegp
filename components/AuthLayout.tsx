import { useState, useEffect } from "react";
import Image from "next/image";

interface AuthLayoutProps {
  children: any;
}

export default function AuthLayout({ children }: AuthLayoutProps): JSX.Element {
  useEffect(() => {
    document.body.style.backgroundImage = "none";
    return () => {};
  }, []);
  return (
    <div
      className="bg-[url('/img/bg.jpg')] bg-cover d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed w-full h-full fixed"
      // style={{
      //   backgroundImage: "url('/img/bg.jpg')"
      // }}
    >
      {/* begin::Content */}
      <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
        {/* begin::Logo */}
        <a href="#" className="mb-12">
          {/* <Image
            alt="Logo"s
            src={toAbsoluteUrl("/media/logos/default-dark.svg")}
            className="theme-dark-show h-45px"
          />
          <Image
            alt="Logo"
            src={toAbsoluteUrl("/media/logos/default.svg")}
            className="theme-light-show h-45px"
          /> */}
          <Image
            alt="Logo"
            src="/img/logo/Color_logo_-_no_background.png"
            className="theme-light-show h-45px"
            width={200}
            height={50}
          />
        </a>
        {/* end::Logo */}
        {/* begin::Wrapper */}
        <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto z-50 relative">
          {children}
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Content */}
      {/* begin::Footer */}
      <div className="d-flex flex-center flex-column-auto p-10">
        <div className="d-flex align-items-center fw-semibold fs-6">
          <a href="#" className="text-white text-muted text-hover-primary px-2">
            About
          </a>

          <a href="#" className="text-muted text-hover-primary px-2">
            Contact
          </a>

          <a href="#" className="text-muted text-hover-primary px-2">
            Contact Us
          </a>
        </div>
      </div>
      {/* end::Footer */}
    </div>
  );
}
