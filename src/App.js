import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import { ToastContainer } from "react-toastify";
import Loading from "./components/loading/Loading";
import NotFoundPage from "./pages/NotFoundPage";
import BackgroundMusic from "./components/BackgroundMusic";

const HomePage = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <BackgroundMusic />
      <Routes>
        <Route>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <About />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
