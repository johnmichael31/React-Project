import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import HomePage from "./pages/HomePage.jsx";
import JobsPage from "./pages/JobsPage.jsx"; // Ensure consistent casing
import NotFound from "./pages/NotFound.jsx";
import JobPage from "./pages/JobPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<MainLayout/>}/>
    //     <Route index element={<HomePage />} />
    //     <Route path="/jobs" element={<JobPage />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </BrowserRouter>

    <RouterProvider router={router} />
  )
};

export default App;
