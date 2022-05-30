import {GiAirplaneDeparture} from "react-icons/gi";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>
                <Link to={`/`} style={{textDecoration: "none", color: "gray"}}>
                    <>Plan your leisure with us <GiAirplaneDeparture/> </>
                </Link>
            </h1>

        </header>
    )
}

export default Header