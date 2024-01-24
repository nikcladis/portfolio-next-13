import React from "react";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="relative">
      <div
        className="background-container"
        style={{
          position: "relative",
          zIndex: 1, // Ensure the content stays on top of the pseudo-element
        }}
      >
        <Header />
        <Main />
      </div>
      <div
        className="background-fix"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(background.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: 0, // Ensure the pseudo-element stays behind the content
        }}
      />
    </div>
  );
}
