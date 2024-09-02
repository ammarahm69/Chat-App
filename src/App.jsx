import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import NotFound from "./component/Notfound";
import Loading from "./component/Loading";
import Login from "./component/Login";
import SignUp from "./component/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="*" element={<NotFound />} errorElement={<NotFound />} />
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
