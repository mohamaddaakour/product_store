import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

import { Routes, Route } from "react-router";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
