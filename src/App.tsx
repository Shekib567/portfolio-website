import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const Play = lazy(() => import("./pages/Play"));
const Resume = lazy(() => import("./pages/Resume"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LoadingProvider>
              <Suspense>
                <MainContainer>
                  <Suspense>
                    <CharacterModel />
                  </Suspense>
                </MainContainer>
              </Suspense>
            </LoadingProvider>
          }
        />
        <Route
          path="/myworks"
          element={<Navigate to="/" replace />}
        />
        <Route
          path="/play"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Play />
            </Suspense>
          }
        />
        <Route
          path="/resume"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Resume />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
