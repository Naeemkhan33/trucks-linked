import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../components/utils/Container";

import { Bars3Icon } from "@heroicons/react/24/outline";
import FeatureSortCard from "../components/cards/FeatureSortCard";
import SearchCard from "../components/cards/SearchCard";
import NotificationCard from "../components/cards/NotificationCard";
import ProfileCard from "../components/cards/ProfileCard";

const Navbar = ({ onMenu }) => {
  const [title, setTitle] = useState("Dashboard");
  const [date, setDate] = useState("10:40pm, October 10th 2022");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/dashboard":
        setTitle("Dashboard");
        setDate("10:40pm, October 10th 2022");
        break;
      case "/inventory":
        setTitle("your inventory");
        setDate("9:30am, October 12th 2022");
        break;
      case "/edit-inventory":
        setTitle("edit inventory - ID#123456");
        setDate("9:30am, October 12th 2022");
        break;
      case "/analytics":
        setTitle("Analytics");
        setDate("9:30am, October 12th 2022");
        break;
      case "/sales-report":
        setTitle("sales report");
        setDate("7:30am, October 12th 2022");
        break;
      case "/dealership":
        setTitle("dealership");
        setDate("11:00am, October 11th 2022");
        break;
      case "/settings":
        setTitle("Settings");
        setDate("11:00am, October 11th 2022");
        break;

      default:
        setTitle("Dashboard");
        setDate("10:40pm, October 10th 2022");
    }
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-10 py-3 bg-gray-100">
      <Container>
        <nav className="flex flex-wrap items-center gap-6">
          <div className="order-1 md:hidden">
            <button
              type="button"
              className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={onMenu}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="order-4 sm:order-1 text-bodyText font-medium xl:mr-auto">
            <h3 className="text-2xl xl:text-3xl capitalize">{title}</h3>
            <h6 className="text-sm">{date}</h6>
          </div>
          <div className="order-5 xl:order-2 w-full lg:w-2/3 xl:w-[18rem]">
            <SearchCard />
          </div>
          <div className="order-6 xl:order-3 md:min-w-[13rem] flex-1 xl:flex-none">
            <FeatureSortCard />
          </div>
          <div className="order-2 xl:order-4 ml-auto xl:ml-0">
            <NotificationCard />
          </div>
          <div className="xl:ml-auto order-3 xl:order-5">
            <ProfileCard />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
