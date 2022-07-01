import {GiAirplaneDeparture} from "react-icons/gi";
import {Link} from "react-router-dom";


const Header = (props) => {

    return (
        <>
        <header style={{
            backgroundColor: "lightgray"
        }}>
            <p style={{
                textAlign: 'right',
                fontSize: 14
            }}>
                Contact us: +48 555 666 777. Gull-Wing@gmail.com
            </p>
            <h1>
                <Link to={`/`} style={{color: "darkolivegreen"}}>
                    <>Plan your leisure with us <GiAirplaneDeparture/> </>
                </Link>
            </h1>
            <p style={{
                textAlign: 'right',
                fontSize: 15,
                marginRight: 150
            }}>Basket offers : {props.itemCount}</p>
        </header>
        </>

    )
}

export default Header