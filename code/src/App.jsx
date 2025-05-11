import { Suspense } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
