/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Link from "next/link";
import clsx from "clsx";
export const Sidebar: FC = () => {
  return (
    <div
      id="kt_aside"
      className="bg-black"
      data-kt-drawer="true"
      data-kt-drawer-name="aside"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'80px', '300px': '100px'}"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_aside_mobile_toggle"
    >
      {/* begin::Brand */}
      <div className="aside-logo  py-8" id="kt_aside_logo">
        <Link href="/dashboard" className="d-flex align-items-center">
          <img
            src="/img/logo/Social_Profile_Mirko.png"
            alt="logo"
            className="h-45px logo"
          />
        </Link>
      </div>
      {/* end::Brand */}

      {/* begin::Aside menu */}
      <div className="aside-menu flex-column-fluid" id="kt_aside_menu">
        {/* begin::Nav */}

        {/* end::Nav */}

        {/* end::Aside menu */}
      </div>
      {/* begin::Footer */}
      <div className="aside-footer flex-column-auto" id="kt_aside_footer">
        {/* begin::Menu */}
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btm-sm btn-icon btn-active-color-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-overflow="true"
            data-kt-menu-placement="top-start"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-dismiss="click"
            title="Quick actions"
          >
            {/* <KTIcon iconName="element-11" className="fs-2 text-lg-1" /> */}
          </button>
          {/* <Dropdown2 /> */}
        </div>
        {/* end::Menu */}
      </div>
      {/* end::Footer */}
    </div>
  );
};
