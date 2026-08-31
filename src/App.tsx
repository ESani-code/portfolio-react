// import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import ClickSpark from "./components/ClickSpark";
import { Skeleton } from "./components/ui/skeleton";
import Hero from "./components/sections/Hero";

import Transistion from "./components/Transistion";

const NavBar = lazy(() => import("./components/NavBar"));
// const Hero = lazy(() => import("./components/sections/Hero"));
const About = lazy(() => import("./components/sections/About"));
const WorkOne = lazy(() => import("./components/sections/WorkOne"));

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
        <section className="flex flex-col -mt-1 gap-y-1">
          <Transistion />

          <div className="hidden lg:block">
            <Suspense fallback={<Skeleton className="h-full w-full" />}>
              <NavBar />
            </Suspense>
          </div>

          <Suspense fallback={<Skeleton className="h-full w-full" />}>
            <Hero />
          </Suspense>
          <Suspense fallback={<Skeleton className="h-full w-full" />}>
            <About />
          </Suspense>
          <Suspense fallback={<Skeleton className="h-full w-full" />}>
            <WorkOne />
          </Suspense>
        </section>
      </ClickSpark>

      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
