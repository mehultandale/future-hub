

/* React */
import {
    createBrowserRouter,
    RouterProvider,
    Link
} from "react-router-dom";

/* Pages */
import Home from "./pages/homePage";
import Test from "./pages/testPage";
import ProgrammingLanguages from "./pages/ProgrammingLanguagePage.jsx";

/* Components */
import MainHeader from "./components/mainHeader";

/* Styling */
import './index.css';


/* All routes */
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/programming-languages",
        element: <ProgrammingLanguages />
    },
    {
        path: "/test",
        element: <Test />
    }
]);


/* Main component */
function App() {
    return (
        <RouterProvider router={router} />
    )
}


export default App;