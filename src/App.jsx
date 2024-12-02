import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx'
import HomePage from "./pages/HomePage.jsx";
import JobPage from "./pages/JobPage.jsx"; // Ensure consistent casing
import NotFound from "./pages/NotFound.jsx";
const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
)
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
