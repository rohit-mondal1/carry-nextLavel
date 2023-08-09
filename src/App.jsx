import { RouterProvider } from "react-router-dom";
import { router } from "./components/Router/MainRouter";



function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    
    </>
  );
}

export default App;
