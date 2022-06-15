import React from "react";
import { NavHeader } from "./components/Nav/NavHeader";
import { Theme } from "./themes/Theme";

function App() {
  return (
    <Theme>
      <NavHeader>
        <div>Hi</div>
      </NavHeader>
    </Theme>
  );
}

export default App;
