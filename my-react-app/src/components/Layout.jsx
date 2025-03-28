import React from "react";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div>
      <main id="main">
        <h1>Team Joachim</h1>
        <Nav />
        <section id="wrapper" className="wrapper">
            {children}
        </section>
      </main>
    </div>
  );
}
