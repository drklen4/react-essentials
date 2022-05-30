import {GiAirplaneDeparture} from "react-icons/gi";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header style={{
            backgroundColor: "lightgray"
        }}>
            <p style={{
                textAlign: 'right',
                fontSize: 14
            }}>
                Contact us: +48 906 567 375. Gull-Wing@gmail.com
            </p>
            <h1>
                <Link to={`/`} style={{color: "darkolivegreen"}}>
                    <>Plan your leisure with us <GiAirplaneDeparture/> </>
                </Link>
            </h1>

        </header>
    )
}

export default Header