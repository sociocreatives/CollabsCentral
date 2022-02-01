import React from "react";
import CountUp from "react-countup";
import {
  CryptoContainer,
  CryptoRows,
  CryptoColOne,
  CryptoColTwo,
  CryptoContent,
  CryptoBox,
  CryptoImg,
  CryptoCounter,
  CryptoHeader,
  Cryptop,
  Name,
  Imahinario,
  TeamButton
} from "./CryptoElements";
import { BiRocket } from "react-icons/bi";
import Fade from "react-reveal/Fade";
import ether from "../../assets/images/ethereum-01.svg";
import binance from "../../assets/images/binance-01.svg";
import bitcoin from "../../assets/images/bitcoin-01.svg";
import zlogo from "../../assets/images/zlogo-01.svg";
import t3 from "../../assets/images/t3-01.svg";
import slogo from "../../assets/images/slogo-01.svg";
import { Link } from "react-router-dom";
import werock from "../../assets/images/werock.svg";

function Crypto() {
  return (
    <CryptoContainer>
      <CryptoContent>
        <Imahinario>
          <img src={werock} alt="team" width="600px" />
        </Imahinario>
        <CryptoRows>
          <Fade up>
            <CryptoColOne>
              <CryptoHeader>
                wHY <span>wE</span> rOCK!
              </CryptoHeader>
              <Cryptop>
                Since MAY 2020 nGeni Engineers have developed over 20 🤖 dApps
                YES 20! <span>🚢 ALREADY SHIPPED >></span>
              </Cryptop>
              <Link to="/focus"></Link>
            </CryptoColOne>
          </Fade>
          <CryptoColTwo>
            <CryptoBox>
              <Fade up>
                <CryptoImg>
                  <img src={ether} alt="engineer" width="80px" />
                </CryptoImg>
                <CryptoCounter>
                  Ethereum
                  <span>
                    <CountUp end={12} duration={1} />
                  </span>
                </CryptoCounter>
              </Fade>
            </CryptoBox>
            <CryptoBox>
              <Fade up>
                <CryptoImg>
                  <img src={binance} alt="engineer" width="80px" />
                </CryptoImg>
                <CryptoCounter>
                  Binance {""}
                  <span>
                    <CountUp end={7} duration={1} />
                  </span>
                </CryptoCounter>
              </Fade>
            </CryptoBox>

            <CryptoBox>
              <Fade up>
                <CryptoImg>
                  <img src={slogo} alt="engineer" width="80px" />
                </CryptoImg>
                <CryptoCounter>
                  Solana {""}
                  <span>
                    <CountUp end={2} duration={1} />
                  </span>
                </CryptoCounter>
              </Fade>
            </CryptoBox>
            <CryptoBox>
              <Fade up>
                <CryptoImg>
                  <img src={t3} alt="engineer" width="80px" />
                </CryptoImg>
                <CryptoCounter>
                  Tezos {""}
                  <span>
                    <CountUp end={1} duration={1} />
                  </span>
                </CryptoCounter>
              </Fade>
            </CryptoBox>
          </CryptoColTwo>
        </CryptoRows>
      </CryptoContent>
    </CryptoContainer>
  );
}

export default Crypto;
