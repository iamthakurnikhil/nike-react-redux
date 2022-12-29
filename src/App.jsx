import React from "react";
import { Hero, Sales, FlexContent, Stories, Footer, Navbar } from "./components";
import { footerAPI, heroapi, highlight, popularsales, sneaker, story, toprateslaes } from "./data/data";

const App = () => {
  return (
    <>
      <Navbar/>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi}/>
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
