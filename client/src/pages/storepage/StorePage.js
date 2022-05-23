import React from "react";
import { Main, Banner } from "./styled";
import SurferStore from "../../assets/imgs/surferstore.jpg";

export default function StorePage() {
  return (
    <Main>
      <h1>Store</h1>

      <Banner>
        <img src={SurferStore} />
      </Banner>
    </Main>
  );
}
