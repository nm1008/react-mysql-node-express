import "./App.css";
import { Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/addPage" element={<AddPage />} />
      <Route path="/editPage" element={<EditPage />} />
    </Routes>
   </>
  )
}

export default App;
