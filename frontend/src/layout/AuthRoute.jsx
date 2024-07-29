import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Stats from "../views/Stats";
import Books from "../views/Books";

export default function AuthRoute() {
  const AuthenticatedRoutes = () => (
    <Routes>
      <Route path="stats" element={<Stats />} />
      <Route path="books" element={<Books />} />
    </Routes>
  );
  return <Dashboard>{AuthenticatedRoutes()}</Dashboard>;
}
