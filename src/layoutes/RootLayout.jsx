import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function RootLayout() {
  return (
    <div>
      <NavBar />

      <main className="min-h-[100vh]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
