import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import RootLayout from "./sections/layout/RootLayout";
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Blog from "./sections/blog/Blog";
import Contact from "./sections/contact/Contact";



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    )
  );

  return (
    <RouterProvider router={router}/>
  )
}

export default App
