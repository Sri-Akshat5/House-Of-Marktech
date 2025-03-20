import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <Home />
    </Suspense>
  );
}

export default App;
