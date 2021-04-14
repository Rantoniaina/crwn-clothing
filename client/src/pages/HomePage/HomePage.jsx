import React, { Profiler } from "react";
import Directory from "../../components/Directory/Directory";

import { HomePageContainer } from "./styles";

const HomePage = () => (
  <HomePageContainer>
    <Profiler
      id="Directory"
      onRender={(id, phase, actualDurection) => {
        console.log({
          id,
          phase,
          actualDurection,
        });
      }}
    >
      <Directory />
    </Profiler>
  </HomePageContainer>
);

export default HomePage;
