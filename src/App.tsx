import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Agency from "./pages/Agency";
import Projects from "./pages/Projects";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
   {
      path: "/",
      element: <RootLayout />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: "agency",
            element: <Agency />,
         },
         {
            path: "projects",
            element: <Projects />,
         },
      ],
   },
]);

const App = () => {
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
};
export default App;
