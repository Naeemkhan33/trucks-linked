import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  BellAlertIcon,
  ChartBarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  PhoneIcon,
  TruckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import Logo from "../components/utils/Logo";

const menuLinks = [
  { name: "Dashboard", href: "/", icon: ChartBarIcon },
  { name: "inventory", href: "/inventory", icon: TruckIcon },
  { name: "analytics", href: "/analytics", icon: ChartPieIcon },
  { name: "sales report", href: "/sales-report", icon: DocumentTextIcon },
];

const accountLinks = [
  { name: "Dealership", href: "/dealership", icon: PhoneIcon },
  { name: "settings", href: "/settings", icon: Cog6ToothIcon },
];

export default function Sidebar({ show, onHide }) {
  return (
    <>
      <Transition.Root show={show} as={Fragment}>
        <Dialog as="div" className="relative z-40 md:hidden" onClose={onHide}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={onHide}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                  <Logo />
                  <nav className="mt-5 flex-1 space-y-1 bg-white">
                    <h5 className="capitalize text-gray-500 text-lg font-bold px-4 lg:px-6 mb-4">
                      Menu
                    </h5>
                    {menuLinks.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="sidebar-link"
                      >
                        <span className="icon-box">
                          <item.icon className="h-full w-full" />
                        </span>
                        <span>{item.name}</span>
                        <span className="ml-auto box-notification">
                          <BellAlertIcon className="h-full w-full" />
                        </span>
                      </NavLink>
                    ))}
                  </nav>
                </div>
                <div className="flex flex-shrink-0">
                  <nav className="flex-1 space-y-1 bg-white">
                    <h5 className="capitalize text-gray-500 text-lg font-bold px-4 lg:px-6 mb-4">
                      Account
                    </h5>
                    {accountLinks.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="sidebar-link"
                      >
                        <span className="icon-box">
                          <item.icon className="h-full w-full" />
                        </span>
                        <span>{item.name}</span>
                        <span className="ml-auto box-notification">
                          <BellAlertIcon className="h-full w-full" />
                        </span>
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <Logo />

            <nav className="mt-5 flex-1 space-y-1 bg-white">
              <h5 className="capitalize text-gray-500 text-lg font-bold px-4 lg:px-6 mb-4">
                Menu
              </h5>
              {menuLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="sidebar-link"
                >
                  <span className="icon-box">
                    <item.icon className="h-full w-full" />
                  </span>
                  <span>{item.name}</span>
                  <span className="ml-auto box-notification">
                    <BellAlertIcon className="h-full w-full" />
                  </span>
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="flex flex-shrink-0 mb-8">
            <nav className="flex-1 space-y-1 bg-white">
              <h5 className="capitalize text-gray-500 text-lg font-bold px-4 lg:px-6 mb-4">
                Account
              </h5>
              {accountLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="sidebar-link"
                >
                  <span className="icon-box">
                    <item.icon className="h-full w-full" />
                  </span>
                  <span>{item.name}</span>
                  <span className="ml-auto box-notification">
                    <BellAlertIcon className="h-full w-full" />
                  </span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
