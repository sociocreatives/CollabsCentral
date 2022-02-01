import React from "react";
import { useSpring, animated } from "react-spring";
import { Container, Row } from "./DropdownElements";
import { FaSearch } from "react-icons/fa";

function Dropdown({ showModal, setShowModal }) {
  const animation = useSpring({
    config: {
      duration: 200
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  return (
    <>
      {showModal ? (
        <Container>
          <animated.div style={animation}>
            <Row showModal={showModal}>
              <FaSearch />
              <form>
                <label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Search influencers, products, topics"
                  />
                </label>
              </form>
            </Row>
          </animated.div>
        </Container>
      ) : null}
    </>
  );
}

export default Dropdown;
