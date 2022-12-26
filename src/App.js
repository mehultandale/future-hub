

/* React */
import { 
    createBrowserRouter, 
    RouterProvider,
    Link 
} from "react-router-dom";

/* Styling */
import './index.css';


/* Main header */
function MainHeader() {
    return (
        <h1>FutureHub</h1>
    );
}


/* Home page */
function Home() {
    return (
        <div>
            <MainHeader />
            <h4>Find the gaps in your knowledge of Frontend skills.</h4>
            <Link to={'/programming-languages'} >
                <button>TAKE THE FREE TEST</button>
            </Link>
            <p>You could learn something new today and become an even better programmer.</p>
        </div>
    );
}


/* Test (Quiz) page */
function Test() {
    return (
        <div>
            <h1>Test</h1>
        </div>
    );
}


/* Categories page */
function ProgrammingLanguages() {
    return (
        <div>
            <MainHeader />
        </div>
    );
}


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