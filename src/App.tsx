// import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import ClickSpark from "./components/ClickSpark";
import { Skeleton } from "./components/ui/skeleton";
// import Hero from "./components/sections/Hero";

import Transistion from "./components/Transistion";

const Hero = lazy(() => import("./components/sections/Hero"));
const NavBar = lazy(() => import("./components/NavBar"));
const About = lazy(() => import("./components/sections/About"));
const WorkOne = lazy(() => import("./components/sections/WorkOne"));
const WorkTwo = lazy(() => import("./components/sections/WorkTwo"));

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
        <section className="flex flex-col -mt-3 gap-y-3">
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
          <Suspense fallback={<Skeleton className="h-full w-full" />}>
            <WorkTwo />
          </Suspense>
        </section>
      </ClickSpark>

      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
