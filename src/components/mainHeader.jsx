

/* React */
import { Link } from "react-router-dom";


/* Main header */
function MainHeader() {
    return (
        <Link to={'/'} className="txt-deco-none" >
            <h1 className="logo-txt" >
                <span className="mnt-bold" >Future</span>
                <span className="mnt-light" >Hub</span>
            </h1>
        </Link>
    );
}


export default MainHeader;