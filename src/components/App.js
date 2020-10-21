import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import Drawer from "./AppDrawer";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import TechComponent from "./TechComponent";
// import ThirdComponent from "./ThirdComponent";
// import FourthComponent from "./FourthComponent";
import FinalComponent from "./FinalComponent";

const App = () => {
  const [scrollLock, setScrollLock] = useState(false);

  return (
    <div>
      <Drawer />
      <ReactPageScroller
        blockScrollUp={scrollLock}
        blockScrollDown={scrollLock}
      >
        <FirstComponent setScrollLock={setScrollLock} />

        <SecondComponent setScrollLock={setScrollLock} />

        <TechComponent setScrollLock={setScrollLock} />
        {/* <ThirdTest setScrollLock={setScrollLock} /> */}

        {/* <FourthComponent setScrollLock={setScrollLock} /> */}
        <FinalComponent setScrollLock={setScrollLock} />
      </ReactPageScroller>
    </div>
  );
};

export default App;
