import {Link} from "react-router-dom";
import img1 from "../images/Img1.PNG";
import img2 from "../images/Img2.PNG";
import img3 from "../images/Img3.PNG";
import img4 from "../images/Img4.PNG";
import img5 from "../images/Img5.PNG";
import img6 from "../images/Img6.PNG";

const Offer = props => {
    const imagesList = [img1, img2, img3, img4, img5, img6];

    let image = imagesList.filter(item => (item.toString().includes(props.image)))

    return (
        <>
            <h4 style={{textAlign: "left", marginLeft: 100}}>
                <Link to={`/${props.region}/${props.name.replaceAll(" ", "_")}`} style={{color: "darkolivegreen"}}>
                    <>
                        {props.name}
                    </>
                </Link>
            </h4>
            <ul style={{justifyContent: "left"}}>
                <li>
                    <figure className="travel__image">
                        <img src={image} style={{
                            float: 'left',
                            marginRight: 15,
                            height: 350,
                            width: 600,
                            borderWidth: 1,
                            borderRadius: 75
                        }} alt="Offer"/>
                    </figure>
                </li>
                <li>
                    <p>Destination : {props.destination}</p>
                    <p>Dates: {props.dates}</p>
                    <p>Cost: {props.cost} $</p>
                </li>
                <li>
                    <div id={"add-offer-to-list"} style={{textAlign: "left", marginLeft: 100}}>
                        <button onClick={() => props.addItemToBasket(props.name, props.itemCount)}>Add Offer to basket</button>
                    </div>
                </li>
            </ul>
        </>
    );

}

export default Offer