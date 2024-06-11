import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  LandingPage,
  Error,
  Presale,
  AfterPresale,
  WhitePaper
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      // {
      //   path: 'presale',
      //   element: <Presale />,
      // },
      {
        path: 'after-presale',
        element: <AfterPresale />,
      },
      {
        path: 'whitepaper',
        element: <WhitePaper />,
      }
    ],
  },
]);


const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
