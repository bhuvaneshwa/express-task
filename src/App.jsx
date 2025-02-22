
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Hooks from "./pages/Hooks"
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          
          <Route path="contact" element={<Contact/>}/>

          <Route path="hooks" element={ <Hooks/>}/ >


        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  )
}