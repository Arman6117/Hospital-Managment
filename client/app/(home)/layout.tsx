import ActionButtons from "@/components/action-buttons";
import Navbar from "@/components/navbar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30">
      <Navbar />
      <ActionButtons/>
      {children}
    </main>
  );
};

export default HomeLayout;
