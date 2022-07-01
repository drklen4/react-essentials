import offersList from "../data.json";
import Offer from "./Offer";

const Body = props => {

    const offersListFiltered = props.region === 'All' ? offersList : offersList.filter(el => el.region === props.region);

    return (
        <div className="App">
            {offersListFiltered.map(offer => {
                return (<Offer addItemToBasket={props.addItemToBasket} itemCount={props.itemCount} key={offer.id} region={offer.region} name={offer.name} image={offer.image}
                               destination={offer.destination} dates={offer.dates} cost={offer.cost}/>)
            })}
        </div>
    );
}

export default Body