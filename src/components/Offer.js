
const Offer = props => {

    return (
        <>
            <h4>{props.name}</h4>
            <ul>
                <li>
                    <figure className="travel__image">
                        <img src={props.image} style={{
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
            </ul>
        </>
    );

}

export default Offer