// import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import About from "./components/About";
import ClickSpark from "./components/ClickSpark";
import { Skeleton } from "./components/ui/skeleton";
// import Hero from "./components/Hero";
// import NavBar from "./components/NavBar";
import Transistion from "./components/Transistion";

const Hero = lazy(() => import("./components/Hero"));
const NavBar = lazy(() => import("./components/NavBar"));

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
        <Transistion />

        <Suspense fallback={<Skeleton className="h-full w-full" />}>
          <NavBar />
        </Suspense>

        <Suspense fallback={<Skeleton className="h-full w-full" />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<Skeleton className="h-full w-full" />}>
          <About />
        </Suspense>
      </ClickSpark>

      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
