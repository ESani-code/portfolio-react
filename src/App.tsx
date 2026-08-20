// import { BrowserRouter } from "react-router-dom";

import About from "./components/About";
import Hero from "./components/Hero";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <>
      {/* <BrowserRouter> */}

      <Hero />
      <About />

      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
