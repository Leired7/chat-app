import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        nameavatar="lego4"
        image="https://randomuser.me/api/portraits/lego/4.jpg"
        status={true}
      />
      <Contact
        nameavatar="women89"
        image="https://randomuser.me/api/portraits/women/89.jpg"
        status={false}
      />
      <Contact
        nameavatar="women3"
        image="https://randomuser.me/api/portraits/women/3.jpg"
        status={true}
      />
    </div>
  );
}

export default App;
