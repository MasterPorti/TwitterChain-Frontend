import { Route, Routes } from "react-router-dom";
import "./App.scss"
import Intro from "./pages/intro";
import Setname from "./pages/setName";
import Test from "./pages/test";

export default function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/home" element={<Test />}></Route>
        <Route path="/setName" element={<Setname />}></Route>
      </Routes>
    </div>
  )
}