import offersList from "../data.json";
import Offer from "./Offer";
import img1 from "../images/Img1.PNG";
import img2 from "../images/Img2.PNG";
import img3 from "../images/Img3.PNG";
import img4 from "../images/Img4.PNG";
import img5 from "../images/Img5.PNG";
import img6 from "../images/Img6.PNG";


const Body = props => {

    const imagesList = [img1, img2, img3, img4, img5, img6];

    const offersListFiltered = props.region === 'All' ? offersList : offersList.filter(el => el.region === props.region);

    return (
        <div className="App">
            {offersListFiltered.map(offer => {
                let image = imagesList.filter(item => (item.toString().includes(offer.image)))
                return (<Offer key={offer.id} name={offer.name} image={image} destination={offer.destination}
                               dates={offer.dates} cost={offer.cost}/>)
            })}
        </div>
    );
}

export default Body