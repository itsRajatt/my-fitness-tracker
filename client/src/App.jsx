import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const AppHeader = React.lazy(() => import("./components/common/AppHeader"));
const HomeContainer = React.lazy(() => import("./containers/HomeContainer"));
const ExerciseContainer = React.lazy(() =>
  import("./containers/ExerciseContainer")
);
import "./index.css";
import FallbackLoader from "./components/common/FallbackLoader";
import AppFooter from "./components/common/AppFooter";
import About from "./components/common/About";

function App() {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <Router>
        <AppHeader />
        <div className="app-content-scrollable">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<FallbackLoader />}>
                  <HomeContainer />
                </Suspense>
              }
            />
            <Route
              path="/exercises"
              element={
                <Suspense fallback={<FallbackLoader />}>
                  <ExerciseContainer />
                </Suspense>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <AppFooter />
      </Router>
    </Suspense>
  );
}

export default App;
