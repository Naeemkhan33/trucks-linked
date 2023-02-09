import React from "react";
import Pages from "../routes/Pages";
import Container from "../components/utils/Container";

export const LayoutOutSide = () => {
  return (
    <main className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-1">
        <Container>
          {/* Replace with your content */}
          <div className="py-8">
            <Pages />
          </div>
          {/* /End replace */}
        </Container>
      </div>
    </main>
  );
};
