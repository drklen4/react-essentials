import offersList from "../data.json";
import Offer from "./Offer";
import img1 from "../images/Img1.PNG";
import img2 from "../images/Img2.PNG";


const Body = () => {

    const imagesList = [img1, img2];

    return (
        <div className="App">
            {offersList.map(offer => {
                let image = imagesList.filter(item => (item.toString().includes(offer.image)))
                return (<Offer key={offer.id} name={offer.name} image={image} destination={offer.destination}
                               dates={offer.dates} cost={offer.cost}/>)
            })}
        </div>
    );
}

export default Body