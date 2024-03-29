import { Menu, Transition } from "@headlessui/react";

import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import {
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const accountLinks = [
  { name: "Dealership", href: "/dealership", icon: PhoneIcon },
  { name: "settings", href: "/settings", icon: Cog6ToothIcon },
  { name: "Logout", href: "/sign-in", icon: ArrowRightOnRectangleIcon },
];

const ProfileCard = () => {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex rounded-full bg-white p-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {accountLinks.map((item) => (
            <Menu.Item>
              <NavLink
                key={item.name}
                to={item.href}
                className="user-link justify-start px-3 lg:px-3"
              >
                <span className="icon-box">
                  <item.icon className="h-full w-full" />
                </span>
                <span>{item.name}</span>
              </NavLink>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileCard;
