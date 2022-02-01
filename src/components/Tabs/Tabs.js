import React from "react";
import { Container, Row, Kwatabs } from "./TabsElements";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import Slider from "../Slider/Slider";
import Cards from "../Cards/Cards";

function Tabis() {
  return (
    <Container>
      <Row>
        <h2>Discover Influencers</h2>
        <h3>Explore All</h3>
      </Row>
      <Kwatabs>
        <Tabs>
          <TabList>
            <Tab>Featured</Tab>
            <Tab>Most Popular</Tab>
            <Tab>Trending</Tab>
            <Tab>Just Added</Tab>
          </TabList>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </Kwatabs>
      <Cards />
    </Container>
  );
}

export default Tabis;
