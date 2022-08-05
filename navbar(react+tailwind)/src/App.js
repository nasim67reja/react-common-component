import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <section
      className="h-screen bg-Hero bg-cover
      bg-center font-[Poppins] md:bg-top"
    >
      <Navbar />
      <div className="flex h-3/4 flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-medium text-white ">Fashion Tips</h2>
        <h1 className="py-5 text-3xl font-semibold text-white md:text-5xl">
          Items every woman should have
        </h1>
        <div className="text-xl">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default App;
