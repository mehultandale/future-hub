

/* React */
import { Link } from "react-router-dom";

/* Components */
import MainHeader from "../components/mainHeader";


/* Single category button */
function SingleCategory(props) {
    return (
        <Link to={'/test'} >
            <button>{ props.name }</button>
        </Link>
    );
}


/* Categories page */
function ProgrammingLanguages() {
    return (
        <div>
            <MainHeader />
            <p>I would like to improve on</p>
            <SingleCategory name="HTML & CSS" />
            <SingleCategory name="JavaScript" />
        </div>
    );
}


export default ProgrammingLanguages;