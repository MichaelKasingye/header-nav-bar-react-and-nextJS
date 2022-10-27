import { Fragment } from "react";
import { useRouter } from "next/router";
import { Menu, Popover, Transition } from "@headlessui/react";
import NavLinkItem from "../NavLink/NavLinkItem";
import { classNames } from "../../utils";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";

const user = {
  firstName: "Mukasa",
  secondName: "Bob",
  name: "Bob Mukasa",
  email: "Mukasa@gmail.com",
  // imageUrl: '/Images/headshot.jpg',
  imageUrl: ""
};

export default function DashboardHeader() {
  const router = useRouter();
  const { locale } = router;

  return (
    /* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */
    <Popover
      as="header"
      className={({ open }) =>
        classNames(
          open ? "fixed inset-0 z-40 overflow-y-auto" : "",
          "bg-white shadow-sm lg:static lg:overflow-y-visible"
        )
      }
    >
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 border-b-1 border-[#E5E7EB] bg-white h-[60px] relative flex justify-end xl:grid xl:grid-cols-12 lg:gap-1">
            <div className=" flex items-center md:absolute md:inset-y-0 lg:hidden">
              {/* Mobile menu button */}
              <Popover.Button className=" rounded-md focus:outline-none focus:ring-0">
                {open ? (
                  <span className="material-symbols-outlined">close</span>
                ) : (
                  <span className="material-symbols-outlined">menu</span>
                )}
              </Popover.Button>
            </div>
            <div className=" w-full hidden lg:flex lg:items-center lg:justify-end xl:col-span-12 ">
              <a
                href="#"
                className="text-[#1C1B1F] ml-5 flex-shrink-0 bg-white rounded-full p-1  hover:text-gray-500 "
              >
                <span className="material-symbols-outlined">help</span>
              </a>
              <a
                href="#"
                className="text-[#1C1B1F] ml-5 flex-shrink-0 bg-white rounded-full p-1   hover:text-gray-500"
              >
                <span
                  className="material-symbols-outlined h-6 w-6"
                  aria-hidden="true"
                >
                  notifications
                </span>
              </a>

              {/* Profile dropdown */}
              <Menu as="div" className="flex-shrink-0 relative ml-5">
                {({ open }) => (
                  <>
                    <ProfileAvatar
                      rounded
                      name={user.name}
                      customStyle="mb-1"
                      imageUrl={user.imageUrl}
                    />
                  </>
                )}
              </Menu>
            </div>
          </div>

          <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
              <NavLinkItem
                name="Reservations"
                icon={<span className="material-symbols-outlined">book</span>}
                href="/test-page"
              />
              <NavLinkItem
                name="Services"
                icon={
                  <span className="material-symbols-outlined">Inventory</span>
                }
                href="/"
              />
              <NavLinkItem
                name="Analytics"
                icon={
                  <span className="material-symbols-outlined">Leaderboard</span>
                }
                href="/"
              />
              <NavLinkItem
                name="Discounts"
                icon={
                  <span className="material-symbols-outlined">percent</span>
                }
                href="/"
              />
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                <ProfileAvatar rounded name={user.name} />
                <span className="ml-3 text-base font-medium text-gray-800">
                  {user.name}
                </span>
                <button
                  type="button"
                  className="ml-auto bg-white rounded-full p-1 text-gray-400 "
                >
                  <span
                    className="material-symbols-outlined h-6 w-6"
                    aria-hidden="true"
                  >
                    notifications
                  </span>
                </button>
              </div>
              <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                <NavLinkItem
                  name="settings"
                  icon={
                    <span className="material-symbols-outlined">settings</span>
                  }
                  href="/"
                />
                <NavLinkItem
                  name="Logout"
                  icon={
                    <span className="material-symbols-outlined">logout</span>
                  }
                  href="/login"
                />
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
