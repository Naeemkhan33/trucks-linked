import React, { useState } from "react";
import Pages from "../routes/Pages";
import Sidebar from "./Sidebar";
import Container from "../components/utils/Container";
import Navbar from "./Navbar";

export const LayoutInSide = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const siderbarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Sidebar show={sidebarOpen} onHide={siderbarClose} />
      <div className="flex flex-1 flex-col md:pl-64 bg-gray-100 rounded-r-[3rem]">
        <Navbar onMenu={() => setSidebarOpen(true)} />
        <main className="flex-1">
          <Container>
            {/* Replace with your content */}
            <div className="py-4">
              <Pages />
            </div>
            {/* /End replace */}
          </Container>
        </main>
      </div>
    </main>
  );
};
