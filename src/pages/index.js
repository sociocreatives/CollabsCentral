import React from "react";
import Hero from "../components/Hero/Hero";
import Faq from "../components/Faq/Faq";
import Featured from "../components/Featured/Featured";
import Benefits from "../components/Benefits/Benefits";
import Testimonial from "../components/Testimonial/Testimonial";
import Tabis from "../components/Tabs/Tabs";
import Tablas from "../components/TabsTwo/TabsTwo";
import Taught from "../components/Taught/Taught";
import Sliding from "../components/Sliding/Sliding";

function Home() {
  return (
    <>
      <Hero />
      <Taught />
      <Sliding />
      <Tabis />
      <Tablas />
      <Benefits />
      <Testimonial />
      <Featured />
      <Faq />
    </>
  );
}

export default Home;
