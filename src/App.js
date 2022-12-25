

import { 
    createBrowserRouter, 
    RouterProvider,
    Link 
} from "react-router-dom";
import './index.css';


function App1() {
    return (
        <div>
            <h1>FutureHub</h1>
            <h4>Find the gaps in your knowledge of Frontend skills.</h4>
            <Link to={'/test'} >
                <button>TAKE THE FREE TEST</button>
            </Link>
            <p>You could learn something new today and become an even better programmer.</p>
        </div>
    );
}


function Test() {
    return (
        <div>
            <h1>Test</h1>
        </div>
    );
}


const router = createBrowserRouter([
    {
        path: "/",
        element: <App1 />
    },
    {
        path: "/test",
        element: <Test />
    }
]);


function App() {
    return (
        <RouterProvider router={router} />
    )
}


export default App;