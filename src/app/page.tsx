import React from "react";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="relative">
      <div className="background-container relative z-10">
        <Header />
        <Main />
      </div>
    </div>
  );
}
