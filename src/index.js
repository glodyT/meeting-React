import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";


export default function Index() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Layout/>}>
      <Route index element = {<Home/>}/>
      <Route path ="about" element = {<About/>}/>
      <Route path = "contact" element = {<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )

}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  
    <Index/>

);


