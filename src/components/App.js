import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import Drawer from "./AppDrawer";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import FourthComponent from "./FourthComponent";

const App = () => {
  const [scrollLock, setScrollLock] = useState(false);

  return (
    <div>
      <Drawer />
      <ReactPageScroller
        blockScrollUp={scrollLock}
        blockScrollDown={scrollLock}
      >
        <FirstComponent />

        <SecondComponent setScrollLock={setScrollLock} />

        <FourthComponent setScrollLock={setScrollLock} />
      </ReactPageScroller>
    </div>
  );
};

export default App;
