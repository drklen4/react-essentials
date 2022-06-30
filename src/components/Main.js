import eze from "../images/main.jpg";
import {Link} from "react-router-dom";

const Main = props => {
    return (
        <>
            <p>We serve most {props.objective} adventures for you.</p>
            <img src={eze}
                 alt="Eze"/>
            <ul>
                {props.destinations.map(e => {
                        return (
                            <Link className="article-list-item" key={e.id} to={`/${e.title}`}>
                                <>{e.title} </>
                            </Link>)
                    }
                )}
            </ul>
        </>
    )
}

export default Main