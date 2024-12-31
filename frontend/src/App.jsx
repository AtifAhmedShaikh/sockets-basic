import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ChatPage from "./ChatPage";
import LoginPage from "./LoginPage";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Please first you should have to login </h1>
                <Link to="/login">Login</Link>
              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>{" "}
      </BrowserRouter>
    </div>
  );
};

export default App;
