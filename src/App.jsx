import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Transaction from "./Transaction/Transaction";
import Support from "./Support/Support";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/contactus" element={<Support />} />
    </Routes>
  );
}

export default App;
