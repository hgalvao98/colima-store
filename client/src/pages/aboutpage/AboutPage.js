import React from "react";
import { Main, Banner } from "./Styled";
import CardHome from "../../components/CardHome/CardHome";
import SkateBanner from "../../assets/videos/skatebanner.mp4";
import Onda from '../../assets/imgs/onda.png'

export default function AboutPage() {
  return (
    <Main>
      <h1>COLIMA</h1>
      <h2>paddle with us</h2>
      <p>
        Colima began as just an idea. Back in 2016 the word came to mouth as a
        joke. What is Colima? Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
      <img src={Onda} />
      <Banner>
        <video width="100%" loop playsInline autoPlay muted>
          <source src={SkateBanner}></source>
        </video>
        <CardHome />
      </Banner>
    </Main>
  );
}
