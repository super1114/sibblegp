/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const Header = () => {
  return (
    <div className="container mx-auto">
      <div>
        <Link href="/dashboard" className="d-flex align-items-center">
          <img
            src="/img/logo/Social_Profile_Mirko.png"
            alt="logo"
            className="h-45px logo"
          />
        </Link>
      </div>
      <div></div>
    </div>
  );
};
