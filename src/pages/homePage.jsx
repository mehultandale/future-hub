

/* React */
import { Link } from "react-router-dom";

/* Components */
import MainHeader from "../components/mainHeader";


/* Home page */
function Home() {
    return (
        <div className="homepage-wrap" >
            <MainHeader />
            <h4>Find the gaps in your knowledge of Frontend skills.</h4>
            <Link to={'/programming-languages'} >
                <button className="button-type-1" >TAKE THE FREE TEST</button>
            </Link>
            <p>You could learn something new today and become an even better programmer.</p>
        </div>
    );
}


export default Home;