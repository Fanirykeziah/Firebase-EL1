import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Page";
import { Login } from "./Components/Formulaire";
import { ProtectedRoute } from "./Components/Sec";
import { SignUp } from "./Components/Create";
import { UserAuthContextProvider } from "./Authentification/Auth";

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
