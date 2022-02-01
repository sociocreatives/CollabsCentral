import React, { useState } from "react";
import { Data } from "./Data";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
// import Fade from "react-reveal/Fade";

import {
  FaqContainer,
  FaqHeader,
  AccordionSection,
  Wrap,
  Dropdown
} from "./FaqElements";

function Faq() {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <FaqContainer>
      <FaqHeader>Frequently asked questions</FaqHeader>
      <IconContext.Provider value={{ color: "white", size: "25px" }}>
        <AccordionSection>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h4>{item.title}</h4>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.body}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </AccordionSection>
      </IconContext.Provider>
    </FaqContainer>
  );
}

export default Faq;
