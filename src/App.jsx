import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./utils/ProtectedRoute";

import AuthService from "./services/auth";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute
              isAuthenticated={AuthService.isAuthenticated()}
              page={Dashboard}
            />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
