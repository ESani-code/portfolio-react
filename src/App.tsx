// import { BrowserRouter } from "react-router-dom";

import About from "./components/About";
import ClickSpark from "./components/ClickSpark";
import Hero from "./components/Hero";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <>
      {/* <BrowserRouter> */}

      <ClickSpark
        sparkColor="#ff2020"
        sparkSize={5}
        sparkRadius={30}
        sparkCount={9}
        duration={400}
      >
        <Hero />
        <About />
      </ClickSpark>

      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
