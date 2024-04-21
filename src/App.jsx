import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  LandingPage
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      }
    ],
  },
]);


const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
