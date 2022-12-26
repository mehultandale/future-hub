

/* React */
import { Link } from "react-router-dom";

/* Components */
import MainHeader from "../components/mainHeader";


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


export default Home;